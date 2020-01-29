import React from 'react';
import PropTypes from 'prop-types';
import Anchor from '../common/link';
import styles from './positionsRedirectMessage.module.scss';
import IntercomChat from '../intercom';

const { REACT_APP_PITCH_YOURSELF_TO_AIME_ID } = process.env;

const PositionsRedirectMessage = ({ jobTitle, handleRedirectHide, filteredJobs }) => {
  const checkJobId = filteredJobs.some((job) => job.id === REACT_APP_PITCH_YOURSELF_TO_AIME_ID);

  return (
    <div className={styles.redirectContainer}>
      <div className={styles.redirectHide} onClick={handleRedirectHide} onKeyPress={handleRedirectHide} role="presentation">
        <svg className={styles.iconRedirectClose}>
          <use xlinkHref="#icon-close" />
        </svg>
      </div>
      <div className={styles.redirectMessage}>
        <h2>
          Sorry, it looks like
          <span>
            {jobTitle}
          </span>
          &nbsp; is no longer available.
        </h2>
        <p>
          {`Perhaps there's another job you could see yourself nailing below?
          Have a look through the current opportunities available!`}
        </p>
        <p>
          {`If you want to talk to someone about ${jobTitle} specifically,`}
          <IntercomChat label="reach out to us" />
          {checkJobId && (
            <em>
              or
              {' '}
              <Anchor
                to={`${window.location.pathname}/${REACT_APP_PITCH_YOURSELF_TO_AIME_ID}/Pitch-yourself-into-AIME`}
              >
                Pitch Yourself!
              </Anchor>
            </em>
          )}
        </p>
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
