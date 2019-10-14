import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

export default class PhoneInput extends PureComponent {
  static propTypes = {
    currentSite: PropTypes.string,
    elementClassName: PropTypes.string.isRequired,
    name: PropTypes.string,
    required: PropTypes.bool,
    defaultCountry: PropTypes.string,
    value: PropTypes.string,
    // placeholder: PropTypes.string,
    onChangeFunction: PropTypes.func,
    onCountrySelected: PropTypes.func,
  };

  static defaultProps = {
    name: 'phone',
    currentSite: '',
    // placeholder: 'Phone number',
    required: false,
    defaultCountry: '',
    value: '',
    onCountrySelected: () => {},
    onChangeFunction: () => {},
  };

  lookupGeoIp = (callback) => {
    callback(this.props.currentSite);
  }

  handleChange = (status, value) => {
    const { name, onChangeFunction } = this.props;
    onChangeFunction(name, value);
  }

  render() {
    const {
      elementClassName,
      required,
      defaultCountry,
      name,
      value,
      onCountrySelected,
      // placeholder,
    } = this.props;
    return (
      <div className={elementClassName}>
        <IntlTelInput
          value={value}
          fieldName={name}
          defaultCountry={defaultCountry}
          // placeholder={placeholder}
          autoPlaceholder
          geoIpLookup={this.lookupGeoIp}
          css={['intl-tel-input w100', 'input']}
          utilsScript="libphonenumber.js"
          onPhoneNumberChange={this.handleChange}
          onSelectFlag={onCountrySelected}
          type="number"
          telInputProps={{ required }}
          separateDialCode
          format
          style={{ width: '100%' }}
        />
      </div>
    );
  }
}
