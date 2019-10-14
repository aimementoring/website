import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class TextAreaInput extends PureComponent {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    elementClassName: PropTypes.string.isRequired,
  };

  render() {
    const {
      elementClassName,
      placeholder,
      name,
      required,
    } = this.props;

    return (
      <div className={elementClassName}>
        <textarea className="input" 
          placeholder={placeholder}
          name={name}
          required={required || false} />
      </div>
    );
  }
}
