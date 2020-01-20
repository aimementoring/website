import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getGlobalVariables } from '../../services/craftAPI';
import LocationSearchInput from './locationSearchInput';

const AddressAutocompleteInput = ({
  placeholder,
  onAddressSelected,
  classNameProp,
  defaultAddress,
}) => {
  const [googleMapsApiToken, setGoogleMapsApiToken] = useState(null);

  const getGoogleApiToken = async () => {
    const data = await getGlobalVariables();
    setGoogleMapsApiToken(data.googleMapsApiToken);
  };

  useEffect(() => {
    getGoogleApiToken();
  }, []);

  return googleMapsApiToken ? (
    <LocationSearchInput
      defaultAddress={defaultAddress}
      inputPlaceholder={placeholder}
      onAddressSelected={onAddressSelected}
      googleMapsApiToken={googleMapsApiToken}
      classNameProp={classNameProp}
    />
  ) : null;
};

AddressAutocompleteInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onAddressSelected: PropTypes.func.isRequired,
  classNameProp: PropTypes.string.isRequired,
  defaultAddress: PropTypes.string,
};

AddressAutocompleteInput.defaultProps = {
  defaultAddress: '',
};

export default AddressAutocompleteInput;
