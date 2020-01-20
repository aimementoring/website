import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const UploadedFile = ({
  file, inputName, index, onDelete,
}) => {
  useEffect(() => {
    // eslint-disable-next-line global-require
    require('filestack-react');
  }, []);
  return (
    <>
      <input className="document-item--button-reset" type="file" />
      <span
        className="c-grey f-14 ml2"
        onClick={() => onDelete(index)}
        onKeyPress={() => onDelete(index)}
        role="presentation"
      >
        {file.filename}
      </span>
      <input type="hidden" name={`${inputName}[]`} value={file.url} />
    </>
  );
};

UploadedFile.propTypes = {
  file: PropTypes.shape({
    url: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    filename: PropTypes.string.isRequired,
  }).isRequired,
  inputName: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default UploadedFile;
