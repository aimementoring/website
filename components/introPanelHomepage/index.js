import React from 'react';
import dynamic from 'next/dynamic';
import { Components } from 'aime-blueprint';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import './index.scss';

const VideoButton = dynamic(() => import('../videoButton'));

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const {
  Title,
  Button,
} = Components;

const IntroPanelHomepage = () => (
  <div className="full-width-wrap content-panel home-intro-panel">
    <div className="lg-wrap sm-col-12 md-col-10 mx-auto">
      <div className="home-intro-panel--inner">
        <div className="sm-col-12 sm-col-6 pr2 home-intro-panel-inner-content">
          <Title type="headingLockup">
            If not you...
            <strong>Then who?</strong>
          </Title>
          <div className="intro-sub-text">
            <Paragraph>
              Want to change the world? We&apos;re always recruiting mentors.&nbsp;
              <mark>RIGHT NOW</mark>
              &nbsp;we&apos;re&nbsp;
              gearing up for focused campaigns in Australia, Uganda, South Africa and Nigeria.
              We are also activly recruiting in the USA! Join forces with AIME and together,
              we&apos;ll shape a fairer world.
            </Paragraph>
            <Button theme="rainbow" aria-label="cta" type="link" url="/be-a-mentor">
              Be a mentor
            </Button>
          </div>
        </div>
        <div className="sm-col-12 sm-col-6">
          <div className="intro-video-wrap">
            <VideoButton
              video="https://player.vimeo.com/external/326229385.m3u8?s=ccd4312c26f7981d8bcac17bb0bfd10584cfc150"
            />
            <div className="video-banner flex block rounded mx-auto">
              <div className="video-banner-overlay center">
                <img alt="" className="center mx-auto mt2" style={{ width: '70px' }} src={`${ASSETS_URL}/assets/images/play-btn-white.svg`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default IntroPanelHomepage;
