import React from 'react';
import styles from './carouselHeaders.module.scss';

const Testimonials = ({ prev, next }) => (
  <div className={styles.carouselContainer}>
    <button
      type="button"
      className={styles.whiteButton}
      onClick={prev}
    >
      <svg className={styles.testimonialArrowPrev}>
        <use xlinkHref="#icon-arrow-prev" />
      </svg>
    </button>
    <button
      type="button"
      className={styles.whiteButton}
      onClick={next}
    >
      <svg className={styles.testimonialArrowNext}>
        <use xlinkHref="#icon-arrow-next" />
      </svg>
    </button>
  </div>
);

export default Testimonials;
