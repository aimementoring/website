import React from 'react';
import PropTypes from 'prop-types';
import LabeledInput from 'aime-blueprint/lib/components/labeledInput';
import PhoneInput from 'aime-blueprint/lib/components/phoneInput';

const AboutYouSectionForm = ({ handleChange }) => (
  <div className="clearfix">
    <div className="sm-col sm-col-6 md-col-6 o7-r o7-b">
      <LabeledInput
        type="text"
        name="first_name"
        required
        onChangeFunction={handleChange}
        label="First Name"
        theme={process.env.REACT_APP_THEME}
        className="inputJobApplication"
      />
    </div>
    <div className="sm-col sm-col-6 md-col-6 o7-r o7-b">
      <LabeledInput
        type="text"
        name="last_name"
        onChangeFunction={handleChange}
        label="Last Name"
        theme={process.env.REACT_APP_THEME}
        className="inputJobApplication"
        required
      />
    </div>
    <div className="sm-col sm-col-6 md-col-6 o7-r o7-b">
      <LabeledInput
        type="email"
        name="email"
        onChangeFunction={handleChange}
        label="Email"
        theme={process.env.REACT_APP_THEME}
        className="inputJobApplication"
        required
      />
    </div>
    <div className="sm-col sm-col-6 md-col-6 o7-r o7-b flex flex-column js-phone-component">
      <PhoneInput
        placeholder="Enter phone number"
        theme={process.env.REACT_APP_THEME}
        name="phone"
        defaultCountry="au"
      />
    </div>
  </div>
);

AboutYouSectionForm.propTypes = {
  handleChange: PropTypes.func,
};

AboutYouSectionForm.defaultProps = {
  handleChange: () => {},
};

export default AboutYouSectionForm;
