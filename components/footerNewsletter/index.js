import React from 'react';
import Input from 'aime-blueprint/lib/components/input';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import styles from './footerNewsletter.module.scss';

const FooterNewsletter = () => (
  <div className={styles.newsletterContainer}>
    <div className={styles.newsletterWrapper}>
      <div className={styles.formContainer}>
        <Title type="h5Title" theme={process.env.REACT_APP_THEME}>Become an AIME friend</Title>
        <Paragraph theme={process.env.REACT_APP_THEME}>Subscribe to our newsletter</Paragraph>
        <form acceptCharset="UTF-8" action="https://formkeep.com/f/0f2fe2a1cd09" method="POST">
          <input type="hidden" name="utf8" value="✓" />
          <input type="hidden" name="submissionmessage" value="footernewslettersubscription" />
          <Input
            id="subscribe"
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            theme={process.env.REACT_APP_THEME}
          />
          <button type="submit" className={styles.submitButton} aria-label="Submit form" />
        </form>
      </div>
    </div>
  </div>
);

export default FooterNewsletter;
