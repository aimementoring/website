import React from 'react';

const VariantSelector = ({ option, handleOptionChange }) => (
  <select
    className="Product__option"
    name={option.name}
    key={option.name}
    onChange={handleOptionChange}
  >
    {option.values.map(value => (
      <option value={value} key={`${option.name}-${value}`}>{`${value}`}</option>
    ))}
  </select>
);

export default VariantSelector;
