import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import AnimatedCircleText from 'aime-blueprint/lib/components/animatedCircleText';
import ArrowNextIcon from '../../components/layoutComponents/logos';
import styles from './becomeAFriend.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const BecomeAFriend = (props) => {

  const { scrollHandler } = props;

  return (
    <div className={styles.beAFriendContainer}>
      <div className={styles.newsletterWrapper}>
        <div className={styles.formContainer}>
          <div onClick={scrollHandler} className={styles.beAFriendPopper}>
            <div className={styles.spinnyWrapper}>
              <AnimatedCircleText text="Board the AIME Rocket Ship &nbsp;" size={110} duration={8} fontSize={13} className={styles.spinnySubscribe}/>
              <img
                src={`${ASSETS_URL}/assets/images/illustrations/SMILEY_HAPPY_SMILE_KINDNESS@2x.png`}
                alt="Smiley"
              />
            </div>
            <div className={styles.beAFriendPopOut}>
              <Title type="h5Title" theme={process.env.REACT_APP_THEME}>Become an AIME Friend</Title>
              <ArrowNextIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BecomeAFriend.propTypes = {
  scrollHandler: PropTypes.func.isRequired,
};
export default BecomeAFriend;
