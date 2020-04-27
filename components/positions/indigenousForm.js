import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'aime-blueprint/lib/components/checkbox';
import styles from './indigenousForm.module.scss';

const IndigenousForm = ({ handleChange, values }) => (
  <div>
    <div className={styles.indigenousFormContainer}>
      <Checkbox
        id="indigenous"
        placeholder="I identify as an Aboriginal and/or Torres Strait Islander person."
        name="indigenous"
        value={values.indigenous || false}
        onChangeFunction={handleChange}
        theme={process.env.REACT_APP_THEME}
      />
    </div>
  </div>
);

IndigenousForm.propTypes = {
  handleChange: PropTypes.func,
  values: PropTypes.shape({
    indigenous: PropTypes.bool,
  }),
};

IndigenousForm.defaultProps = {
  handleChange: () => {},
  values: {},
};

export default IndigenousForm;
