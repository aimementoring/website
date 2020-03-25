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
    bannerWrapperClass={styles.banWrapper}
    bannerContainerClass={styles.heroBannerMentor}
    bannerContentWrapperClass={styles.banContentWrapper}
    copy="Welcome to the world of mentoring"
  />
);

export default HeroBanner;
