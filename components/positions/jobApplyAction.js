import React from 'react';
import PropTypes from 'prop-types';
import Button from 'aime-blueprint/lib/components/button';

const JobApplyAction = ({ showForm, showApplicationForm, job }) => (
  <div>
    {!showForm && Object.keys(job).length > 0 && (
      <Button
        theme={process.env.REACT_APP_THEME}
        id="applyNowButton"
        type="button"
        onClickFunction={showApplicationForm}
        className="basic-btn border-none submit bold bg-purple c-white regular js-non-unavailable-position"
        aria-label="apply now"
      >
        Apply now
      </Button>
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
