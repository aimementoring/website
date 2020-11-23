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
      <Title type="h5Title">Hey you! So you wanna be a mentor?</Title>
      <Paragraph>
        Mentor applications aren&apos;t open just yet as we&apos;re
        updating our processes. However, you should get a head-start by&nbsp;
      <strong>registering your details</strong> and creating an AIME account.
      Once they&apos;re open, we&apos;ll notify you so you can complete
      your application.
      </Paragraph>
      <Paragraph>
      {'If you\'re new to mentoring with us,'}
      {' '}
      <strong>sign up</strong>
      &nbsp;below.&nbsp;
      {'If you\'ve mentored before, '}
      <strong>sign in</strong>
      &nbsp;
      {`to your AIME account below. Either way,
      enter the AIME Universe through the button below and
      we'll guide you through your mentor application process.
      Good luck!`}
    </Paragraph>
      <Button
        theme={process.env.REACT_APP_THEME}
        type="link"
        target="_blank"
        url="https://portal.aimementoring.com/login?eoi-table=Be-a-Mentor"
      >
        Sign up
    </Button>
    </div>
    <br />
    <Paragraph>
      <mark> And here's another opportunity!</mark> We want to give you the stage to lead AIME on your campus as a student chapter.
      We’ll provide you with all the necessary training and tools, and connect you to a global network of change makers,
      and dedicated mentors and coaches from AIME via <mark>{`IMAGI-NATION {University}`}</mark> throughout 2021. 
      We’ll give you the title of <mark>{`IMAGI-NATION {President}`}</mark>. 
      Learn more <a href="https://imagination.aimementoring.com/university" target="_blank">here</a>.
    </Paragraph>
  </div>
);

export default BeAMentorForm;
