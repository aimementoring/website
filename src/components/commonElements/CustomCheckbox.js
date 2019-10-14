import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './CustomCheckbox.scss';

export default class CustomCheckbox extends PureComponent {
  static propTypes = {
    elementClassName: PropTypes.string,
    labeltext: PropTypes.string,
    inputName: PropTypes.string,
    customId: PropTypes.string,
    onChangeFunction: PropTypes.func,
    value: PropTypes.bool,
  };

  static defaultProps = {
    elementClassName: '',
    value: false,
    // eslint-disable-next-line no-unused-vars
    onChangeFunction: (name, value) => { },
  }

  state ={
    checkboxValue: true,
  }

  handleFieldChange = (e) => {
    e.preventDefault();
    const { onChangeFunction, inputName, value } = this.props;
    onChangeFunction(inputName, !value);
  }

  render() {
    const {
      elementClassName,
      labeltext,
      inputName,
      customId,
      value,
    } = this.props;

    return (
      <div
        className={`${elementClassName} custom-checkbox custom-checkbox--default`}
        onClick={this.handleFieldChange}>
        <input type="hidden" name={inputName} value="no" />
        <input
          id={customId}
          type="checkbox"
          className="hide"
          name={inputName}
          value="yes"
          checked={value}
          readOnly />
        <label htmlFor={customId}>
          {labeltext}
        </label>
      </div>
    );
  }
}
