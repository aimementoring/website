import React, { PureComponent } from 'react';
import VideoButton from '../../components/videoButton';
import Testimonials from '../../components/testimonials';
import { getAssetsBaseUrl } from '../../services/craftAPI';
import styles from './theMentor.module.scss';

class TheMentor extends PureComponent {
  state = {
    assetsUrl: getAssetsBaseUrl(),
  };

  render() {
    const { assetsUrl } = this.state;
    return (
      <React.Fragment>
        <div className={styles.fullWrapper}>
          <div className={styles.titleContainer}>
            <div className={styles.bannerWrapper}>
              <div className={styles.column}>
                <h1 className={styles.columnTitle}>
                  <span className={styles.highlightText}>
                    The Mentor.
                  </span>
                </h1>
                <div className={styles.videoButton}>
                  <VideoButton video="https://player.vimeo.com/external/215774212.m3u8?s=1f2ae5e0a63470107633eef7083dea7e70028d65" />
                  <div className={styles.videoBanner}>
                    <img
                      alt=""
                      className={styles.centeredImage}
                      src={`${assetsUrl}/assets/images/play-btn-white.svg`}
                    />
                    <p>Play book launch film</p>
                  </div>
                </div>
                <div className={styles.textWrapper}>
                  <p className={styles.paragraph}>
                    {`The Mentor, by AIME Founder and CEO Jack Manning Bancroft is the story of how
                    it all started. Gain a real insight into contemporary Indigenous Australia.
                    How from humble beginnings a young Indigenous man's journey through university
                    lead to starting a fire that tackles education inequality across Australia and
                    now the world.`}
                  </p>
                </div>
                <div className={styles.linkContainer}>
                  <a
                    target="_blank"
                    href="/products/the-mentor"
                    rel="noopener noreferrer"
                    className={styles.grabACopy}
                  >
                    Grab a copy
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialsContainer}>
            <div className={styles.overlay} />
            <Testimonials />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TheMentor;
