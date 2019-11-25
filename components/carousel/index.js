import React from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import './slick.scss';

const Slider = dynamic(() => import(/* webpackChunkName 'Slider' */ 'react-slick'));
const LiveHeader = dynamic(() => import(/* webpackChunkName 'LiveHeader' */ './carouselHeaders/liveHeader'));
const AimeVideos = dynamic(() => import(/* webpackChunkName 'AimeVideos' */ './carouselHeaders/aimeVideos'));
const Testimonials = dynamic(() => import(/* webpackChunkName 'Testimonials' */ './carouselHeaders/testimonials'));
const Wall = dynamic(() => import(/* webpackChunkName 'Wall' */ './carouselHeaders/wall'));

const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 8000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: true,
        infinite: true,
        slidesToScroll: 1,
        swipeToSlide: true,
      },
    },
  ],
};

const Carousel = ({
  children, type, className, settings,
}) => {
  let slider;

  const next = () => {
    slider.slickNext();
  };

  const previous = () => {
    slider.slickPrev();
  };

  const newSettings = { ...defaultSettings, ...settings };

  return (
    <div className={className || `${type}-carousel`}>
      {type === 'live' && <LiveHeader prev={previous} next={next} />}
      {type === 'aimeVideos' && <AimeVideos prev={previous} next={next} />}
      {type === 'testimonials' && <Testimonials prev={previous} next={next} />}
      {type === 'wall' && <Wall prev={previous} next={next} />}
      <Slider {...newSettings} ref={(c) => { slider = c; }}>
        {children}
      </Slider>
    </div>
  );
};

Carousel.propTypes = {
  type: PropTypes.oneOf(['ambassadors', 'live', 'aimeVideos', 'hero', 'testimonials']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  settings: PropTypes.shape({}),
};

Carousel.defaultProps = {
  className: null,
  type: 'hero',
  settings: {},
};

export default Carousel;
