import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import './beAMentor.scss';

const Checkbox = dynamic(() => import(/* webpackChunkName 'Checkbox' */ 'aime-blueprint/lib/components/checkbox'));
const Input = dynamic(() => import(/* webpackChunkName 'Input' */ 'aime-blueprint/lib/components/input'));
const PhoneInput = dynamic(() => import(/* webpackChunkName 'PhoneInput' */ 'aime-blueprint/lib/components/phoneInput'));
const UniversitySelector = dynamic(() => import(/* webpackChunkName 'UniversitySelector' */ '../../components/universitySelectorWithAutoComplete'));

const NewMentorForm = ({
  universities,
  handleFieldChange,
  submitData,
  universityIsOutsideAIME,
  universitySelected,
  submitClicked,
  universityOptions,
  countrySelected,
  universityOutsideAIME,
  firstName,
  lastName,
  email,
  countryDetected,
  aimeFriend,
  phone,
  currentSite,
  handlePhoneCountrySelected,
}) => (
  <div className="mt2">
    {universities && universities.length > 1 && (
      <div>
        <UniversitySelector
          placeholder="Start typing to search for university/college"
          onChangeFunction={handleFieldChange}
          name="universitySelected"
          isClearable
          error={submitClicked && !universitySelected[0]}
          containerClassNames="sm-col sm-col-12 md-col-12 f-14 pt2"
          universityOptions={universityOptions}
          value={universitySelected[0] ? universitySelected[0] : null}
          backgroundColor="#FFFF"
          borderColor="#FFFF"
          country={countrySelected}
          theme={process.env.REACT_APP_THEME}
        />
      </div>
    )}
    {(universityIsOutsideAIME || (universities && universities.length === 1)) && (
      <div>
        <Input
          type="text"
          elementClassName="sm-col sm-col-12 md-col-12 f-14 pt2 o7-b mt1"
          placeholder="Type your university/college name"
          name="universityOutsideAIME"
          value={universityOutsideAIME}
          onChangeFunction={handleFieldChange}
          theme={process.env.REACT_APP_THEME}
        />
      </div>
    )}
    <Input
      type="text"
      elementClassName="sm-col sm-col-6 md-col-6 o7-r o7-b mt1"
      placeholder="First Name"
      name="firstName"
      value={firstName}
      onChangeFunction={handleFieldChange}
      required
      theme={process.env.REACT_APP_THEME}
    />
    <Input
      type="text"
      elementClassName="sm-col sm-col-6 md-col-6 o7-b mt1"
      placeholder="Last Name"
      name="lastName"
      value={lastName}
      onChangeFunction={handleFieldChange}
      required
      theme={process.env.REACT_APP_THEME}
    />
    <Input
      type="text"
      elementClassName="sm-col sm-col-6 md-col-6 o7-r o7-b"
      placeholder="Email"
      name="email"
      value={email}
      onChangeFunction={handleFieldChange}
      required
      theme={process.env.REACT_APP_THEME}
    />
    <div>
      {(countryDetected || countrySelected) && (
        <div>
          <PhoneInput
            elementClassName="sm-col sm-col-6 md-col-6 o7-b"
            onChangeFunction={handleFieldChange}
            onCountrySelected={handlePhoneCountrySelected}
            name="phone"
            value={phone}
            defaultCountry={countryDetected}
            currentSite={currentSite}
            theme={process.env.REACT_APP_THEME}
          />
        </div>
      )}
    </div>
    <div>
      <div className="col-12 flex">
        <Checkbox
          elementClassName="sm-col sm-col-12 md-col-12 f-14 pt2 flex items-center custom-checkbox custom-checkbox--default"
          className="mt2"
          onChangeFunction={handleFieldChange}
          placeholder="Become an AIME Friend. Receive updates about AIME and help us tackle inequality."
          name="aimeFriend"
          customId="aimeFriend"
          value={!!aimeFriend}
          theme={process.env.REACT_APP_THEME}
        />
      </div>
      <div className="center sm-col sm-col-12 md-col-12 pr1 pb1 mt4">
        <button type="submit" className="submit" onClick={submitData} aria-label="submit form">
          Submit
        </button>
      </div>
    </div>
  </div>
);

NewMentorForm.propTypes = {
  universities: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleFieldChange: PropTypes.func,
  submitData: PropTypes.func,
  universityIsOutsideAIME: PropTypes.bool,
  universitySelected: PropTypes.arrayOf(PropTypes.shape({})),
  submitClicked: PropTypes.bool,
  universityOptions: PropTypes.arrayOf(PropTypes.shape({})),
  countrySelected: PropTypes.string,
  universityOutsideAIME: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  countryDetected: PropTypes.string,
  aimeFriend: PropTypes.bool,
  phone: PropTypes.string,
  currentSite: PropTypes.string.isRequired,
  handlePhoneCountrySelected: PropTypes.func,
};

NewMentorForm.defaultProps = {
  handleFieldChange: () => {},
  submitData: () => {},
  universityIsOutsideAIME: false,
  universitySelected: [],
  submitClicked: false,
  universityOptions: [],
  countrySelected: null,
  universityOutsideAIME: false,
  firstName: null,
  lastName: null,
  email: null,
  countryDetected: null,
  aimeFriend: false,
  phone: null,
  handlePhoneCountrySelected: () => {},
};

export default NewMentorForm;
