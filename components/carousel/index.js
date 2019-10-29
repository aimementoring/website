import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import LiveHeader from './carouselHeaders/liveHeader';
import AimeVideos from './carouselHeaders/aimeVideos';
import Testimonials from './carouselHeaders/testimonials';
import Wall from './carouselHeaders/wall';
import './slick.scss';

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
