import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getGlobalVariables } from '../../services/craftAPI';
import LocationSearchInput from './locationSearchInput';

export default class AddressAutocompleteInput extends PureComponent {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    onAddressSelected: PropTypes.func.isRequired,
    classNameProp: PropTypes.string.isRequired,
    defaultAddress: PropTypes.string,
  };

  state = {
    countries: [],
  }

  componentDidMount() {
    getGlobalVariables().then(data => this.setState({ 
      apiKey: data.filestackApiKey, 
      googleMapsApiToken: data.googleMapsApiToken, 
    }));
  }

  render() {
    const { placeholder, onAddressSelected, classNameProp, defaultAddress } = this.props;
    const { googleMapsApiToken } = this.state;

    return (
      <React.Fragment>
        {googleMapsApiToken && 
        <LocationSearchInput
          defaultAddress={defaultAddress || ''}
          inputPlaceholder={placeholder}
          onAddressSelected={onAddressSelected}
          googleMapsApiToken={googleMapsApiToken}
          classNameProp={classNameProp} />}
      </React.Fragment>
    );
  }
}
