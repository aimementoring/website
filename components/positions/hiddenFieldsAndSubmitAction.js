import React from 'react';
import PropTypes from 'prop-types';
import Button from 'aime-blueprint/lib/components/button';

const HiddenFieldsAndSubmitAction = ({ type, name, onSubmit }) => (
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
      {/* <input
        type="submit"
        className=""
        value="Submit Application"
      /> */}
      <Button
        theme={process.env.REACT_APP_THEME}
        // className="submit submit-button bold bg-purple mt3 mb4"
        aria-label="submit"
        type="button"
        value="Submit Application"
        onClickFunction={onSubmit}
      >
        Submit Application
      </Button>
    </div>
  </>
);

HiddenFieldsAndSubmitAction.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  onSubmit: PropTypes.func,
};

HiddenFieldsAndSubmitAction.defaultProps = {
  name: '',
  type: '',
  onSubmit: () => {},
};

export default HiddenFieldsAndSubmitAction;
