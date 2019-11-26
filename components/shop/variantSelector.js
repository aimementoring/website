import React from 'react';
import PropTypes from 'prop-types';

const VariantSelector = ({ option, handleOptionChange }) => (
  <select
    className="Product__option"
    name={option.name}
    key={option.name}
    onChange={handleOptionChange}
  >
    {option.values.map((value) => (
      <option value={value} key={`${option.name}-${value}`}>{`${value}`}</option>
    ))}
  </select>
);

VariantSelector.propTypes = {
  option: PropTypes.shape({
    name: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  handleOptionChange: PropTypes.func.isRequired,
};

export default VariantSelector;
