import React, { useState } from 'react';
import LabeledInput from 'aime-blueprint/lib/components/labeledInput';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import styles from './footerNewsletter.module.scss';


const FooterNewsletter = () => {
  const [value, setValue] = useState('');
  return (
    <div className={styles.newsletterContainer}>
      <div className={styles.newsletterWrapper}>
        <div className={styles.formContainer}>
          <Title type="h5Title" theme={process.env.REACT_APP_THEME}>Become an AIME friend</Title>
          <Paragraph theme={process.env.REACT_APP_THEME}>Subscribe to our newsletter</Paragraph>
          <form
            acceptCharset="UTF-8"
            action="https://aimementoring.us12.list-manage.com/subscribe/post?u=ce86e2fc6ca77a51919157a03&amp;id=30964260b5"
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
            {/*
              real people should not fill in the below input and expect good things...
              do not remove this or risk form bot signups
            */}
            <div className={styles.absolutelyHide} aria-hidden="true">
              <input
                type="text"
                name="b_ce86e2fc6ca77a51919157a03_30964260b5"
                value=""
              />
            </div>
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

export default FooterNewsletter;
