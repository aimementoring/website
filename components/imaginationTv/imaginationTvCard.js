import React from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import styles from './imaginationTvCard.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const ImaginationTvCard = ({
  day, title, image, children, color,
}) => (
  <div className={styles.episodePanel}>
    <div
      className={styles.episodeHeader}
      style={{
        backgroundImage: `url(${ASSETS_URL}/assets/images/backgroundImages/imagination_${color}_bg.png)`,
      }}
    >
      <img
        src={`${ASSETS_URL}/assets/images/illustrations/${image}.png`}
        alt="Spinning Earth"
        className={styles.dancingIllo}
      />
      <Title className={styles.headingLockup} type="h3Title" theme={process.env.REACT_APP_THEME}>
        {day}
        <strong>{title}</strong>
      </Title>
    </div>
    <div className={styles.episodeContentInfo}>
      {children}
    </div>
  </div>
);

ImaginationTvCard.propTypes = {
  day: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

export default ImaginationTvCard;
