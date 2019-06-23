import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StoriesContent from '../../components/storiesContent';
import Carousel from '../../components/carousel';
import getEntries from '../../services/craftAPI';
import { stories } from '../../constants';
import './index.scss';

export default class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = ({ entries: stories.data });
  }

  componentDidMount() {
    getEntries('stories')
      .then(response => {
        this.setState({ entries: response.data });
      });
  }

  getCarrousel = () => {
    const { entries } = this.state;
    return (
      <div className="carousel mb3 md-mb4 lg-mb4">
        <Carousel>
          {entries.slice(0, 3).map(carrouselElement => {
            return (
              <div
                key={`carousel-element-container-${carrouselElement.id}`}
                className={`${carrouselElement.slug}`}>
                <div className="hero-banner--stories hero-banner flex justify-start items-center overlay-dark" style={{ width: "100%", backgroundImage: `url(${carrouselElement.bannerImage[0].image})`, backgroundPosition: "0% 25%" }}>
                  <div className="featured-story story-description" key={`story-description-${carrouselElement.id}`}>
                    <div className="sm-text-wrap" key={`carousel-sm-text-wrap-${carrouselElement.id}`}>
                      <p className="featured-carousel--tag">
                        Featured
                      </p>
                      <h1 className="c-white lh-title mb3">
                        {carrouselElement.title}
                      </h1>
                      {carrouselElement.previewText
                        && (
                          <p className="product-tile-label f-14 regular">
                            {`${carrouselElement.previewText}…`}
                          </p>
                        )
                      }
                      <Link to={`/story/${carrouselElement.slug}`} className="carousel-link product-tile-link c-white bold">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }

  render() {
    const { entries } = this.state;
    // const pepe = data1;
    return (
      <div style={{ minHeight: '800px' }}>
        {entries.length ? this.getCarrousel() : ''}
        {/* TODO get a default markup */}
        {entries.length ? <StoriesContent stories={entries} /> : ''}
        {/* {pepe} */}
      </div>
    );
  }
}
