import React from 'react';
import { Link } from 'react-router-dom';
import styles from './logo.module.scss';

const Logo = () => (
  <Link className={styles.logoWrapper} to="/">
    <svg className={styles.iconAimeLogo} >
      <use xlinkHref="#icon-aime-logo" />
    </svg>
  </Link>
);

export default Logo;
