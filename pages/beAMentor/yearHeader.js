import React from 'react';
import Title from 'aime-blueprint/lib/components/title';
import styles from './beAMentor.module.scss';

const YearHeader = () => (
  <div className={styles.beAMentorYearHeader}>
    <Title type="headingLockup" className={styles.yearWelcomeHeading} theme={process.env.REACT_APP_THEME}>
      {`Bring on ${new Date().getFullYear()},`}
      <strong>
        Change is
        <br />
        gonna come
      </strong>
    </Title>
  </div>
);

export default YearHeader;
