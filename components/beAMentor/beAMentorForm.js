import React from 'react';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Title from 'aime-blueprint/lib/components/title';
import Button from 'aime-blueprint/lib/components/button';
import styles from './beAMentorForm.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const BeAMentorForm = () => (
  <div className={styles.beAMentorFormWrapper}>
    <div className={styles.mentorNotification}>
      <img
        src={`${ASSETS_URL}/assets/images/illustrations/speakr@2x.png`}
        alt="Listen up"
      />
      <Title type="h5Title">Mentor applications are open again!</Title>
      <Paragraph>
        {`We've created `}
        <a href="/imagi-nation-tv" target="_blank" rel="noopener noreferrer">
        {`IMAGI-NATION{TV}`}
        </a>
        {` & the IMAGI-NATION{CLASSROOM} experience to put a mentor in
        the home every day during the tough times of COVID-19 and beyond.
        It’s a daily TV show broadcast live on the internet, and it’s a
        gift for teachers, parents and kids to help make sense of today
        & imagine tomorrow. Mentoring will naturally be a little different
        in this environment but
        `}
        <mark>
        we need mentors
        </mark>
        &nbsp;more than ever! 
      </Paragraph>
    </div>
    <br />
    <Paragraph>
      Trust us when we say,&nbsp;
      <mark>
        the opportunities when you mentor at AIME are extensive
      </mark>
      &nbsp;and go further than you would think.
    </Paragraph>
    <Paragraph>
      {'If you\'re new to mentoring with us,'}
      {' '}
      <strong>sign up</strong>
      &nbsp;below.&nbsp;
      {`If you've mentored before, `}
      <strong>sign in</strong>
      &nbsp;
      {`to your AIME account below. Either way,
      enter the AIME Universe through the button below and
      we'll guide you through your mentor application process.
      Good luck!`}
    </Paragraph>
    <br />
    <Button
      theme={process.env.REACT_APP_THEME}
      type="link"
      target="_blank"
      url="https://portal.aimementoring.com/login?eoi-table=Be-a-Mentor"
    >
      {/* Apply now */}
      Start now
    </Button>

  </div>
);

export default BeAMentorForm;
