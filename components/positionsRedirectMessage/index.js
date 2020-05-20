import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Title from 'aime-blueprint/lib/components/title';
import Anchor from '../common/link';
import styles from './positionsRedirectMessage.module.scss';
import IntercomChat from '../intercom';

const { REACT_APP_PITCH_YOURSELF_TO_AIME_ID } = process.env;

const PositionsRedirectMessage = ({ jobTitle, handleRedirectHide, filteredJobs }) => {
  const pitchYourselfJobAvailable = filteredJobs.some(
    (job) => job.id === REACT_APP_PITCH_YOURSELF_TO_AIME_ID,
  );

  return (
    <div className={styles.redirectContainer}>
      <div className={styles.redirectHide} onClick={handleRedirectHide} onKeyPress={handleRedirectHide} role="presentation">
        <svg className={styles.iconRedirectClose}>
          <use xlinkHref="#icon-close" />
        </svg>
      </div>
      <div className={styles.redirectMessage}>
        <Title type="h4Title" className={styles.redirectHeader} theme={process.env.REACT_APP_THEME}>
          {'Sorry, it seems '}
          <span className={styles.jobTitle}>{jobTitle}</span>
          {' is no longer available.'}
        </Title>
        <Paragraph>
          {`Perhaps there's another job below that you could see yourself nailing?
          Have a look through the opportunities currently available!`}
        </Paragraph>
        <Paragraph>
          {`If you want to talk to someone about the role ${jobTitle} specifically, `}
          <IntercomChat classNames={styles.intercomButton} label="reach out to us" />
          {pitchYourselfJobAvailable && (
            <em>
              {' or '}
              <Anchor
                to={`${window.location.pathname}/${REACT_APP_PITCH_YOURSELF_TO_AIME_ID}/Pitch-yourself-into-AIME`}
              >
                pitch yourself
              </Anchor>
              !
            </em>
          )}
        </Paragraph>
      </div>
    </div>
  );
};

PositionsRedirectMessage.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  filteredJobs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })).isRequired,
  handleRedirectHide: PropTypes.func.isRequired,
};

export default PositionsRedirectMessage;
