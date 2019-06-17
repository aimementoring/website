import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import VideoButton from '../videoButton';
import './index.scss';

class HeroBannerHomepage extends Component {
  renderUSA() {
    return (
      <div>
        <div className="hero-banner--homepage-us full-width-wrap">
          <div className="hero-banner--inner banner-wrapper">
            <div className="flex-column">
              <h1>
                {/* <span className="pre-text">Welcome to</span> */}
                <span className="highlight-text highlight-text-straight">
                  <em>
                    If not you… <br />
                    then who?
                  </em>
                </span>
              </h1>
              <div className="home-hero-sub-text">
                <h1 className="f-20 mb2 lh-small c-white">
                  The Hooded Scholar
                </h1>
                <p><Link to="/hooded-scholar" className="basic-btn c-white bg-transparent border mt2 mb3">Apply</Link></p>
                <p className="f-16 light c-white">
                  For the first time ever, we’re offering the chance for 200 US College students to have the chance to become "The Hooded Scholar" and lead a mentoring movement out of their campus to lift kids out of inequality. Click the button to learn about and apply for the scholarship. If you are not a college student yourself scroll on down for other options.
                </p>
              </div>
            </div>
            <div className="flex-column">
              <VideoButton video="https://player.vimeo.com/external/291824681.m3u8?s=72b6495e46fda3de6fe84bd1a158fed3c311716c" />
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
  }

  renderAustralia() {
    return (
      <div>
        <div className="hero-banner--homepage full-width-wrap">
          <div className="flex items-center">
            <div className="banner-wrapper flex-column">
              <h1>
                <span className="highlight-text">
                  <em className="highlight-med">Carry </em><br />
                  <em className="highlight-sml">the </em><br />
                  <em className="highlight-lge">voice</em>
                  {/* <span className="scratch-underline">&nbsp;</span> */}
                </span>
              </h1>
              <div className="home-hero-sub-text center">
                <h1 className="f-20 lh-small c-white">
                  The 2019 Hoodie has landed
                </h1>
                <p><a href="https://shop.aimementoring.com/products/unity-and-kindness-hoodie" target="_blank" className="basic-btn bold bg-brand-primary c-white my3">Check it out</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { currentSite } = this.props;
    if (currentSite === "us" || currentSite === "global") {
      return this.renderUSA();
    } else {
      return this.renderAustralia();
    }
  }
}

HeroBannerHomepage.propTypes = {
  currentSite: PropTypes.string.isRequired,
};

export default HeroBannerHomepage;
