import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import Anchor from '../../components/common/link';
import styles from './goingGlobal.module.scss';

const VideoButton = dynamic(() => import(/* webpackChunkName 'VideoButton' */ '../../components/videoButton'));

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const Resources = ({ setReference }) => (
  <section
    ref={(el) => setReference('resources', el)}
    className={styles.resourcesSection}
  >
    <div className={styles.resourcesWrapper}>
      <h3>View some of our resources:</h3>
      <div className={styles.panel}>
        <div className={styles.visual}>
          <img
            src={`${ASSETS_URL}/assets/images/going-global/harvardlogo.jpg`}
            alt="Harvard University"
          />
        </div>
        <div className={styles.textcol}>
          <h2>Harvard Case Study</h2>
          <p>
            This research makes it clear that AIME has differentiated itself
            from most not-for-profits in several ways.
          </p>
          <a
            className={styles.btn}
            href="mailto:research@aimementoring.com?subject=Request Harvard Case Study&body=Hello Parul and Faye, I would like to read the Harvard Case Study about AIME. Thank you!"
            aria-label="Request case study"
          >
            Request Case Study
          </a>
        </div>
      </div>
      <div className={styles.panel}>
        <div className={styles.visual}>
          <VideoButton video="https://player.vimeo.com/external/220543875.m3u8?s=fef0be1439c6cd9179ade0e502dea995e0a75a8f" />
          <div
            className={styles.videoThumb}
            style={{
              backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/cogs.jpg')`,
              backgroundSize: 'cover',
              width: '100%',
            }}
          >
            <img
              alt=""
              className="center mx-auto"
              style={{ width: '70px' }}
              src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
            />
          </div>
        </div>

        <div className={styles.textcol}>
          <h2>Cogs</h2>
          <p>
            This magical film brought our story to life. We created it in
            collaboration with M&amp;C Saatchi, Sydney and Oscar-winning
            filmmaker, Laurent Witz, and hope it inspires others to join us in
            changing the way the world works.
          </p>
          <a
            className={styles.btn}
            href="https://player.vimeo.com/external/220543875.hd.mp4?s=918ff965aedae605c201a7f92045fad57cd582ca&profile_id=119"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch Cogs"
          >
            Watch Cogs
          </a>
        </div>
      </div>
      <div className={styles.panel}>
        <div className={styles.visual}>
          <img
            src={`${ASSETS_URL}/assets/images/about-small.jpg`}
            alt="Laughing AIME people"
          />
        </div>
        <div className={styles.textcol}>
          <h2>Letter to the universities</h2>
          <p>
            This letter was co-signed by CEOs and chancellors from leading
            Australian organisations and universities to help us share The
            Golden Ticket opportunity in 2017.
          </p>
          <Anchor className={styles.btn} to="/global-letter/" target="_blank">
            View Letter
          </Anchor>
        </div>
      </div>
    </div>
  </section>
);

Resources.propTypes = {
  setReference: PropTypes.func.isRequired,
};

export default Resources;
