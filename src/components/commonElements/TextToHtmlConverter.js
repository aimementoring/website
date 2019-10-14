import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class TextToHtmlConverter extends PureComponent {
  static propTypes = {
    elementClassName: PropTypes.string,
    textToHtml: PropTypes.string,
  };

  static defaultProps = {
    elementClassName: '',
  }

  render() {
    const { 
      elementClassName,
      textToHtml,
    } = this.props;

    /* eslint-disable react/no-danger */
    return (
      <div
        className={elementClassName}
        dangerouslySetInnerHTML={{ __html: textToHtml }}
      />
    );
    /* eslint-enable react/no-danger */
  }
}
