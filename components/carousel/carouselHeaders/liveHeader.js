import React from 'react';
import PropTypes from 'prop-types';
import './carouselHeaders.scss';

const LiveHeader = ({ prev, next }) => (
  <div className="bg-darkest-purple center">
    <span className="mr2" onClick={prev} role="presentation" onKeyPress={prev}>
      <svg className="icon icon-arrow-white">
        <use xlinkHref="#icon-arrow-prev" />
      </svg>
    </span>
    <span className="aime-live-title bold c-white">AIME Live</span>
    <span type="button" className="ml2" onClick={next} role="presentation" onKeyPress={next}>
      <svg className="icon icon-arrow-white">
        <use xlinkHref="#icon-arrow-next" />
      </svg>
    </span>
  </div>
);

LiveHeader.propTypes = {
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

export default LiveHeader;
