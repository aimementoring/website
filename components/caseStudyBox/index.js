import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

const VideoButton = dynamic(() => import(/* webpackChunkName 'VideoButton' */ '../videoButton'));

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const CaseStudyBox = ({ video, image, name }) => (
  <div className="video-button grid-tile">
    <VideoButton video={`https://player.vimeo.com/external/${video}`} />
    <div className="campaign-grid--inner-tile">
      <div className="center anchor">
        <img
          className="campaign-grid--image"
          src={`${ASSETS_URL}/assets/images/case-studies/${image}`}
          alt={name}
        />
        <h4 className="c-black campaign-grid--title">{name}</h4>
        <div className="watch-prompt">Watch video</div>
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
