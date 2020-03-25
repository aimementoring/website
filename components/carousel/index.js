import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import isClientSide from '../../utils/isClientSide';
import './slick.scss';

const LiveHeader = dynamic(() => import('./carouselHeaders/liveHeader'));
const AimeVideos = dynamic(() => import('./carouselHeaders/aimeVideos'));
const Testimonials = dynamic(() => import('./carouselHeaders/testimonials'));
const Wall = dynamic(() => import('./carouselHeaders/wall'));

const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 6000,
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
  const sliderRef = useRef(null);
  const ssr = !isClientSide();
  const Slider = dynamic(import('react-slick'), { ssr });

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  const newSettings = { ...defaultSettings, ...settings };

  return (
    <div className={className || `${type}-carousel`}>
      {type === 'live' && <LiveHeader prev={previous} next={next} />}
      {type === 'aimeVideos' && <AimeVideos prev={previous} next={next} />}
      {type === 'testimonials' && <Testimonials prev={previous} next={next} />}
      {type === 'wall' && <Wall prev={previous} next={next} />}
      <Slider
        {...newSettings}
        key={ssr ? 'server' : 'client'}
        responsive={ssr ? null : newSettings.responsive}
        ref={sliderRef}
      >
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
