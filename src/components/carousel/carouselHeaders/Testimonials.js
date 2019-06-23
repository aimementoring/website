import React from 'react';

const Testimonials = ({ prev, next }) => (
  <div className="border-none aimeVideos-buttons">
    <button type="button" className="border-none" onClick={prev} style={{ color: "#ffffff", backgroundColor: "transparent", }}>
      <svg className="icon icon-arrow-prev">
        <use xlinkHref="#icon-arrow-prev" />
      </svg>
    </button>
    <button type="button" className="border-none" style={{ color: "#ffffff", backgroundColor: "transparent", }} onClick={next}>
      <svg className="icon icon-arrow-next">
        <use xlinkHref="#icon-arrow-next" />
      </svg>
    </button>
  </div>
);

export default Testimonials;
