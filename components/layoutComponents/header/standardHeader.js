import React from 'react';
import dynamic from 'next/dynamic';
import styles from './header.module.scss';

const Logo = dynamic(() => import('./logo'));
const FullScreenMenu = dynamic(() => import('../fullScreenMenu'));

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
