import React from 'react';
import PropTypes from 'prop-types';
import LabeledInput from 'aime-blueprint/lib/components/labeledInput';
import PhoneInput from 'aime-blueprint/lib/components/phoneInput';

const AboutYouSectionForm = ({ handleChange, values }) => (
  <div className="clearfix">
    <div className="inputJobApplicationWrapper">
      <LabeledInput
        type="text"
        name="first_name"
        value={values.first_name || ''}
        required
        onChangeFunction={handleChange}
        label="First Name"
        theme={process.env.REACT_APP_THEME}
        className="inputJobApplication"
      />
    </div>
    <div className="inputJobApplicationWrapper">
      <LabeledInput
        type="text"
        name="last_name"
        value={values.last_name || ''}
        onChangeFunction={handleChange}
        label="Last Name"
        theme={process.env.REACT_APP_THEME}
        className="inputJobApplication"
        required
      />
    </div>
    <div className="inputJobApplicationWrapper">
      <LabeledInput
        type="email"
        name="email"
        value={values.email || ''}
        onChangeFunction={handleChange}
        label="Email"
        theme={process.env.REACT_APP_THEME}
        className="inputJobApplication"
        required
      />
    </div>
    <div className="inputJobApplicationWrapper flex flex-column js-phone-component">
      <PhoneInput
        placeholder="Enter phone number"
        theme={process.env.REACT_APP_THEME}
        name="phone"
        value={values.phone || ''}
        defaultCountry="AU"
        onChangeFunction={handleChange}
        className="inputJobApplication"
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
