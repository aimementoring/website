import React from 'react';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Button from 'aime-blueprint/lib/components/button';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import PropTypes from 'prop-types';
import { formatDate } from '../../utils/formatting';
import Anchor from '../common/link';
import styles from './card.module.scss';

const Picture = dynamic(() => import('../picture'));
const VideoButton = dynamic(() => import('../videoButton'));

const Card = (props) => {
  const {
    cardId,
    title,
    urlTo,
    urlAs,
    href,
    image,
    video,
    buttonText,
    publishDate,
    contentCreator,
    contentPreview,
    type,
  } = props;
  const datePublished = publishDate && formatDate(publishDate, 'short');
  const anchorProps = {
    className: type === 'spotlight' ? styles.spotlightArticleLink : styles.articleLink,
    as: urlAs || 'banner-image',
    to: href || urlTo,
  };
  if (href) anchorProps.target = '_blank';
  const withVideo = video && image;
  const ContainerComponent = withVideo ? 'div' : Anchor;

  return (
    <ContainerComponent {...anchorProps}>
      <div>
        {withVideo && (
          <VideoButton video={video} />
        )}
        {image && (
          <Picture
            className={video ? styles.bannerVideo : styles.bannerImage}
            thumbnail
            image={{
              image: `https:${image}?fl=progressive`,
              title,
              thumbnail: `https:${image}?fl=progressive`,
            }}
          />
        )}
        {withVideo && (
          <img
            alt=""
            className={styles.videoIcon}
            src={`${process.env.REACT_APP_ASSETS_URL}/assets/images/play-btn-white.svg`}
          />
        )}
        <div
          key={`article-description-${cardId}`}
          className={classNames(styles.articleDescription, {
            [styles.withVideo]: withVideo,
          })}
        >
          {title && (
            <Title theme={process.env.REACT_APP_THEME} type="h5Title">{title}</Title>
          )}
          <Paragraph theme={process.env.REACT_APP_THEME}>
            {datePublished && (
              <span key={`pr1-story-entry-${cardId}`} className={styles.postDate}>
                {datePublished}
              </span>
            )}
            {contentCreator && (
              <>
                <span key={`c-light-grey-span-${cardId}`}>
                  <br />
                </span>
                <span key={`px1-span-${cardId}`}>
                  {`By ${contentCreator}`}
                </span>
              </>
            )}
          </Paragraph>
          {contentPreview && contentPreview.length > 0 && (
            <Paragraph theme={process.env.REACT_APP_THEME} className={styles.contentPreview}>
              {contentPreview}
            </Paragraph>
          )}
          <div className={withVideo && styles.rightButton}>
            <Button theme={process.env.REACT_APP_THEME} type="button" className={type === 'spotlight' ? styles.spotlightButton : styles.articleTileLink}>
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </ContainerComponent>
  );
};

Card.defaultProps = {
  cardId: '-',
  buttonText: 'Click Me!',
  title: '',
  urlTo: '',
  urlAs: '',
  href: '',
  image: '',
  video: '',
  publishDate: '',
  contentCreator: '',
  contentPreview: [] || '',
  type: '',
};

Card.propTypes = {
  cardId: PropTypes.string,
  title: PropTypes.string,
  urlTo: PropTypes.string,
  urlAs: PropTypes.string,
  href: PropTypes.string,
  image: PropTypes.string,
  video: PropTypes.string,
  buttonText: PropTypes.string,
  publishDate: PropTypes.string,
  contentCreator: PropTypes.string,
  contentPreview: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
  type: PropTypes.string,
};

export default Card;
