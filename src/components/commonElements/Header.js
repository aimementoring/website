import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Header extends PureComponent {
  static propTypes = {
    elementClassName: PropTypes.string,
    headerClassName: PropTypes.string, 
    headerText: PropTypes.string.isRequired,
  };

  static defaultProps = {
    elementClassName: '',
    headerClassName: '',
  }

  render() {
    const { 
      elementClassName,
      headerClassName,
      headerText,
    } = this.props;

    return (
      <div 
        className={elementClassName}>
        <h4 className={headerClassName}>
          {headerText}
        </h4>
      </div>
    );
  }
}
