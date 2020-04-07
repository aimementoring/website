import React, { useState } from 'react';
import LabeledInput from 'aime-blueprint/lib/components/labeledInput';
import Title from 'aime-blueprint/lib/components/title';
import AnimatedCircleText from 'aime-blueprint/lib/components/animatedCircleText';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import styles from './becomeAFriend.module.scss';

const AIME_FRIENDS_LIST_MAILCHIMP_URL = 'https://aimementoring.us12.list-manage.com/subscribe/post?u=ce86e2fc6ca77a51919157a03&amp;id=30964260b5';
const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const BecomeAFriend = () => {
  const [value, setValue] = useState('');

  return (
    <div className={styles.beAFriendContainer}>
      <div className={styles.newsletterWrapper}>
        <div className={styles.formContainer}>
          <div className={styles.beAFriendPopper}>
            <div className={styles.spinnyWrapper}>
              <AnimatedCircleText text="Board the AIME Rocket Ship" size={110} duration={8} fontSize={13} className={styles.spinnySubscribe}/>
              <img
                src={`${ASSETS_URL}/assets/images/illustrations/SMILEY_HAPPY_SMILE_KINDNESS@2x.png`}
                alt="Smiley"
              />
            </div>
            <div className={styles.beAFriendPopOut}>
              <Title type="h5Title" theme={process.env.REACT_APP_THEME}>BOARD THE AIME ROCKET SHIP</Title>
            </div>
          </div>
          <Title type="h5Title" theme={process.env.REACT_APP_THEME}>Become an AIME friend</Title>
          <Paragraph theme={process.env.REACT_APP_THEME}>Subscribe to our newsletter</Paragraph>
          <form
            acceptCharset="UTF-8"
            action={AIME_FRIENDS_LIST_MAILCHIMP_URL}
            method="POST"
            name="mc-embedded-subscribe-form"
            target="_blank"
          >
            <LabeledInput
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              value={value}
              onChangeFunction={(name, inputValue) => setValue(inputValue)}
              label="Subscribe to a new world"
              theme={process.env.REACT_APP_THEME}
              className={styles.subscribeInput}
              required
            />
            <button
              type="submit"
              className={styles.submitButton}
              name="subscribe"
              aria-label="Subscribe"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomeAFriend;
