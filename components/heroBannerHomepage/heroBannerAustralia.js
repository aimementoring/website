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
        A chance for kids at home to have mentors in their lives to
          {' '}
          <em>Make Sense of Today & Imagine Tomorrow</em>
.
        </Paragraph>

        <div className={styles.triBtnSet}>
          <Button
            theme={process.env.REACT_APP_THEME}
            onClickFunction={scrollHandler}
            className={`${styles.triBtn} ${styles.watchBtn}`}
            url="https://www.youtube.com/user/aimementoring/live"
            target="_blank"
            type="link"
          >
            Watch live
          </Button>
          <Button
            type="link"
            text="Visit IMAGI-NATION{TV}"
            url="/imagi-nation-tv"
            theme={process.env.REACT_APP_THEME}
            className={`${styles.triBtn} ${styles.imagiDonate}`}
          />
          <Button
            type="link"
            text="IMAGINE the film"
            className={`${styles.triBtn} ${styles.imagiHoodieBtn}`}
            theme={process.env.REACT_APP_THEME}
            url="/imagine"
          />
        </div>
      </div>
      <div className={`${styles.bannerMediaFeature} ${styles.bannerItem}`}>
        <img
          src={`${ASSETS_URL}/assets/images/illustrations/EARTH-min@2x.gif`}
          alt="Spinning Earth"
          className={styles.dancingIllo}
        />
        <img
          src={`${ASSETS_URL}/assets/images/illustrations/ATOM-min@2x.gif`}
          alt="ATOM"
          className={`${styles.dancingIllo} ${styles.dancingIlloBtm}`}
        />
        <a
          href="https://shop.aimementoring.com/collections/hoodies/products/we-imagine"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${ASSETS_URL}/assets/images/banner/imagine-hoodie.gif`}
            alt="We IMAGINE hoodie"
            className={styles.videoCoverArt}
          />
        </a>
        <a
          className={styles.textLinkChannel}
          target="_blank"
          rel="noopener noreferrer"
          href="https://shop.aimementoring.com/collections/hoodies/products/we-imagine"
        >
          BUY NOW
          &nbsp;
        </a>
      </div>
    </div>
  </div>
);

HeroBannerAustralia.propTypes = {
  scrollHandler: PropTypes.func.isRequired,
};

export default HeroBannerAustralia;
