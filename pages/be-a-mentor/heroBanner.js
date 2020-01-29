import React from 'react';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import styles from './beAMentor.module.scss';

const HeroBanner = () => (
  <div className={styles.heroBannerMentor}>
    <div className={styles.banWrapper}>
      <div className={styles.banContentWrapper}>
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
