import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import CustomPlayIcon from './customPlayIcon';
import Modal from '../modal';
import styles from './videoPlayer.module.scss';

const VideoPlayer = (props) => {
  const {
    url,
    mute,
    loop,
    title,
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

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const config = {
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

  const reactPlayerProps = {
    playsinline: true,
    volume: 0.7,
    width: '100%',
    height: '100%',
    config,
    url,
    onContextMenu: (event) => event.preventDefault(),
  };

  return (
    <div>
      {!showModal && (
        <div className={`${styles.containerClassName} ${styles.playerContainer}`}>
          {withModal && (
            <CustomPlayIcon
              onClick={handleModal}
              stylesPlayButton={styles.playButton}
              withModal
            />
          )}
          {videoTitle && <span className={styles.videoTitle}>{videoTitle}</span>}
          <ReactPlayer
            {...reactPlayerProps}
            light={withPlaceHolderImage}
            playing={!withModal}
            pip={playsInPicture}
            playIcon={
              withPlaceHolderImage && (
                <CustomPlayIcon
                  onClick={handleModal}
                  stylesPlayButton={styles.playButton}
                  withModal={withModal}
                />
              )
            }
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
            {...reactPlayerProps}
            playing={showModal}
            style={backgroundStyle}
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
  videoDescription: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
  containerClassName: PropTypes.string,
  children: PropTypes.node,
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
  children: null,
};

export default VideoPlayer;
