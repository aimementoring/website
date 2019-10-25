import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-select';

const Select = ({
  onChangeFunction,
  name,
  withGroups,
  options,
  value,
  placeholder,
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
  error,
}) => {
  const handleChange = (inputValue) => {
    if (inputValue) {
      const newValue = inputValue.length
        ? inputValue.map((identification) => identification.value)
        : inputValue.value;
      onChangeFunction(name, newValue);
    }
  };

  const getValue = () => {
    if (!withGroups) {
      return value && options.filter((option) => option.value === value);
    }
    let result = null;
    for (let i = 0; i < options.length; i + 1) {
      const group = options[i];
      const selectedOption = group.options.find((option) => option.value === value);
      if (selectedOption) {
        result = selectedOption;
        break;
      }
    }
    return result;
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      maxHeight: '60px',
      borderColor: error ? borderColorInError : borderColor,
      boxShadow: state.isFocused ? null : null,
      '&:hover': {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? borderColorInFocus : borderColor,
      },
      '&:focus': {
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
    singleValue: (base) => ({
      ...base,
      ...styles.singleValue,
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
      width: '100%',
      ...styles.menu,
    }),
    menuList: (base) => ({
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
      onChange={handleChange}
      options={options}
      value={getValue()}
      isMulti={isMulti}
      isClearable={isClearable}
      isDisabled={disabled}
      isSearchable={searchable}
      isOptionDisabled={(option) => option.disabled}
      joinValues={joinValues}
      defaultValues={defaultValues}
    />
  );
};

const OptionType = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

Select.propTypes = {
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      ...OptionType,
      options: PropTypes.shape(OptionType),
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

Select.defaultProps = {
  onChangeFunction: () => { },
  className: '',
  isMulti: false,
  error: false,
  isClearable: false,
  disabled: false,
  searchable: true,
  value: null,
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

export default Select;
