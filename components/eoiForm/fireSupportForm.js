import React, { Component } from 'react';
import PropType from 'prop-types';
import Input from '../commonElements/Input';
import UniversitySelector from '../universitySelectorWithAutoComplete';
import TextAreaInput from '../commonElements/TextAreaInput';
import PhoneInput from '../commonElements/PhoneInput';
import Loading from '../commonElements/Loading';
import { getUniversities } from '../../services/portalApi';
import './EOIForm.scss';

export default class EOIForm extends Component {
  state = {
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
  };

  componentDidMount() {
    getUniversities()
      .then(universities => {
        const universityOptions = universities
          .filter(university => university.eoi !== null && university.eoi !== undefined &&
            university.country === 'Australia')
          .map(university => {
            return {
              value: university.eoi,
              label: university.name,
              country: university.country,
              reportingName: university.reportingName && university.reportingName.toLowerCase(),
            }
          });
        this.setState({ universityOptions })
      });
  }

  handleUniversityChange = (field, value) => {
    if (value === 'I can’t find my university/college here') {
      this.setState({ university: '', universityIsOutsideAIME: true });
    } else {
      this.setState({
        university: value,
        universityIsOutsideAIME: false,
      });
    }
  }

  handleFieldChange = (propertyName, propertyValue) => {
    this.setState({ [propertyName]: propertyValue });
  };

  handlePhoneCountrySelected = () => {
    const phoneCountrySelected = document.getElementsByClassName('flag-container')[0]
      .firstElementChild.title;
    if (phoneCountrySelected) {
      const phoneArea = phoneCountrySelected.split('+')
        ? `+${phoneCountrySelected.split('+')[1]}`
        : '';
      this.setState({ phoneCountrySelected: phoneArea });
      return phoneArea;
    }
    return '';
  };

  submitData = e => {
    if (!this.formEl.checkValidity()) {
      return;
    }
    e.preventDefault();
    const { tableName, uploadData, history } = this.props;
    const {
      phoneCountrySelected,
      university,
      universityOutsideOfAime,
    } = this.state;
    if (!university && !universityOutsideOfAime) {
      this.setState({ submitClicked: true });
      return;
    }
    this.setState({ submitClicked: true, loading: true }, () => {
      const objectToSend = {
        ...this.state,
        tableName,
      };
      if (!phoneCountrySelected) {
        objectToSend.phoneCountrySelected = this.handlePhoneCountrySelected();
      }
      uploadData(objectToSend).then(response => {
        this.setState({ loading: false });
        if (response.data === 'OK') {
          history.push({
            pathname: '/thanks',
            messages: {
              thankMessage: `
                Thank you for offering your support.
                We'll be in touch with next steps ASAP.
                `,
            },
            imageUrl: {
              imgUrlPath: '/assets/images/thanks/thumbsup@2x.png',
            },
          });
          return;
        }
        throw new Error('Error saving the EOI');
      });
    });
  };

  render() {
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
    } = this.state;
    const { currentSite } = this.props;
    return (
      <form className="clearfix form-light student-chapter-form" ref={form => (this.formEl = form)}>
        <input type="hidden" name="utf8" />
        <Input
          placeholder="First Name"
          name="firstName"
          required
          type="text"
          elementClassName="sm-col sm-col-6 md-col-6 custom-form-input-container"
          value={firstName}
          onChangeFunction={this.handleFieldChange}
        />
        <Input
          type="text"
          elementClassName="sm-col sm-col-6 md-col-6 custom-form-input-container"
          placeholder="Last Name"
          name="lastName"
          value={lastName}
          onChangeFunction={this.handleFieldChange}
          required
        />
        <Input
          type="email"
          elementClassName="sm-col sm-col-6 md-col-6 custom-form-input-container"
          placeholder="Email"
          name="email"
          value={email}
          onChangeFunction={this.handleFieldChange}
          required
        />
        <div>
          <div>
            <PhoneInput
              elementClassName="sm-col sm-col-6 md-col-6 custom-form-input-container"
              onChangeFunction={this.handleFieldChange}
              onCountrySelected={this.handlePhoneCountrySelected}
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
            onChangeFunction={this.handleUniversityChange}
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
            onChangeFunction={this.handleFieldChange}
            required
          />
        )}
        <TextAreaInput
          elementClassName="input-wrapper textarea-wrapper"
          className="input-heigth"
          placeholder="Please provide your location, dates, availability &amp; any specialist skills you have"
          name="message"
          value={message}
          onChangeFunction={this.handleFieldChange}
        />
        <div className="sm-col sm-col-12 md-col-12 center-align md-left-align py2 my1">
          <input onClick={this.submitData} type="submit" className="submit support-submit" value="REGISTER" />
        </div>
        <div>
          <Loading loading={loading} />
        </div>
      </form>
    );
  }
}

EOIForm.propTypes = {
  history: PropType.object.isRequired,
  uploadData: PropType.func.isRequired,
  tableName: PropType.string,
};

EOIForm.defaultProps = {
  tableName: '',
};
