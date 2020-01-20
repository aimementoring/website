import React from 'react';
import Title from 'aime-blueprint/lib/components/title';
import styles from './heroBannerAbout.module.scss';

const HeroBannerAbout = () => (
  <div className={styles.heroBannerAbout}>
    <div className={styles.heroBannerAboutContent}>
      <div className={styles.bannerWrapper}>
        <Title type="headingLockup" className={styles.bannerHeader} theme={process.env.REACT_APP_THEME}>
          We build
          <strong>
            Mentoring
            <br />
            Bridges
          </strong>
          between universities
          <br />
          and schools
        </Title>
      </div>
    </div>
  </div>
);

export default HeroBannerAbout;
