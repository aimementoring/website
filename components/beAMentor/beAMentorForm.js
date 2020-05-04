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
      <Title type="h5Title">Mentor applications are open!</Title>
      <Paragraph>
        Due to COVID-19, the delivery of our physical programs is a little different
        this year. Non-the-less, we're still gearing up to deliver the best program yet and
        &nbsp;
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
