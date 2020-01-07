import React from 'react';
import PropTypes from 'prop-types';

const VideoFormElement = ({ index, formElement }) => {
  const getYoutubeIframeLink = (youtubeLink) => {
    if (youtubeLink) {
      const youtubeArr = youtubeLink.split('/watch?v=');
      return `${youtubeArr[0]}/embed/${youtubeArr[1]}`;
    }
    return '';
  };

  const getVimeoIframeLink = (vimeoLink) => {
    if (vimeoLink) {
      if (vimeoLink.indexOf('player.vimeo.com/video/') === -1) {
        const vimeoArr = vimeoLink.split('vimeo.com/');
        return `${vimeoArr[0]}player.vimeo.com/video/${vimeoArr[1]}`;
      }
      return vimeoLink;
    }
    return '';
  };

  const {
    name,
    videoUrl,
  } = formElement;
  const autoplay = formElement.autoplay !== undefined;
  const loop = formElement.loop !== undefined;
  const muted = formElement.muted !== undefined;
  const controls = formElement.controls !== undefined;

  const isMp4 = videoUrl !== undefined && videoUrl.indexOf('.mp4') > -1;
  const isWebM = videoUrl !== undefined && videoUrl.indexOf('.webm') > -1;
  const isVimeo = videoUrl !== undefined && videoUrl.indexOf('//vimeo') > -1 && videoUrl;
  const isYouTube = videoUrl !== undefined && videoUrl.indexOf('.youtube') > -1 && videoUrl;

  const youtubeIframeLink = isYouTube && getYoutubeIframeLink(isYouTube);
  const vimeoIframeLink = isVimeo && getVimeoIframeLink(isVimeo);


  // sm-col sm-col-12 md-col-12 = outer most div
  // my3 matrix-video-friendly hide-the-line fill-space = container div of video element
  // className="w100 matrix-video-friendly" = video element
  return (
    <div key={`${name}-${index}`} className="video-container">
      {isMp4 && (
        <div>
          <video
            autoPlay={autoplay}
            loop={loop}
            muted={muted}
            controls={controls}
            playsinline="true"
          >
            <track kind="captions" />
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      )}
      {isWebM && (
        <div>
          <video
            autoPlay={autoplay}
            loop={loop}
            muted={muted}
            controls={controls}
            playsinline="true"
          >
            <track kind="captions" />
            <source src={videoUrl} type="video/webm" />
          </video>
        </div>
      )}
      {youtubeIframeLink && (
        <iframe
          title="Youtube-video"
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={youtubeIframeLink}
          frameBorder="0"
        />
      )}
      {vimeoIframeLink && (
        <iframe
          title="Vimeo-video"
          width="640"
          height="360"
          src={vimeoIframeLink}
          frameBorder="0"
        />
      )}
    </div>
  );
};

VideoFormElement.propTypes = {
  formElement: PropTypes.shape({
    videoUrl: PropTypes.string,
    name: PropTypes.string,
    autoplay: PropTypes.bool,
    loop: PropTypes.bool,
    muted: PropTypes.bool,
    controls: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number,
};

VideoFormElement.defaultProps = {
  index: null,
};

export default VideoFormElement;
