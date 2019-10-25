import React, {
  useRef, useState, useEffect,
} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import videojs from 'video.js';
import 'videojs-contrib-hls';
import './index.scss';

const VideoBox = ({ children }) => {
  if (typeof window !== 'undefined') {
    return ReactDOM.createPortal(
      children,
      document.getElementById('aime-parent-video-box'),
    );
  }
  return null;
};

const VideoButton = ({ sourceType, video, fullScreen }) => {
  const [state, setState] = useState({
    open: false,
    playing: false,
    loaded: false,
    showContainer: false,
  });

  let player = null;
  let parent = null;
  const videoRef = useRef();
  const wrapper = useRef();

  const closeVideo = () => {
    if (player) {
      player.pause();
      player.hide();
    }
    setState({ ...state, showContainer: false });
  };

  const clickAction = () => {
    if (player && !player.isFullscreen()) {
      player.show();
      setState({ ...state, showContainer: true });
      player.dimension('width', 1800);
      if (fullScreen) player.requestFullscreen();
      player.play();
    }
  };

  const setupPlayer = () => {
    if (!player) {
      parent = wrapper.parentNode;
      if (parent) {
        parent.addEventListener('click', clickAction);
      }
      player = videojs(videoRef.current, {
        autoplay: false,
        sources: [{
          src: video,
          type: sourceType,
        }],
        controls: true,
      }, () => {
        if (player) {
          player.enableTouchActivity();
          player.hide();
          player.on('play', () => setState({ ...state, playing: true }));
          player.on('pause', () => setState({ ...state, playing: false }));
          player.on('loadeddata', () => setState({ ...state, loaded: true }));
          player.on('click', (e) => e.stopPropagation());
          player.on('fullscreenchange', () => {
            if (!player.isFullscreen()) closeVideo();
          });
        }
      });
    }
  };

  useEffect(() => {
    setupPlayer();

    const cleanup = () => {
      if (parent) parent.removeEventListener('click', clickAction);
      if (player) player.dispose();
    };
    return cleanup;
  }, []);

  useEffect(() => {
    setupPlayer();
  }, [player]);

  return (
    <>
      <div
        data-vjs-player
        ref={wrapper}
        style={{ visibility: state.loaded ? 'visible' : 'hidden' }}
      >
        <VideoBox>
          <div
            className={`container-video ${!state.showContainer && 'display-none'}`}
            onClick={closeVideo}
            onKeyPress={closeVideo}
            role="presentation"
          >
            <svg className="icon icon-close">
              <use xlinkHref="#icon-close" />
            </svg>
            <video className="video-js" ref={videoRef} playsInline>
              <track default srcLang="en" kind="captions" />
            </video>
            {!state.playing && <div className="video-arrow">▶</div>}
          </div>
        </VideoBox>
      </div>
    </>
  );
};

VideoButton.propTypes = {
  sourceType: PropTypes.string,
  video: PropTypes.string.isRequired,
  fullScreen: PropTypes.bool,
};

VideoButton.defaultProps = {
  sourceType: 'application/x-mpegURL',
  fullScreen: false,
};

export default VideoButton;
