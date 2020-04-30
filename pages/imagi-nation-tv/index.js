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
import styles from './imagi-nation-tv.module.scss';

const DoubleCurvedLine = dynamic(() => import('../../components/imaginationTv/doubleCurvedLine'));
const ImaginationTvCarousel = dynamic(() => import('../../components/imaginationTv/imaginationTvCarousel'));
const IntvPartners = dynamic(() => import('../../components/intvPartners'));
const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;
const SHOP_PRODUCT_LINK = process.env.REACT_APP_SHOP_PRODUCT_LINK;

const ImagiNationTV = () => {
  const scrollToThisRef = useRef(null);
  const [showModal, setModal] = useState(false);
  const toggleModal = () => setModal(!showModal);

  const scrollToPanel = () => {
    if (isClientSide()) {
      const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
      if (isSmoothScrollSupported) {
        scrollToThisRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        scrollToThisRef.current.scrollIntoView(false);
      }
    }
  };

  return (
      
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
        <section ref={scrollToThisRef} className={`${styles.partneringCTASection}`}>
          <Title type="h3Title" className={styles.partneringHeading}>{`PARTNERING WITH IN{TV}`}</Title>
          <div className={`${styles.puppetsChatWrapper}`}>
            <TypeformModal visible={showModal} toggleModal={toggleModal} />
            <div className={`${styles.puppetChat}`}>
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
                  you’re a <strong>company</strong>, 
                  a <strong>school</strong>, <strong>uni</strong> or a
                  future <strong>guest</strong> - we’d love to talk. This show is
                  not about entertainment to pass the time, your funds and the work
                  we do together will be an investment in providing a stage to
                  elevate knowledge.
                </Paragraph>
                <div className={styles.becomeAPartnerBtn}>
                  <IntercomChat label="Get in the game" />
                </div>
              </div>
            </div>
            <div className={`${styles.puppetChat} ${styles.puppetChatSmaller}`}>
              <div>
                {/* <Title type="h4Title" className={styles.puppetTitle}>Already a partner? </Title> */}
                <Button type="text" className={`${styles.typeformAction} ${styles.puppetTitle}`} onClickFunction={toggleModal}>
                  Already a partner?
                  {/* <span>Click here</span> */}
                  &nbsp;We appreciate you
                </Button>
              
              </div>
              <img
                src={`${ASSETS_URL}/assets/images/illustrations/cat@2x.png`}
                alt="Robo Cat"
                className={styles.puppetTalking}
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

export default ImagiNationTV;
