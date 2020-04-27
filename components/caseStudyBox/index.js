import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import styles from './index.module.scss';

const VideoButton = dynamic(() => import('../videoButton'));

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const CaseStudyBox = ({ video, image, name }) => (
  <div className={styles.containerVideo}>
    <VideoButton video={`https://player.vimeo.com/external/${video}`} />
    <div>
      <div className={styles.containerVideoPerson}>
        <img
          className={styles.campaingGrid}
          src={`${ASSETS_URL}/assets/images/case-studies/${image}`}
          alt={name}
        />
        <h4 className={styles.containerTitle}>{name}</h4>
        <div className={styles.watchPrompt}>Watch video</div>
      </div>
    </div>
  </div>
);

CaseStudyBox.propTypes = {
  video: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CaseStudyBox;
