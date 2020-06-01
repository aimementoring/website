import React from 'react';
import PropTypes from 'prop-types';
import Input from 'aime-blueprint/lib/components/input';
import PhoneInput from 'aime-blueprint/lib/components/phoneInput';
import styles from './aboutYouSectionForm.module.scss';

const AboutYouSectionForm = ({ handleChange, values }) => (
  <div className={styles.aboutYouSectionFormContainer}>
    <div className={styles.jobInputWrapper}>
      <Input
        type="text"
        name="first_name"
        value={values.first_name || ''}
        required
        onChangeFunction={handleChange}
        label="First Name"
        theme={process.env.REACT_APP_THEME}
        className={styles.inputJobApplication}
      />
    </div>
    <div className={styles.jobInputWrapper}>
      <Input
        type="text"
        name="last_name"
        value={values.last_name || ''}
        onChangeFunction={handleChange}
        label="Last Name"
        theme={process.env.REACT_APP_THEME}
        className={styles.inputJobApplication}
        required
      />
    </div>
    <div className={styles.jobInputWrapper}>
      <Input
        type="email"
        name="email"
        value={values.email || ''}
        onChangeFunction={handleChange}
        label="Email"
        theme={process.env.REACT_APP_THEME}
        className={styles.inputJobApplication}
        required
      />
    </div>
    <div className={styles.phoneJobInputWrapper}>
      <PhoneInput
        placeholder="Enter phone number"
        theme={process.env.REACT_APP_THEME}
        name="phone"
        value={values.phone || ''}
        defaultCountry="AU"
        onChangeFunction={handleChange}
        className={styles.inputJobApplication}
      />
    </div>
  </div>
);

AboutYouSectionForm.propTypes = {
  handleChange: PropTypes.func,
  values: PropTypes.shape({
    phone: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
  }),
};

AboutYouSectionForm.defaultProps = {
  handleChange: () => {},
  values: {},
};

export default AboutYouSectionForm;
