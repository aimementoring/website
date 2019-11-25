import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import UtilityFuncs from '../utilityFuncs';
import FileUploader from '../fileUploader';
import { isClientSide } from '../../utils/utilities';

const UploadFormElement = ({ index, formElement }) => {
  const isDynamicRender = isClientSide();
  useEffect(() => {
    if (isDynamicRender) {
      UtilityFuncs.loadComponent('.upload-field', FileUploader);
    }
  }, [isDynamicRender]);

  const { name, content: { block } } = formElement;
  return (
    <div className="sm-col sm-col-12 md-col-12 o7-r o7-b" key={`${name}-${index}`}>
      <div className="flex flex-column items-start job-documents">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="mb2">
          <div
            className="upload-field"
            data-api-key="AnpTaG2AITvSuOfoenIpKz"
            data-button-text={block.label}
            data-input-name={block.inputName}
          />
        </label>
      </div>
    </div>
  );
};

UploadFormElement.propTypes = {
  formElement: PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: {
      block: {
        label: PropTypes.string,
        inputName: PropTypes.string,
      },
    },
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default UploadFormElement;
