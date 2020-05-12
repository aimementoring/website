import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import Layout from '../../hocs/basicLayout';
import FeaturedProduct from '../../components/featuredProduct';
import WavyDonateSection from '../../components/wavyDonateSection';
import TypeformModal from '../../components/typeformModal';
import IntercomChat from '../../components/intercom';
import scrollToComponent from '../../utils/scrollToComponent';
import styles from './imagine.module.scss';

const ImagineCarousel = dynamic(() => import('../../components/imagine/imagineCarousel'));
const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;
const SHOP_PRODUCT_LINK = process.env.REACT_APP_SHOP_PRODUCT_LINK;

const ImagiNationTV = () => {
  const scrollToThisRef = useRef(null);
  const [showModal, setModal] = useState(false);
  const toggleModal = () => setModal(!showModal);
  const scrollToPanel = () => scrollToComponent(scrollToThisRef);

  return (
    <Layout>
      <div className={styles.heroBannerImagiTV}>
        <div className={styles.bannerWrapper}>
          <div className={`${styles.bannerContent} ${styles.bannerItem}`}>
            <Title className={styles.welcomeTitle} type="headingLockup" theme={process.env.REACT_APP_THEME}>
              Introducing
              <strong className={styles.hiddenTitle}>Imagi-Nation TV</strong>
              <img
                src={`${ASSETS_URL}/assets/images/logos/logo_imagine@2x.jpg`}
                alt="Imagine"
                className={styles.logoImagiTV}
              />
            </Title>
            <Paragraph>
              What happens when you combine a pandemic,
              a live YouTube TV show, an open Google Doc and a hoodie?
              <br />
              <br />
              <strong><mark>&nbsp;A feature film, of course.&nbsp;</mark></strong>
            </Paragraph>
            <Button
              theme={process.env.REACT_APP_THEME}
              className={`${styles.watchBtn}`}
              target="_blank"
              type="link"
              onClickFunction={scrollToPanel}
            >
              Get Involved
            </Button>
          </div>
          <div className={`${styles.bannerMediaFeature} ${styles.bannerItem} ${styles.welcomeVideoWrapper}`}>
            <img
              src={`${ASSETS_URL}/assets/images/illustrations/imagi-splosion.png`}
              alt="IMAGI-SPLOSION"
              className={styles.videoCoverArt}
            />
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
                  Let&apos;s create together!
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
          <ImagineCarousel ref={scrollToThisRef} />
        </section>
        <section ref={scrollToThisRef} className={styles.chattyPuppetsSection}>
          <div className={styles.puppetsChatWrapper}>
            <TypeformModal visible={showModal} toggleModal={toggleModal} />
            <div className={styles.puppetChat}>
              <div className={styles.puppetWrap}>
                <img
                  src={`${ASSETS_URL}/assets/images/illustrations/robo_red@2x.png`}
                  alt="Robo Red"
                  className={styles.puppetTalking}
                />
              </div>
              <div className={styles.puppetWords}>
                <Title type="h4Title">Hey hey hey, are you up for it? </Title>
                <Paragraph>
                  This is an experiment that requires ultimate imagination.
                  It will be one of the films that captures the essence of
                  isolation and creation in 2020.
                </Paragraph>
                <div className={styles.becomeAPartnerBtn}>
                  <IntercomChat label="Chat with us" />
                </div>
              </div>
            </div>
            <div className={styles.puppetChatSmaller}>
              <div>
                <Button
                  type="text"
                  className={`${styles.typeformAction} ${styles.puppetTitle}`}
                >
                  Your contribution would be truly spectacular
                </Button>
              </div>
              <img
                src={`${ASSETS_URL}/assets/images/illustrations/queen_lizzy@2x.png`}
                alt="Queen Lizzy"
                className={styles.smlPuppetTalking}
              />
            </div>
          </div>
        </section>
        <WavyDonateSection />
        <section className={styles.featuredProductWrapper}>
          <FeaturedProduct
            imageUrl={`${ASSETS_URL}/assets/images/apparel/hoodie_imagine@2x.jpg`}
            pretitle="Check it out …"
            title="Imagine Hoodie"
            text={`
              Support the making of this film, checkout the Imagine Hoodie for sale over at our apparel shop.
              Every sale from this hoodie will help bring people together from all walks of life to
              co-create something wonderful!
            `}
            linkUrl={`${SHOP_PRODUCT_LINK}/imagi-nation-hoodie`}
            linkText="Buy a Hoodie"
          />
        </section>
      </div>
    </Layout>
  );
};

export default ImagiNationTV;
