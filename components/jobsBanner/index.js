import Title from 'aime-blueprint/lib/components/title';
import React from 'react';

const JobsBanner = () => (
  <div className="hero-banner--default hero-banner--jobs full-width-wrap">
    <div className="flex flex-wrap items-center full-height">
      <div className="banner-wrapper subpage-banner center pt3">
        <Title type="headingLockup" className="bannerHeadingPositions" theme={process.env.REACT_APP_THEME}>
          Work
          <strong>With us</strong>
        </Title>
      </div>
    </div>
  </div>
);

export default JobsBanner;
