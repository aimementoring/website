import React from 'react';
import '../index.scss'

const LiveHeader = ({ prev, next }) => (
  <div className="bg-darkest-purple center">

    <span className="mr2" onClick={prev}>
      <svg className="icon icon-arrow-white">
        <use xlinkHref="#icon-arrow-prev" />
      </svg>
    </span>
    <span className="aime-live-title bold c-white">AIME Live</span>
    <span type="button" className="ml2" onClick={next}>
      <svg className="icon icon-arrow-white">
        <use xlinkHref="#icon-arrow-next" />
      </svg>
    </span>
  </div>
);

export default LiveHeader;
