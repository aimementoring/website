import React from 'react'
import './index.scss'

const HeroBannerAbout = () => (
  <React.Fragment>
    <div className="hero-banner--about full-width-wrap">
      <div className="flex flex-wrap items-center">
        <div className="banner-wrapper">
          <h1>
            <span className="pre-text">We build</span>
            <span className="highlight-text m3">
              <em>
                Mentoring
                <br />
                <span className="scratch-underline">&nbsp;</span>
              </em>
              <br />
              <em>
                Bridges
                <br />
                <span className="scratch-underline">&nbsp;</span>
              </em>
            </span>
            <span className="post-text right right-align"><span className="pr3">between universities</span><br /><span>and schools</span></span>
          </h1>
        </div>
      </div>
    </div>
  </React.Fragment>
)

export default HeroBannerAbout
