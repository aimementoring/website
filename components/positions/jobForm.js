import React from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import AboutYouSectionForm from './aboutYouSectionForm';
import JobQuestionAndVideoLink from './jobQuestionAndVideoLink';
import SupportingDocsSectionForm from './supportingDocsSectionForm';
import HiddenFieldsAndSubmitAction from './hiddenFieldsAndSubmitAction';
import styles from './jobForm.module.scss';

const JobForm = ({
  showForm,
  job,
  values,
  handleFormFieldChange,
  onSubmit,
}) => (
  <div>
    {showForm && Object.keys(job).length > 0 && (
      <div
        id="jobApplicationReveal"
        className={styles.jobApplicationReveal}
      >
        <Title type="h5Title" theme={process.env.REACT_APP_THEME}>
          Apply now
        </Title>
        <form
          className="job-application"
          acceptCharset="UTF-8"
          method="POST"
        >
          <AboutYouSectionForm handleChange={handleFormFieldChange} values={values} />
          <JobQuestionAndVideoLink
            messageQuestion={job.messageQuestion}
            isThereVideoLink={job.isThereVideoLink}
            handleChange={handleFormFieldChange}
            values={values}
          />
          <SupportingDocsSectionForm
            requiredDocuments={job.requiredDocuments}
            handleFormFieldChange={handleFormFieldChange}
            values={values}
          />
          <HiddenFieldsAndSubmitAction type={job.type} name={job.name} onSubmit={onSubmit} />
        </form>
      </div>
    )}
  </div>
);

JobForm.propTypes = {
  showForm: PropTypes.bool,
  job: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    displayCampusSelect: PropTypes.bool,
    messageQuestion: PropTypes.string,
    isThereVideoLink: PropTypes.bool,
    requiredDocuments: PropTypes.arrayOf(PropTypes.string),
    country: PropTypes.string,
  }),
  values: PropTypes.shape({}),
  handleFormFieldChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

JobForm.defaultProps = {
  showForm: false,
  job: {},
  values: {},
  handleFormFieldChange: () => {},
  onSubmit: () => {},
};

export default JobForm;
