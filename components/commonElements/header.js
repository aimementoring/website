import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ elementClassName, headerClassName, headerText }) => (
  <div className={elementClassName}>
    <h4 className={headerClassName}>{headerText}</h4>
  </div>
);

Header.propTypes = {
  elementClassName: PropTypes.string,
  headerClassName: PropTypes.string,
  headerText: PropTypes.string.isRequired,
};

Header.defaultProps = {
  elementClassName: '',
  headerClassName: '',
};

export default Header;
