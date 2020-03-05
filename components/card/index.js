import React from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Button from 'aime-blueprint/lib/components/button';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import PropTypes from 'prop-types';
import { formatDate } from '../../utils/utilities';
import Anchor from '../common/link';
import styles from './card.module.scss';

const Picture = dynamic(() => import('../picture'));

const Card = (props) => {
  const {
    cardId,
    title,
    urlTo,
    urlAs,
    href,
    image,
    buttonText,
    publishDate,
    contentCreator,
    contentPreview,
  } = props;

  const datePublished = publishDate && formatDate(publishDate, 'short');
  return (
    <>
      {href
        ? (
          <a
            aria-label="banner-image"
            href={href}
            className={styles.articleLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              {image
          && (
            <Picture
              className={styles.bannerImage}
              thumbnail
              image={{
                image: `https:${image}?fl=progressive`,
                title,
                thumbnail: `https:${image}?fl=progressive`,
              }}
            />
          )}
              <div
                key={`article-description-${cardId}`}
                className={styles.articleDescription}
              >
                {title
            && (
              <Title type="h5Title">{title}</Title>
            )}
                <Paragraph>
                  {datePublished
              && (
                <span key={`pr1-story-entry-${cardId}`} className={styles.postDate}>
                  {datePublished}
                </span>
              )}
                  {contentCreator
              && (
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
                {contentPreview
            && (
              <Paragraph>
                {contentPreview}
              </Paragraph>
            )}
                <div>
                  <Button theme="rainbow" type="button" className={styles.articleTileLink}>
                    {buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </a>
        ) : (
          <Anchor
            to={urlTo}
            as={urlAs}
            className={styles.articleLink}
          >
            <div>
              {image
          && (
            <Picture
              className={styles.bannerImage}
              thumbnail
              image={{
                image: `https:${image}?fl=progressive`,
                title,
                thumbnail: `https:${image}?fl=progressive`,
              }}
            />
          )}
              <div
                key={`article-description-${cardId}`}
                className={styles.articleDescription}
              >
                {title
            && (
              <Title type="h5Title">{title}</Title>
            )}
                <Paragraph>
                  {datePublished
              && (
                <span key={`pr1-story-entry-${cardId}`} className={styles.postDate}>
                  {datePublished}
                </span>
              )}
                  {contentCreator
              && (
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
                {contentPreview
            && (
              <Paragraph>
                {contentPreview}
              </Paragraph>
            )}
                <div>
                  <Button theme="rainbow" type="button" className={styles.articleTileLink}>
                    {buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </Anchor>
        )}
    </>
  );
};

Card.defaultProps = {
  cardId: '-',
  buttonText: 'Click Me!',
};

Card.propTypes = {
  cardId: PropTypes.string,
  title: PropTypes.string.isRequired,
  urlTo: PropTypes.string.isRequired,
  urlAs: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  publishDate: PropTypes.string.isRequired,
  contentCreator: PropTypes.string.isRequired,
  contentPreview: PropTypes.string.isRequired,
};

export default Card;
