import React, { useState } from 'react';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';
import Title from 'aime-blueprint/lib/components/title';
import Loading from 'aime-blueprint/lib/components/loading';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import FileUploader from '../uppyFileUploader';

const SupportingDocsSectionForm = ({ requiredDocuments, handleFormFieldChange, values }) => {
  const [loading, setLoading] = useState(false);

  const onFilesUpload = (name, value, deletedFile) => {
    let attachments = [];
    if (values && values.attachments) {
      if (deletedFile) {
        attachments = values.attachments.map((attachment) => {
          if (attachment.url.some((path) => path === deletedFile)) {
            return {
              ...attachment,
              url: attachment.url.filter((path) => path !== deletedFile),
            };
          }
          return attachment;
        });
      } else if (values.attachments.some((attachment) => attachment.filename === name)) {
        attachments = values.attachments.map((attachment) => {
          if (attachment.filename === name) {
            return {
              ...attachment,
              url: [...attachment.url, value],
            };
          }
          return attachment;
        });
      } else {
        attachments = [
          ...values.attachments,
          {
            filename: name,
            url: [value],
          },
        ];
      }
    } else {
      attachments = [{
        filename: name,
        url: [value],
      }];
    }
    handleFormFieldChange('attachments', attachments);
  };

  const getFilesUploaded = (name) => {
    if (values && values.attachments && values.attachments.length) {
      const attachments = values.attachments.find((attachment) => attachment.filename === name);
      return attachments ? attachments.url.join(', ') : '';
    }
    return '';
  };

  return (
    <>
      {requiredDocuments && requiredDocuments.length > 0 && (
        <div className="clearfix my3 sm-col sm-col-12 md-col-12 js-job-documents">
          <Title type="h5Title" theme={process.env.REACT_APP_THEME}>
            Provide Supporting Documents
          </Title>
          <Paragraph>
            We need the below documents to proceed with your
            application. Please only submit one document per application.
            You can use this tool to merge documents https://www.ilovepdf.com/
            {/* @TODO: Allow to submit more than one file */}
          </Paragraph>
          <div className="flex flex-column items-start job-documents js-job-document-container">
            {requiredDocuments.map((document, index) => (
              /* eslint-disable-next-line jsx-a11y/label-has-associated-control */
              <label key={document}>
                <div className={`upload-field ${index < requiredDocuments.length < 1 ? 'mb2' : ''}`}>
                  <FileUploader
                    name={`job-${kebabCase(document)}`}
                    folderInS3Name="jobs/kevin_test"
                    maxNumberOfFiles={10}
                    height={500}
                    companionUrl="https://uppy-file-uploader.herokuapp.com/"
                    theme="rainbow"
                    placeholder={`Upload ${document}`}
                    onFilesUpload={onFilesUpload}
                    filesUploaded={getFilesUploaded(`job-${kebabCase(document)}`)}
                    setLoading={setLoading}
                  />
                </div>
              </label>
            ))}
            <Loading loading={loading} theme="plain" />
          </div>
        </div>
      )}
    </>
  );
};

SupportingDocsSectionForm.propTypes = {
  requiredDocuments: PropTypes.arrayOf(PropTypes.string),
  handleFormFieldChange: PropTypes.func,
  values: PropTypes.shape({
    attachments: PropTypes.shape(),
  }),
};

SupportingDocsSectionForm.defaultProps = {
  requiredDocuments: [],
  handleFormFieldChange: () => {},
  values: {},
};

export default SupportingDocsSectionForm;
