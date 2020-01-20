import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '../../hocs/basicLayout';

const WatchTheVideoButton = dynamic(() => import(/* webpackChunkName 'WatchTheVideoButton' */ '../../components/watchTheVideoButton'));

const ComingSoon = () => (
  <Layout>
    <div className="holding-page">
      <div className="hero-banner--default full-width-wrap">
        <div className="flex flex-wrap items-center full-height">
          <div className="banner-wrapper subpage-banner center">
            <h1>
              <span className="highlight-text">
                <em>
                  Coming Soon
                  <br />
                  <span className="scratch-underline">&nbsp;</span>
                </em>
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-darkest-purple full-width-wrap content-panel">
        <div className="scratch-overlay-wrapper top-scratch bg-darkest-purple" />
        <div className="wrap">
          <div className="flex flex-wrap items-center md-col-8 mx-auto intro-panel">
            <div className="sm-col md-col-6 ">
              <div className="mx-auto px3">
                <h1 className="c-white">
                  <span className="pre-text">Just a sec</span>
                  <span className="gradient-text highlight-text">hold up</span>
                </h1>
              </div>
            </div>
            <div className="sm-col-12 md-col-6 mb3 mx-auto featured-image">
              <div className="mx-auto">
                <h1 className="f-20 mb3 lh-small c-white">This page is coming soon.</h1>
                <p className="f-14 light c-white">
                  In the meantime, click play on the video below to check out our story.
                </p>
                <WatchTheVideoButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default ComingSoon;
