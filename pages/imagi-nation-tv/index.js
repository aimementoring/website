import React from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import Layout from '../../hocs/basicLayout';
import Anchor from '../../components/common/link';
import FeaturedProduct from '../../components/featuredProduct';
import styles from './styles.module.scss';

const DoubleCurvedLine = dynamic(() => import('../../components/imaginationTv/doubleCurvedLine'));
const ImaginationTvCarousel = dynamic(() => import('../../components/imaginationTv/imaginationTvCarousel'));
const IntvPartners = dynamic(() => import('../../components/intvPartners'));
const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;
const SHOP_PRODUCT_LINK = process.env.REACT_APP_SHOP_PRODUCT_LINK;

const ImagiNationTV = () => (
  <Layout>
    <div className={styles.heroBannerImagiTV}>
      <div className={styles.subpageBannerWrapper}>
        <div className={styles.bannerContent}>
          <div className={styles.imagiBannerHeader}>
            <Title className={styles.welcomeTitle} type="h3Title" theme={process.env.REACT_APP_THEME}>
              Welcome to
              <strong className={styles.hiddenTitle}>Imagi-Nation TV</strong>
              <img
                src={`${ASSETS_URL}/assets/images/logos/logo_imagitv@2x.png`}
                alt="Imagi-Nation TV"
                className={styles.logoImagiTV}
              />
            </Title>
          </div>
          <div className={styles.imagiBannerInfo}>
            <Title type="h3Title" className={styles.infoTitle} theme={process.env.REACT_APP_THEME}>
              Live every weekday 12pm AEST
            </Title>
            <Paragraph>
              {`IMAGI-NATION{TV} is for marginalised kids across the earth’s
              surface to have a daily mentor in their lives. It takes the
              magic of AIME’s Imagination Factory to laptops, phones, and
              homes across the world.`}
            </Paragraph>
          </div>
        </div>
      </div>
      <div className={styles.videoContainerFeature}>
        <Anchor href="https://www.youtube.com/user/aimementoring/live" target="_blank">
          <img
            src={`${ASSETS_URL}/assets/images/banner/imagi-robot-live@2x.gif`}
            alt="Imagi-Nation TV"
            className={styles.videoCoverArt}
          />
        </Anchor>
      </div>
    </div>
    <div className={styles.inTVContentWrapper}>
      <section className={styles.triBtnSet}>
        <Button
          type="link"
          text="Watch live on YouTube"
          theme={process.env.REACT_APP_THEME}
          className={`${styles.imagiBtn}`}
          url="https://www.youtube.com/playlist?list=PLjfNcXcq0TOTTMNfKomUHtgdjliQ2iW80"
        />
        <Button
          type="link"
          className={`${styles.imagiHoodieBtn} ${styles.imagiBtn}`}
          text="Buy the Imagi-Nation Hoodie"
          theme={process.env.REACT_APP_THEME}
          url="https://shop.aimementoring.com/collections/all-products/products/imagi-nation-hoodie"
        />
        <Button
          type="link"
          className={`${styles.imagiDonate} ${styles.imagiBtn}`}
          text="Donate to IN{TV}"
          theme={process.env.REACT_APP_THEME}
          url="/donate"
        />
      </section>
      <DoubleCurvedLine />
      <section className={styles.inTVEpisodesWrapper}>
        <ImaginationTvCarousel />
      </section>
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
      <DoubleCurvedLine />
      <div className={styles.tempIntvPWrapper}>
        <IntvPartners />
      </div>
    </div>
  </Layout>
);

export default ImagiNationTV;
