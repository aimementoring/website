import React from 'react';
import styles from './heroBannerAbout.module.scss';

const HeroBannerAbout = () => (
  <div className={styles.heroBannerAbout}>
    <div className={styles.heroBannerAboutContent}>
      <div className={styles.bannerWrapper}>
        <h1>
          <span className={styles.preText}>We build</span>
          <span className={styles.highlightText}>
            <em>
              Mentoring
              <br />
              <span className={styles.scratchUnderline}>&nbsp;</span>
            </em>
            <br />
            <em>
              Bridges
              <br />
              <span className={styles.scratchUnderline}>&nbsp;</span>
            </em>
          </span>
          <span className={styles.postText}>
            <span className={styles.subText}>between universities</span>
            <br />
            <span>and schools</span>
          </span>
        </h1>
      </div>
    </div>
  </div>
);

export default HeroBannerAbout;
