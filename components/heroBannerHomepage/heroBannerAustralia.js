import React from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import styles from './heroBannerHomepage.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const HeroBannerAustralia = ({ scrollHandler }) => (
  <div className={styles.heroBannerHomepage}>
    <div className={styles.bannerWrapper}>
      <div className={`${styles.bannerContent} ${styles.bannerItem}`}>
        <Title className={styles.welcomeTitle} type="headingLockup" theme={process.env.REACT_APP_THEME}>
          Introducing
          <img
            src={`${ASSETS_URL}/assets/images/logos/logo_imagitv@2x.png`}
            alt="Imagi-Nation TV"
            className={styles.logoImagiTV}
          />
        </Title>
        <Paragraph>
          A chance for kids at home to have mentors in their lives to <em>Make Sense of Today & Imagine Tomorrow</em>. 
        </Paragraph>
        <Button
          theme={process.env.REACT_APP_THEME}
          onClickFunction={scrollHandler}
          className={styles.watchBtn}
        >
          Watch now
        </Button>
      </div>
      <div className={`${styles.bannerMediaFeature} ${styles.bannerItem}`}>
        <img
          src={`${ASSETS_URL}/assets/images/illustrations/pinky-earth.png`}
          alt="Pink Earth"
          className={styles.dancingIllo}
        />
        <img
          src={`${ASSETS_URL}/assets/images/illustrations/ATOM-min@2x.gif`}
          alt="ATOM"
          className={`${styles.dancingIllo} ${styles.dancingIlloBtm}`}
        />
        <img
          src={`${ASSETS_URL}/assets/images/illustrations/imagi-robot-soon@2x.gif`}
          alt="Imagi-nation TV"
          className={styles.videoCoverArt}
        />
        <a href="">Watch the episodes</a>
      </div>
    </div>
  </div>
);

HeroBannerAustralia.propTypes = {
  scrollHandler: PropTypes.func.isRequired,
};

export default HeroBannerAustralia;
