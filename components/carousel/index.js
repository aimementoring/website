import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import isClientSide from '../../utils/isClientSide';
import './slick.scss';

const LiveHeader = dynamic(() => import('./carouselHeaders/liveHeader'));
const AimeVideosHeader = dynamic(() => import('./carouselHeaders/aimeVideos'));
const TestimonialsHeader = dynamic(() => import('./carouselHeaders/testimonials'));

const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
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

const centerModeSettings = {
  centerMode: true,
  centerPadding: '2em',
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '2em',
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '2em',
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '2em',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

const Carousel = ({
  children, type, className, settings, useCenterMode,
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

  const newSettings = { ...(useCenterMode ? centerModeSettings : defaultSettings), ...settings };

  return (
    <div className={className || `${type}-carousel`}>
      {type === 'live' && <LiveHeader prev={previous} next={next} />}
      {type === 'aimeVideos' && <AimeVideosHeader prev={previous} next={next} />}
      {type === 'testimonials' && <TestimonialsHeader prev={previous} next={next} />}
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
  type: PropTypes.oneOf(['ambassadors', 'live', 'aimeVideos', 'hero',
    'testimonials']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  settings: PropTypes.shape({}),
  useCenterMode: PropTypes.bool,
};

Carousel.defaultProps = {
  className: null,
  type: 'hero',
  settings: {},
  useCenterMode: false,
};

export default Carousel;
