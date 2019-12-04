import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import Anchor from '../../common/link';
import './customCarousels.scss';

const Carousel = dynamic(() => import(/* webpackChunkName 'Carousel' */ '../index'));
const VideoCarousel = dynamic(() => import(/* webpackChunkName 'VideoCarousel' */ './videoCarousel'));

const VioletCarousel = ({
  type,
  settings,
  imageArray,
  isVideoCarousel,
  refProp,
  title,
  elements,
}) => (
  <section className="section-hoodedScholar gradient-purple" ref={refProp}>
    <div className="full-width-wrap content-panel">
      <div className="scratch-overlay-wrapper top-scratch bg-darkest-purple" />
      {isVideoCarousel ? (
        <div>
          <VideoCarousel title={title} elements={elements} settings={settings} />
          <div className="center-align md-left-align py2 my1">
            <Anchor
              to="/knowAime"
              as="/know-aime"
              aria-label="know-aime"
              className="b-white ghost-btn center"
              target="_blank"
            >
              Tell me more
            </Anchor>
          </div>
        </div>
      ) : (
        <div className="aimeVideos">
          <div className="xs-px2 sm-px3 md-px4 lg-px4 xs-pt2 sm-pt4">
            <h1 className="center block xs-px2 sm-px2">
              <span className="highlight-text highlight-text-straight aimeVideos-highlight-text pt2 text-wrap mx-auto">
                Some of the people rocking the campaign with us
              </span>
            </h1>
            <div className="carousel relative xs-px3 sm-px2 md-px3 lg-px3">
              <Carousel type={type} settings={settings}>
                {imageArray.map((img) => (
                  <div key={img.img}>
                    <a
                      href={img.link}
                      target="_blank"
                      aria-label="carousel-image"
                      rel="noopener noreferrer"
                      className="flex-center flex-wrap m1"
                      style={{ height: '224px' }}
                    >
                      <img src={img.img} alt="carousel" />
                    </a>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      )}
    </div>
  </section>
);

VioletCarousel.propTypes = {
  type: PropTypes.oneOf(['ambassadors', 'live', 'aimeVideos', 'hero']),
  settings: PropTypes.shape({}),
  imageArray: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string,
    link: PropTypes.string,
  })),
  isVideoCarousel: PropTypes.bool,
  refProp: PropTypes.func,
  elements: PropTypes.arrayOf(PropTypes.shape({
    bannerImage: PropTypes.string,
    video: PropTypes.string,
    backgroundImage: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  })),
  title: PropTypes.string,
};

VioletCarousel.defaultProps = {
  type: 'aimeVideos',
  refProp: () => {},
  isVideoCarousel: true,
  imageArray: [],
  settings: {
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: true,
          infinite: true,
          slidesToScroll: 1,
          swipeToSlide: true,
          slidesToShow: 1,
        },
      },
    ],
  },
  elements: [],
  title: '',
};

export default VioletCarousel;
