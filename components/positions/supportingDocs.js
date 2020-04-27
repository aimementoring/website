import React from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import styles from './supportingDocs.module.scss';

const SupportingDocs = ({ jobPacks }) => (
  jobPacks && jobPacks.length > 0 && (
    <div className={styles.supportingDocsContainer}>
      <Title type="h4Title" className={styles.headingJobContent} theme={process.env.REACT_APP_THEME}>
        Supporting Docs
      </Title>
      <div className={styles.jobDocumentsWrapper}>
        {jobPacks.map((jobPack) => (
          <a
            href={jobPack.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.jobDownloadLink}
            aria-label="File download"
            key={jobPack.url}
          >
            <i className={styles.fileDownloadIcon}>file_download</i>
            <span className={styles.truncateFileName}>{jobPack.filename}</span>
          </a>
        ))}
      </div>
    </div>
  )
);

SupportingDocs.propTypes = {
  jobPacks: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    filename: PropTypes.string,
  })),
};

SupportingDocs.defaultProps = {
  jobPacks: [],
};

export default SupportingDocs;
