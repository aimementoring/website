import React from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Button from 'aime-blueprint/lib/components/button';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import './index.scss';

const VideoButton = dynamic(() => import('../videoButton'));

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const IntroPanelHomepage = () => (
  <div className="full-width-wrap content-panel home-intro-panel">
    <div className="lg-wrap sm-col-12 md-col-10 mx-auto">
      <div className="home-intro-panel--inner">
        <div className="sm-col-12 sm-col-6 pr2 home-intro-panel-inner-content">
          <Title type="headingLockup">
            <strong>
              Hey <span>there!</span>
            </strong>
          </Title>
          <div className="intro-sub-text">
            <Paragraph>
              Our site is in draft mode as we updated it to reflect
              AIME in 2020 & beyond. We’re imagining a fairer world
              by using our imagination curriculum and mentoring to create
              change for marginalised youth.
            </Paragraph>
            <Paragraph>
              <mark>Wanna see how?</mark>
              &nbsp;Check out our plan to bring it to life
              (max 10 minute read)
            </Paragraph>
            <Paragraph>
              - JMB
            </Paragraph>
            <Button theme="rainbow" aria-label="cta"
              type="link"
              target="_blank"
              url="https://drive.google.com/a/aimementoring.com/file/d/173GIgP8070ojn4lMmgTaQMXSjahaGRCY/view?usp=sharing">
              View Strategy
            </Button>
          </div>
        </div>
        <div className="sm-col-12 sm-col-6">
          <div className="welcomeVideoWrapper intro-video-wrap">
            <VideoButton
              video="https://player.vimeo.com/external/314670113.m3u8?s=a1753f9ddb12ecce140c479f6bc16ff165ea7589"
            />
            <div className="welcomeVideo video-banner flex block rounded">
              <div className="video-banner-overlay center">
                <img alt="" className="center mx-auto mt2" style={{ width: '70px' }} src={`${ASSETS_URL}/assets/images/play-btn-white.svg`} />
              </div>
            </div>
            <Paragraph className="videoCaption">Welcome to AIME</Paragraph>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default IntroPanelHomepage;
