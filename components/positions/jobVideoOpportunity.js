
import React from 'react';
import PropTypes from 'prop-types';

const JobVideoOpportunity = ({ id, embedVideoId, description }) => (
  <>
    <div
      className={`mb4 js-video-container ${
        id !== 'recqdjbXEa2ipFqlR' ? 'hide' : ''
      }`}
    >
      {embedVideoId && (
        <div
          className="js-job-embed-videos video-container"
          style={{ paddingTop: '0' }}
        >
          <iframe
            title="video-container-position-entry"
            src={`https://player.vimeo.com/video/${embedVideoId}`}
            width="640"
            height="338"
            frameBorder="0"
            webkitAllowFullScreen
            mozallowFullScreen
            allowFullScreen
          />
        </div>
      )}
    </div>
    <h4 className="mb1 feature-font-family regular js-non-unavailable-position c-brand-primary">
      The Opportunity
    </h4>

    <p className="f-14 light lh-large mb4 js-job-description js-non-unavailable-position c-black">
      {description}
    </p>
  </>
);

JobVideoOpportunity.propTypes = {
  id: PropTypes.string,
  embedVideoId: PropTypes.string,
  description: PropTypes.string,
};

JobVideoOpportunity.defaultProps = {
  id: '',
  embedVideoId: null,
  description: '',
};

export default JobVideoOpportunity;
