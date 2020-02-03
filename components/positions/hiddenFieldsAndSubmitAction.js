import React from 'react';
import PropTypes from 'prop-types';

const HiddenFieldsAndSubmitAction = ({ type, name }) => (
  <>
    <input type="hidden" name="utf8" value="✓" />
    <input
      type="hidden"
      name="submissionmessage"
      value="jobs"
    />
    <input
      type="hidden"
      name="job_type"
      className="js-job-type-submit-value"
      value={type}
    />
    <input
      type="hidden"
      name="jobs_role_applying_for"
      className="js-jobs-role-applying-for"
      value={name}
    />
    <div className="sm-col sm-col-12 md-col-12">
      <input
        type="submit"
        className="submit submit-button bold bg-purple mt3 mb4"
        value="Submit Application"
      />
    </div>
  </>
);

HiddenFieldsAndSubmitAction.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
};

HiddenFieldsAndSubmitAction.defaultProps = {
  name: '',
  type: '',
};

export default HiddenFieldsAndSubmitAction;
