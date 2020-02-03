import React, { useState } from 'react';
import LabeledInput from 'aime-blueprint/lib/components/labeledInput';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import styles from './footerNewsletter.module.scss';
import request from '../../utils/request';

const AIME_FRIENDS_LIST = '30964260b5';

const FooterNewsletter = () => {
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    request(`${process.env.REACT_APP_MAILCHIMP_API}/lists/${AIME_FRIENDS_LIST}/members`, {
      method: 'POST',
      headers: {
        Authorization: `apikey ${process.env.MAILCHIMP_KEY}`,
      },
      body: {
        email_address: value,
        status: 'subscribed',
      },
    });
  };

  return (
    <div className={styles.newsletterContainer}>
      <div className={styles.newsletterWrapper}>
        <div className={styles.formContainer}>
          <Title type="h5Title" theme={process.env.REACT_APP_THEME}>Become an AIME friend</Title>
          <Paragraph theme={process.env.REACT_APP_THEME}>Subscribe to our newsletter</Paragraph>
          <form onSubmit={handleSubmit}>
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
  );
};

export default FooterNewsletter;
