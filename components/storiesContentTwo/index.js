/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import dynamic from 'next/dynamic';
import { formatDate } from '../../utils/utilities';
// import contentfulServer from '../../api/contentfulServer';
import Anchor from '../common/link';
import styles from './storiesContentTwo.module.scss';

// const Picture = dynamic(() => import(/* webpackChunkName 'Picture' */ '../picture'));

class StoriesContentTwo extends PureComponent {
  render() {
    const {
      id,
      title,
      slugTitle,
      bannerContent,
      publishDate,
      contentCards,
      contentCreator,
      contentPreview,
    } = this.props;

    const datePublished = formatDate(publishDate);
    const imageDisplayType = bannerContent.displayType;
    const bannerImage = bannerContent.visualMedia.fields.file.url;

    return (
      <>
        <Anchor
          to={`/storyTwo?slug=${slugTitle}`}
          as={`/storyTwo/${slugTitle}`}
          className={styles.articleLink}
        >
          <div>
            <BannerImage
              image={bannerImage}
              displayType={imageDisplayType}
              title={title}
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
              <article key={`article-story-${id}`} className={styles.articleTile}>
                <p className={styles.articleTileLabel}>
                  {contentPreview && contentPreview.fields.previewCopy ? (
                    `${contentPreview.fields.previewCopy.slice(0, 230)}...`
                  )
                    : contentCards.slice(0, 1).map((card) => (
                      card.fields.contentCopy
                        && (`${card.fields.contentCopy.slice(0, 99)} …`)))}
                </p>
                <div className={styles.articleTileLink}>Read more</div>
              </article>
            </div>
          </div>
        </Anchor>
      </>
    );
  }
}

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
  contentPreview: PropTypes.arrayOf(PropTypes.shape({
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
  })),
};

StoriesContentTwo.defaultProps = {
  slugTitle: '',
  publishDate: '',
  contentCreator: '',
  contentPreview: null,
};

const BannerImage = ({ image }) => (
  <Picture className={styles.bannerImage} image={image} thumbnail />
);

BannerImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default StoriesContentTwo;

const Picture = (props) => {
  const {
    image,
    displayType,
    title,
    thumbnail,
  } = props;

  return (
    <>
      {(() => {
        switch (displayType) {
        case 'inline':
          return (
            <img
              alt={title}
              draggable="false"
              className="contentImage"
              src={`https:${image}?fm=jpg&fl=progressive`}
              onMouseDown={(event) => event.preventDefault()}
            />
          );
        case 'full-width':
          return (
            <img
              alt={title}
              draggable="false"
              src={`https:${image}?fm=jpg&fl=progressive`}
              onMouseDown={(event) => event.preventDefault()}
              className={thumbnail ? 'tileBannerImage' : 'bannerImage'}
            />
          );
        case 'breakout':
          return (
            <img
              alt={title}
              draggable="false"
              className=""
              src={`https:${image}?fm=jpg&fl=progressive`}
              onMouseDown={(event) => event.preventDefault()}
            />
          );
        case 'inline-block':
          return (
            <img
              alt={title}
              draggable="false"
              className=""
              src={`https:${image}?fm=jpg&fl=progressive`}
              onMouseDown={(event) => event.preventDefault()}
            />
          );
        case 'run-in':
          return (
            <img
              alt={title}
              draggable="false"
              className=""
              src={`https:${image}?fm=jpg&fl=progressive`}
              onMouseDown={(event) => event.preventDefault()}
            />
          );
        case 'none':
          return (
            <img
              alt={title}
              draggable="false"
              className=""
              src={`https:${image}?fm=jpg&fl=progressive`}
              onMouseDown={(event) => event.preventDefault()}
            />
          );
        default:
          return (
            <img
              alt={title}
              draggable="false"
              className="contentImage"
              src={`https:${image}?fm=jpg&fl=progressive`}
              onMouseDown={(event) => event.preventDefault()}
            />
          );
        }
      })()}
    </>
  );
};

Picture.propTypes = {
  image: PropTypes.string.isRequired,
  displayType: PropTypes.string.isRequired,
  thumbnail: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};
