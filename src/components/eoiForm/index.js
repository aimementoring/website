import React, { PureComponent } from 'react';
import PropType from 'prop-types';
import Input from '../commonElements/Input';
import PhoneInput from '../commonElements/PhoneInput';
import Select from '../commonElements/ReactSelect';
import CustomCheckbox from '../commonElements/CustomCheckbox';
import Loading from '../commonElements/Loading';
import { detectCountry, getAllCountries } from '../../utils/country';
import { COUNTRY_CODES } from '../../utils/countryCodes';
import './EOIForm.scss';

export default class EOIForm extends PureComponent {
  state = {
    showOtherSourceConditional: false,
    phone: '',
    countrySelected: '',
    countryNameSelected: '',
    countryDetected: '',
    firstName: '',
    lastName: '',
    email: '',
    universityCampus: '',
    howDidYouHear: '',
    howDidYouHearOther: '',
    loading: false,
    submitClicked: false,
    beAnAimeFriend: false,
  };

  componentDidMount() {
    this.setCountries();
  }

  setCountries = async () => {
    const countries = getAllCountries().map(country => ({
      value: country.code,
      label: country.name,
    }));
    this.setState({ countries });
    detectCountry(this.setCountry);
  };

  setCountry = countryJson => {
    this.setState({
      countrySelected: countryJson.countryCode,
      countryNameSelected: countryJson.country,
      countryDetected: countryJson.countryCode.toLowerCase(),
      phoneCountrySelected: COUNTRY_CODES.find(country => country.code === countryJson.countryCode)
        .dial_code,
    });
  };

  handleHowDidYouHearSelectChange = (name, newValue) => {
    if (newValue === 'Other') {
      this.setState({
        showOtherSourceConditional: true,
        [name]: '',
      });
    } else {
      this.setState({
        showOtherSourceConditional: false,
        [name]: newValue,
      });
    }
  };

  handleCountryChange = (propertyName, propertyValue) => {
    this.setState(prevState => ({
      [propertyName]: propertyValue,
      countryNameSelected: prevState.countries.find(country => country.value === propertyValue)
        .label,
    }));
  };

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

  getStylesForCountrySelection = () => {
    const { backgroundColor } = this.props;
    return {
      control: {
        background: backgroundColor,
      },
      singleValue: {
        position: 'initial',
        overflow: 'inherit',
        top: 'inherit',
        transform: 'inherit',
        maxWidth: 'inherit',
      },
      menu: {
        borderRadius: 0,
        marginTop: '0px',
        width: '100%',
        zIndex: 10000,
      },
      menuList: {
        zIndex: 10000,
        padding: 0,
      },
    };
  };

  submitData = e => {
    if (!this.formEl.checkValidity()) {
      return;
    }
    e.preventDefault();
    const { tableName, uploadData, history } = this.props;
    const {
      countrySelected,
      howDidYouHear,
      countryNameSelected,
      phoneCountrySelected,
    } = this.state;
    // form validation
    if (!howDidYouHear || !countrySelected) {
      this.setState({ submitClicked: true });
      return;
    }

    this.setState({ submitClicked: true, loading: true }, () => {
      const objectToSend = {
        ...this.state,
        tableName,
        countrySelected: countryNameSelected,
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
                Yeah! Thanks for filling out our little form!
                Your local AIME people will make contact with you really soon
                `,
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
      showOtherSourceConditional,
      phone,
      countrySelected,
      countryDetected,
      firstName,
      lastName,
      email,
      universityCampus,
      howDidYouHear,
      howDidYouHearOther,
      loading,
      submitClicked,
      countries,
      beAnAimeFriend,
    } = this.state;
    const { showBeAFriendCheckbox, currentSite } = this.props;
    return (
      <form className="clearfix form-light student-chapter-form" ref={form => (this.formEl = form)}>
        <input type="hidden" name="utf8" />
        <Input
          placeholder="First Name"
          name="firstName"
          required
          type="text"
          elementClassName="sm-col o7-r o7-b sm-col-6 md-col-6 custom-form-input-container"
          value={firstName}
          onChangeFunction={this.handleFieldChange}
        />
        <Input
          type="text"
          elementClassName="sm-col o7-r o7-b sm-col-6 md-col-6 custom-form-input-container"
          placeholder="Last Name"
          name="lastName"
          value={lastName}
          onChangeFunction={this.handleFieldChange}
          required
        />
        <Input
          type="email"
          elementClassName="sm-col o7-r o7-b sm-col-6 md-col-6 custom-form-input-container"
          placeholder="Email"
          name="email"
          value={email}
          onChangeFunction={this.handleFieldChange}
          required
        />
        <div>
          {(countryDetected || countrySelected) && (
            <div>
              <PhoneInput
                elementClassName="sm-col o7-r o7-b sm-col-6 md-col-6 custom-form-input-container"
                onChangeFunction={this.handleFieldChange}
                onCountrySelected={this.handlePhoneCountrySelected}
                name="phone"
                value={phone}
                defaultCountry={countryDetected}
                currentSite={currentSite}
              />
            </div>
          )}
        </div>
        <div className="sm-col sm-col-6 md-col-6 o7-r o7-b">
          {countries && (
            <Select
              placeholder="What country do you live in??"
              name="countrySelected"
              className="input sm-col o7-r o7-b sm-col-6 md-col-6 select select-container custom-form-input-container"
              onChangeFunction={this.handleCountryChange}
              error={submitClicked && !countrySelected}
              value={countrySelected}
              backgroundColor="transparent"
              borderColor="transparent"
              borderColorInFocus="transparent"
              color="#DA0DFF"
              styles={this.getStylesForCountrySelection()}
              options={countries}
            />
          )}
        </div>
        <div className="sm-col o7-r o7-b sm-col-6 md-col-6 select select-container">
          <Select
            placeholder="How did you hear about this?"
            name="howDidYouHear"
            className="input sm-col o7-r o7-b sm-col-6 md-col-6 select select-container"
            onChangeFunction={this.handleHowDidYouHearSelectChange}
            error={submitClicked && !howDidYouHear}
            value={howDidYouHear}
            backgroundColor="transparent"
            borderColor="transparent"
            borderColorInFocus="transparent"
            color="#DA0DFF"
            styles={this.getStylesForCountrySelection()}
            options={[
              { value: 'Facebook', label: 'Facebook' },
              { value: 'Instagram', label: 'Instagram' },
              { value: 'Twitter', label: 'Twitter' },
              { value: 'AIME Email', label: 'AIME Email' },
              { value: 'From a friend', label: 'From a friend' },
              { value: 'Other', label: 'Other' },
            ]}
          />
        </div>
        <Input
          type="text"
          elementClassName="sm-col o7-r o7-b sm-col-6 md-col-6 custom-form-input-container"
          placeholder="Your College Campus"
          name="universityCampus"
          value={universityCampus}
          onChangeFunction={this.handleFieldChange}
          required
        />
        {showOtherSourceConditional && (
          <Input
            type="text"
            elementClassName="sm-col o7-r o7-b sm-col-6 md-col-6 custom-form-input-container"
            placeholder="Other"
            name="howDidYouHearOther"
            value={howDidYouHearOther}
            onChangeFunction={this.handleFieldChange}
          />
        )}
        {showBeAFriendCheckbox && (
          <CustomCheckbox
            elementClassName="sm-col sm-col-12 md-col-12 f-14 py2 flex
            items-center custom-checkbox--yellow"
            labeltext="Become an AIME Friend. Receive updates about AIME and help us tackle inequality"
            inputName="beAnAimeFriend"
            color="black"
            value={beAnAimeFriend}
            onChangeFunction={this.handleFieldChange}
          />
        )}
        <div className="sm-col sm-col-12 md-col-12 center-align md-left-align py2 my1">
          <input onClick={this.submitData} type="submit" className="submit" value="SIGN ME UP" />
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
  showBeAFriendCheckbox: PropType.bool,
};

EOIForm.defaultProps = {
  tableName: '',
  showBeAFriendCheckbox: false,
};
