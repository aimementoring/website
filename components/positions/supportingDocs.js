import React from 'react';
import PropTypes from 'prop-types';

const SupportingDocs = ({ jobPacks }) => (
  jobPacks && jobPacks.length > 0 && (
    <div className="js-job-packs block mb3 md-mb4 lg-mb4">
      <h4 className="mb1 feature-font-family regular c-brand-primary">
        Supporting Docs
      </h4>
      <div className="flex flex-wrap js-container">
        {jobPacks.map((jobPack) => (
          <a
            href={jobPack.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bold c-grey feature-font-family text-decoration-none flex mb2 mr4 truncate"
            aria-label="File download"
            key={jobPack.url}
          >
            <i className="material-icons mr2">file_download</i>
            <span className="js-job-packs-filename truncate">{jobPack.filename}</span>
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
