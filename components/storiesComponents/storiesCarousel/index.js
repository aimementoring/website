import React from 'react';
import Router from 'next/router';
import entriesType from '../entriesType';
import Carousel from '../../carousel';
import { StoryBanner } from '../../banner';
import { removeMarkdown } from '../../../utils/formatting';
import styles from './storiesCarousel.module.scss';

const StoriesCarousel = ({ entries }) => (
  <div className={styles.carouselContainer}>
    <div className={styles.storyCarousel}>
      <Carousel carouselClassName={styles.storyHeaderCarousel}>
        {entries.map(({
          fields: {
            banner, title, slug, contentPreview, contentCards,
          },
          sys: { id },
        }) => {
          const image = banner
            && banner.fields.visualMedia
            && banner.fields.visualMedia.fields
            && banner.fields.visualMedia.fields.file
            && banner.fields.visualMedia.fields.file.url;
          const previewCopy = contentPreview
            && contentPreview.fields
            && contentPreview.fields.previewCopy;
          const copy = previewCopy
            ? `${previewCopy.slice(0, 230)}...`
            : contentCards && contentCards.slice(0, 1).map(({ fields: { contentCopy } }) => (
              contentCopy && (`${removeMarkdown(contentCopy).slice(0, 240)}...`)
            ));
          const handleClick = () => Router.push(`/story/${slug}`);
          return (
            <StoryBanner
              key={id}
              copy={copy}
              title={title}
              buttonText="Read more"
              handleClick={handleClick}
              bannerImage={image}
            />
          );
        })}
      </Carousel>
    </div>
  </div>
);

StoriesCarousel.propTypes = { entries: entriesType };
StoriesCarousel.defaultProps = { entries: [] };

export default StoriesCarousel;
