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
        <Title className={styles.headingLockup} type="headingLockup" theme={process.env.REACT_APP_THEME}>
          Introducing
          <strong>Imagi-nation TV</strong>
        </Title>
        <Paragraph>
          A chance for kids at home to have mentors in their lives to <em>Make Sense of Today & Imagine Tomorrow</em>. 
        </Paragraph>
        <Button
          theme={process.env.REACT_APP_THEME}
          onClickFunction={scrollHandler}
        >
          Watch now
        </Button>
      </div>
      <div className={`${styles.bannerMediaFeature} ${styles.bannerItem}`}>
        <img
          src={`${ASSETS_URL}/assets/images/banner/heyhello@2x.jpg`}
          alt="Welcome hello from AIME"
        />
      </div>
    </div>
  </div>
);

HeroBannerAustralia.propTypes = {
  scrollHandler: PropTypes.func.isRequired,
};

export default HeroBannerAustralia;
