import React from 'react';
import PropTypes from 'prop-types';

const TextToHtmlConverter = ({ elementClassName, textToHtml }) => (
  // eslint-disable-next-line react/no-danger
  <div className={elementClassName} dangerouslySetInnerHTML={{ __html: textToHtml }} />
);

TextToHtmlConverter.propTypes = {
  elementClassName: PropTypes.string,
  textToHtml: PropTypes.string,
};

TextToHtmlConverter.defaultProps = {
  elementClassName: '',
  textToHtml: '',
};

export default TextToHtmlConverter;
