import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import handleError from '../../../utils/errorHandler';

import './locationSearchInput.scss';

let GoogleMapsLoader;

class LocationSearchInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      google: false,
      showSuggestion: false,
    };
  }

  componentDidMount() {
    this.loadGoogleMap();
  }

  loadGoogleMap = async () => {
    // eslint-disable-next-line global-require
    GoogleMapsLoader = await require('google-maps');
    const { googleMapsApiToken } = this.props;
    GoogleMapsLoader.KEY = googleMapsApiToken;
    GoogleMapsLoader.LIBRARIES = ['places'];
    GoogleMapsLoader.VERSION = '3.34';
    GoogleMapsLoader.load((google) => this.setState({ google }));
  };

  getAddressResults = (geocode) => new Promise((resolve) => {
    if (geocode && geocode.address_components && geocode.address_components.length) {
      const addressObject = geocode.address_components;
      const postCode = addressObject.find((item) => item.types.indexOf('postal_code') > -1);
      const country = addressObject.find((item) => item.types.indexOf('country') > -1);
      const territory = addressObject.find(
        (item) => item.types.indexOf('administrative_area_level_1') > -1,
      );
      const city = addressObject.find(
        (item) => item.types.indexOf('locality') > -1
          || item.types.indexOf('administrative_area_level_2') > -1,
      );
      const streetName = addressObject.find((item) => item.types.indexOf('route') > -1);
      const streetNumber = addressObject.find((item) => item.types.indexOf('street_number') > -1);

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

  handleChange = (address) => {
    this.setState({ address });
  };

  handleShowSuggestions = () => {
    const { showSuggestion } = this.state;
    this.setState({ showSuggestion: !showSuggestion });
  };

  handleSelect = async (address) => {
    const { onAddressSelected } = this.props;
    this.setState({ address });
    try {
      const results = await geocodeByAddress(address);
      const addressComponent = await this.getAddressResults(results[0]);
      if (onAddressSelected) onAddressSelected(addressComponent);
    } catch (error) {
      handleError(error, `Error ${error}`);
    }
  };

  renderSearch = ({ getInputProps, suggestions, getSuggestionItemProps }) => {
    const {
      inputPlaceholder,
      classNameProp,
    } = this.props;
    const { showSuggestion } = this.state;

    return (
      <div>
        <input
          {...getInputProps({
            placeholder: inputPlaceholder || 'Search Places ...',
            className: classNameProp,
            name: 'address',
            onFocus: this.handleShowSuggestions,
            onBlur: this.handleShowSuggestions,
          })}
        />
        {showSuggestion && (
          <div className="autocomplete-dropdown-container">
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                ? 'suggestion-item suggestion-item--active'
                : 'suggestion-item';
              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                  key={suggestion.key}
                >
                  <span className="suggestion-icon" />
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  render() {
    const { address, google } = this.state;
    const { defaultAddress } = this.props;

    const value = address !== '' ? address : defaultAddress;

    if (google) {
      return (
        <PlacesAutocomplete value={value} onChange={this.handleChange} onSelect={this.handleSelect}>
          {this.renderSearch}
        </PlacesAutocomplete>
      );
    }
    return null;
  }
}

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
  classNameProp: null,
  googleMapsApiToken: null,
};

export default LocationSearchInput;
