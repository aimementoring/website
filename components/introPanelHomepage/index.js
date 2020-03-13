import React from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Button from 'aime-blueprint/lib/components/button';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Anchor from '../common/link';
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
              Hey&nbsp;
              <span>there!</span>
            </strong>
          </Title>
          <div className="intro-sub-text">
            <Paragraph>
            We now have a plan to deliver AIME remotely if COVID-19 forces further school and university closures - click the partner link above and be a part of sharing AIME&apos;s Imagination Factory & Mentoring knowledge with kids stuck at home across the world.
            </Paragraph>
            <Paragraph>
              <mark>Wanna see how?</mark>
              &nbsp;Check out our plan to take our Imagination Factory direct to homes as part of the work towards our 3 year strategy.
            </Paragraph>
            <Paragraph>
              - Jack MB, AIME CEO & Founder, 13 March 2020
            </Paragraph>
            <Anchor
              to="https://mailchi.mp/aimementoring/being-a-solution-for-the-earth-an-aime-action-story-in-3-parts-1376269"
              type="link"
              target="_blank"
            >
              <Button theme={process.env.REACT_APP_THEME} aria-label="cta">
                View COVID-19 Plan
              </Button>
            </Anchor>

            <br />

            <Anchor
              to="https://drive.google.com/a/aimementoring.com/file/d/173GIgP8070ojn4lMmgTaQMXSjahaGRCY/view?usp=sharing"
              type="link"
              target="_blank"
            >
              <Button theme={process.env.REACT_APP_THEME} aria-label="cta">
                View 3 Year Strategy
              </Button>
            </Anchor>
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
