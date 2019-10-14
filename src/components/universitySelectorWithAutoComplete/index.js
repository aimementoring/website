import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from '../commonElements/ReactSelect';

export default class UniversitySelector extends Component {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    containerClassNames: PropTypes.string,
    onChangeFunction: PropTypes.func,
    name: PropTypes.string.isRequired,
    error: PropTypes.bool,
    isClearable: PropTypes.bool,
    country: PropTypes.string,
    universityOptions: PropTypes.array.isRequired,
    value: PropTypes.string,
    borderColor: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
  };

  defaultProps = {
    isClearable: true,
  }

  static defaultProps = {
    // eslint-disable-next-line no-unused-vars
    onChangeFunction: (name, value) => { },
    error: false,
    isClearable: false,
  };

  state = {
    universities: [],
  }

  getStylesForCountrySelection = () => {
    return {
      control: {
        background: this.props.backgroundColor,
      },
      input: {
        color: '#7603DB',
      },
      singleValue: {
        color: '#7603DB',
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
    }
  }

  render() {
    const { 
      placeholder, 
      containerClassNames, 
      onChangeFunction,
      name,
      error,
      isClearable,
      universityOptions,
      country,
      value,
      borderColor,
      backgroundColor,
    } = this.props;
    const universitiesWithCountry = 
      universityOptions.filter(university => (!country || country === university.country));
    const universities = [
      { value: 'I can’t find my university/college here', label: 'I can’t find my university/college here' }, 
      ...universitiesWithCountry,
    ];
    
    return (
      <div>
        {universityOptions && universityOptions.length && 
        <Select
          name={name}
          placeholder={placeholder} 
          className={containerClassNames}
          onChangeFunction={onChangeFunction}
          options={universities}
          error={error}
          isClearable={isClearable}
          value={value}
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          color="#DA0DFF"
          styles={this.getStylesForCountrySelection()}
        />}
      </div>
    );
  }
}
