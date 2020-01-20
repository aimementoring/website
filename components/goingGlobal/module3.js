import React from 'react';
import PropTypes from 'prop-types';
import styles from './goingGlobal.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const Module3 = ({ handleFinish }) => (
  <div>
    <div className={styles.module2019}>
      <h2>2019</h2>
      <h1>USA - The Hooded Hustle</h1>
      <p>
        {`To crack the USA, we set out with big bold device, a chartered plane.
        We offered the chance for university students to win a Hooded
        Scholarship to lead AIME out of their university for the course of a
        year. They would also win the chance to fly to Australia and be a part
        of the world's first festival of mentoring.`}
      </p>
      <p>
        {`We worked with Advertising groups in New York City to share the
        opportunity via a national campaign, which dropped on October 1 2018.
        And it didn't work.`}
      </p>
      <p>We received one application.</p>
      <p>
        So we hit the road, some of our team from Australia drove door to door
        around America and the Hooded Hustle was born. We learned that we are
        great face to face, and we want to be the offline group that builds
        trust on the ground with people.
      </p>
      <img
        src={`${ASSETS_URL}/assets/images/going-global/usahustle.png`}
        alt="USA Hooded Hustle Infographic"
      />
      <p>
        And now we are at the back end of partnership conversations with 10+
        US universities to look to secure a focused group that will join the
        Global Pilot for the next 3 years.
      </p>
      <div className={styles.popFooter}>
        <span
          className={styles.nextLink}
          onClick={handleFinish}
          onKeyPress={handleFinish}
          role="presentation"
        >
          CHECK OUT WHAT WE’VE ACCOMPLISHED
        </span>
      </div>
    </div>
  </div>
);

Module3.propTypes = {
  handleFinish: PropTypes.func.isRequired,
};

export default Module3;
