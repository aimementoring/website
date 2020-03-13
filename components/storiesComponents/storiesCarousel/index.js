import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Title from 'aime-blueprint/lib/components/title';
import Button from 'aime-blueprint/lib/components/button';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
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

  const handleClick = () => {
    Router.push(`/story/${slugTitle}`);
  };

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
            <Title type="h3Title">{title}</Title>
            {contentPreview && contentPreview.previewCopy
              ? (
                <Paragraph>
                  {`${contentPreview.previewCopy.slice(0, 230)}...`}
                </Paragraph>
              )
              : contentCards && contentCards.slice(0, 1).map((card) => (
                <Paragraph key={card.sys.id}>
                  {card.fields.contentCopy
                      && (`${card.fields.contentCopy.slice(0, 240).replace(/[*_>[^\]0-9]*/g, '')}…`)}
                </Paragraph>
              ))}
            <Button onClickFunction={handleClick} theme={process.env.REACT_APP_THEME}>
                Read More
            </Button>
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
