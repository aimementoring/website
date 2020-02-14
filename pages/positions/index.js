import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Layout from '../../hocs/basicLayout';
import { isClientSide } from '../../utils/utilities';
import './positions.scss';

const JobsBanner = dynamic(() => import('../../components/jobsBanner'));
const Jobs = dynamic(() => import('../../components/jobs'));
const VideoButton = dynamic(() => import('../../components/videoButton'));

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const Positions = ({ redirected, redirectJobTitle, countryId }) => {
  const [isRedirect, setIsRedirect] = useState(redirected);
  const [jobTitle, setJobTitle] = useState(redirectJobTitle);

  const isClient = isClientSide();

  useEffect(() => {
    setIsRedirect(redirected);
    setJobTitle(redirectJobTitle);
    const currentUrl = isClient ? `/${Router.pathname.split('/')[1]}` : null;
    if (isClient && currentUrl === '/positions') {
      Router.push(currentUrl, currentUrl, { shallow: true });
    }
  }, [isClient, redirected, redirectJobTitle]);

  return (
    <Layout>
      <div className="positions">
        <JobsBanner />
        <section className="relative">
          {/* <div
            className="video-banner-cta hero endorsement-wrap flex flex-column items-center justify-center changed"
            style={{
              backgroundImage: `url('${ASSETS_URL}/assets/images/banner/endorsement-video.png')`,
            }}
          >
            <div className="video-button flex items-center p3">
              <VideoButton video="https://player.vimeo.com/external/220543875.m3u8?s=fef0be1439c6cd9179ade0e502dea995e0a75a8f" />
              <div className="flex">
                <img
                  alt=""
                  className="video-play-button"
                  src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                />
                <p className="video-text">
                  {`AIME ain't the place to come for the big bucks. We aren't here for the money. We are
                  here to change the planet, yesterday.`}
                </p>
              </div>
            </div>
          </div> */}

          {/* <div className="home-intro-panel positionsIntroPanel">
            <div className="home-intro-panel--inner positionsIntroPanelContent">
              <div className="sm-col-12 sm-col-6 pr2 home-intro-panel-inner-content">
                <Title type="headingLockup">
                  <strong>
                    Hey&nbsp;
                    <span>there!</span>
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
                  <Anchor
                    to="https://drive.google.com/a/aimementoring.com/file/d/173GIgP8070ojn4lMmgTaQMXSjahaGRCY/view?usp=sharing"
                    target="_blank"
                    aria-label="cta"
                  >
                    <Button theme={process.env.REACT_APP_THEME} aria-label="cta">
                      View Strategy
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
          </div> */}


          <div className="full-width-wrap content-panel home-intro-panel positionsIntroPanel">
            <div className="lg-wrap sm-col-12 md-col-10 mx-auto">
              <div className="home-intro-panel--inner positionsIntroPanelContent">
                <div className="sm-col-12 sm-col-6 pr2 home-intro-panel-inner-content">
                  <Title type="headingLockup">
                    <strong>
                      Get&nbsp;
                      <span>involved</span>
                    </strong>
                  </Title>
                  <div className="intro-sub-text">
                    <Paragraph>
                      Welcome to AIME. A group that is looking to transform education
                      from the inside out, through imagination & mentoring in order to
                      create more educational equality, access to opportunities
                      and in turn a fairer world.
                    </Paragraph>
                    <Paragraph>
                      If you get the chance to work with us -&nbsp;
                      <mark>bring everything you have</mark>
                      , embrace our 21 mentor values,
                      and enter a world of imagining what’s possible.
                    </Paragraph>
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
            
          <div className="wrap mx-auto px3">
            {!!countryId && (
              <Jobs
                cdnUrl={ASSETS_URL}
                currentSite={countryId}
                jobTitle={jobTitle}
                isRedirect={isRedirect}
                handleRedirectHide={() => setIsRedirect(false)}
              />
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

Positions.getInitialProps = async ({ query }) => ({
  redirected: query.redirected,
  redirectJobTitle: query.redirectJobTitle,
  countryId: query.countryId || 'global',
});

Positions.propTypes = {
  redirected: PropTypes.bool,
  redirectJobTitle: PropTypes.string,
  countryId: PropTypes.string,
};

Positions.defaultProps = {
  redirected: false,
  redirectJobTitle: '',
  countryId: 'global',
};

export default Positions;
