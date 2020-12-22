import React from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import styles from './welcomeBox.module.scss';

const VideoButton = dynamic(() => import('../../components/videoButton'));
const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const WelcomeBox = () => (
  <div className={styles.welcomeBeAMentor}>
    <div className={styles.welcomeBeAMentorContent}>
      <Title type="h4Title" className={styles.pageIntroHeading} theme={process.env.REACT_APP_THEME}>
        We believe a mentor can change someone’s life through a permanent shift in mindset.
      </Title>
      <Paragraph>
        We want to ignite the flame within university/college students across the planet to rise up
        as mentors for marginalised youth and lead a revolution for them to rise up out of
        inequality. We&apos;ve been working with Aboriginal and Torres Strait islander
        kids in Australia
        for the past 16 years and in 2021 we&apos;re working across Australia, Uganda, South Africa,
        Nigeria and the United States. We
        understand that what we are fighting for is a global issue, and it takes a united effort to
        defeat systematic oppression. We are aware that these issues don’t exist just in our
        backyard, but all around the globe.
      </Paragraph>
      <Paragraph>
        <mark>
          If it&apos;s not going to be you then who? If it&apos;s not going to be now then when?
        </mark>
      </Paragraph>
    </div>
    <div className={styles.videoBeAMentor}>
      <VideoButton video="https://player.vimeo.com/external/326229385.m3u8?s=ccd4312c26f7981d8bcac17bb0bfd10584cfc150" />
      <div className={styles.videoBanner}>
        <div className={styles.videoBannerOverlay}>
          <img
            alt=""
            className={styles.vidPlayBtn}
            src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
          />
          <h3>So you wanna be an AIME Mentor?</h3>
          <p>{'Here is what it\'s all about...'}</p>
        </div>
      </div>
    </div>
  </div>
);

export default WelcomeBox;
