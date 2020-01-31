import React, { useState, useEffect, useRef } from 'react';
import PropType from 'prop-types';
import Router from 'next/router';
import Input from 'aime-blueprint/lib/components/input';
import Textarea from 'aime-blueprint/lib/components/textarea';
import Loading from 'aime-blueprint/lib/components/loading';
import PhoneInput from 'aime-blueprint/lib/components/phoneInput';
import UniversitySelector from '../universitySelectorWithAutoComplete';
import { getUniversities } from '../../services/portalApi';
import './EOIForm.scss';

const tableName = 'Fire Support';

const EOIForm = ({ currentSite, uploadData }) => {
  const [state, setState] = useState({
    showOtherSourceConditional: false,
    phone: '',
    firstName: '',
    lastName: '',
    email: '',
    university: '',
    howDidYouHear: '',
    howDidYouHearOther: '',
    loading: false,
    universityIsOutsideAIME: false,
    submitClicked: false,
    beAnAimeFriend: false,
    universityOptions: [],
    universityOutsideOfAime: '',
  });

  const formEl = useRef(null);

  const fetchUniversities = async () => {
    const universities = await getUniversities();
    const universityOptions = universities
      .filter((university) => university.eoi !== null && university.eoi !== undefined
        && university.country === 'Australia')
      .map((university) => ({
        value: university.eoi,
        label: university.name,
        country: university.country,
        reportingName: university.reportingName && university.reportingName.toLowerCase(),
      }));

    setState({ ...state, universityOptions });
  };

  useEffect(() => {
    fetchUniversities();
  });

  const handleUniversityChange = (field, value) => {
    let universityValues = { university: value, universityIsOutsideAIME: false };
    if (value === 'I can’t find my university/college here') {
      universityValues = { university: '', universityIsOutsideAIME: true };
    }
    setState({ ...state, universityValues });
  };

  const handleFieldChange = (propertyName, propertyValue) => {
    setState({ ...state, [propertyName]: propertyValue });
  };

  const handlePhoneCountrySelected = () => {
    const phoneCountrySelected = document.getElementsByClassName('flag-container')[0]
      .firstElementChild.title;
    if (phoneCountrySelected) {
      const phoneArea = phoneCountrySelected.split('+')
        ? `+${phoneCountrySelected.split('+')[1]}`
        : '';
      setState({ ...state, phoneCountrySelected: phoneArea });
      return phoneArea;
    }
    return '';
  };

  const submitData = async (e) => {
    if (!formEl.checkValidity()) return;

    e.preventDefault();
    const {
      phoneCountrySelected,
      university,
      universityOutsideOfAime,
    } = state;
    if (!university && !universityOutsideOfAime) {
      setState({ ...state, submitClicked: true });
      return;
    }
    setState({ ...state, submitClicked: true, loading: true }, async () => {
      const objectToSend = {
        ...state,
        tableName,
      };
      if (!phoneCountrySelected) {
        objectToSend.phoneCountrySelected = handlePhoneCountrySelected();
      }
      const response = await uploadData(objectToSend);
      setState({ ...state, loading: false });
      if (response.data === 'OK') {
        Router.push({
          pathname: '/thanks',
          query: {
            messages: `
              Thank you for offering your support.
              We'll be in touch with next steps ASAP.
              `,
            imageUrl: {
              imgUrlPath: '/assets/images/thanks/thumbsup@2x.png',
            },
          },
        });
        return;
      }
      throw new Error('Error saving the EOI');
    });
  };

  const {
    phone,
    firstName,
    lastName,
    email,
    university,
    universityOptions,
    universityOutsideOfAime,
    universityIsOutsideAIME,
    message,
    loading,
    submitClicked,
  } = state;

  return (
    <form className="clearfix form-light student-chapter-form" ref={formEl}>
      <input type="hidden" name="utf8" />
      <Input
        placeholder="First Name"
        name="firstName"
        required
        type="text"
        elementClassName="sm-col sm-col-6 md-col-6 custom-form-input-container"
        value={firstName}
        onChangeFunction={handleFieldChange}
      />
      <Input
        type="text"
        elementClassName="sm-col sm-col-6 md-col-6 custom-form-input-container"
        placeholder="Last Name"
        name="lastName"
        value={lastName}
        onChangeFunction={handleFieldChange}
        required
      />
      <Input
        type="email"
        elementClassName="sm-col sm-col-6 md-col-6 custom-form-input-container"
        placeholder="Email"
        name="email"
        value={email}
        onChangeFunction={handleFieldChange}
        required
      />
      <div>
        <div>
          <PhoneInput
            elementClassName="sm-col sm-col-6 md-col-6 custom-form-input-container"
            onChangeFunction={handleFieldChange}
            onCountrySelected={handlePhoneCountrySelected}
            name="phone"
            value={phone}
            defaultCountry="au"
            currentSite={currentSite}
          />
        </div>
      </div>
      <div className="sm-col sm-col-12 md-col-12 custom-form-input-container university-eoi-form-container">
        <UniversitySelector
          placeholder="Start typing to search for university/college"
          onChangeFunction={handleUniversityChange}
          name="university"
          isClearable
          error={submitClicked && !university}
          containerClassNames="select-uni-location"
          universityOptions={universityOptions}
          value={university || null}
          backgroundColor="#FFFF"
          borderColor="#E3E5E5"
        />
      </div>
      {universityIsOutsideAIME && (
        <Input
          type="universityOutsideOfAime"
          elementClassName="sm-col sm-col-12 md-col-12 custom-form-input-container"
          placeholder="Your University"
          name="universityOutsideOfAime"
          className="mh-60"
          value={universityOutsideOfAime}
          onChangeFunction={handleFieldChange}
          required
        />
      )}
      <Textarea
        elementClassName="input-wrapper textarea-wrapper"
        className="input-heigth"
        placeholder="Please provide your location, dates, availability &amp; any specialist skills you have"
        name="message"
        value={message}
        onChangeFunction={handleFieldChange}
      />
      <div className="sm-col sm-col-12 md-col-12 center-align md-left-align py2 my1">
        <input onClick={submitData} type="submit" className="submit support-submit" value="REGISTER" />
      </div>
      <div>
        <Loading loading={loading} />
      </div>
    </form>
  );
};

EOIForm.propTypes = {
  uploadData: PropType.func.isRequired,
  currentSite: PropType.string,
};

EOIForm.defaultProps = {
  currentSite: 'au',
};

export default EOIForm;
