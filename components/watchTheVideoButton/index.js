import React from 'react';
import dynamic from 'next/dynamic';

const VideoButton = dynamic(() => import(/* webpackChunkName 'VideoButton' */ '../videoButton'));

const WatchTheVideoButton = () => (
  <div className="flex-column">
    <VideoButton
      video="https://player.vimeo.com/external/268931179.m3u8?s=4d7bec5817b90f9227891dd828e32deb91fa01e7"
    />
    <div className="mt1 pb4 pt2 flex items-center video-button rounded col-12">
      <svg className="icon icon-play">
        <use xlinkHref="#icon-play" />
      </svg>
      <div className="center mx-auto p2">
        <span className="video-btn-text">Watch Our Story</span>
      </div>
    </div>
  </div>
);

export default WatchTheVideoButton;
