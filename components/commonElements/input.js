import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  elementClassName,
  className,
  placeholder,
  name,
  required,
  disabled,
  type,
  onChangeFunction,
}) => {
  const handleChange = (e) => {
    onChangeFunction(name, e.target.value);
  };

  return (
    <div className={elementClassName}>
      <input
        className={`${className} input`}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        required={required}
        type={type}
        disabled={disabled}
      />
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  elementClassName: PropTypes.string.isRequired,
  onChangeFunction: PropTypes.func,
  disabled: PropTypes.string,
};

Input.defaultProps = {
  required: false,
  onChangeFunction: () => {},
  disabled: '',
  className: '',
};

export default Input;
