import React from 'react';
import dynamic from 'next/dynamic';
import Anchor from '../common/link';
import styles from './heroBannerHomepage.module.scss';

const VideoButton = dynamic(() => import(/* webpackChunkName 'VideoButton' */ '../videoButton'));

const HeroBannerUSA = () => (
  <div>
    <div className={styles.heroBannerHomepage}>
      <div className={styles.bannerWrapperUS}>
        <div className={styles.column}>
          <h1>
            <span className={styles.highlightText}>
              <em>
                If not you…
                {' '}
                <br />
                then who?
              </em>
            </span>
          </h1>
          <div className={styles.homeHeroSubText}>
            <h1 className={styles.hoodedScholarTitle}>The Hooded Scholar</h1>
            <p>
              <Anchor to="/hoodedScholar" as="/hooded-scholar" className={styles.linkBtn}>
                Apply
              </Anchor>
            </p>
            <p className={styles.paragraph}>
              For the first time ever, we’re offering the chance for 200 US College students to have
              the chance to become &quot;The Hooded Scholar&quot; and lead a mentoring movement out
              of their campus to lift kids out of inequality. Click the button to learn about and
              apply for the scholarship. If you are not a college student yourself scroll on down
              for other options.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <VideoButton video="https://player.vimeo.com/external/291824681.m3u8?s=72b6495e46fda3de6fe84bd1a158fed3c311716c" />
          <div className={styles.videoBtn}>
            <svg className={styles.iconPlay}>
              <use xlinkHref="#icon-play" />
            </svg>
            <div className={styles.founder}>
              <h3>Message from Jack</h3>
              <p className={styles.founderParagraph}>AIME Founder &amp; CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroBannerUSA;
