import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Paragraph extends PureComponent {
  static propTypes = {
    elementClassName: PropTypes.string,
    paragraphText: PropTypes.string,
  };

  static defaultProps = {
    elementClassName: '',
  }

  render() {
    const { 
      elementClassName,
      paragraphText,
    } = this.props;

    return (
      <div 
        className={elementClassName}>
        {paragraphText}
      </div>
    );
  }
}
