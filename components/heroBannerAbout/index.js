import React from 'react';
import Title from 'aime-blueprint/lib/components/title';
import styles from './heroBannerAbout.module.scss';

const HeroBannerAbout = () => (
  <div className={styles.heroBannerAbout}>
    <div className={styles.heroBannerAboutContent}>
      <div className={styles.bannerWrapper}>
        <div className={styles.bannerContent}>
          <Title type="headingLockup" className={styles.bannerHeader} theme={process.env.REACT_APP_THEME}>
            We're a worldwide
            <strong>
              Social
              <br />
              Movement
            </strong>
            for a fairer world
          </Title>
        </div>
      </div>
    </div>
  </div>
);

export default HeroBannerAbout;
