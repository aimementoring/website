import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import styles from './jobExpired.module.scss';

const JobExpired = ({ positionExpired }) => (
  <div>
    {positionExpired && (
      <div className={styles.jobExpiredContainer}>
        <Paragraph>Sadly this position has expired</Paragraph>
      </div>
    )}
  </div>
);

JobExpired.propTypes = {
  positionExpired: PropTypes.bool,
};

JobExpired.defaultProps = {
  positionExpired: false,
};

export default JobExpired;
