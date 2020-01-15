import React from 'react';
import dynamic from 'next/dynamic';
import { Components } from 'aime-blueprint';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import './index.scss';

const VideoButton = dynamic(() => import(/* webpackChunkName 'VideoButton' */ '../videoButton'));

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const {
  Title,
  Button,
} = Components;

const IntroPanelHomepage = () => (
  <div className="full-width-wrap content-panel home-intro-panel">
    <div className="lg-wrap sm-col-12 md-col-10 mx-auto">
      <div className="home-intro-panel--inner">
        <div className="sm-col-12 sm-col-6 pr2">
          <Title type="headingLockup">
            If not you...
            <strong>Then who?</strong>
          </Title>
          <div className="intro-sub-text">
            <Paragraph>
              Want to change the world? We&apos;re recruiting mentors
              across Australia, Uganda and South Africa
              <mark> RIGHT NOW! </mark>
              That could be you! Join forces with AIME and together, we&apos;ll shape
              a brighter future and lift kids out of inequality. Click the button
              to learn more about becoming a mentor. And if you&apos;re in the USA or
              Nigeria, look out - we&apos;re coming for you real real soon.
            </Paragraph>
            <Button theme="rainbow" aria-label="cta" type="link" url="/beAMentor">
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
                <h3>This could be you</h3>
                <p>Watch what it means to be an AIME Mentor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default IntroPanelHomepage;
