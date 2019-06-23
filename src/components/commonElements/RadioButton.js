import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './RadioButton.scss';

export default class RadioButton extends PureComponent {
  static propTypes = {
    elementClassName: PropTypes.string,
    inputName: PropTypes.string,
    onChangeFunction: PropTypes.func,
    checkboxClassName: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string,
    })),
    value: PropTypes.string,
  };

  static defaultProps = {
    elementClassName: '',
    value: null,
    // eslint-disable-next-line no-unused-vars
    onChangeFunction: (name, value) => { },
    checkboxClassName: 'custom-radio custom-radio--default',
  }

  state ={
    checkboxValue: true,
  }

  handleFieldChange = (e) => {
    const { onChangeFunction, inputName } = this.props;
    onChangeFunction(inputName, e.target.value);
  }

  render() {
    const {
      elementClassName,
      inputName,
      value,
      checkboxClassName,
      options,
    } = this.props;

    return (
      <div className={`${elementClassName} ${checkboxClassName}`}>
        {options.map(item => (
          <div key={item.value} className="mt2">
            <input
              id={item.value}
              type="radio"
              name={inputName}
              value={item.value}
              checked={item.value === value}
              onChange={this.handleFieldChange}
            />
            <label htmlFor={item.value}>{item.text}</label>
          </div>
        ))}
      </div>
    );
  }
}
