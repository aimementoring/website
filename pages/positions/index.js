import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import Layout from '../../hocs/basicLayout';
import { isClientSide } from '../../utils/utilities';
import './positions.scss';

const JobsBanner = dynamic(() => import(/* webpackChunkName 'JobsBanner' */ '../../components/jobsBanner'));
const JobsTabs = dynamic(() => import(/* webpackChunkName 'JobsTabs' */ '../../components/jobsTabs'));
const Jobs = dynamic(() => import(/* webpackChunkName 'Jobs' */ '../../components/jobs'));
const VideoButton = dynamic(() => import(/* webpackChunkName 'VideoButtons' */ '../../components/videoButton'));

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const Positions = ({ redirected, redirectJobTitle, countryId }) => {
  const [isRedirect, setIsRedirect] = useState(redirected);
  const [jobTitle, setJobTitle] = useState(redirectJobTitle);
  const [selectedTab, setSelectedTab] = useState('Life at AIME');

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
          <div className="scratch-overlay-wrapper top-scratch bg-white" />
          <JobsTabs onClick={setSelectedTab} active={selectedTab} countryId={countryId} />
          <div
            className="video-banner-cta hero endorsement-wrap my4 flex flex-column items-center justify-center changed"
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
