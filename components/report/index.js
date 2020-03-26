import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Button from 'aime-blueprint/lib/components/button';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import styles from './report.module.scss';

const Picture = dynamic(() => import('../picture'));

const Report = (props) => {
  const {
    title, reportUrl, bannerImage, contentPreview,
  } = props;

  return (
    <article key={`article-report-${title}`} className={styles.articleTile}>
      <a
        aria-label="banner-image"
        href={reportUrl}
        className={styles.articleLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <Picture
            className={styles.articleImage}
            thumbnail
            image={{
              image: `https:${bannerImage}?fl=progressive`,
              title,
              thumbnail: `https:${bannerImage}?fl=progressive`,
            }}
          />
          <div className={styles.articleDescription}>
            <Title type="h5Title">{title}</Title>
            <Paragraph className={styles.articleTileLabel}>
              {contentPreview && (
                `${contentPreview.slice(0, 230)}...`)}
            </Paragraph>
            <div>
              <Button
                type="button"
                theme="rainbow"
                className={styles.articleTileLink}
              >
                READ MORE
              </Button>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

Report.propTypes = {
  title: PropTypes.string.isRequired,
  reportUrl: PropTypes.string.isRequired,
  bannerImage: PropTypes.string.isRequired,
  contentPreview: PropTypes.string.isRequired,
};

export default Report;
