import React from 'react';
import dynamic from 'next/dynamic';
import { Components } from 'aime-blueprint';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import PropTypes from 'prop-types';
import { formatDate } from '../../../utils/utilities';
import Anchor from '../../common/link';
import styles from './storiesContent.module.scss';

const {
  Title,
  Button,
} = Components;

const Picture = dynamic(() => import('../../picture'));

const StoriesContent = (props) => {
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
  const bannerImage = bannerContent.visualMedia
    && bannerContent.visualMedia.fields
    && bannerContent.visualMedia.fields.file.url;

  return (
    <article key={`article-story-${id}`} className={styles.articleTile}>
      <Anchor
        to={`/story?slug=${slugTitle}`}
        as={`/story/${slugTitle}`}
        className={styles.articleLink}
      >
        <div>
          <Picture
            className={styles.bannerImage}
            thumbnail
            image={{
              image: `https:${bannerImage}?fl=progressive`,
              title,
              thumbnail: `https:${bannerImage}?fl=progressive`,
            }}
          />
          <div
            key={`article-description-${id}`}
            className={styles.articleDescription}
          >
            <Title type="h5Title">{title}</Title>
            <p className="article-tile-tagline">
              <span key={`pr1-story-entry-${id}`} className={styles.postDate}>
                {datePublished}
              </span>
              <span key={`c-light-grey-span-${id}`}>
                <br />
              </span>
              <span key={`px1-span-${id}`}>
                {`By ${contentCreator}`}
              </span>
            </p>

            <Paragraph>
              {contentPreview && contentPreview.previewCopy ? (
                `${contentPreview.previewCopy.slice(0, 230)}...`
              )
                : contentCards && contentCards.slice(0, 1).map((card) => (
                  card.fields.contentCopy
                  && (
                    `${card.fields.contentCopy.slice(0, 230).replace(/[*_>]*/g, '')}...`
                  )))}
            </Paragraph>
            <div>
              <Button theme="rainbow" type="button" className={styles.articleTileLink}>
                READ MORE
              </Button>
            </div>
          </div>
        </div>
      </Anchor>
    </article>
  );
};

StoriesContent.defaultProps = {
  contentCards: PropTypes.arrayOf(PropTypes.shape({})),
};

StoriesContent.propTypes = {
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
    visualMediaCarousel: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

StoriesContent.defaultProps = {
  slugTitle: '',
  publishDate: '',
  contentCreator: '',
  contentPreview: null,
};

export default StoriesContent;
