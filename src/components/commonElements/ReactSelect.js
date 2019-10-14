import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-select';

export default class Select extends PureComponent {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }),
    ).isRequired,
    onChangeFunction: PropTypes.func,
    isMulti: PropTypes.bool,
    error: PropTypes.bool,
    isClearable: PropTypes.bool,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    searchable: PropTypes.bool,
    styles: PropTypes.shape({
      control: PropTypes.shape({}),
      menu: PropTypes.shape({}),
      menuList: PropTypes.shape({}),
      input: PropTypes.shape({}),
      singleValue: PropTypes.shape({}),
    }),
    joinValues: PropTypes.bool,
    defaultValues: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }),
    ),
    borderColor: PropTypes.string,
    borderColorInError: PropTypes.string,
    borderColorInFocus: PropTypes.string,
    withGroups: PropTypes.bool,
  };

  static defaultProps = {
    onChangeFunction: () => { },
    className: '',
    isMulti: false,
    error: false,
    isClearable: false,
    disabled: false,
    searchable: true,
    styles: {
      control: {},
      menu: {},
      menuList: {},
      input: {},
      singleValue: {},
    },
    joinValues: false,
    withGroups: false,
    defaultValues: [],
    borderColor: '#DC143C',
    borderColorInError: '#DC143C',
    borderColorInFocus: '#9013FE',
  };

  handleChange = value => {
    const { onChangeFunction, name } = this.props;
    if (value) {
      const newValue = value.length
        ? value.map(identification => identification.value)
        : value.value;
      onChangeFunction(name, newValue);
    }
  };

  getValue = () => {
    const { withGroups, options, value } = this.props;
    if (!withGroups) {
      return value && options.filter(option => option.value === value);
    } else {
      let result = null;
      for (let i = 0; i < options.length; i++) {
        const group = options[i];
        const selectedOption = group.options.find(option => option.value === value);
        if (selectedOption) {
          result = selectedOption;
          break;
        }
      }
      return result;
    }
  }

  render() {
    const {
      placeholder,
      options,
      className,
      isMulti,
      isClearable,
      disabled,
      searchable,
      styles,
      joinValues,
      defaultValues,
      borderColor,
      borderColorInError,
      borderColorInFocus,
    } = this.props;

    const customStyles = {
      control: (base, state) => ({
        ...base,
        maxHeight: '60px',
        borderColor: this.props.error ? borderColorInError : borderColor,
        boxShadow: state.isFocused ? null : null,
        "&:hover": {
          // Overwrittes the different states of border
          borderColor: state.isFocused ? borderColorInFocus : borderColor,
        },
        "&:focus": {
          // Overwrittes the different states of border
          borderColor: state.isFocused ? borderColorInFocus : borderColor,
        },
        ...styles.control,
      }),
      // Text when you write
      input: (base) => ({
        ...base,
        ...styles.input,
      }),
      // Single value selected
      singleValue: base => ({
        ...base,
        ...styles.singleValue,
      }),
      menu: base => ({
        ...base,
        borderRadius: 0,
        marginTop: 0,
        width: '100%',
        ...styles.menu,
      }),
      menuList: base => ({
        ...base,
        padding: 0,
        ...styles.menuList,
      }),
    };

    return (
      <Dropdown
        placeholder={placeholder}
        className={className}
        styles={customStyles}
        onChange={this.handleChange}
        options={options}
        value={this.getValue()}
        isMulti={isMulti}
        isClearable={isClearable}
        isDisabled={disabled}
        isSearchable={searchable}
        isOptionDisabled={option => option.disabled}
        joinValues={joinValues}
        defaultValues={defaultValues}
      />
    );
  }
}
