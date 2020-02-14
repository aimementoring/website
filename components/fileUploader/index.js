import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import UploadedFile from './uploadedFile';
import handleError from '../../utils/errorHandler';
import { isClientSide } from '../../utils/utilities';

const hiddenStyle = {
  opacity: 0,
};

let ReactFilestack = null;

const FileUploader = ({
  apiKey, buttonText, requiredFile, inputName,
}) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const isClient = isClientSide();

  const loadFileStackReact = async () => {
    // eslint-disable-next-line global-require
    ReactFilestack = await require('filestack-react');
  };

  useEffect(() => {
    if (isClient && !ReactFilestack) loadFileStackReact();
  }, [isClient]);

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

  return isClient && ReactFilestack ? (
    <>
      <ReactFilestack
        apikey={apiKey}
        onSuccess={onSuccess}
        onError={(error) => { handleError(error, `error ${error}`); }}
        render={({ onPick }) => (
          <div className="relative">
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <label
              onClick={onPick}
              onKeyPress={onPick}
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
