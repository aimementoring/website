import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import handleError from '../../../utils/errorHandler';
import SearchInput from './searchInput';

let GoogleMapsLoader;

const LocationSearchInput = ({ googleMapsApiToken, onAddressSelected, inputPlaceholder, classNameProp, defaultAddress }) => {
  const [address, setAddress] = useState('');
  const [google, setGoogle] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const loadGoogleMap = async () => {
    GoogleMapsLoader = await require('google-maps');
    GoogleMapsLoader.KEY = googleMapsApiToken;
    GoogleMapsLoader.LIBRARIES = ['places'];
    GoogleMapsLoader.VERSION = '3.34';
    GoogleMapsLoader.load(value => setGoogle(value));
  };

  useEffect(() => {
    loadGoogleMap();
  });

  const getAddressResults = geocode => {
    return new Promise(resolve => {
      if (geocode && geocode.address_components && geocode.address_components.length) {
        const addressObject = geocode.address_components;
        const postCode = addressObject.find(item => item.types.indexOf('postal_code') > -1);
        const country = addressObject.find(item => item.types.indexOf('country') > -1);
        const territory = addressObject.find(item => item.types.indexOf('administrative_area_level_1') > -1);
        const city = addressObject.find(item => (item.types.indexOf('locality') > -1) || (item.types.indexOf('administrative_area_level_2') > -1));
        const streetName = addressObject.find(item => item.types.indexOf('route') > -1);
        const streetNumber = addressObject.find(item => item.types.indexOf('street_number') > -1);

        resolve({
          postCode: postCode ? postCode.long_name : '',
          address: geocode.formatted_address,
          countryCode: country ? country.short_name : '',
          country: country ? country.long_name : '',
          city: city ? city.long_name : '',
          territory: territory ? territory.long_name : '',
          streetName: streetName ? streetName.long_name : '',
          streetNumber: streetNumber ? streetNumber.long_name : '',
        });
      } else {
        resolve(null);
      }
    });
  };

  const handleChange = value => {
    setAddress(value);
  };

  const handleShowSuggestions = () => {
    setShowSuggestion(!showSuggestion);
  };

  const handleSelect = value => {
    setAddress(value);
    geocodeByAddress(value)
      .then(results => getAddressResults(results[0]))
      .then(addressComponent => {
        if (onAddressSelected) onAddressSelected(addressComponent);
      })
      .catch(error => handleError(error, `Error ${error}`));
  };

  const renderSearch = ({ getInputProps, suggestions, getSuggestionItemProps }) => (
    <SearchInput
      getInputProps={getInputProps}
      suggestions={suggestions}
      getSuggestionItemProps={getSuggestionItemProps}
      inputPlaceholder={inputPlaceholder}
      classNameProp={classNameProp}
      handleShowSuggestions={handleShowSuggestions}
      showSuggestion={showSuggestion}
    />
  );

  const value = address !== '' ? address : defaultAddress;

  if (google) {
    return (
      <PlacesAutocomplete
        value={value}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {renderSearch}
      </PlacesAutocomplete>
    );
  } else {
    return null;
  }
};

LocationSearchInput.propTypes = {
  onAddressSelected: PropTypes.func,
  inputPlaceholder: PropTypes.string,
  defaultAddress: PropTypes.string,
  classNameProp: PropTypes.string,
  googleMapsApiToken: PropTypes.string,
};

LocationSearchInput.defaultProps = {
  onAddressSelected: null,
  inputPlaceholder: null,
  defaultAddress: '',
};

export default LocationSearchInput;
