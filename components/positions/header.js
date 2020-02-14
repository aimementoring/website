import React from 'react';
import Title from 'aime-blueprint/lib/components/title';

const Header = () => (
  <div className="hero-banner--default hero-banner--jobs full-width-wrap job-hero">
    <div className="flex flex-wrap items-center full-height">
      <div className="banner-wrapper subpage-banner center">
        <div className="bannerContent">
          <Title type="headingLockup" className="headingJobsSingle" theme={process.env.REACT_APP_THEME}>
            Work with
            <strong>
              AIME
            </strong>
          </Title>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
