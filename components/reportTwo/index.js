import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { Components } from 'aime-blueprint';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
// import { formatDate } from '../../../utils/utilities';
import styles from './report.module.scss';

const {
  Title,
  Button,
} = Components;

const Picture = dynamic(() => import('../picture'));

const ReportTwo = (props) => {
  const {
    title, reportUrl, bannerImage, contentPreview,
  } = props;

  return (
    <article className={styles.articleTile}>
      <a
        aria-label="banner-image"
        href={reportUrl}
        className="article-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <Picture
            className={`rounded-top ${styles.articleImage}`}
            thumbnail
            image={{
              image: `https:${bannerImage}?fl=progressive`,
              title,
              thumbnail: `https:${bannerImage}?fl=progressive`,
            }}
          />
          <div className={styles.articleDescription}>
            <Title className={styles.articleTileTitle} type="h5Title">{title}</Title>
            {/* <Paragraph className={styles.articleTileTagline}>
              <span key={`pr1-story-entry-${id}`} className={styles.postDate}>
                {datePublished}
              </span>
              <span key={`c-light-grey-span-${id}`}>
                <br />
              </span>
              <span key={`px1-span-${id}`}>
                {`By ${contentCreator}`}
              </span>
            </Paragraph> */}
            <Paragraph className={styles.articleTileLabel}>
              {contentPreview && (
                `${contentPreview.slice(0, 230)}...`)}
            </Paragraph>
            <div>
              <Button
                className={styles.articleTileLink}
                theme="rainbow"
                type="button"
              >
              Read more
                <i className={styles.materialIcons}>&#xE315;</i>
              </Button>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

ReportTwo.propTypes = {
  title: PropTypes.string.isRequired,
  reportUrl: PropTypes.string.isRequired,
  bannerImage: PropTypes.string.isRequired,
  contentPreview: PropTypes.string.isRequired,
};

export default ReportTwo;
