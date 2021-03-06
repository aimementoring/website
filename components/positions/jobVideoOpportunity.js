
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import styles from './jobVideoOpportunity.module.scss';

const JobVideoOpportunity = ({ id, embedVideoId, description }) => (
  <>
    <div
      className={classNames(styles.jobVideoContainer, {
        [styles.hidden]: id !== 'recqdjbXEa2ipFqlR',
      })}
    >
      {embedVideoId && (
        <div className={styles.videoContainer}>
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
    <Paragraph>{description}</Paragraph>
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
