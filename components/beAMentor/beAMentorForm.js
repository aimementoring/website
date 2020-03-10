import React from 'react';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Title from 'aime-blueprint/lib/components/title';
import Button from 'aime-blueprint/lib/components/button';
import styles from './beAMentorForm.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const BeAMentorForm = () => (
  <div className={styles.beAMentorFormWrapper}>
    <img
      src={`${ASSETS_URL}/assets/images/illustrations/speakr@2x.png`}
      alt="Listen up"
    />
    <Title type="h5Title">Mentor applications are open!</Title>
    <Paragraph>
      Excited? We are too!&nbsp;
      <mark>
        Mentors applications are now up and running
      </mark>
      &nbsp;and all you have to do is <strong>apply now</strong>.
    </Paragraph>
    <Paragraph>
      You may have mentored with us in the past, in which case you already
      know about the endless opportunities that come with mentoring at AIME.
      Sign into your account below to submit your application for this year.
    </Paragraph>
    <Paragraph>
      If you are new to mentoring with us, apply now by creating an AIME account
      and we'll guide through your application process.
    </Paragraph>
    <br />
    <Button
      theme={process.env.REACT_APP_THEME}
      type="link"
      target="_blank"
      url="https://portal.aimementoring.com/login?eoi-table=Be-a-Mentor"
    >
      Apply now
    </Button>
  </div>
);

export default BeAMentorForm;
