import React from 'react';
import Title from 'aime-blueprint/lib/components/title';
import styles from './heroBannerHomepage.module.scss';

const HeroBannerAustralia = () => (
  <div className={styles.heroBannerHomepage}>
    <div className={styles.heroBannerContainer}>
      <div className={styles.bannerWrapper}>
        <Title className={styles.headingLockup} type="headingLockup" theme={process.env.REACT_APP_THEME}>
          Become a
          <strong>mentor</strong>
          today
        </Title>
      </div>
    </div>
  </div>
);

export default HeroBannerAustralia;
