import React from 'react';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import styles from './beAMentor.module.scss';

const HeroBanner = () => (
  <div className="hero-banner--default hero-banner--mentor full-width-wrap">
    <div className="flex flex-wrap items-center w100 h100">
      <div className="banner-wrapper subpage-banner center">
        <Title type="headingLockup" className={styles.bannerHeading} theme={process.env.REACT_APP_THEME}>
          Become a
          <strong>mentor</strong>
        </Title>
        <Paragraph>Welcome to the world of mentoring</Paragraph>
      </div>
    </div>
  </div>
);

export default HeroBanner;
