import React from 'react';
import { Components } from 'aime-blueprint';
import styles from './heroBannerHomepage.module.scss';

// const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const {
  Title,
} = Components;

const HeroBannerAustralia = () => (
  <div className={styles.heroBannerHomepage}>
    <div className={styles.heroBannerContainer}>
      <div className={styles.bannerWrapper}>
        <Title className={styles.featureLockup} type="headingLockup">
          Become a
          <strong>mentor</strong>
          today
        </Title>
      </div>
    </div>
  </div>
);

export default HeroBannerAustralia;
