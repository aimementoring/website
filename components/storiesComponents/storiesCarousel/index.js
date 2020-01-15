import React from 'react';
import PropTypes from 'prop-types';
import Anchor from '../../common/link';
import styles from './storiesCarousel.module.scss';

// This could be in blueprint, not sure?

const StoriesCarousel = (props) => {
  const {
    id,
    title,
    slugTitle,
    bannerImage,
    contentCards,
    contentPreview,
  } = props;

  return (
    <div
      className={slugTitle}
    >
      <div
        className={styles.heroBannerStories}
        style={{
          backgroundImage: `url(https:${bannerImage})`,
        }}
      >
        <div
          className={styles.featuredStory}
          key={`story-description-${id}`}
        >
          <div
            className={styles.textWrap}
            key={`carousel-sm-text-wrap-${id}`}
          >
            <p className={styles.tag}>Featured</p>
            <h1 className={styles.title}>{title}</h1>
            {contentPreview && contentPreview.previewCopy
              ? (
                <p className={styles.productTitle}>
                  {`${contentPreview.previewCopy.slice(0, 230)}...`}
                </p>
              )
              : contentCards && contentCards.slice(0, 1).map((card) => (
                <p className={styles.productTitle} key={card.sys.id}>
                  {card.fields.contentCopy
                      && (`${card.fields.contentCopy.slice(0, 240).replace(/[*_>]*/g, '')} …`)}
                </p>
              ))}
            <Anchor
              to={`/story?slug=${slugTitle}`}
              as={`/story/${slugTitle}`}
              className={styles.carouselLink}
            >
              Read More
            </Anchor>
          </div>
        </div>
      </div>
    </div>
  );
};

StoriesCarousel.defaultProps = {
  contentCards: PropTypes.arrayOf(PropTypes.shape({})),
  bannerImage: '',
};

StoriesCarousel.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slugTitle: PropTypes.string.isRequired,
  bannerImage: PropTypes.string,
  contentCards: PropTypes.arrayOf(PropTypes.shape({
    Type: PropTypes.string,
    contentCopy: PropTypes.string,
    displayType: PropTypes.string,
    visualMedia: PropTypes.shape({
      file: PropTypes.shape({
        contentType: PropTypes.string,
        fileName: PropTypes.string,
        url: PropTypes.string,
        title: PropTypes.string,
        details: PropTypes.shape({
          size: PropTypes.number,
          image: PropTypes.shape({
            height: PropTypes.number,
            width: PropTypes.number,
          }),
        }),
      }),
    }),
    visualMediaCarousel: PropTypes.arrayOf(PropTypes.shape({
    })),
  })),
  contentPreview: PropTypes.shape({
    Type: PropTypes.string,
    previewCopy: PropTypes.string,
    displayType: PropTypes.string,
    visualMedia: PropTypes.shape({
      file: PropTypes.shape({
        contentType: PropTypes.string,
        fileName: PropTypes.string,
        url: PropTypes.string,
        title: PropTypes.string,
        details: PropTypes.shape({
          size: PropTypes.number,
          image: PropTypes.shape({
            height: PropTypes.number,
            width: PropTypes.number,
          }),
        }),
      }),
    }),
    visualMediaCarousel: PropTypes.arrayOf(PropTypes.shape({

    })),
  }),
};

StoriesCarousel.defaultProps = {
  contentPreview: null,
};

export default StoriesCarousel;
