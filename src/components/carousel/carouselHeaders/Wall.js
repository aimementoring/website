import React from 'react';
import PropTypes from 'prop-types';
import styles from './carouselHeaders.module.scss';

const Wall = ({ prev, next }) => (
  <div className={styles.carouselContainer}>
    <button
      type="button"
      className={styles.whiteButton}
      onClick={prev}
    >
      <svg className={styles.arrowPrev}>
        <use xlinkHref="#icon-arrow-prev" />
      </svg>
    </button>
    <button
      type="button"
      className={styles.whiteButton}
      onClick={next}
    >
      <svg className={styles.arrowNext}>
        <use xlinkHref="#icon-arrow-next" />
      </svg>
    </button>
  </div>
);

Wall.propTypes = {
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

export default Wall;
