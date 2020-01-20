import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '../../hocs/basicLayout';
import './theMentor.scss';

const VideoButton = dynamic(() => import(/* webpackChunkName 'VideoButton' */ '../../components/videoButton'));
const Testimonials = dynamic(() => import(/* webpackChunkName 'Testimonials' */ '../../components/testimonials'));

const TheMentor = () => (
  <Layout>
    <div className="theMentor">
      <div className="full-width-wrap">
        <div className="flex flex-wrap items-center">
          <div className="banner-wrapper full-height section-background-image xs-py4">
            <div className="flex flex-column">
              <h1 className="px1 xs-pt4 center">
                <span className="theMentor-highlight-text highlight-text-straight m3 gradient-text highlight-text">
                  The Mentor.
                </span>
              </h1>
              <div className="video-button pt1 pb2">
                <VideoButton video="https://player.vimeo.com/external/215774212.m3u8?s=1f2ae5e0a63470107633eef7083dea7e70028d65" />
                <div className="video-banner-overlay center">
                  <img
                    alt=""
                    className="center mx-auto"
                    style={{ width: '70px' }}
                    src={`${process.env.REACT_APP_ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                  <p>Play book launch film</p>
                </div>
              </div>
              <div className="text-wrap pt1 p1">
                <p className="f-14 light c-white center">
                  {`The Mentor, by AIME Founder and CEO Jack Manning Bancroft is the story of how
                  it all started. Gain a real insight into contemporary Indigenous Australia.
                  How from humble beginnings a young Indigenous man's journey through university
                  lead to starting a fire that tackles education inequality across Australia and
                  now the world.`}
                </p>
              </div>
              <div className="pt2 center">
                <a
                  target="_blank"
                  href="/products/the-mentor"
                  className="basic-btn bold bg-brand-primary c-white mt3"
                  aria-label="Grab a copy"
                >
                  Grab a copy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gradient-purple testimonial-container relative">
        <div className="scratch-overlay-wrapper top-scratch bg-darkest-purple" />
        <Testimonials />
      </div>
    </div>
  </Layout>
);

export default TheMentor;
