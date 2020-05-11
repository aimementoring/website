import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import Layout from '../../hocs/basicLayout';
import VideoPlayer from '../../components/videoPlayer';
import FeaturedProduct from '../../components/featuredProduct';
import WavyDonateSection from '../../components/wavyDonateSection';
import AboutImaginationTV from '../../components/aboutImaginationTV';
import TypeformModal from '../../components/typeformModal';
import IntercomChat from '../../components/intercom';
import scrollToComponent from '../../utils/scrollToComponent';
import styles from './partner-with-intv.module.scss';

const DoubleCurvedLine = dynamic(() => import('../../components/imaginationTv/doubleCurvedLine'));
const ImaginationTvCarousel = dynamic(() => import('../../components/imaginationTv/imaginationTvCarousel'));
const IntvPartners = dynamic(() => import('../../components/intvPartners'));
const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;
const SHOP_PRODUCT_LINK = process.env.REACT_APP_SHOP_PRODUCT_LINK;

const PartnerWithIntv = () => {
  const scrollToThisRef = useRef(null);
  const [showModal, setModal] = useState(false);
  const toggleModal = () => setModal(!showModal);
  const scrollToPanel = () => scrollToComponent(scrollToThisRef);

  return (
    <Layout>
      <div className={styles.heroBannerImagine}>
        <div className={styles.bannerWrapper}>
          <div className={`${styles.bannerContent} ${styles.bannerItem}`}>
            <Title className={styles.welcomeTitle} type="headingLockup" theme={process.env.REACT_APP_THEME}>
              Partnering with
              <strong className={styles.hiddenTitle}>Imagi-Nation TV</strong>
              <img
                src={`${ASSETS_URL}/assets/images/logos/logo_imagitv@2x.png`}
                alt="Imagi-Nation TV"
                className={styles.logoImagiTV}
              />
            </Title>
           
          </div>

          <div className={`${styles.bannerMediaFeature} ${styles.bannerItem} ${styles.welcomeVideoWrapper}`}>
            <img
              src={`${ASSETS_URL}/assets/images/illustrations/cat@2x.png`}
              alt="Robo Cat"
              className={styles.smlPuppetTalking}
            />
          </div>

        </div>
      </div>
      <AboutImaginationTV scrollHandler={scrollToPanel} />
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
        <DoubleCurvedLine />
        <section ref={scrollToThisRef} className={styles.partneringCTASection}>
          <Title type="h3Title" className={styles.partneringHeading}>{'PARTNERING WITH IN{TV}'}</Title>
          <div className={styles.puppetsChatWrapper}>
            <TypeformModal visible={showModal} toggleModal={toggleModal} />
            <div className={styles.puppetChat}>
              <div className={styles.puppetWrap}>
                <img
                  src={`${ASSETS_URL}/assets/images/illustrations/puppet-hope@2x.png`}
                  alt="Hope the Puppet"
                  className={styles.puppetTalking}
                />
              </div>
              <div className={styles.puppetWords}>
                <Title type="h4Title">Hello, I’m hope, let’s make magic together!</Title>
                <Paragraph>
                  We’re looking for partners of all kinds, whether
                  you’re a
                  {' '}
                  <strong>company</strong>
,
                  a
                  {' '}
                  <strong>school</strong>
,
                  {' '}
                  <strong>uni</strong>
                  {' '}
or a
                  future
                  {' '}
                  <strong>guest</strong>
                  {' '}
- we’d love to talk. This show is
                  not about entertainment to pass the time, your funds and the work
                  we do together will be an investment in providing a stage to
                  elevate knowledge.
                </Paragraph>
                <div className={styles.becomeAPartnerBtn}>
                  <IntercomChat label="Get in the game" />
                </div>
              </div>
            </div>
            <div className={styles.puppetChatSmaller}>
              <div>
                <Button
                  type="text"
                  className={`${styles.typeformAction} ${styles.puppetTitle}`}
                >
                  Already a partner?
                  <br />
                  Talk soon :)
                </Button>

              </div>
              <img
                src={`${ASSETS_URL}/assets/images/illustrations/cat@2x.png`}
                alt="Robo Cat"
                className={styles.smlPuppetTalking}
              />
            </div>
          </div>
        </section>
        <DoubleCurvedLine />

        <div className={styles.tempIntvPWrapper}>
          <IntvPartners />
        </div>
      </div>
    </Layout>
  );
};

export default PartnerWithIntv;
