import React from 'react';
import styles from './header.module.scss';
import FullScreenMenu from '../fullScreenMenu';
import Logo from './logo';

const StandardHeader = () => (
  <div>
    <div className={styles.siteHeaderContainer}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <FullScreenMenu />
    </div>
  </div>
);

export default StandardHeader;
