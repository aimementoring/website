import React from 'react';
import Router from 'next/router';
import Title from 'aime-blueprint/lib/components/title';
import Button from 'aime-blueprint/lib/components/button';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import entriesType from '../entriesType';
import Carousel from '../../carousel';
import {
  removeSpecialCharacters,
  replaceWhiteSpace,
  removeMarkdownLink,
} from '../../../utils/utilities';
import styles from './storiesCarousel.module.scss';

const StoriesCarousel = ({ entries }) => (
  <div className={styles.carouselContainer}>
    <div className={styles.carousel}>
      <Carousel>
        {entries.map(({
          fields: {
            banner, title, contentPreview, contentCards,
          },
          sys: { id },
        }) => {
          const slugTitle = replaceWhiteSpace(removeSpecialCharacters(title), '-').toLowerCase();
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
              contentCopy && (`${removeMarkdownLink(contentCopy.slice(0, 240))}...`)
            ));
          const handleClick = () => Router.push(`/story/${slugTitle}`);
          return (
            <div key={id}>
              <div className={styles.heroBannerStories} style={{ backgroundImage: `url(https:${image})` }}>
                <div className={styles.featuredStory}>
                  <div className={styles.textWrap}>
                    {title && <Title type="h3Title">{title}</Title>}
                    {copy && <Paragraph>{copy}</Paragraph>}
                    <Button onClickFunction={handleClick} theme={process.env.REACT_APP_THEME}>
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  </div>
);

StoriesCarousel.propTypes = { entries: entriesType };
StoriesCarousel.defaultProps = { entries: [] };

export default StoriesCarousel;
