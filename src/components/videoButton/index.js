import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import videojs from 'video.js';
import 'videojs-contrib-hls';
import './index.scss';

const VideoBox = ({ children }) => (
  ReactDOM.createPortal(
    children,
    document.getElementById('aime-parent-video-box')
  )
);

export default class VideoButton extends PureComponent {
  static propTypes = {
    sourceType: PropTypes.string,
    video: PropTypes.string.isRequired,
    fullScreen: PropTypes.bool,
  };

  static defaultProps = {
    sourceType: 'application/x-mpegURL',
    fullScreen: false,
  }

  state = {
    open: false,
    playing: false,
    loaded: false,
    didMount: false,
    showContainer: false,
  };

  componentDidMount() {
    this.setState({ didMount: true })
  }

  componentDidUpdate() {
    if (this.state.didMount && !this.player) {
      const { sourceType, video, fullScreen } = this.props;
      this.parent = this.wrapper.parentNode;
      if (this.parent) {
        this.parent.addEventListener('click', () => {
          if (this.player && !this.player.isFullscreen()) {
            this.player.show();
            this.setState({ showContainer: true });
            this.player.dimension('width', 1800);
            if (fullScreen) this.player.requestFullscreen();
            this.player.play();
          }
        });
      }
      this.player = videojs(this.video, {
        autoplay: false,
        sources: [{
          src: video,
          type: sourceType,
        }],
        controls: true,
      }, () => {
        if (this.player) {
          this.player.enableTouchActivity();
          this.player.hide();
          this.player.on('play', () => {
            this.setState({ playing: true });
          });
          this.player.on('pause', () => {
            this.setState({ playing: false });
          });
          this.player.on('loadeddata', () => {
            this.setState({ loaded: true });
          });
          this.player.on('fullscreenchange', () => {
            if (!this.player.isFullscreen()) {
              this.closeVideo();
            }
          });
          this.player.on('click', (e) => {
            e.stopPropagation();
          });
        }
      });
    }
  }

  componentWillUnmount() {
    if (this.parent) this.parent.removeEventListener('click', this.click);
    if (this.player) this.player.dispose();
  }

  closeVideo = () => {
    if (this.player) {
      this.player.pause();
      this.player.hide();
    }
    this.setState({ showContainer: false });
  }

  render() {
    const { video } = this.props;
    const { playing, loaded, showContainer } = this.state;

    return (
      <div
        data-vjs-player
        ref={(c) => (this.wrapper = c)}
        style={{ visibility: loaded ? 'visible' : 'hidden', }}>
        {this.state.didMount &&
          <VideoBox>
            <div className={`container-video ${!showContainer && 'display-none'}`} onClick={this.closeVideo}>
              <svg className="icon icon-close">
                <use xlinkHref="#icon-close" />
              </svg>
              <video className="video-js" ref={node => this.video = node} playsInline />
              {!playing && <div className="video-arrow">▶</div>}
            </div>
          </VideoBox>
        }
      </div>
    );
  }
}
