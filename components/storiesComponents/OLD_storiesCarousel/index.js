import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { StoryBanner } from '../../banner/index';
import { removeMarkdownLink } from '../../../utils/formatting';

const StoriesCarousel = (props) => {
  const {
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
    <div className={slugTitle}>
      <StoryBanner
        title={title}
        buttonText="Read More"
        bannerImage={bannerImage}
        handleClick={handleClick}
        copy={contentPreview && contentPreview.previewCopy
          ? (
            `${contentPreview.previewCopy.slice(0, 230)}...`
          )
          : contentCards && contentCards.slice(0, 1).map((card) => (
            card.fields.contentCopy
              && (`${removeMarkdownLink(card.fields.contentCopy.slice(0, 240))} …`)
          ))}
      />
    </div>
  );
};

StoriesCarousel.defaultProps = {
  contentCards: PropTypes.arrayOf(PropTypes.shape({})),
  bannerImage: '',
};

StoriesCarousel.propTypes = {
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
