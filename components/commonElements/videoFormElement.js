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
    mp4Video,
    webmVideo,
    youtubeVideoLink,
    vimeoVideoLink,
  } = formElement;
  const autoplay = formElement.autoplay !== undefined;
  const loop = formElement.loop !== undefined;
  const muted = formElement.muted !== undefined;
  const controls = formElement.controls !== undefined;

  const youtubeIframeLink = getYoutubeIframeLink(youtubeVideoLink);
  const vimeoIframeLink = getVimeoIframeLink(vimeoVideoLink);

  return (
    <div key={`${name}-${index}`} className="sm-col sm-col-12 md-col-12 my3">
      {mp4Video && webmVideo && (
        <div className="matrix-video-friendly hide-the-line fill-space">
          <video
            autoPlay={autoplay}
            loop={loop}
            muted={muted}
            controls={controls}
            playsinline
            className="w100 matrix-video-friendly"
          >
            <track kind="captions" />
            <source src={mp4Video} type="video/mp4" />
            <source src={webmVideo} type="video/webm" />
          </video>
        </div>
      )}
      {youtubeVideoLink && (
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
      {vimeoVideoLink && (
        <iframe
          title="Vimeo-video"
          width="640"
          height="360"
          src={vimeoIframeLink}
          frameBorder="0"
        />
      )}
      {name.toLowerCase() === 'google photos' && (
        /*
          this is a temp solution.
          Just adding this as the video in the test comes from google photos.
          I am unsure at this stage if there will be any other video platforms
          added for video content.
       */
        <iframe
          title="Google-photos-video"
          width="640"
          height="360"
          src={mp4Video}
          frameBorder="0"
        />
      )}
    </div>
  );
};

VideoFormElement.propTypes = {
  formElement: PropTypes.shape({
    autoplay: PropTypes.bool,
    loop: PropTypes.bool,
    muted: PropTypes.bool,
    controls: PropTypes.bool,
    name: PropTypes.string,
    mp4Video: PropTypes.string,
    webmVideo: PropTypes.string,
    youtubeVideoLink: PropTypes.string,
    vimeoVideoLink: PropTypes.string,
  }).isRequired,
  index: PropTypes.number,
};

VideoFormElement.defaultProps = {
  index: null,
};

export default VideoFormElement;
