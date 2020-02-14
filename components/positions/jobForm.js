import React from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import AboutYouSectionForm from './aboutYouSectionForm';
// import LocationSectionForm from './locationSectionForm';
// import JobUniAndContactFrom from './jobUniAndContactFrom';
import JobQuestionAndVideoLink from './jobQuestionAndVideoLink';
import SupportingDocsSectionForm from './supportingDocsSectionForm';
// import IndigenousForm from './indigenousForm';
// import BecomeAFriendSection from './becomeAFriendSection';
import HiddenFieldsAndSubmitAction from './hiddenFieldsAndSubmitAction';

const JobForm = ({
  showForm,
  job,
  values,
  // onAddressSelected,
  // locationError,
  // streetNumber,
  // streetName,
  // postCode,
  // territory,
  // city,
  // handleFieldChange,
  // countryAddress,
  handleFormFieldChange,
  onSubmit,
}) => (
  <div>
    {showForm && Object.keys(job).length > 0 && (
      <div
        id="jobApplicationReveal"
        className="job-application--reveal flex flex-column border-top b-light-blue pt4 js-non-unavailable-position"
      >
        <Title type="h5Title" theme={process.env.REACT_APP_THEME}>
          Apply now
        </Title>
        <form
          className="job-application"
          acceptCharset="UTF-8"
          action="https://formkeep.com/f/50e5b258d8a7"
          method="POST"
        >
          <AboutYouSectionForm handleChange={handleFormFieldChange} values={values} />
          {/* <LocationSectionForm
            onAddressSelected={onAddressSelected}
            locationError={locationError}
            streetNumber={streetNumber}
            streetName={streetName}
            postCode={postCode}
            territory={territory}
            city={city}
            handleFieldChange={handleFieldChange}
            countryAddress={countryAddress}
          /> */}
          {/* <JobUniAndContactFrom
            displayCampusSelect={job.displayCampusSelect}
            handleChange={handleFormFieldChange}
            values={values}
          /> */}
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
          {/* <IndigenousForm
            handleChange={handleFormFieldChange}
            values={values}
          />
          <BecomeAFriendSection
            handleChange={handleFormFieldChange}
            values={values}
          /> */}
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
  // onAddressSelected: PropTypes.func,
  // locationError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  // streetNumber: PropTypes.string,
  // streetName: PropTypes.string,
  // postCode: PropTypes.string,
  // territory: PropTypes.string,
  // city: PropTypes.string,
  // countryAddress: PropTypes.string,
  // handleFieldChange: PropTypes.func,
  handleFormFieldChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

JobForm.defaultProps = {
  showForm: false,
  job: {},
  values: {},
  // onAddressSelected: () => {},
  // locationError: null,
  // streetNumber: '',
  // streetName: '',
  // postCode: '',
  // territory: '',
  // city: '',
  // countryAddress: null,
  // handleFieldChange: () => {},
  handleFormFieldChange: () => {},
  onSubmit: () => {},
};

export default JobForm;
