import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Title from 'aime-blueprint/lib/components/title';
import styles from './imaginationTvCarousel.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const ImaginationTvCard = ({
  day,
  title,
  image,
  children,
  color,
  episodePanelClass,
  episodeHeaderClass,
  dancingIlloClass,
  headingLockupClass,
  episodeContentInfoClass,
}) => (
  <div className={classNames(styles.episodePanel, episodePanelClass)}>
    <div
      className={classNames(styles.episodeHeader, episodeHeaderClass)}
      style={{
        backgroundImage: `url(${ASSETS_URL}/assets/images/backgroundImages/imagination_${color}_bg.png)`,
      }}
    >
      <img
        src={`${ASSETS_URL}/assets/images/illustrations/${image}.png`}
        alt="Spinning Earth"
        className={classNames(styles.dancingIllo, dancingIlloClass)}
      />
      <Title className={classNames(styles.headingLockup, headingLockupClass)} type="h3Title" theme={process.env.REACT_APP_THEME}>
        {day}
        <strong>{title}</strong>
      </Title>
    </div>
    <div className={classNames(styles.episodeContentInfo, episodeContentInfoClass)}>
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
  episodePanelClass: PropTypes.string,
  episodeHeaderClass: PropTypes.string,
  dancingIlloClass: PropTypes.string,
  headingLockupClass: PropTypes.string,
  episodeContentInfoClass: PropTypes.string,
};

ImaginationTvCard.defaultProps = {
  episodePanelClass: '',
  episodeHeaderClass: '',
  dancingIlloClass: '',
  headingLockupClass: '',
  episodeContentInfoClass: '',
};

export default ImaginationTvCard;
