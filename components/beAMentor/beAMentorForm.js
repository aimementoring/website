import React from 'react';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Title from 'aime-blueprint/lib/components/title';
import Button from 'aime-blueprint/lib/components/button';
import styles from './beAMentorForm.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const BeAMentorForm = () => (
  <div className={styles.beAMentorFormWrapper}>
    {/* <img
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
    </Paragraph> */}
    <div className={styles.mentorNotification}>
      <img
        src={`${ASSETS_URL}/assets/images/illustrations/speakr@2x.png`}
        alt="Listen up"
      />
      <Title type="h5Title">Going Digital</Title>
      <Paragraph>
        Please note that&nbsp;
        <mark>
          due to COVID-19 at this stage we are pausing the delivery of our physical
          programs until&nbsp;
          <strong>June 1</strong>
        </mark>
      .
      </Paragraph>
      <Paragraph>
        You can still sign up but we won&apos;t be processing applications and our teams won&apos;t
        be conducting interviews until further notice. Our attention will be on taking our program
        digital with the launch of a daily mentoring TV show IMAGI-NATION starting Monday 23 March
        - we&apos;d love you to&nbsp;
        <a href="https://www.youtube.com/user/aimementoring" target="_blank" rel="noopener noreferrer">subscribe to our YouTube channel</a>
        &nbsp;and hopefully we can share some love with you during this isolated time.
      </Paragraph>
      <Paragraph>By all means sign up for both and we&apos;ll keep you updated.</Paragraph>
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
.
      &#8212;&nbsp;
      {`If you've mentored before, sign into your AIME account below and
      we'll guide you through the remainder of your application.
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
      Sign up
    </Button>

  </div>
);

export default BeAMentorForm;
