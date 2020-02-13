import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Uppy from '@uppy/core';
import AwsS3 from '@uppy/aws-s3';
import Webcam from '@uppy/webcam';
import DashboardModal from '@uppy/react/lib/DashboardModal';
import Dashboard from '@uppy/react/lib/Dashboard';
import Button from 'aime-blueprint/lib/components/button';
import { checkValidations } from 'aime-blueprint/lib/utils/validation';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';


import styles from './fileUploader.module.scss';

class FileUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      validationErrors: '',
    };
    this.initializeUppy();
  }

  componentDidUpdate(prevProps) {
    const { validations, filesUploaded, hasErrorAfterSubmit } = this.props;
    if (hasErrorAfterSubmit !== prevProps.hasErrorAfterSubmit) {
      const validationErrors = checkValidations(validations, filesUploaded);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ validationErrors });
    }
  }

  componentWillUnmount() {
    this.uppy.close();
  }

  handleModalClick = () => {
    const { modalOpen } = this.state;
    this.setState({
      modalOpen: !modalOpen,
    });
  };

  getFilesUploadedAsArray = (props) => {
    if (props.filesUploaded && props.filesUploaded.length) {
      return props.filesUploaded.split(', ');
    }
    return [];
  };

  handleUploadFiles = (file, data) => {
    const {
      name,
      onFilesUpload,
      setLoading,
    } = this.props;

    if (!file && !data) {
      onFilesUpload(name, '');
      return;
    }
    this.setState({ validationErrors: '' });
    onFilesUpload(name, data.uploadURL);
    setLoading(false);
  };

  handleDeleteFile = (fileToDelete) => (e) => {
    e.preventDefault();
    const { name, allowMultipleUploads, onFilesUpload } = this.props;
    if (!allowMultipleUploads) {
      onFilesUpload(name, '', fileToDelete);
    } else {
      const filesArray = this.getFilesUploadedAsArray(this.props);
      const newFilesArray = filesArray.filter((file) => file !== fileToDelete);
      onFilesUpload(name, newFilesArray.join(', '), fileToDelete);
    }
    this.uppy.getFiles().forEach((file) => {
      if (file.name === fileToDelete || file.uploadURL === fileToDelete) {
        this.uppy.removeFile(file.id);
      }
    });
  };

  initializeUppy() {
    const {
      uppyInstanceId,
      maxNumberOfFiles,
      allowMultipleUploads,
      autoProceed,
      maxFileSize,
      minNumberOfFiles,
      allowedFileTypes,
      companionUrl,
      folderInS3Name,
      setLoading,
    } = this.props;
    this.uppy = Uppy({
      debug: true,
      id: uppyInstanceId,
      restrictions: {
        maxNumberOfFiles,
        allowMultipleUploads,
        autoProceed,
        maxFileSize: maxFileSize || undefined,
        minNumberOfFiles: minNumberOfFiles || undefined,
        allowedFileTypes: allowedFileTypes || undefined,
      },
      onBeforeUpload: (files) => Object.keys(files).reduce((accum, key) => {
        setLoading(true);
        const accumVariable = accum;
        if (!files[key].meta.isUploaded) {
          accumVariable[key] = files[key];
        }
        return accumVariable;
      }, {}),
    });
    this.uppy.use(Webcam);
    this.uppy.use(AwsS3, {
      companionUrl,
      serverHeaders: {
        folderName: folderInS3Name,
      },
    });
    this.uppy.on('upload-success', (file, data) => this.handleUploadFiles(file, data));
    this.uppy.on('cancel-all', () => this.handleUploadFiles());
    this.uppy.on('file-added', (file) => {
      if (file.meta.isUploaded) {
        this.uppy.setFileState(file.id, {
          progress: { uploadComplete: true, uploadStarted: false },
        });
      }
    });

    const filesUploadedArray = this.getFilesUploadedAsArray(this.props);
    if (filesUploadedArray.length) {
      filesUploadedArray.forEach((name) => {
        this.uppy.addFile({
          name,
          type: '',
          data: {},
          meta: {
            isUploaded: true,
          },
          source: 'Local', // optional, determines the source of the file, for example, Instagram
          isRemote: true, // optional, set to true if actual file is not in the browser, but on
          // some remote server, for example, when using companion in combination with Instagram
        });
      });
    }
  }

  render() {
    const {
      isDashboard, height, webcam, placeholder,
    } = this.props;
    const filesUploadedArray = this.getFilesUploadedAsArray(this.props);
    const { validationErrors, modalOpen } = this.state;

    return (
      <div className={styles.uppyUploadContainer}>
        {isDashboard ? (
          <Dashboard
            note={`When you're done, click the x in the
            top right to return to the form.`}
            uppy={this.uppy}
            plugins={webcam ? ['s3', 'Webcam'] : ['s3']}
            height={height}
            proudlyDisplayPoweredByUppy={false}
          />
        ) : (
          <div className={styles.fileUploadContainer}>
            <Button
              theme={process.env.REACT_APP_THEME}
              className={validationErrors && styles.withErrors}
              aria-label="upload"
              type="button"
              onClickFunction={this.handleModalClick}
            >
              {placeholder || 'Upload Files'}
            </Button>
            <div className={`${!modalOpen && styles.closed}`}>
              <DashboardModal
                uppy={this.uppy}
                plugins={webcam ? ['s3', 'Webcam'] : ['s3']}
                closeModalOnClickOutside
                open={modalOpen}
                proudlyDisplayPoweredByUppy={false}
                onRequestClose={this.handleModalClick}
                note={`When you're done, click the x in the
                  top right to return to the form.`}
              />
            </div>
            {validationErrors && (
              <p className={styles.errorMessage}>{validationErrors}</p>
            )}
            {filesUploadedArray.length > 0 && (
              <div>
                <span className={styles.fileLabelList}>Uploaded: </span>
                {filesUploadedArray.map((file) => (
                  <span className={styles.fileLabel} key={file}>
                    <button
                      onKeyPress={this.handleDeleteFile(file)}
                      onClick={this.handleDeleteFile(file)}
                      title="remove file"
                      className={styles.fileLink}
                      type="button"
                    >
                      {decodeURIComponent(file).split('/').slice(-1)[0]}
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

FileUploader.propTypes = {
  uppyInstanceId: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  folderInS3Name: PropTypes.string.isRequired,
  maxNumberOfFiles: PropTypes.number,
  minNumberOfFiles: PropTypes.number,
  allowMultipleUploads: PropTypes.bool,
  filesUploaded: PropTypes.string,
  onFilesUpload: PropTypes.func.isRequired,
  autoProceed: PropTypes.bool,
  maxFileSize: PropTypes.number,
  allowedFileTypes: PropTypes.arrayOf(),
  height: PropTypes.number.isRequired,
  isDashboard: PropTypes.bool,
  webcam: PropTypes.bool,
  validations: PropTypes.arrayOf(),
  hasErrorAfterSubmit: PropTypes.bool,
  companionUrl: PropTypes.string,
  setLoading: PropTypes.func,
};

FileUploader.defaultProps = {
  name: 'file',
  placeholder: null,
  maxNumberOfFiles: 1,
  minNumberOfFiles: 1,
  allowMultipleUploads: false,
  filesUploaded: '',
  maxFileSize: null,
  isDashboard: false,
  webcam: false,
  validations: [],
  companionUrl: 'https://uppy-file-uploader.herokuapp.com/',
  hasErrorAfterSubmit: false,
  autoProceed: false,
  allowedFileTypes: null,
  setLoading: () => {},
};

export default FileUploader;
