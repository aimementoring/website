import React from 'react';
import Title from 'aime-blueprint/lib/components/title';
import styles from './footerBanner.module.scss';

const FooterBanner = () => (
  <div className={styles.footerBannerContainer}>
    <div className={styles.footerBannerWrapper}>
      <div className={styles.bannerWrapper}>
        <div className={styles.center}>
          <Title className={styles.headingLockup} type="headingLockup" theme={process.env.REACT_APP_THEME}>
            <strong>Imagine</strong>
            What&apos;s possible
          </Title>
        </div>
      </div>
    </div>
  </div>
);

export default FooterBanner;
