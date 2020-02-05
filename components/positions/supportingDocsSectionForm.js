import React from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import kebabCase from 'lodash/kebabCase';
import FileUploader from '../fileUploader';

const SupportingDocsSectionForm = ({ requiredDocuments }) => (
  <>
    {requiredDocuments && requiredDocuments.length > 0 && (
      <div className="clearfix my3 sm-col sm-col-12 md-col-12 js-job-documents">
        <Title type="h5Title" theme={process.env.REACT_APP_THEME}>
          Provide Supporting Documents
        </Title>
        <Paragraph>
          We need the below documents to proceed with your
          application.
        </Paragraph>
        <div className="flex flex-column items-start job-documents js-job-document-container">
          {requiredDocuments.map((document, index) => (
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
    )}
  </>
);

SupportingDocsSectionForm.propTypes = {
  requiredDocuments: PropTypes.arrayOf(PropTypes.string),
};

SupportingDocsSectionForm.defaultProps = {
  requiredDocuments: [],
};

export default SupportingDocsSectionForm;
