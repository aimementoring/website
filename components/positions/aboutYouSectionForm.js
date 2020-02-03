import React from 'react';
import Input from 'aime-blueprint/lib/components/input';
import PhoneInput from 'aime-blueprint/lib/components/phoneInput';

const AboutYouSectionForm = () => (
  <div className="clearfix">
    <div className="sm-col sm-col-6 md-col-6 o7-r o7-b flex">
      <Input
        type="text"
        className="input"
        placeholder="First Name"
        name="first_name"
        required
        theme={process.env.REACT_APP_THEME}
      />
    </div>
    <div className="sm-col sm-col-6 md-col-6 o7-r o7-b flex">
      <Input
        type="text"
        className="input"
        placeholder="Last Name"
        name="last_name"
        required
        theme={process.env.REACT_APP_THEME}
      />
    </div>
    <div className="sm-col sm-col-6 md-col-6 o7-r o7-b flex">
      <Input
        type="email"
        className="input"
        placeholder="Email"
        name="email"
        theme={process.env.REACT_APP_THEME}
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

export default AboutYouSectionForm;
