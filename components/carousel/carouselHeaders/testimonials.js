import React from 'react';
import PropTypes from 'prop-types';

const Testimonials = ({ prev, next }) => (
  <div className="border-none aimeVideos-buttons">
    <button
      type="button"
      className="border-none"
      onClick={prev}
      aria-label="previous"
      style={{ color: '#ffffff', backgroundColor: 'transparent' }}
    >
      <svg className="icon icon-arrow-prev">
        <use xlinkHref="#icon-arrow-prev" />
      </svg>
    </button>
    <button
      type="button"
      className="border-none"
      style={{ color: '#ffffff', backgroundColor: 'transparent' }}
      aria-label="next"
      onClick={next}
    >
      <svg className="icon icon-arrow-next">
        <use xlinkHref="#icon-arrow-next" />
      </svg>
    </button>
  </div>
);

Testimonials.propTypes = {
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

export default Testimonials;
