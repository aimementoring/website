import React from 'react';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import './beAMentor.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const BeAMentorForm = () => (
  <div className="form-container mx-auto px3">
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
      We&apos;ve got a team of gems, updating our mentor 2020 program&nbsp;
      <strong>
        right now
      </strong>
      ! So please hold tight with us a little bit longer and we&apos;ll
      have this page updated with your 2020 mentor application options
      before you know it.
      <br />
      <br />
      <strong>
        Thanks team, we love you.
      </strong>
    </Paragraph>
  </div>
);

export default BeAMentorForm;
