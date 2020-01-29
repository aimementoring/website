import React from 'react';
import PropTypes from 'prop-types';
import styles from './goingGlobal.module.scss';

const Intro = ({ setReference }) => (
  <section
    ref={(el) => setReference('intro', el)}
    className={`${styles.textPanel} ${styles.introPanel}`}
  >
    <p>
      This is a 3 year research opportunity to unlock the potential of
      imagination for the world. 15 years of testing an imagination curriculum
      at the bottom of the earth, and now we want to open up the secret for the
      world. We have $1 Mill of in kind and cash we are putting on the table for
      you. So the question is:
      <br />
      <br />
      <strong>
        Do you want to put your hand up to lead research that could have a
        transformative impact on every education system across our globe,
        unlocking the untapped potential of our marginalised youth, who are
        sitting, waiting, for you?
      </strong>
    </p>
    <p>
      <span className={styles.signatureName}>Jack Manning Bancroft</span>
      <br />
      CEO &amp; Founder
    </p>
  </section>
);

Intro.propTypes = {
  setReference: PropTypes.func.isRequired,
};

export default Intro;
