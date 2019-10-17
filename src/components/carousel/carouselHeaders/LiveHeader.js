import React from 'react';
import styles from './carouselHeaders.module.scss';

const LiveHeader = ({ prev, next }) => (
  <div className={styles.purpleContainer}>
    <span className={styles.leftContent} onClick={prev}>
      <svg className={styles.whiteArrow}>
        <use xlinkHref="#icon-arrow-prev" />
      </svg>
    </span>
    <span className={styles.aimeLive}>AIME Live</span>
    <span type="button" className={styles.rightContent} onClick={next}>
      <svg className={styles.whiteArrow}>
        <use xlinkHref="#icon-arrow-next" />
      </svg>
    </span>
  </div>
);

export default LiveHeader;
