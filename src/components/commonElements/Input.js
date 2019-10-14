import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Input extends PureComponent {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    type: PropTypes.string.isRequired,
    elementClassName: PropTypes.string.isRequired,
    onChangeFunction: PropTypes.func,
    disabled: PropTypes.string,
  };

  static defaultProps = {
    required: false,
    // eslint-disable-next-line no-unused-vars
    onChangeFunction: (name, value) => { },
    disabled: '',
  }

  handleChange = (e) => {
    this.props.onChangeFunction(this.props.name, e.target.value)
  }

  render() {
    const {
      elementClassName,
      placeholder,
      name,
      required,
      disabled,
      type,
    } = this.props;

    return (
      <div className={elementClassName}>
        <input
          className="input"
          placeholder={placeholder}
          name={name}
          onChange={this.handleChange}
          required={required}
          type={type}
          disabled={disabled} />
      </div>
    );
  }
}
