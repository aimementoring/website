import React from 'react';
import PropTypes from 'prop-types';
import Anchor from '../common/link';
import VideoButton from '../videoButton';
import './index.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const HeroBannerHomepageUSA = () => (
  <div>
    <div className="hero-banner--homepage-us full-width-wrap">
      <div className="hero-banner--inner banner-wrapper">
        <div className="flex-column">
          <h1>
            <span className="highlight-text highlight-text-straight">
              <em>
                If not you…
                <br />
                then who?
              </em>
            </span>
          </h1>
          <div className="home-hero-sub-text">
            <h1 className="f-20 mb2 lh-small c-white">
              The Hooded Scholar
            </h1>
            <p>
              <Anchor to="/hooded-scholar" className="basic-btn c-white bg-transparent border mt2 mb3">
                Apply
              </Anchor>
            </p>
            <p className="f-16 light c-white">
              {`For the first time ever, we’re offering the chance for 200 US College students to
              have the chance to become "The Hooded Scholar" and lead a mentoring movement out of
              their campus to lift kids out of inequality. Click the button to learn about and
              apply for the scholarship. If you are not a college student yourself scroll on down
              for other options.`}
            </p>
          </div>
        </div>
        <div className="flex-column">
          <VideoButton
            video="https://player.vimeo.com/external/291824681.m3u8?s=72b6495e46fda3de6fe84bd1a158fed3c311716c"
          />
          <div className="mt1 pb4 pt2 flex items-center video-button rounded col-12">
            <svg className="icon icon-play">
              <use xlinkHref="#icon-play" />
            </svg>
            <div className="center mx-auto p2">
              <h3>Message from Jack</h3>
              <p className="f-16">AIME Founder &amp; CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HeroBannerHomepageAustralia = () => (
  <div>
    <div className="hero-banner--homepage full-width-wrap">
      <div className="flex items-center">
        <div className="banner-wrapper flex-column">
          <div className="banner-content-wrap">
            <div className="img-wrap flex logo-nnc">
              <img src={`${ASSETS_URL}/assets/images/no-new-clothes/RECLAIMED_logo_white.png`} alt="Reclaimed" />
            </div>
          </div>
          <a
            className="basic-btn bold bg-brand-primary c-white hero-btn-btm-right"
            href="https://shop.aimementoring.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CHECK IT OUT
          </a>
        </div>
      </div>
    </div>
  </div>
);

const HeroBannerHomepage = ({ currentSite }) => (
  currentSite === 'us' || currentSite === 'global'
    ? <HeroBannerHomepageUSA />
    : <HeroBannerHomepageAustralia />
);

HeroBannerHomepage.propTypes = {
  currentSite: PropTypes.string.isRequired,
};

export default HeroBannerHomepage;
