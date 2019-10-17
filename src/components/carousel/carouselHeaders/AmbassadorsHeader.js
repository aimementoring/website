import React from 'react';
import styles from './carouselHeaders.module.scss';

const AmbassadorHeader = ({ prev, next }) => (
  <div className={styles.carouselContainer}>
    <p className={styles.carouselTitle}>
      Global Mentors
    </p>
    <button
      type="button"
      className={styles.grayButton}
      onClick={prev}
    >
      <img alt={styles.arrowPrev} src="/arrow-prev.svg" />
    </button>
    <button
      type="button"
      className={styles.grayButton}
      onClick={next}
    >
      <img alt={styles.arrowNext} src="/arrow-next.svg" />
    </button>
  </div>
);

export default AmbassadorHeader;
