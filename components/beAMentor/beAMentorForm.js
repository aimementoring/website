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
      The doors to the AIME Dream Factory are now wide open and we're
      hoping to find many incredible individuals passing through, striving
      to be a mentor. Trust us when we say,&nbsp;
      <mark>
        the opportunities when you mentor at AIME are extensive
      </mark>
      &nbsp;and go further than you would think.
    </Paragraph>
    <Paragraph>
      If you're new to mentoring with us, <strong>apply now</strong>
      &nbsp;&#8212; it can be an
      extensive application process but hopefully it's a fun one too.
      If you've mentored before, sign into your AIME account below and
      we'll guide you through the remainder of your application.
      Good luck!
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
