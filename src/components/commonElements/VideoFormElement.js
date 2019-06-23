import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class VideoFormElement extends PureComponent {
  static propTypes = {
    formElement: PropTypes.object.isRequired,
    index: PropTypes.number,
  };

  getYoutubeIframeLink(youtubeLink) {
    if (youtubeLink) {
      const youtubeArr = youtubeLink.split("/watch?v=");
      return `${youtubeArr[0]}/embed/${youtubeArr[1]}`;
    }
    return '';
  }

  getVimeoIframeLink(vimeoLink) {
    if (vimeoLink) {
      if (vimeoLink.indexOf("player.vimeo.com/video/") === -1) {
        const vimeoArr = vimeoLink.split("vimeo.com/");
        return `${vimeoArr[0]}player.vimeo.com/video/${vimeoArr[1]}`
      }
      return vimeoLink;
    }
  }


  render() {
    const {
      formElement: {
        name,
        mp4Video,
        webmVideo,
        youtubeVideoLink,
        vimeoVideoLink,
      },
      index,
    } = this.props;
    const autoplay = this.props.formElement.autoplay !== undefined;
    const loop = this.props.formElement.loop !== undefined;
    const muted = this.props.formElement.muted !== undefined;
    const controls = this.props.formElement.controls !== undefined;

    const youtubeIframeLink = this.getYoutubeIframeLink(youtubeVideoLink);
    const vimeoIframeLink = this.getVimeoIframeLink(vimeoVideoLink);

    return (
      <div key={`${name}-${index}`} className="sm-col sm-col-12 md-col-12 my3">
        {mp4Video && webmVideo &&
          <div className="matrix-video-friendly hide-the-line fill-space">
            <video
              autoPlay={autoplay}
              loop={loop}
              muted={muted}
              controls={controls}
              playsinline
              className="w100 matrix-video-friendly"
            >
              <source src={mp4Video} type="video/mp4" />
              <source src={webmVideo} type="video/webm" />
            </video>
          </div>
        }
        {youtubeVideoLink &&
          <iframe
            title="Youtube-video"
            id="ytplayer"
            type="text/html"
            width="640"
            height="360"
            src={youtubeIframeLink}
            frameBorder="0"
          />
        }
        {vimeoVideoLink &&
          <iframe
            title="Vimeo-video"
            width="640"
            height="360"
            src={vimeoIframeLink}
            frameBorder="0"
          />
        }
      </div>
    );
  }
}
