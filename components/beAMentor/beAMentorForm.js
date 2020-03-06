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
    <Title type="h5Title">Mentor applications are now open!</Title>
    <Paragraph>
      Excited? We are too!&nbsp;
      <mark>
        Mentors applications are up and running.
      </mark>
    </Paragraph>
    <Paragraph>
      If you are new to mentoring with us, create an AIME account and we'll
      guide through your application process. If you are a returning mentor,
      welcome back. Sign in to your account below and finalise your application for
      this year.
    </Paragraph>
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
