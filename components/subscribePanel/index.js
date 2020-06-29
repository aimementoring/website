import React, { useState, useRef } from 'react';
import Input from 'aime-blueprint/lib/components/input';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import MovingWaves from '../movingWaves';
import BecomeAFriend from '../becomeAFriend';
import isClientSide from '../../utils/isClientSide';

import styles from './subscribePanel.module.scss';

const AIME_FRIENDS_LIST_MAILCHIMP_URL = 'https://aimementoring.us12.list-manage.com/subscribe/post?u=ce86e2fc6ca77a51919157a03&amp;id=30964260b5';

const SubscribePanel = () => {
  const [value, setValue] = useState('');
  const subscribeRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToFooterSubscribe = () => {
    if (isClientSide()) {
      const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
      if (isSmoothScrollSupported) {
        subscribeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        subscribeRef.current.scrollIntoView(false);
      }
      // TODO: Replace when it is fixed in Blueprint by
      // if (inputRef.current) inputRef.current.focus();
      setTimeout(() => {
        document.getElementById('mce-EMAIL').focus();
      }, 1000);
    }
  };

  return (
    <div>
      <BecomeAFriend scrollHandler={scrollToFooterSubscribe} />
      <div className={styles.subscribeContainer} ref={subscribeRef}>
        <MovingWaves className={styles.wavySubscribe} />
        <div className={styles.newsletterWrapper}>
          <div className={styles.formContainer}>
            <Title type="h4Title" align="center" className={styles.subscribeTitle} theme={process.env.REACT_APP_THEME}>
              BOARD THE AIME ROCKET SHIP
            </Title>
            <Paragraph className={styles.subscribeDetails} theme={process.env.REACT_APP_THEME}>
              {'Receive IMAGI-NATION{TV} latest, job offers, Hoodies, Sunday Kindness & more'}
            </Paragraph>
            <form
              acceptCharset="UTF-8"
              action={AIME_FRIENDS_LIST_MAILCHIMP_URL}
              method="POST"
              name="mc-embedded-subscribe-form"
              target="_blank"
            >
              <Input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                value={value}
                onChangeFunction={(name, inputValue) => setValue(inputValue)}
                label="Email address"
                theme={process.env.REACT_APP_THEME}
                className={styles.subscribeInput}
                required
                ref={inputRef}
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
    </div>
  );
};

export default SubscribePanel;
