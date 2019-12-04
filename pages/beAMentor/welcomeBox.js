import React from 'react';
import dynamic from 'next/dynamic';
import './beAMentor.scss';

const VideoButton = dynamic(() => import(/* webpackChunkName 'VideoButton' */ '../../components/videoButton'));
const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const WelcomeBox = () => (
  <div className="welcome-box">
    <div className="welcome-text-box left">
      <h4 className="post-text f-24 feature-font-family c-brand-tertiary left-align mb2">
        Welcome to the world of mentoring.
      </h4>
      <p>
        We believe a mentor can change someone’s life through a permanent shift in mindset.
      </p>
      <p>
        {`
          We want to ignite the flame within university/college students across the planet to rise up
          as mentors for marginalised youth and lead a revolution for them to rise up out of
          inequality. We've been working with Aboriginal and Torres Strait islander kids in Australia
          for the past 15 years and in 2019 we're working across Australia, Uganda, South Africa,
          Nigeria and the United States. Soon to be launching in Rwanda and Zimbabwe too. We
          understand that what we are fighting for is a global issue, and it takes a united effort to
          defeat systematic oppression. We are aware that these issues don’t exist just in our
          backyard, but all around the globe.
        `}
      </p>
      <p>
        {'This year we\'ll bring change like you\'ve never seen.'}
      </p>
      <p>
        <strong>
          {'If it\'s not going to be you then who? If it\'s not going to be now then when?'}
        </strong>
        &nbsp; Express your interest now, applications are open!
      </p>
    </div>
    <div className="video-wrapper welcome-video">
      <VideoButton video="https://player.vimeo.com/external/326229385.m3u8?s=ccd4312c26f7981d8bcac17bb0bfd10584cfc150" />
      <div className="video-banner flex block rounded">
        <div className="video-banner-overlay center">
          <img
            alt=""
            className="center mx-auto mt2"
            style={{ width: '70px' }}
            src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
          />
          <h3 className="c-white">So you wanna be an AIME Mentor?</h3>
          <p className="c-white">{'Here is what it\'s all about...'}</p>
        </div>
      </div>
    </div>
  </div>
);

export default WelcomeBox;
