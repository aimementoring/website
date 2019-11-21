import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { getAssetsBaseUrl } from '../../services/craftAPI';
import styles from './goingGlobal.module.scss';

const VideoButton = dynamic(() => import(/* webpackChunkName 'VideoButton' */ '../videoButton'));

const TabComponent = () => {
  const assetsUrl = getAssetsBaseUrl();
  const [activeTab, setActiveTab] = useState('tab1');

  const onTabClick = (tabName) => () => {
    setActiveTab(tabName);
  };

  return (
    <div className={styles.tabComponentContainer}>
      <div className={styles.tabDivContainerWrapper}>
        <ul className={styles.tabDivContainer}>
          <li
            className={`${styles.tab} ${activeTab === 'tab1' ? styles.activeTab : ''}`}
            onClick={onTabClick('tab1')}
            onKeyPress={onTabClick('tab1')}
            role="presentation"
          >
            Philosophies
          </li>
          <li
            className={`${styles.tab} ${activeTab === 'tab3' ? styles.activeTab : ''}`}
            onClick={onTabClick('tab3')}
            onKeyPress={onTabClick('tab3')}
            role="presentation"
          >
            Products
          </li>
        </ul>
      </div>
      <div>
        {activeTab === 'tab1' && (
          <div>
            <div className={styles.gridWrapper}>
              <div className={styles.mainGrid}>
                <div className={styles.tile}>
                  <div>
                    <img src={`${assetsUrl}/assets/images/going-global/BRAIN_IMAGINE_THINK_THOUGHT@2x.jpg`} alt="An imaginative brain" />
                  </div>
                  <div className="">
                    <h3 className="tile-title">IMAGINATION</h3>
                    <p className={styles.tileCopy}>
                      We are dreamers. We must be imaginative in our thinking and
                      our decisions must unlock the imagination of the youth.
                    </p>
                  </div>
                </div>

                <div className={styles.tile}>
                  <div>
                    <img src={`${assetsUrl}/assets/images/going-global/FLOWERS_GIVE_GIVING_KIND_LOVE_SHARE_GOOD@2x.jpg`} alt="Kind flowers" />
                  </div>
                  <div className="">
                    <h3 className="tile-title">KINDNESS</h3>
                    <p className={styles.tileCopy}>
                      We always behave with kindness. It is at the heart of
                      everything we do and every interaction we have. We are
                      aggressively kind.
                    </p>
                  </div>
                </div>

                <div className={styles.tile}>
                  <div>
                    <img src={`${assetsUrl}/assets/images/going-global/KEY_UNLOCK@2x.jpg`} alt="Unlock key" />
                  </div>
                  <div className="">
                    <h3 className="tile-title">FAILURE</h3>
                    <p className={styles.tileCopy}>
                      We embrace failure and encourage others to do the same.
                      We must make decisions that encourage failure and growth.
                      No shame at AIME.
                    </p>
                  </div>
                </div>

                <div className={styles.tile}>
                  <div>
                    <img src={`${assetsUrl}/assets/images/going-global/STAR_RAINBOW_COLOUR_HAPPY_FLY_MAGIC@2x.jpg`} alt="Flying star" />
                  </div>
                  <div className="">
                    <h3 className="tile-title">FREEDOM</h3>
                    <p className={styles.tileCopy}>
                      We must work to make the AIME model free to
                       all disadvantaged youth across the globe.
                    </p>
                  </div>
                </div>

                <div className={styles.tile}>
                  <div>
                    <img src={`${assetsUrl}/assets/images/going-global/BUTTERFLY_CHANGE_PROGESS_PROGRESSION_BUG@2x.jpg`} alt="Butterfly" />
                  </div>
                  <div className="">
                    <h3 className="tile-title">CHANGE</h3>
                    <p className={styles.tileCopy}>
                      Every action we work towards should have measurable change.
                    </p>
                  </div>
                </div>

              </div>
            </div>
            <h2>We deliver these philosophies with personality:</h2>
            <div className={styles.gridWrapper}>
              <div className={styles.mainGrid}>
                <div className={styles.tile}>
                  <div>
                    <img src={`${assetsUrl}/assets/images/going-global/SHARK@2x.jpg`} alt="Shark" />
                  </div>
                  <div className="">
                    <h3 className="tile-title">BRAVE</h3>
                    <p className={styles.tileCopy}>
                      A courageous spirit transcends through everything we do.
                    </p>
                  </div>
                </div>
                <div className={styles.tile}>
                  <div>
                    <img src={`${assetsUrl}/assets/images/going-global/HOODIE_CLOTHES_APPAREL@2x.jpg`} alt="Hoodie" />
                  </div>
                  <div className="">
                    <h3 className="tile-title">REBELLIOUS</h3>
                    <p className={styles.tileCopy}>
                      We are not afraid to be provocative and challenge norms.
                    </p>
                  </div>
                </div>
                <div className={styles.tile}>
                  <div>
                    <img src={`${assetsUrl}/assets/images/going-global/CHALLENGES_MOUNTAIN_SUMMIT_FLAG@2x.jpg`} alt="Mountain Summit" />
                  </div>
                  <div className="">
                    <h3 className="tile-title">PIGHEADEDLY HOPEFUL</h3>
                    <p className={styles.tileCopy}>
                      We dare to dream, to imagine a better way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        {activeTab === 'tab3' && (
          <div className={styles.gridWrapper}>
            <div className={styles.mainGrid}>
              <div className={styles.tile}>
                <div>
                  <VideoButton video="https://player.vimeo.com/external/345402563.m3u8?s=bbc567147125c8baa8dff707694d1ca8731d76b3" />
                  <div
                    className={styles.videoThumb}
                    style={{
                      backgroundImage: `url('${assetsUrl}/assets/images/know-aime/magic.jpg')`,
                      backgroundSize: 'cover',
                      width: '100%',
                    }}
                  >
                    <img
                      alt=""
                      className="center mx-auto"
                      style={{ width: '70px' }}
                      src={`${assetsUrl}/assets/images/play-btn-white.svg`}
                    />
                  </div>
                </div>
                <div className="">
                  <h3 className="tile-title">Failure Time</h3>
                  <p className="tile-copy">
                    An explanation of what Failure Time is and why we do it.
                  </p>
                </div>
              </div>
              <div className={styles.tile}>
                <div className="">
                  <VideoButton
                    video="https://player.vimeo.com/external/336726333.m3u8?s=c032b1c2581d9ea36551758f3d6338bc6c1d4467"
                  />
                  <div
                    className={styles.videoThumb}
                    style={{
                      backgroundImage: `url('${assetsUrl}/assets/images/know-aime/dream-team.jpg')`,
                      backgroundSize: 'cover',
                      width: '100%',
                    }}
                  >
                    <img
                      alt=""
                      className="center mx-auto"
                      style={{ width: '70px' }}
                      src={`${assetsUrl}/assets/images/play-btn-white.svg`}
                    />
                  </div>
                </div>
                <div className="">
                  <h3 className="tile-title">GAIME OF LIFE</h3>
                  <p className="tile-copy">
                    {'A preview into what it\'s like to play the GAIME OF LIFE.'}
                  </p>
                </div>
              </div>
              <div className={styles.tile}>
                <div className="">
                  <VideoButton video="https://player.vimeo.com/external/365418045.m3u8?s=805e4a4223d5cfe1a926192d520f5a46caf3d692" />
                  <div
                    className={styles.videoThumb}
                    style={{
                      backgroundImage: `url('${assetsUrl}/assets/images/going-global/pups-v2.jpg')`,
                      backgroundSize: 'cover',
                      width: '100%',
                    }}
                  >
                    <img
                      alt=""
                      className="center mx-auto"
                      style={{ width: '70px' }}
                      src={`${assetsUrl}/assets/images/play-btn-white.svg`}
                    />
                  </div>
                </div>
                <div className="">
                  <h3 className="tile-title">Puppets</h3>
                  <p className="tile-copy">
                    Our AIME puppets giving the latest news headlines.
                  </p>
                </div>
              </div>
              <div className={styles.tile}>
                <div className="">
                  <VideoButton video="https://player.vimeo.com/external/300390506.m3u8?s=699148e28914614fb318c348b4f05479c1c80894" />
                  <div
                    className={styles.videoThumb}
                    style={{
                      backgroundImage: `url('${assetsUrl}/assets/images/know-aime/kindness.jpg')`,
                      backgroundSize: 'cover',
                      width: '100%',
                    }}
                  >
                    <img
                      alt=""
                      className="center mx-auto"
                      style={{ width: '70px' }}
                      src={`${assetsUrl}/assets/images/play-btn-white.svg`}
                    />
                  </div>
                </div>
                <div className="">
                  <h3 className="tile-title">The Hoodie</h3>
                  <p className="tile-copy">
                    The Hoodie - the uniform and symbol of the kid who
                    has been forgotten. A positive unifying mentor outfit.
                  </p>
                </div>
              </div>

              <div className={styles.tile}>
                <div>
                  <img src={`${assetsUrl}/assets/images/going-global/imagination_curriculum.png`} alt="Imagination" className={styles.vidImg} />
                </div>
                <div className="">
                  <h3 className="tile-title">Imagination Curriculum</h3>
                  <p className={styles.tileCopy}>
                    We’ve got so much work in progress happening around
                    the development of this content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
