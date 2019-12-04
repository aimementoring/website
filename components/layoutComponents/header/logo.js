import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Anchor from '../../common/link';
import styles from './header.module.scss';

const Logo = ({ isStandard }) => (
  <Anchor className={styles.logoLink} to="/home" as="/">
    <svg className={classNames(styles.iconAimeLogo, {
      [styles.standardLogo]: isStandard,
      [styles.microSiteLogo]: !isStandard,
    })}
    >
      <use xlinkHref="#icon-aime-logo" />
    </svg>
  </Anchor>
);

Logo.propTypes = {
  isStandard: PropTypes.bool,
};

Logo.defaultProps = {
  isStandard: true,
};

export default Logo;
