import React from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import isClientSide from '../../utils/isClientSide';
import styles from './carousel.module.scss';

const defaultSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1000,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
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

const multipleSlideSettings = {
  centerMode: true,
  centerPadding: '2em',
  slidesToShow: 3,
  autoplay: true,
  speed: 500,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode: true,
        centerPadding: '2em',
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '2em',
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
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
      },
    },
  ],
};

const Carousel = ({
  children, type, className, settings, showArrows, carouselClassName,
}) => {
  const ssr = !isClientSide();
  const Slider = dynamic(import('react-slick'), { ssr });

  const newSettings = { ...(type === 'multipleSlides' ? multipleSlideSettings : defaultSettings), ...settings };
  if (showArrows) newSettings.arrows = true;

  return (
    <div className={className}>
      <Slider
        {...newSettings}
        key={ssr ? 'server' : 'client'}
        responsive={ssr ? null : newSettings.responsive}
        className={`${styles.carouselComponent} ${carouselClassName}`}
      >
        {children}
      </Slider>
    </div>
  );
};

Carousel.propTypes = {
  showArrows: PropTypes.bool,
  type: PropTypes.oneOf(['singleSlide', 'multipleSlides']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  settings: PropTypes.shape({}),
  carouselClassName: PropTypes.string,
};

Carousel.defaultProps = {
  showArrows: false,
  className: null,
  type: 'singleSlide',
  settings: {},
  carouselClassName: '',
};

export default Carousel;
