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
import scrollToComponent from '../../utils/scrollToComponent';
import useDonate from '../../hooks/useDonate';

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
  const scrollToPanel = () => scrollToComponent(scrollToThisRef);

  return (
    <Layout>
      <div className={styles.heroBannerImagine}>
        <div className={styles.bannerWrapper}>
          <div className={`${styles.bannerContent} ${styles.bannerItem}`} >
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
              <br /><br />
              <strong><mark>&nbsp;A feature film, of course.&nbsp;</mark></strong>
              <br /><br />
              {`Live on IMAGI-NATION{TV} from May 11, we will share a Google Doc with the
              world with the title ‘IMAGINE’, and those in and outside of the AIME orbit
              will be able to come together and write a feature film script. Guests on IN{TV}
              over the four weeks will have the chance to engage in the writing experience.
              So will kids AIME mentors across 6 countries.`}
            </Paragraph>
            <div className="triBtnSet">
              <Button
                theme={process.env.REACT_APP_THEME}
                className={`${styles.triBtn} ${styles.watchBtn}`}
                url="https://docs.google.com/document/d/1MyE1Xv8OSsFnJLEL2WNhLL0DbsKJfMtmcrrUUa7BOh8/edit"
                target="_blank"
                type="link"
              >
              Write
              </Button>
              <Button
                type="link"
                text="Film"
                theme={process.env.REACT_APP_THEME}
                className={`${styles.triBtn} ${styles.imagiDonate}`}
                url="/positions/rec9lXBVd7ju08wtf/Intern-Production-Coordinator"
              />
              <Button
                type="link"
                text="Fund"
                className={`${styles.triBtn} ${styles.imagiHoodieBtn}`}
                theme={process.env.REACT_APP_THEME}
                onClickFunction={toggleDonateModal}

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
                  Let's create together!
                </Title>
              </div>
              <img
                src={`${ASSETS_URL}/assets/images/illustrations/kyle-cyclops@2x.png`}
                alt="Kyle the Cyclops"
                className={styles.cyclopsImage}
              />
            </div>
            <Paragraph>
              Or if you have any questions,&nbsp;
              <IntercomChat label="chat with us" />
            </Paragraph>
          </div>

          <div className={`${styles.bannerMediaFeature} ${styles.bannerItem} ${styles.welcomeVideoWrapper}`}>
            <div className={styles.bannerImageRotate}>
              <img
                src={`${ASSETS_URL}/assets/images/banner/partnering.webp`}
                alt="Write it, Film it, Fund it"
              />
            </div>
          </div>

        </div>
      </div>
      
    </Layout>
  );
};

export default ImagiNationTV;
