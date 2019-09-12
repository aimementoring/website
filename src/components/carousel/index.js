import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import LiveHeader from './carouselHeaders/LiveHeader';
import AimeVideos from './carouselHeaders/AimeVideos';
import Testimonials from './carouselHeaders/Testimonials';
import Wall from './carouselHeaders/Wall';
import './index.scss';

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

export default class Carousel extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['global-mentors', 'ambassadors', 'live', 'aimeVideos', 'hero', 'testimonials']),
    children: PropTypes.array.isRequired,
    className: PropTypes.string,
    settings: PropTypes.object,
  };

  static defaultProps = {
    className: null,
    type: 'hero',
  };


  next = () => {
    this.slider.slickNext();
  }

  previous = () => {
    this.slider.slickPrev();
  }

  render() {
    const { children, type, className, settings } = this.props;
    const newSettings = { ...defaultSettings, ...settings }

    return (
      <div className={className || `${type}-carousel`}>
        {/* The header is already present in the hompage */}
        {/* {type === 'global-mentors' && <AmbassadorsHeader prev={this.previous} next={this.next} />}  */}
        {type === 'live' && <LiveHeader prev={this.previous} next={this.next} />}
        {type === 'aimeVideos' && <AimeVideos prev={this.previous} next={this.next} />}
        {type === 'testimonials' && <Testimonials prev={this.previous} next={this.next} />}
        {type === 'wall' && <Wall prev={this.previous} next={this.next} />}
        <Slider {...newSettings} ref={c => (this.slider = c)}>
          {children}
        </Slider>
      </div>
    );
  }
}
