import React from 'react';
import PropTypes from 'prop-types';
import Input from 'aime-blueprint/lib/components/input';
import CountrySelector from 'aime-blueprint/lib/components/countrySelector';
import AddressAutocompleteInput from '../addressAutocompleteInput';

const LocationSectionForm = ({
  onAddressSelected,
  locationError,
  streetNumber,
  streetName,
  postCode,
  territory,
  city,
  handleFieldChange,
  countryAddress,
}) => (
  <>
    <div className="sm-col sm-col-12 md-col-12 o7-r o7-b clearfix">
      <AddressAutocompleteInput
        placeholder="Start typing your address..."
        onAddressSelected={onAddressSelected}
        classNameProp="input js-autocomplete-address"
      />
      <div>
        {locationError && (
          <p className="error-message">
            Oh no! Sorry looks like we’re not accepting
            applications from this country yet
          </p>
        )}
      </div>
    </div>
    <div className="sm-col sm-col-6 md-col-6 o7-r o7-b">
      <Input
        theme={process.env.REACT_APP_THEME}
        type="text"
        className="input"
        placeholder="Unit Number"
        name="unit_number"
      />
    </div>

    <div className="sm-col sm-col-6 md-col-6 o7-r o7-b">
      <Input
        theme={process.env.REACT_APP_THEME}
        type="text"
        className="input"
        placeholder="Street number"
        name="street_number"
        value={streetNumber}
        onChange={handleFieldChange('streetNumber')}
      />
    </div>

    <div className="sm-col sm-col-12 md-col-12 o7-r o7-b">
      <Input
        theme={process.env.REACT_APP_THEME}
        type="text"
        className="input"
        placeholder="Street name"
        name="street_name"
        value={streetName}
        onChange={handleFieldChange('streetName')}
        required
      />
    </div>

    <div className="sm-col sm-col-6 md-col-6 o7-r o7-b">
      <Input
        theme={process.env.REACT_APP_THEME}
        type="text"
        className="input"
        placeholder="Postcode"
        name="postcode"
        value={postCode}
        onChange={handleFieldChange('postCode')}
        required
      />
    </div>

    <div className="sm-col sm-col-6 md-col-6 o7-r o7-b">
      <Input
        theme={process.env.REACT_APP_THEME}
        type="text"
        className="input"
        placeholder="State/Territory"
        name="state"
        value={territory}
        onChange={handleFieldChange('territory')}
        required
      />
    </div>

    <div className="sm-col sm-col-6 md-col-6 o7-r o7-b">
      <Input
        theme={process.env.REACT_APP_THEME}
        type="text"
        className="input"
        placeholder="City"
        name="city"
        value={city}
        onChange={handleFieldChange('city')}
        required
      />
    </div>

    <CountrySelector
      containerClassNames="sm-col sm-col-6 md-col-6 o7-r o7-b"
      placeholder="What country do you live in?"
      classNames="input"
      onChangeFunction={handleFieldChange}
      value={countryAddress}
    />
  </>
);

LocationSectionForm.propTypes = {
  onAddressSelected: PropTypes.func,
  locationError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  streetNumber: PropTypes.string,
  streetName: PropTypes.string,
  postCode: PropTypes.string,
  territory: PropTypes.string,
  city: PropTypes.string,
  countryAddress: PropTypes.string,
  handleFieldChange: PropTypes.func,
};

LocationSectionForm.defaultProps = {
  onAddressSelected: () => {},
  locationError: null,
  streetNumber: '',
  streetName: '',
  postCode: '',
  territory: '',
  city: '',
  countryAddress: null,
  handleFieldChange: () => {},
};

export default LocationSectionForm;
