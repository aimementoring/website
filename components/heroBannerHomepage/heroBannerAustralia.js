import React from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import styles from './heroBannerHomepage.module.scss';

const HeroBannerAustralia = ({ scrollHandler }) => (
  <div className={styles.heroBannerHomepage}>
    <div className={styles.heroBannerContainer}>
      <div className={styles.bannerWrapper}>
        <div className={styles.bannerContent}>
          <Title className={styles.headingLockup} type="headingLockup" theme={process.env.REACT_APP_THEME}>
            Welcome to
            <strong>AIME</strong>
          </Title>
          <Paragraph>
            We’re a global social movement of everyday humans, working
            relentlessly to build a fairer world
          </Paragraph>
          <Button
            theme={process.env.REACT_APP_THEME}
            onClickFunction={scrollHandler}
          >
            Get involved
          </Button>
        </div>
      </div>
    </div>
  </div>
);

HeroBannerAustralia.propTypes = {
  scrollHandler: PropTypes.func.isRequired,
};

export default HeroBannerAustralia;
