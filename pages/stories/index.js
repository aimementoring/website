import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Layout from '../../hocs/basicLayout';
import Anchor from '../../components/common/link';
import StoriesContent from '../../components/storiesContent';
import Carousel from '../../components/carousel';
import { getEntries } from '../../services/craftAPI';
import storiesList from './storiesList';
import styles from './stories.module.scss';

const Stories = () => {
  const [entries, setEntries] = useState(storiesList.data);

  const fetchStories = async () => {
    const { data } = await getEntries('stories');
    setEntries(data);
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <Layout>
      <div className={styles.carouselContainer}>
        {entries.length && (
          <>
            <StoriesCarousel entries={entries} />
            <StoriesContent stories={entries} />
          </>
        )}
      </div>
    </Layout>
  );
};

const StoriesCarousel = ({ entries }) => (
  <div className={styles.carousel}>
    <Carousel>
      {entries.slice(0, 3).map((carrouselElement) => (
        <div
          key={`carousel-element-container-${carrouselElement.id}`}
          className={`${carrouselElement.slug}`}
        >
          <div
            className={styles.heroBannerStories}
            style={{
              backgroundImage: `url(${carrouselElement.bannerImage[0].image})`,
            }}
          >
            <div
              className={styles.featuredStory}
              key={`story-description-${carrouselElement.id}`}
            >
              <div
                className={styles.textWrap}
                key={`carousel-sm-text-wrap-${carrouselElement.id}`}
              >
                <p className={styles.tag}>Featured</p>
                <h1 className={styles.title}>{carrouselElement.title}</h1>
                {carrouselElement.previewText && (
                  <p className={styles.productTitle}>{`${carrouselElement.previewText}…`}</p>
                )}
                <Anchor to={`/story/${carrouselElement.slug}`} className={styles.carouselLink}>
                  Read More
                </Anchor>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

StoriesCarousel.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    slug: PropTypes.string,
    bannerImage: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.string,
    })),
    title: PropTypes.string,
    previewText: PropTypes.string,
  })).isRequired,
};

export default Stories;
