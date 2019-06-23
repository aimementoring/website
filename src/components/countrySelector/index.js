import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { countryCollection } from '../../utils/country';
import './index.scss';

export default class CountrySelector extends Component {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    classNames: PropTypes.string,
    containerClassNames: PropTypes.string,
    onChangeFunction: PropTypes.func,
    value: PropTypes.string,
  };

  static defaultProps = {
    onChangeFunction: () => { },
    value: '',
  };

  state = {
    countries: [],
  }

  componentDidMount() {
    const countries = countryCollection();
    this.setState({ countries });
  }

  render() {
    const { countries } = this.state;
    const {
      classNames,
      placeholder,
      onChangeFunction,
      containerClassNames,
    } = this.props;
    let { value } = this.props;
    if (!value || !countries.find(country => country.text === value)) {
      value = '';
    }

    return (
      <div className={`${containerClassNames} select-container`}>
        <select
          placeholder={placeholder}
          name="country-name"
          className={classNames}
          onChange={onChangeFunction('countryAddress')}
          value={value}
          required>
          <option value="" disabled>
            {placeholder}
          </option>
          {countries.length &&
            countries.map((country) => (
              <option
                key={`country-name-${country.text}`}
                disabled={country.disabled}>
                {country.text}
              </option>
            ))}
        </select>
      </div>
    );
  }
}
