import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { formatDate } from '../../utils/utilities';
import Anchor from '../common/link';
import styles from './storiesContentTwo.module.scss';

const Picture = dynamic(() => import(/* webpackChunkName 'Picture' */ '../picture'));

const StoriesContentTwo = (props) => {
  const {
    id,
    title,
    slugTitle,
    bannerContent,
    publishDate,
    contentCards,
    contentCreator,
    contentPreview,
  } = props;

  const datePublished = formatDate(publishDate, 'short');
  const bannerImage = bannerContent.visualMedia.fields.file.url;

  return (
    <>
      <Anchor
        to={`/storyTwo?slug=${slugTitle}`}
        as={`/storyTwo/${slugTitle}`}
        className={styles.articleLink}
      >
        <article key={`article-story-${id}`} className={styles.articleTile}>
          <div>
            <Picture
              className={styles.bannerImage}
              thumbnail
              image={{
                image: `https:${bannerImage}?fm=webp`,
                title,
                thumbnail: `https:${bannerImage}?fm=webp&q=50`,
              }}
            />
            <div
              key={`article-description-${id}`}
              className={styles.articleDescription}
            >
              <h1 className="article-tile-title">{title}</h1>
              <p className="article-tile-tagline">
                <span key={`pr1-story-entry-${id}`} className={styles.postDate}>
                  {datePublished}
                </span>
                <span key={`c-light-grey-span-${id}`} className={styles.slash}>
                        /
                </span>
                <span key={`px1-span-${id}`} className={styles.author}>
                  {`By ${contentCreator}`}
                </span>
              </p>

              <p className={styles.articleTileLabel}>
                {contentPreview && contentPreview.previewCopy ? (
                  `${contentPreview.previewCopy.slice(0, 230)}...`
                )
                  : contentCards.slice(0, 1).map((card) => (
                    card.fields.contentCopy
                        && (`${card.fields.contentCopy.slice(0, 230)} …`)))}
              </p>
              <div className={styles.articleTileLink}>Read more</div>
            </div>
          </div>
        </article>
      </Anchor>
    </>
  );
};

StoriesContentTwo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slugTitle: PropTypes.string,
  publishDate: PropTypes.string,
  contentCreator: PropTypes.string,
  bannerContent: PropTypes.shape({
    displayType: PropTypes.string,
    heading: PropTypes.shape({
      headingText: PropTypes.string,
      type: PropTypes.string,
    }),
    visualMedia: PropTypes.shape({
      fields: PropTypes.shape({
        description: PropTypes.string,
        fileName: PropTypes.string,
        title: PropTypes.string,
        file: PropTypes.shape({
          contentType: PropTypes.string,
          details: PropTypes.shape({
            size: PropTypes.number,
            image: PropTypes.shape({
              height: PropTypes.number,
              width: PropTypes.number,
            }),
          }),
          fileName: PropTypes.string,
          url: PropTypes.string.isRequired,
          title: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
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
  })).isRequired,
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
    visualMediaCarousel: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

StoriesContentTwo.defaultProps = {
  slugTitle: '',
  publishDate: '',
  contentCreator: '',
  contentPreview: null,
};

export default StoriesContentTwo;
