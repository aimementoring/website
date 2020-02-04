import React from 'react';
import PropTypes from 'prop-types';

import AboutYouSectionForm from './aboutYouSectionForm';
// import LocationSectionForm from './locationSectionForm';
import JobUniAndContactFrom from './jobUniAndContactFrom';
import JobQuestionAndVideoLink from './jobQuestionAndVideoLink';
import SupportingDocsSectionForm from './supportingDocsSectionForm';
import IndigenousForm from './indigenousForm';
import BecomeAFriendSection from './becomeAFriendSection';
import HiddenFieldsAndSubmitAction from './hiddenFieldsAndSubmitAction';

const JobForm = ({
  showForm,
  job,
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
}) => (
  <div>
    {showForm && Object.keys(job).length > 0 && (
      <div
        id="jobApplicationReveal"
        className="job-application--reveal flex flex-column border-top b-light-blue pt4 js-non-unavailable-position"
      >
        <h4 className="feature-font-family regular f-15 pb2 c-brand-primary">
          Apply now
        </h4>
        <form
          className="job-application"
          acceptCharset="UTF-8"
          action="https://formkeep.com/f/50e5b258d8a7"
          method="POST"
        >
          <AboutYouSectionForm handleChange={handleFormFieldChange} />
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
          <JobUniAndContactFrom displayCampusSelect={job.displayCampusSelect} />
          <JobQuestionAndVideoLink
            messageQuestion={job.messageQuestion}
            isThereVideoLink={job.isThereVideoLink}
          />
          <SupportingDocsSectionForm requiredDocuments={job.requiredDocuments} />
          <IndigenousForm country={job.country} />
          <BecomeAFriendSection />
          <HiddenFieldsAndSubmitAction type={job.type} name={job.name} />
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
};

JobForm.defaultProps = {
  showForm: false,
  job: {},
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
};

export default JobForm;
