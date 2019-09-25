import React from 'react';
import styles from './carouselHeaders.module.scss';

const AimeVideos = ({ prev, next }) => (
  <div className={styles.carouselContainer}>
    <button
      type="button"
      className={styles.whiteButton}
      onClick={prev}
    >
      <svg className={styles.carouselPrev}>
        <use xlinkHref="#icon-arrow-prev" />
      </svg>
    </button>
    <button
      type="button"
      className={styles.whiteButton}
      onClick={next}
    >
      <svg className={styles.carouselNext}>
        <use xlinkHref="#icon-arrow-next" />
      </svg>
    </button>
  </div>
);

export default AimeVideos;
