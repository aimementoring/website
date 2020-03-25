import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import Modal from '../modal';
import styles from './videoPlayer.module.scss';

// HLS info not sure if we want to add this might help performance? - https://www.dacast.com/blog/hls-streaming-protocol/

const VideoPlayer = (props) => {
  const {
    url,
    mute,
    loop,
    title,
    theme,
    byLine,
    listType,
    imageUrl,
    controls,
    autoPlay,
    withModal,
    playListID,
    videoTitle,
    backgroundColor,
    playsInPicture,
    backgroundVimeo,
    videoDescription,
    containerClassName,
    children,
  } = props;
  const [showModal, setShowModal] = useState(false);
  const [urlWithModal, setUrlWithModal] = useState(url);

  const handleModal = () => {
    setShowModal(!showModal);
    setUrlWithModal(url);
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  const videoPlayersConfig = {
    vimeo: {
      playerOptions: {
        loop,
        mute,
        title,
        controls,
        byline: byLine,
        frameborder: false,
        autoplay: autoPlay,
        background: backgroundVimeo,
      },
      preload: true,
    },
    youtube: {
      playerVars: {
        loop,
        rel: 0,
        controls,
        preload: true,
        color: 'white',
        autoplay: autoPlay,
        frameborder: false,
        modestbranding: true,
        listType,
        list:
          playListID && playListID.indexOf('PL') > -1
            ? playListID
            : `PL${playListID}`,
      },
    },
    file: {
      /* attributes: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#Attributes */
      attributes: {
        controls: true,
      },
    },
  };

  const lightMode = withModal && !showModal ? withModal : !withModal && !showModal;

  const withPlaceHolderImage = imageUrl === '' ? lightMode : !showModal && imageUrl;

  const backgroundStyle = {
    backgroundImage: `url('${imageUrl}')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className={styles[`theme-${theme}`]}>
      {!showModal && (
        <div className={`${styles.containerClassName} ${styles.playerContainer}`}>
          {withModal && (
            <CustomPlayIcon
              onClick={handleModal}
              withModal={withModal}
              stylesPlayButton={styles.playButton}
            />
          )}
          {videoTitle && (
            <span className={styles.videoTitle}>{videoTitle}</span>
          )}
          <ReactPlayer
            playsinline
            volume={0.7}
            width="100%"
            height="100%"
            url={url}
            light={withPlaceHolderImage}
            playing={!withModal}
            pip={playsInPicture}
            playIcon={
              withPlaceHolderImage && (
                <CustomPlayIcon
                  onClick={handleModal}
                  withModal={withModal}
                  stylesPlayButton={styles.playButton}
                />
              )
            }
            config={videoPlayersConfig}
            onContextMenu={handleContextMenu}
          />
          {(children || videoDescription) && (
            <div className={styles.videoDescription}>{children || videoDescription}</div>
          )}
        </div>
      )}
      <Modal
        showModal={showModal}
        handleModal={handleModal}
        hideBodyOverflowY
        backgroundColor={!backgroundColor ? null : backgroundColor}
      >
        <div className={`${containerClassName} ${styles.playerContainer}`}>
          <ReactPlayer
            playsinline
            volume={0.7}
            width="100%"
            height="100%"
            playing={showModal}
            url={urlWithModal}
            style={backgroundStyle}
            config={videoPlayersConfig}
            onContextMenu={handleContextMenu}
          />
        </div>
      </Modal>
    </div>
  );
};

VideoPlayer.propTypes = {
  loop: PropTypes.bool,
  mute: PropTypes.bool,
  title: PropTypes.string,
  byLine: PropTypes.bool,
  controls: PropTypes.bool,
  autoPlay: PropTypes.bool,
  withModal: PropTypes.bool,
  listType: PropTypes.string,
  imageUrl: PropTypes.string,
  playListID: PropTypes.string,
  videoTitle: PropTypes.string,
  playsInPicture: PropTypes.bool,
  backgroundVimeo: PropTypes.bool,
  url: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  videoDescription: PropTypes.string,
  containerClassName: PropTypes.string,
  theme: PropTypes.string,
  children: PropTypes.element,
};

VideoPlayer.defaultProps = {
  loop: false,
  mute: false,
  title: '',
  imageUrl: '',
  listType: '',
  byLine: false,
  playListID: '',
  videoTitle: '',
  controls: false,
  autoPlay: false,
  withModal: false,
  videoDescription: '',
  playsInPicture: false,
  backgroundVimeo: false,
  backgroundColor: 'black',
  containerClassName: '',
  theme: 'rainbow',
  children: null,
};

export default VideoPlayer;

const CustomPlayIcon = ({ withModal, onClick, stylesPlayButton }) => {
  const iconProps = {
    alt: 'play video',
    src:
      'https://aime-website.s3.amazonaws.com/assets/images/play-btn-white.svg',
  };
  if (withModal) {
    iconProps.className = stylesPlayButton;
    iconProps.onClick = onClick;
  }
  return <img alt="Play" {...iconProps} />;
};

CustomPlayIcon.propTypes = {
  withModal: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  stylesPlayButton: PropTypes.string.isRequired,
};

CustomPlayIcon.defaultProps = {
  withModal: false,
};