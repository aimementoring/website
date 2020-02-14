
import React from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';

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
    <Title type="h4Title" className="headingJobContent" theme={process.env.REACT_APP_THEME}>
      The Opportunity
    </Title>
    <Paragraph>
      {description}
    </Paragraph>
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
