import React from 'react';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
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
        Hey you! So you wanna be a mentor?
      </mark>
      <br />
      <br />
      {`Mentor applications aren't open just yet as we're
      updating our processes. However, you should get a head-start by`}
      &nbsp;
      <strong>registering your details</strong>
      &nbsp;
      {`and creating an AIME account.
      Once they're open, we'll notify you so you can complete
      your application.`}
      <br />
      <br />
      {`One by one we'll get it done!`}
      <br />
      <br />
    </Paragraph>
    <Button
      theme={process.env.REACT_APP_THEME}
      type="link"
      target="_blank"
      url="https://portal.aimementoring.com/login?eoi-table=Be-a-Mentor">
      Sign up
    </Button>
  </div>
);

export default BeAMentorForm;
