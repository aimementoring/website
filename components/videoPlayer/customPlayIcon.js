import React from 'react';
import PropTypes from 'prop-types';

const CustomPlayIcon = ({ withModal, onClick, stylesPlayButton }) => {
  const iconProps = {
    src: `${process.env.REACT_APP_ASSETS_URL}/assets/images/play-btn-white.svg`,
  };
  if (withModal) {
    iconProps.className = stylesPlayButton;
    iconProps.onClick = onClick;
  }
  return <img alt="Play" {...iconProps} />;
};

CustomPlayIcon.propTypes = {
  withModal: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  stylesPlayButton: PropTypes.string.isRequired,
};

CustomPlayIcon.defaultProps = {
  withModal: false,
};

export default CustomPlayIcon;
