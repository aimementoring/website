import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class SelectInput extends PureComponent {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    elementClassName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    options: PropTypes.array.isRequired,
    onChangeFunction: PropTypes.func,
  };

  static defaultProps = {
    // eslint-disable-next-line no-unused-vars
    onChangeFunction: (name, value) => { },
  };

  handleChange = (e) => {
    this.props.onChangeFunction(this.props.name, e.target.value)
  }

  render() {
    const { 
      placeholder, 
      elementClassName, 
      name, 
      required, 
      options, 
    } = this.props;

    return (
      <div className={elementClassName}>
        <select 
          className="input" 
          name={name} 
          onChange={this.handleChange} 
          required={required}>
          <option value="" disabled="">{placeholder}</option>
          {options.map((element) => <option key={element.value} value={element.value}>{element.label}</option>
          )}
        </select>
      </div>

    );
  }
}
