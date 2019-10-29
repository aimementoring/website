import React from 'react';
import PropTypes from 'prop-types';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

const PhoneInput = ({
  currentSite,
  name,
  onChangeFunction,
  elementClassName,
  required,
  defaultCountry,
  value,
  onCountrySelected,
}) => {
  const lookupGeoIp = (callback) => {
    callback(currentSite);
  };

  const handleChange = (status, inputValue) => {
    onChangeFunction(name, inputValue);
  };

  return (
    <div className={elementClassName}>
      <IntlTelInput
        value={value}
        fieldName={name}
        defaultCountry={defaultCountry}
        autoPlaceholder
        geoIpLookup={lookupGeoIp}
        css={['intl-tel-input w100', 'input']}
        utilsScript="libphonenumber.js"
        onPhoneNumberChange={handleChange}
        onSelectFlag={onCountrySelected}
        type="number"
        telInputProps={{ required }}
        separateDialCode
        format
        style={{ width: '100%' }}
      />
    </div>
  );
};

PhoneInput.propTypes = {
  currentSite: PropTypes.string,
  elementClassName: PropTypes.string.isRequired,
  name: PropTypes.string,
  required: PropTypes.bool,
  defaultCountry: PropTypes.string,
  value: PropTypes.string,
  onChangeFunction: PropTypes.func,
  onCountrySelected: PropTypes.func,
};

PhoneInput.defaultProps = {
  name: 'phone',
  currentSite: '',
  required: false,
  defaultCountry: '',
  value: '',
  onCountrySelected: () => {},
  onChangeFunction: () => {},
};

export default PhoneInput;
