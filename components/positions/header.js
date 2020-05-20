import React from 'react';
import { SimpleBanner } from '../banner/index';
import styles from './header.module.scss';

const Header = () => (
  <SimpleBanner
    title={(
      <>
        Work with
        <strong>
          AIME
        </strong>
      </>
    )}
    titleType="headingLockup"
    titleStyleClass={styles.headingJobsSingle}
    bannerContainerClass={styles.positionsBannerContainer}
    bannerWrapperClass={styles.positionsBannerWrapper}
    bannerContentWrapperClass={styles.positionsBannerContentWrapper}
    bannerContentClass="bannerContent"
  />
);

export default Header;
