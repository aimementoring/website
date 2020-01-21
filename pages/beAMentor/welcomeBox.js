import React from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import styles from './beAMentor.module.scss';

const VideoButton = dynamic(() => import(/* webpackChunkName 'VideoButton' */ '../../components/videoButton'));
const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const WelcomeBox = () => (
  <div className="welcome-box">
    <div className="welcome-text-box left">
      <Title type="h4Title" className={styles.pageIntroHeading} theme={process.env.REACT_APP_THEME}>
        We believe a mentor can change someone’s life through a permanent shift in mindset.
      </Title>
      <Paragraph>
        We want to ignite the flame within university/college students across the planet to rise up
        as mentors for marginalised youth and lead a revolution for them to rise up out of
        inequality. We&apos;ve been working with Aboriginal and Torres Strait islander
        kids in Australia
        for the past 15 years and in 2019 we&apos;re working across Australia, Uganda, South Africa,
        Nigeria and the United States. Soon to be launching in Rwanda and Zimbabwe too. We
        understand that what we are fighting for is a global issue, and it takes a united effort to
        defeat systematic oppression. We are aware that these issues don’t exist just in our
        backyard, but all around the globe.
      </Paragraph>
      <Paragraph>
        This year we&apos;ll bring change like you&apos;ve never seen.
      </Paragraph>
      <Paragraph>
        <mark>
          If it&apos;s not going to be you then who? If it&apos;s not going to be now then when?
        </mark>
      </Paragraph>
      <Paragraph>
        Express your interest now, applications are open!
      </Paragraph>
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
