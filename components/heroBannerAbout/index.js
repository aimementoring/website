import React from 'react';
import Title from 'aime-blueprint/lib/components/title';
import MovingWaves from '../movingWaves';
import styles from './heroBannerAbout.module.scss';

const HeroBannerAbout = () => (
  <div className={styles.heroBannerAbout}>
    <div className={styles.heroBannerAboutContent}>
      <MovingWaves />
      <div className={styles.bannerWrapper}>
        <div className={styles.bannerContent}>
          <Title type="headingLockup" className={styles.bannerHeader} theme={process.env.REACT_APP_THEME}>
            {'We\'re a worldwide'}
            <strong>
              Imagination
              <br />
              Factory
            </strong>
          </Title>
        </div>
      </div>
    </div>
  </div>
);

export default HeroBannerAbout;
