import React from 'react';
import { SimpleBanner } from '../banner/index';
import styles from './heroBanner.module.scss';

const HeroBanner = () => (
  <SimpleBanner
    title={(
      <>
        Become a
        <strong>mentor</strong>
      </>
    )}
    titleType="headingLockup"
    titleStyleClass={styles.bannerHeading}
    bannerWrapperClass={styles.bannerWrapper}
    bannerContainerClass={styles.heroBannerMentor}
    groovy
    bannerContentWrapperClass={styles.bannerContentWrapper}
    copy="Welcome to the world of mentoring"
  />
);

export default HeroBanner;
