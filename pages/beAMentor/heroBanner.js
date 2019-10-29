import React from 'react';
import './beAMentor.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;
const imgStyle = {
  backgroundImage: `url('${ASSETS_URL}/assets/images/banner/Bianca@2x-min.jpg')`,
  backgroundSize: 'cover',
};

const HeroBanner = () => (
  <div className="hero-banner--default hero-banner--history full-width-wrap" style={imgStyle}>
    <div className="flex flex-wrap items-center w100 h100">
      <div className="banner-wrapper subpage-banner center">
        <h1>
          <span className="pre-text">You can be a</span>
          <span className="highlight-text">
            <em className="border-gradient">
              Mentor
              <br />
            </em>
          </span>
          <p className="mt2 pt1 col-8 block mx-auto left-align">
            AIME is always looking for exceptional humans to step up and be the change
          </p>
        </h1>
      </div>
    </div>
  </div>
);

export default HeroBanner;
