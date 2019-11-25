import React from 'react';
import PropTypes from 'prop-types';

const AmbassadorHeader = ({ prev, next }) => (
  <div className="border-none">
    <p className="h3 inline" style={{ color: '#979797' }}>
      Global Mentors
    </p>
    <button
      type="button"
      className="border-none"
      onClick={prev}
      aria-label="previous"
      style={{ color: '#979797', backgroundColor: 'transparent' }}
    >
      <img alt="arrow prev" src="/arrow-prev.svg" />
    </button>
    <button
      type="button"
      className="border-none"
      style={{ color: '#979797', backgroundColor: 'transparent' }}
      aria-label="next"
      onClick={next}
    >
      <img alt="arrow next" src="/arrow-next.svg" />
    </button>
  </div>
);

AmbassadorHeader.propTypes = {
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

export default AmbassadorHeader;
