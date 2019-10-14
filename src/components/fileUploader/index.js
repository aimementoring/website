import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UploadedFile from './UploadedFile';
import handleError from '../../utils/errorHandler';

let ReactFilestack;

export default class FileUploader extends Component {
  static propTypes = {
    apiKey: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    inputName: PropTypes.string,
    requiredFile: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.state = {
      uploadedFiles: [],
    };
  }

  componentDidMount() {
    ReactFilestack = require('filestack-react');
  }

  onFileRemove = (index) => {
    const { uploadedFiles } = this.state;
    const filteredUploadedFiles = uploadedFiles.filter((_, i) => i !== index);
    this.setState({
      uploadedFiles: filteredUploadedFiles,
    })
  }

  onSuccess = (result) => {
    const { inputName } = this.props;

    const fileList = result.filesUploaded.map((file, i) => {
      return (<UploadedFile
        key={file.handle}
        file={file}
        inputName={inputName}
        index={i}
        onDelete={this.onFileRemove}
      />)
    });

    this.setState(prevState => ({
      uploadedFiles: prevState.uploadedFiles.concat(fileList),
    }));
  }

  render() {
    const { apiKey, buttonText, requiredFile } = this.props;
    const { uploadedFiles } = this.state;

    return (
      <React.Fragment>
        <ReactFilestack
          apikey={apiKey}
          onSuccess={this.onSuccess}
          onError={error => handleError(error, `error ${error}`)}
          render={({ onPick }) => (
            <div className="relative">
              <label onClick={onPick} className="document-item--button" htmlFor={`uploadFile-${apiKey}`}>
                {buttonText}
              </label>
              {requiredFile && uploadedFiles.length === 0 &&
                <input id={`uploadFile-${apiKey}`} type="file" style={{ opacity: 0 }} required={requiredFile} name="File upload" className="required-document-item--button" />
              }
            </div>
          )}
        />
        {uploadedFiles}
      </React.Fragment>
    );
  }
}
