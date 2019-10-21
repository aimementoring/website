import React, { useState } from 'react';
import { getAssetsBaseUrl } from '../../services/craftAPI';
import VideoButton from '../videoButton';
import styles from './goingGlobal.module.scss';

const TabComponent = () => {
  const assetsUrl = getAssetsBaseUrl();
  const [activeTab, setActiveTab] = useState('tab1');

  const onTabClick = (tabName) => () => {
    setActiveTab(tabName);
  }

  return (
    <div className={styles.tabComponentContainer}>
      <div className={styles.tabDivContainerWrapper}>
        <ul className={styles.tabDivContainer}>
          <li className={`${styles.tab} ${activeTab === 'tab1' ? styles.activeTab : ''}`} onClick={onTabClick('tab1')}>
            Philosophies
          </li>
          <li className={`${styles.tab} ${activeTab === 'tab2' ? styles.activeTab : ''}`} onClick={onTabClick('tab2')}>
            Processes
          </li>
          <li className={`${styles.tab} ${activeTab === 'tab3' ? styles.activeTab : ''}`} onClick={onTabClick('tab3')}>
            Products
          </li>
        </ul>
      </div>
      {activeTab === 'tab1' &&
        <div>Philosophies Clicked</div>}
      {activeTab === 'tab2' &&
        <div>Processes Clicked</div>}
      {activeTab === 'tab3' &&
        <div className={styles.gridWrapper} >
          <div className={styles.mainGrid} >
            <div className={styles.tile}>
              <div>
                <VideoButton video="https://player.vimeo.com/external/289201000.m3u8?s=8e2156e4c6126f23d949d8ee81f22d4a14e3e2f7" />
                <div className={styles.videoThumb} 
                  style={{
                    backgroundImage: `url('${assetsUrl}/assets/images/know-aime/program-day-thumb.jpg')`,
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
                <h3 className="tile-title">What's a Program Day?</h3>
                <p className="tile-copy">
                  An explanation of what a Program Day is and how they work.
                  </p>
              </div>
            </div>
            <div className={styles.tile}>
              <div className="">
                <VideoButton video="https://player.vimeo.com/external/289201000.m3u8?s=8e2156e4c6126f23d949d8ee81f22d4a14e3e2f7" />
                <div className={styles.videoThumb} style={{
                    backgroundImage: `url('${assetsUrl}/assets/images/know-aime/program-day-thumb.jpg')`,
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
                <h3 className="tile-title">What's a Program Day?</h3>
                <p className="tile-copy">
                  An explanation of what a Program Day is and how they work.
                  </p>
              </div>
            </div>
            <div className={styles.tile}>
              <div className="">
                <VideoButton video="https://player.vimeo.com/external/289201000.m3u8?s=8e2156e4c6126f23d949d8ee81f22d4a14e3e2f7" />
                <div
                  className={styles.videoThumb} 
                  style={{
                    backgroundImage: `url('${assetsUrl}/assets/images/know-aime/program-day-thumb.jpg')`,
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
                <h3 className="tile-title">What's a Program Day?</h3>
                <p className="tile-copy">
                  An explanation of what a Program Day is and how they work.
                  </p>
              </div>
            </div>
            <div className={styles.tile}>
              <div className="">
                <VideoButton video="https://player.vimeo.com/external/289201000.m3u8?s=8e2156e4c6126f23d949d8ee81f22d4a14e3e2f7" />
                <div
                  className={styles.videoThumb} 
                  style={{
                    backgroundImage: `url('${assetsUrl}/assets/images/know-aime/program-day-thumb.jpg')`,
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
                <h3 className="tile-title">What's a Program Day?</h3>
                <p className="tile-copy">
                  An explanation of what a Program Day is and how they work.
                  </p>
              </div>
            </div>
            <div className={styles.tile}>
              <div className="">
                <VideoButton video="https://player.vimeo.com/external/243212684.m3u8?s=741dd0153164d1d5ae369cc5540a35df7662eade" />
                <div
                  className={styles.videoThumb} 
                  style={{
                    backgroundImage: `url('${assetsUrl}/assets/images/know-aime/programday.jpg')`,
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
                <h3 className="tile-title">Day in the Life: Program Day</h3>
                <p className="tile-copy">
                  A look inside how an AIME Program Day actually looks at the University of
                  Wollongong in New South Wales, Australia.
                  </p>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default TabComponent;