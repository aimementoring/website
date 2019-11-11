import React, { useState } from 'react';
import ReactFilestack from 'filestack-react';
import PropTypes from 'prop-types';
import UploadedFile from './uploadedFile';
import handleError from '../../utils/errorHandler';

const hiddenStyle = {
  opacity: 0,
};

const FileUploader = ({
  apiKey, buttonText, requiredFile, inputName,
}) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onFileRemove = (index) => setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));

  const onSuccess = (result) => {
    const fileList = result.filesUploaded.map((file, i) => (
      <UploadedFile
        key={file.handle}
        file={file}
        inputName={inputName}
        index={i}
        onDelete={onFileRemove}
      />
    ));
    setUploadedFiles(uploadedFiles.concat(fileList));
  };

  return typeof window !== 'undefined' ? (
    <>
      <ReactFilestack
        apikey={apiKey}
        onSuccess={onSuccess}
        onError={(error) => { handleError(error, `error ${error}`); }}
        render={({ onPick }) => (
          <div className="relative">
            <label
              onClick={onPick}
              className="document-item--button"
              htmlFor={`uploadFile-${apiKey}`}
            >
              {buttonText}
            </label>
            {requiredFile && uploadedFiles.length === 0 && (
              <input
                id={`uploadFile-${apiKey}`}
                type="file"
                style={hiddenStyle}
                required={requiredFile}
                name="File upload"
                className="required-document-item--button"
              />
            )}
          </div>
        )}
      />
      {uploadedFiles}
    </>
  ) : null;
};

FileUploader.propTypes = {
  apiKey: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  requiredFile: PropTypes.bool,
};

FileUploader.defaultProps = {
  requiredFile: false,
};

export default FileUploader;
