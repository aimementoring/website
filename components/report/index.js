import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import styles from './report.module.scss';

const Card = dynamic(() => import('../card'));

const Report = (props) => {
  const {
    title, reportUrl, bannerImage, contentPreview,
  } = props;

  return (
    <article key={`article-report-${title}`} className={styles.articleTile}>
      <Card
        title={title}
        href={reportUrl}
        image={bannerImage}
        buttonText="READ MORE"
        contentPreview={contentPreview && (
          `${contentPreview.slice(0, 230)}...`)}
      />
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
