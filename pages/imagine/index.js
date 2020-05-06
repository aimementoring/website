import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import Layout from '../../hocs/basicLayout';
import VideoPlayer from '../../components/videoPlayer';
import FeaturedProduct from '../../components/featuredProduct';
import WavyDonateSection from '../../components/wavyDonateSection';
import TypeformModal from '../../components/typeformModal';
import IntercomChat from '../../components/intercom';
// import scrollToComponent from '../../utils/scrollToComponent';
import styles from './style.scss';

const DoubleCurvedLine = dynamic(() => import('../../components/imaginationTv/doubleCurvedLine'));
const ImagineCarousel = dynamic(() => import('../../components/imagine/imagineCarousel'));
const IntvPartners = dynamic(() => import('../../components/intvPartners'));
const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;
const SHOP_PRODUCT_LINK = process.env.REACT_APP_SHOP_PRODUCT_LINK;

const ImagiNationTV = () => {
  const scrollToThisRef = useRef(null);
  const [showModal, setModal] = useState(false);
  const toggleModal = () => setModal(!showModal);
  // const scrollToPanel = () => scrollToComponent(scrollToThisRef);

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
                alt="Imagine"
                className={styles.logoImagiTV}
              />
            </Title>
            <Paragraph>
              What happens when you combine a pandemic,
              a live YouTube TV show, an open Google Doc and a hoodie?
              <br /><br />
              <strong><mark>&nbsp;A feature film, of course.&nbsp;</mark></strong>
            </Paragraph>

            <Button
              theme={process.env.REACT_APP_THEME}
              className={`${styles.watchBtn}`}
              url="/"
              target="_blank"
              type="link"
            >
              Get Involved
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
                ~~~~
                </a>
              </Paragraph>
            </VideoPlayer>
          </div>

        </div>
      </div>
      
      <section className={styles.aboutImagineSection}>
        <div className={styles.aboutInTVWrapper}>
          <div className={styles.aboutParagraphColumn}>
            <Title type="h3Title" className={styles.aboutInTVTitle}>
              Welcome to the latest initiative from AIME
            </Title>
            <Paragraph>
              {`
                Live on IMAGI-NATION{TV} from May 11, we will share a Google Doc
                with the world with the title ‘IMAGINE’, and those in and outside
                of the AIME orbit will be able to come together and write a feature
                film script. Guests on IN{TV} over the four weeks will have the
                chance to engage in the writing experience. So will kids AIME mentors
                across 6 countries. 
              `}
            </Paragraph>
            <Paragraph>
              {`
                Also launching on May 11 will be over 500 creator grants in the shape
                of a hoodie. Those who want to create a scene for the film ‘IMAGINE’ 
                will be able to apply at aimementoring.com to secure themselves an official
                “This Hoodie is a Film” hoodie. This will be their key to submitting a creation into ‘IMAGINE’. 
              `}
            </Paragraph>
          </div>
          <div className={styles.aboutCyclopsColumn}>
            <div className={styles.cyclopsSpeechBubble}>
              <div>
                <Title type="h5Title" className={styles.speechButtonContent}>
                  Come join us &amp; watch the show!
                </Title>
              </div>
              <img
                src={`${ASSETS_URL}/assets/images/illustrations/kyle-cyclops@2x.png`}
                alt="Kyle the Cyclops"
                className={styles.cyclopsImage}
              />
            </div>
          </div>
        </div>
      </section>
      <div className={styles.inTVContentWrapper}>
        <section className={styles.inTVEpisodesWrapper}>
          <ImagineCarousel />
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

export default ImagiNationTV;
