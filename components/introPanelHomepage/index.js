import React from 'react'
import Anchor from '../common/link';
import { getAssetsBaseUrl } from '../../services/craftAPI'
import VideoButton from '../videoButton'
import './index.scss'

const assetsUrl = getAssetsBaseUrl()
const IntroPanelHomepage = () => (
  <div className="bg-darkest-purple full-width-wrap content-panel home-intro-panel">
    <div className="lg-wrap sm-col-12 md-col-10 mx-auto">
      <div className="home-intro-panel--inner">
        <div className="sm-col-12 sm-col-6 pr2">
          <h1 className="intro-subheading mb3">
            <span className="highlight-text highlight-text-straight highlight-text--second-panel">
              <em>
                If not you… <br />
                then who?
              </em>
            </span>
          </h1>
          <div className="intro-sub-text">
            <p className="f-16 light c-white">
              Want to change the world? We're recruiting mentors across Australia, Uganda and South Africa <strong>RIGHT NOW!</strong>  That could be you! Join forces with AIME and together, we'll shape a brighter future and lift kids out of inequality. 
              Click the button to learn more about becoming a mentor. And if you're in the USA or Nigeria, look out - we're coming for you real <em>real</em> soon. 
            </p>
            <p><Anchor to="/be-a-mentor" className="basic-btn bold bg-brand-primary c-white my3">Be a mentor</Anchor></p>
          </div>
        </div>
        <div className="sm-col-12 sm-col-6">
          <div className="intro-video-wrap">
            <VideoButton
              video="https://player.vimeo.com/external/326229385.m3u8?s=ccd4312c26f7981d8bcac17bb0bfd10584cfc150" />
            <div className="video-banner flex block rounded mx-auto">
              <div className="video-banner-overlay center">
                <img alt="" className="center mx-auto mt2" style={{ width: '70px' }} src={`${assetsUrl}/assets/images/play-btn-white.svg`} />
                <h3>This could be you</h3>
                <p>Watch what it means to be an AIME Mentor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default IntroPanelHomepage
