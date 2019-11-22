import React from 'react';
import styles from './heroBannerHomepage.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const HeroBannerAustralia = () => (
  <div>
    <div className={styles.heroBannerHomepage}>
      <div className={styles.heroBannerContainer}>
        <div className={styles.bannerWrapper}>
          <div className={styles.bannerContentWrap}>
            <div className={styles.imageWrapper}>
              <img
                src={`${ASSETS_URL}/assets/images/no-new-clothes/RECLAIMED_logo_white.png`}
                alt="Reclaimed"
              />
            </div>
          </div>
          <a
            className={styles.buyButton}
            href="https://shop.aimementoring.com/collections/reclaimed"
            target="_blank"
            rel="noopener noreferrer"
          >
            BUY NOW
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default HeroBannerAustralia;
