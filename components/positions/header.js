import React from 'react';
import { SimpleBanner } from '../banner/index';

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
    titleStyleClass="headingJobsSingle"
    bannerContainerClass="hero-banner--default hero-banner--jobs full-width-wrap job-hero"
    bannerWrapperClass="flex flex-wrap items-center full-height"
    bannerContentWrapperClass="banner-wrapper subpage-banner center"
    bannerContentClass="bannerContent"
  />
);

export default Header;
