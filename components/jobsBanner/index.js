import React from 'react';
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
    titleStyleClass="bannerHeadingPositions"
    bannerContainerClass="hero-banner--default hero-banner--jobs full-width-wrap"
    bannerWrapperClass="flex flex-wrap items-center full-height"
    bannerContentWrapperClass="banner-wrapper subpage-banner center pt3"
  />
);

export default JobsBanner;
