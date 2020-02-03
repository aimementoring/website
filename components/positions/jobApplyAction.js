import React from 'react';
import PropTypes from 'prop-types';

const JobApplyAction = ({ showForm, showApplicationForm, job }) => (
  <div>
    {!showForm && Object.keys(job).length > 0 && (
      <button
        id="applyNowButton"
        type="button"
        onClick={showApplicationForm}
        className="basic-btn border-none submit bold bg-purple c-white regular js-non-unavailable-position"
        aria-label="apply now"
      >
        Apply now
      </button>
    )}
  </div>
);

JobApplyAction.propTypes = {
  showForm: PropTypes.bool,
  showApplicationForm: PropTypes.func,
  job: PropTypes.shape().isRequired,
};

JobApplyAction.defaultProps = {
  showForm: false,
  showApplicationForm: () => {},
};

export default JobApplyAction;
