import React from 'react';
import PropTypes from 'prop-types';
import styles from './ambassadorsBox.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const AmbassadorBox = ({
  image, name, type, description,
}) => (
  <div className={styles.gridTile}>
    <div>
      <img
        className={styles.campaignGridImage}
        src={`${ASSETS_URL}/assets/images/ambassadors/${image}`}
        alt={name}
      />
      <h4 className={styles.h4Title}>{name}</h4>
      <h3 className={styles.h3Title}>{type}</h3>
      <p className={styles.spanText}>{description}</p>
    </div>
  </div>
);

AmbassadorBox.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AmbassadorBox;
