import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import Anchor from '../../common/link';
import './violetVideoCarousel.scss';

const Carousel = dynamic(() => import('../index'));
const VideoButton = dynamic(() => import('../../videoButton'));

const assetsUrl = process.env.REACT_APP_ASSETS_URL;


// THIS IS ONLY USED ON THE HOODED SCHOLAR PAGE
// FEEL FREE TO REMOVE IF WE STOP USING IT :)
const VioletVideoCarousel = ({
  settings,
  refProp,
  title,
  elements,
}) => (
  <section className="section-hoodedScholar gradient-purple" ref={refProp}>
    <div className="full-width-wrap content-panel">
      <div className="scratch-overlay-wrapper top-scratch bg-darkest-purple" />
      <div>
        <div className="aimeVideos">
          <div className="xs-px2 sm-px3 md-px4 lg-px4">
            <h1 className="center block">
              <span className="highlight-text highlight-text-straight aimeVideos-highlight-text">
                {title}
              </span>
            </h1>
            <div className="carousel relative xs-px3 sm-px2 md-px3 lg-px3">
              <Carousel type="multipleSlides" showArrows settings={settings}>
                {elements.map((element) => (
                  <div key={element.bannerImage} className="flex-center flex-wrap">
                    <div className="sm-col sm-col-12 md-col-6 lg-col-6">
                      <div className="video-button grid-tile">
                        <VideoButton video={element.video} />
                        <div
                          className="video-banner mt1 mb0 py2 flex items-center video-button rounded"
                          style={{
                            backgroundImage: `url('${assetsUrl}${element.backgroundImage}`,
                            backgroundPosition: '0 25%',
                            width: '100%',
                            height: '16vh',
                            backgroundSize: 'cover',
                            margin: '0',
                          }}
                        >
                          {assetsUrl !== '' && (
                            <div className="video-banner-overlay center">
                              <img
                                alt=""
                                className="center mx-auto"
                                style={{ width: '70px' }}
                                src={`${assetsUrl}${element.bannerImage}`}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="sm-col sm-col-12 md-col-6 lg-col-6">
                      <div className="pt2 sm-pl0 md-pl2 lg-pl2 xs-text-wrap">
                        <h3 className="aimeVideos-title light inline-block white f-24">
                          {element.title}
                        </h3>
                        <p className="f-16 light c-white block pt0 md-pt1 lg-pt1">
                          {element.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
        <div className="center-align md-left-align py2 my1">
          <Anchor
            to="/know-aime"
            as="/know-aime"
            aria-label="know-aime"
            className="b-white ghost-btn center"
            target="_blank"
          >
              Tell me more
          </Anchor>
        </div>
      </div>
    </div>
  </section>
);

VioletVideoCarousel.propTypes = {
  settings: PropTypes.shape({}),
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

VioletVideoCarousel.defaultProps = {
  refProp: () => {},
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

export default VioletVideoCarousel;
