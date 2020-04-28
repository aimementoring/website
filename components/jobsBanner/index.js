import React from 'react';
import styles from './jobsBanner.module.scss';
import { SimpleBanner } from '../banner/index';

const JobsBanner = () => (
  <SimpleBanner
    title={(
      <>
        Work
        <strong>With us</strong>
      </>
    )}
    groovy
    titleType="headingLockup"
    titleStyleClass={styles.bannerHeadingPositions}
    bannerContainerClass={styles.jobsBanner}
    bannerWrapperClass={styles.bannerWrapper}
    bannerContentWrapperClass={styles.bannerContentWrapper}
  />
);

export default JobsBanner;
