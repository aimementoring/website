import React from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import Layout from '../../hocs/basicLayout';
import VideoPlayer from '../../components/videoPlayer';
import FeaturedProduct from '../../components/featuredProduct';
import WavyDonateSection from '../../components/wavyDonateSection';
import AboutImaginationTV from '../../components/aboutImaginationTV';
import styles from './imagi-nation-tv.module.scss';

const ImaginationTvCarousel = dynamic(() => import('../../components/imaginationTv/imaginationTvCarousel'));
const IntvPartners = dynamic(() => import('../../components/intvPartners'));
const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;
const SHOP_PRODUCT_LINK = process.env.REACT_APP_SHOP_PRODUCT_LINK;

const ImagiNationTV = () => (
  <Layout>
    <div className={styles.heroBannerImagiTV}>
      <div className={styles.bannerWrapper}>
        <div className={`${styles.bannerContent} ${styles.bannerItem}`}>
          <Title className={styles.welcomeTitle} type="headingLockup" theme={process.env.REACT_APP_THEME}>
            Introducing
            <strong className={styles.hiddenTitle}>Imagi-Nation TV</strong>
            <img
              src={`${ASSETS_URL}/assets/images/logos/logo_imagitv@2x.png`}
              alt="Imagi-Nation TV"
              className={styles.logoImagiTV}
            />
          </Title>
          <Paragraph>
            <strong><mark>&nbsp;Live every weekday 12pm AEST&nbsp;</mark></strong>
            <br />
            <br />
            A chance for kids at home to have mentors in their lives to
            {' '}
            <em>Make Sense of Today & Imagine Tomorrow</em>
  .
          </Paragraph>

          <Button
            theme={process.env.REACT_APP_THEME}
            // onClickFunction={scrollHandler}
            className={`${styles.watchBtn}`}
            url="https://www.youtube.com/user/aimementoring/live"
            target="_blank"
            type="link"
          >
            Watch live on YouTube
          </Button>
        </div>

        <div className={`${styles.bannerMediaFeature} ${styles.bannerItem} ${styles.welcomeVideoWrapper}`}>
          <VideoPlayer
            url="https://player.vimeo.com/external/410482407.m3u8?s=ba7787f5d791c00de586ebbe81529c8ad01b835f"
            imageUrl={`${ASSETS_URL}/assets/images/illustrations/intv-hosts@2x.jpg`}
          >
            <Paragraph className="videoCaption">
              <a
                className={styles.textLinkChannel}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCDL9R_msvYDyHF7lx0NEyow?sub_confirmation=1"
              >
              Subscribe to our channel
              </a>
            </Paragraph>
          </VideoPlayer>
        </div>

      </div>
    </div>
    <AboutImaginationTV />
    <div className={styles.inTVContentWrapper}>
      <section className={styles.inTVEpisodesWrapper}>
        <ImaginationTvCarousel />
      </section>
      <WavyDonateSection />
      <section className={styles.featuredProductWrapper}>
        <FeaturedProduct
          imageUrl={`${ASSETS_URL}/assets/images/apparel/hoodie-imagination.jpg`}
          pretitle="Check it out …"
          title="Imagi-Nation Hoodie"
          text={'Support IN{TV}, checkout the Imagi-Nation Hoodie for sale over at our apparel shop. Every sale from this hoodie goes towards keeping mentors in our global virtual classrooms!'}
          linkUrl={`${SHOP_PRODUCT_LINK}/imagi-nation-hoodie`}
          linkText="Buy a Hoodie"
        />
      </section>
      <div className={styles.tempIntvPWrapper}>
        <IntvPartners />
      </div>
    </div>
  </Layout>
);

export default ImagiNationTV;
