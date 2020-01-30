import React from 'react';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import styles from './beAMentorForm.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const BeAMentorForm = () => (
  <div className={styles.beAMentorFormWrapper}>
    <img
      src={`${ASSETS_URL}/assets/images/illustrations/speakr@2x.png`}
      alt="Listen up"
      style={{ width: '211px' }}
    />
    <Paragraph>
      <br />
      <mark>
        Hey you! Please hold tight.
      </mark>
      <br />
      <br />
      We are currently updating our 2020 application process&nbsp;
      <strong>and we&apos;ve had to temporarily take it offline.</strong>
      &nbsp;Please be patient with us a little bit longer and we&apos;ll
      have this all back up early next week so you can get your name on the list.
      <br />
      <br />
      <strong>
        One by one we&apos;ll get it done!
      </strong>
    </Paragraph>
  </div>
);

export default BeAMentorForm;
