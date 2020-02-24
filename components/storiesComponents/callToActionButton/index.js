import React from 'react';
import PropTypes from 'prop-types';
import styles from './CallToActionButton.module.scss';

const CallToActionButton = (props) => {
  const { label, externalUrl } = props;

  return (
    <div className={styles.buttonContainer}>
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          border: '0',
          alignSelf: 'center',
        }}
        className={styles.postElementLink}
      >
        {label}
      </a>
    </div>
  );
};

CallToActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  externalUrl: PropTypes.string.isRequired,
};

// CallToActionButton.defaultProps = {};

export default CallToActionButton;
