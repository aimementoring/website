import React from 'react';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';
import FileUploader from '../fileUploader';

const SupportingDocsSectionForm = ({ requiredDocuments }) => (
  <div className="clearfix my3 sm-col sm-col-12 md-col-12 js-job-documents">
    <h4 className="feature-font-family regular f-15 pb2">
      Provide Supporting Documents
    </h4>
    <p className="f-14 light pb2">
      We need the below documents to proceed with your
      application.
    </p>
    <div className="flex flex-column items-start job-documents js-job-document-container">
      {requiredDocuments
        && requiredDocuments.length > 0
        && requiredDocuments.map((document, index) => (
          /* eslint-disable-next-line jsx-a11y/label-has-associated-control */
          <label key={document}>
            <div className={`upload-field ${index < requiredDocuments.length < 1 ? 'mb2' : ''}`}>
              <FileUploader
                apiKey={process.env.REACT_APP_FILE_UPLOADER_API_KEY}
                buttonText={`Upload ${document}`}
                inputName={`job-${kebabCase(document)}`}
                requiredFile
              />
            </div>
          </label>
        ))}
    </div>
  </div>
);

SupportingDocsSectionForm.propTypes = {
  requiredDocuments: PropTypes.arrayOf(PropTypes.string),
};

SupportingDocsSectionForm.defaultProps = {
  requiredDocuments: [],
};

export default SupportingDocsSectionForm;
