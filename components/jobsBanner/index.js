import React from 'react';

const JobsBanner = () => (
  <div className="hero-banner--default hero-banner--jobs full-width-wrap">
    <div className="flex flex-wrap items-center full-height">
      <div className="banner-wrapper subpage-banner center pt3">
        <h1>
          <span className="pre-text">AIME</span>
          <span className="highlight-text">
            <em>
              Jobs
              <br />
            </em>
          </span>
          <span className="sm-col-2 mx-auto block pt1 border-bottom border-gradient" />
        </h1>
      </div>
      <div className="wrap mx-auto center c-white pb4">
        <p className="bold feature-font-family pb2 mx-auto sm-col-8">
          We ranked 12th best place to work in Asia for 2016. Check below to find out why.
        </p>
      </div>
    </div>
  </div>
);

export default JobsBanner;
