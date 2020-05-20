import React from 'react';
import PropTypes from 'prop-types';
import Button from 'aime-blueprint/lib/components/button';
import styles from './hiddenFieldsAndSubmitAction.module.scss';

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
      value={type}
    />
    <input
      type="hidden"
      name="jobs_role_applying_for"
      value={name}
    />
    <div className={styles.hiddenFieldsAndSubmitActionContainer}>
      <Button
        theme={process.env.REACT_APP_THEME}
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
