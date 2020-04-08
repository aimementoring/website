import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LabeledInput from 'aime-blueprint/lib/components/labeledInput';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import MovingWaves from '../movingWaves';
import BecomeAFriend from '../becomeAFriend';
import isClientSide from '../../utils/isClientSide';

import styles from './subscribePanel.module.scss';

const AIME_FRIENDS_LIST_MAILCHIMP_URL = 'https://aimementoring.us12.list-manage.com/subscribe/post?u=ce86e2fc6ca77a51919157a03&amp;id=30964260b5';

const SubscribePanel = ({ subscribeRef }) => {
  const [value, setValue] = useState('');

  // const scrollToFooterSubscribe = () => {
  //   if (isClientSide()) {
  //     const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
  //     if (isSmoothScrollSupported) {
  //       subscribeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  //     } else {
  //       subscribeRef.current.scrollIntoView(false);
  //     }
  //   }
  // };

  return (
    <div>
      {/* <BecomeAFriend scrollHandler={scrollToFooterSubscribe}/> */}
      <div className={styles.subscribeContainer}>
        <MovingWaves className={styles.wavySubscribe}/>
        {/* subscribeRef={subscribeRef} ref={subscribeRef} */}
        <div className={styles.newsletterWrapper}  >
          <div ref={subscribeRef} className={styles.formContainer}>
            <Title type="h4Title" className={styles.subscribeTitle} theme={process.env.REACT_APP_THEME}>
              BOARD THE AIME ROCKET SHIP
            </Title>
            <Paragraph className={styles.subscribeDetails} theme={process.env.REACT_APP_THEME}>
              {`Receive IN{TV} latest, job offers, Hoodies, Sunday Kindness & more`}
            </Paragraph>
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
                label="Email address"
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
    </div>
  );
};

SubscribePanel.propTypes = {
  subscribeRef: PropTypes.shape({}).isRequired,
};

export default SubscribePanel;
