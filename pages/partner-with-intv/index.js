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
import MovingWaves from '../../components/movingWaves';
// import scrollToComponent from '../../utils/scrollToComponent';
import styles from './partner-with-intv.module.scss';

const DoubleCurvedLine = dynamic(() => import('../../components/imaginationTv/doubleCurvedLine'));
const IntvHostsCarousel = dynamic(() => import('../../components/imaginationTv/intvHostsCarousel'));
const ImaginationTvCarousel = dynamic(() => import('../../components/imaginationTv/imaginationTvCarousel'));
const IntvPartners = dynamic(() => import('../../components/intvPartners'));
const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;
const SHOP_PRODUCT_LINK = process.env.REACT_APP_SHOP_PRODUCT_LINK;

const PartnerWithIntv = () => {
  // const scrollToThisRef = useRef(null);
  const [showModal, setModal] = useState(false);
  const toggleModal = () => setModal(!showModal);
  // const scrollToPanel = () => scrollToComponent(scrollToThisRef);

  return (
    <Layout>

      <input type="checkbox" className={styles.drawerToggle} name="drawerToggle" />
      <label htmlFor="drawerToggle" className={styles.drawerToggleLabel}>Go to section</label>
      <nav className={styles.sideDrawerNav}>
        <ul className={styles.sideMenu}>
          <li><Title type="h5Title">Heading here</Title></li>
          <li><a href="#">The hosts</a></li>
          <li><a href="#">The format</a></li>
          <li><a href="#">The mentors</a></li>
          <li><a href="#">Background</a></li>
        </ul>
      </nav>

      <div className={styles.mainSectionWrapper}>
        <div className={styles.heroBannerPartnerIntv}>
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
                src={`${ASSETS_URL}/assets/images/illustrations/red-hooded-robot@2x.png`}
                alt="Red Hooded Robot Friend"
                className={styles.smlPuppetTalking}
              />
            </div>
          </div>
          <MovingWaves />
        </div>
        <section className={`${styles.sectionPanel} ${styles.panelTwoCol}`}>
          <div className={`${styles.panelCol}`}>
            <Title type="h4Title" className={styles.aboutInTVTitle}>
              {`
              WELCOME TO AIME’S IMAGI-NATION{TV}
              & IMAGI-NATION{CLASSROOM} EXPERIENCE
              FOR KIDS ACROSS THE EARTH’S SURFACE
            `}
            </Title>

          </div>
          <div className={`${styles.bannerMediaFeature} ${styles.bannerItem} ${styles.panelCol}`}>
            <VideoPlayer
              url="https://player.vimeo.com/external/410482407.m3u8?s=ba7787f5d791c00de586ebbe81529c8ad01b835f"
              imageUrl={`${ASSETS_URL}/assets/images/illustrations/intv-hosts@2x.jpg`}
            />
          </div>
        </section>

        <DoubleCurvedLine />
        <section className={`${styles.sectionImageParaFlow} ${styles.sectionPanel}`}>
          <div className={styles.column}>
            <Title
              type="headingLockup"
              className={styles.sectionHeading}
              theme={process.env.REACT_APP_THEME}
            >
              {'Welcome to the IMAGI-NATION {TV} Partner Pack'}

            </Title>
            <div className={styles.copy}>
              <Paragraph>
                AIME is an Imagination Factory that since 2005, has been creating pop-up
                Imagination Factories on university campuses around the world to unlock
                the internal narrative of marginalised kids, taking them from a world that
                tells them they can’t to a world that tells them they can. Kids who experience
                the Imagination Factory have gone on to achieve educational parity, rise up as
                entrepreneurs, and take on a whole new mindset that prepares them for success.
              </Paragraph>
              <Paragraph>
                What inspires our Imagination Factory are the mentors throughout human history,
                the philosophers, artists, inventors and designers who have moved humanity
                forward in positive ways. With the force of imagination, mentoring and unlikely
                alliances between those with power and those without, AIME is creating a fairer
                world.
              </Paragraph>
            </div>
          </div>
          <div className={styles.column}>
            <img
              className={styles.imageBlock}
              src={`${ASSETS_URL}/assets/images/illustrations/creative-spark-person.png`}
              alt="about aime"
            />
          </div>
        </section>
        <section className={`${styles.sectionImageParaFlow} ${styles.sectionPanel}`}>
          <div className={styles.column}>
            <div className={styles.copy}>
              <Paragraph>
                AIME is an Imagination Factory that since 2005, has been creating pop-up
                Imagination Factories on university campuses around the world to unlock
                the internal narrative of marginalised kids, taking them from a world that
                tells them they can’t to a world that tells them they can. Kids who experience
                the Imagination Factory have gone on to achieve educational parity, rise up as
                entrepreneurs, and take on a whole new mindset that prepares them for success.
              </Paragraph>
              <Paragraph>
                What inspires our Imagination Factory are the mentors throughout human history,
                the philosophers, artists, inventors and designers who have moved humanity
                forward in positive ways. With the force of imagination, mentoring and unlikely
                alliances between those with power and those without, AIME is creating a fairer
                world.
              </Paragraph>
            </div>
          </div>
          <div className={styles.column}>
            <img
              className={styles.imageBlock}
              src={`${ASSETS_URL}/assets/images/illustrations/creative-spark-person.png`}
              alt="about aime"
            />
          </div>
        </section>
        <DoubleCurvedLine />
        <section className={`${styles.sectionPanel} ${styles.panelOneCol} ${styles.intvHostsWrapper}`}>
          {/* what's the best way for this thing... creating a new component every time... really?
          shouldn't we be able to use the one comp and replace the content...
          don't know if that will work though... tbc */}
          <Title type="h3Title" className={styles.aboutInTVTitle}>
            {`
            Meet the hosts
          `}
          </Title>
          <IntvHostsCarousel />
          <br />
          <br />
        </section>

        <section className={`${styles.sectionPanel} ${styles.panelTwoCol} ${styles.detailListsPanel}`}>
          <div className={styles.panelCol}>
            <Title type="h3Title" className={styles.aboutInTVTitle}>
              {`
              How it works
            `}
            </Title>
            <Paragraph>
              The show is broadcast live on YouTube daily, Monday to Friday,
              5 days a week. Our studio is the virtual world. Feedback happens
              live on Youtube.
              • 5 X 25 min daily episodes at least 21 weeks of content
              (based on AIME 21 values).
              • Audio and podcast in production.
              • Impact production in progress, including education resources for
              teachers around the world to use
            </Paragraph>
          </div>
          <div className={styles.panelCol}>
            <Title type="h3Title" className={styles.aboutInTVTitle}>
              {`
              Weekly themes
            `}
            </Title>
            <Paragraph>
              Forgiveness [13th April]
              • Empathy [20th April]
              • Listening [27th April]
              • Asking Questions [4th May]
              • Flip the Script [11th May]
              • Initiative [18th May]
              • Know Yourself [25th May]
              • Kindness [1st June]
              • Rebelliousness [8th June]
              • Change [15th June]
            </Paragraph>
          </div>
        </section>
        <section className={`${styles.sectionPanel} ${styles.panelOneCol} ${styles.panelFullImage}`}>
          <div className={styles.panelCol}>
            <Title type="h3Title" className={styles.aboutInTVTitle}>
              {`
              How it works
            `}
            </Title>
            <img
              src={`${ASSETS_URL}/assets/images/banner/banner-hoodie-rent.gif`}
              alt="This Hoodie Pays My Rent"
              className={styles.videoCoverArt}
            />
          </div>
        </section>

        <DoubleCurvedLine />

        <section className={`${styles.sectionPanel} ${styles.panelOneCol} ${styles.inTVEpisodesWrapper}`}>
          <Title type="h3Title" className={styles.aboutInTVTitle}>
            {`
            About Each Day
          `}
          </Title>
          <ImaginationTvCarousel />
        </section>

        <DoubleCurvedLine />

        <section className={`${styles.sectionPanel} ${styles.panelOneCol}`}>
          <Title type="h3Title" className={styles.aboutInTVTitle}>
            {`
            Our Guests (so far)
          `}
          </Title>
          <div className={`${styles.flexGridLayout}`}>
            <div className={styles.flexGridItem}>
              <img
                src={`${ASSETS_URL}/assets/images/illustrations/ATOM-min@2x.gif`}
                alt="ATOM"
                className={`${styles.dancingIllo} ${styles.dancingIlloBtm}`}
              />
            </div>
            <div className={styles.flexGridItem}>
              <img
                src={`${ASSETS_URL}/assets/images/illustrations/ATOM-min@2x.gif`}
                alt="ATOM"
                className={`${styles.dancingIllo} ${styles.dancingIlloBtm}`}
              />
            </div>
            <div className={styles.flexGridItem}>
              <img
                src={`${ASSETS_URL}/assets/images/illustrations/ATOM-min@2x.gif`}
                alt="ATOM"
                className={`${styles.dancingIllo} ${styles.dancingIlloBtm}`}
              />
            </div>
            <div className={styles.flexGridItem}>
              <img
                src={`${ASSETS_URL}/assets/images/illustrations/ATOM-min@2x.gif`}
                alt="ATOM"
                className={`${styles.dancingIllo} ${styles.dancingIlloBtm}`}
              />
            </div>
            <div className={styles.flexGridItem}>
              <img
                src={`${ASSETS_URL}/assets/images/illustrations/ATOM-min@2x.gif`}
                alt="ATOM"
                className={`${styles.dancingIllo} ${styles.dancingIlloBtm}`}
              />
            </div>
          </div>
        </section>
        <DoubleCurvedLine />
        <section className={`${styles.sectionImageParaFlow} ${styles.sectionPanel}`}>
          <div className={styles.column}>
            <img
              className={styles.imageBlock}
              src={`${ASSETS_URL}/assets/images/illustrations/creative-spark-person.png`}
              alt="about aime"
            />
          </div>
          <div className={styles.column}>
            <Title
              type="headingLockup"
              className={styles.sectionHeading}
              theme={process.env.REACT_APP_THEME}
            >
              {'IMAGI-NATION {CLASSROOM}'}

            </Title>
            <div className={styles.copy}>
              <Paragraph>
                AIME is an Imagination Factory that since 2005, has been creating pop-up
                Imagination Factories on university campuses around the world to unlock
                the internal narrative of marginalised kids, taking them from a world that
                tells them they can’t to a world that tells them they can. Kids who experience
                the Imagination Factory have gone on to achieve educational parity, rise up as
                entrepreneurs, and take on a whole new mindset that prepares them for success.
              </Paragraph>
              <Paragraph>
                What inspires our Imagination Factory are the mentors throughout human history,
                the philosophers, artists, inventors and designers who have moved humanity
                forward in positive ways. With the force of imagination, mentoring and unlikely
                alliances between those with power and those without, AIME is creating a fairer
                world.
              </Paragraph>
            </div>
          </div>

        </section>
        <DoubleCurvedLine />
        <section className={`${styles.sectionPanel} ${styles.panelOneCol} ${styles.panelFullImage}`}>
          <div className={styles.panelCol}>
            <Title type="h3Title" className={styles.aboutInTVTitle}>
              {`
              Story of AIME
            `}
            </Title>
            <img
              src={`${ASSETS_URL}/assets/images/banner/banner-hoodie-rent.gif`}
              alt="This Hoodie Pays My Rent"
              className={styles.videoCoverArt}
            />
          </div>
        </section>

        <DoubleCurvedLine />
        <section className={`${styles.sectionPanel} ${styles.panelOneCol} `}>
          <Title type="h3Title" className={styles.aboutInTVTitle}>
            {`
            AIME PROGRAM STATS
          `}
          </Title>
          <div className={`${styles.sectionPanel} ${styles.panelTwoCol} ${styles.detailListsPanel}`}>
            <div className={styles.panelCol}>
              <Paragraph>
              2740 Program Days run (since 2015)
              45278 Total mentee experiences
              35189 Engaged mentee experiences
              13686 Total mentor experiences
              92.6% of students with Year 12 attainment
              94.8% Average mentee progression rate across all grades
              21 University partnerships (AUS + AFRICA)
              430 School partnerships since 2017
              155235 Total volunteer mentor hours donated
              8991 Tutor squads run (since 2015)
              91 equivalent full time staff employed as of March 2020
              </Paragraph>
            </div>
            <div className={`${styles.panelCol} ${styles.zigZagImageFlow}`}>
              <img
                src={`${ASSETS_URL}/assets/images/illustrations/ATOM-min@2x.gif`}
                alt="ATOM"
                className={`${styles.dancingIllo} ${styles.dancingIlloBtm}`}
              />
              <img
                src={`${ASSETS_URL}/assets/images/illustrations/ATOM-min@2x.gif`}
                alt="ATOM"
                className={`${styles.dancingIllo} ${styles.dancingIlloBtm}`}
              />
              <img
                src={`${ASSETS_URL}/assets/images/illustrations/ATOM-min@2x.gif`}
                alt="ATOM"
                className={`${styles.dancingIllo} ${styles.dancingIlloBtm}`}
              />
            </div>
          </div>
        </section>

        <DoubleCurvedLine />
        <section className={styles.tempIntvPWrapper}>
          <IntvPartners />
        </section>
        <section className={`${styles.sectionPanel} ${styles.panelOneCol} ${styles.panelFullImage}`}>
          <div className={styles.panelCol}>
            <Title type="h3Title" className={styles.aboutInTVTitle}>
              {`
              Partner opps ?
            `}
            </Title>
            <br />
            <br />
            <br />
          </div>
        </section>
        <DoubleCurvedLine />
        <section className={`${styles.sectionPanel} ${styles.panelOneCol}`}>
          <div className={styles.panelCol}>
            <Title type="h3Title" className={styles.aboutInTVTitle}>
              {`
              Appendix ?
            `}
            </Title>
          </div>
        </section>
        <WavyDonateSection />
      </div>
    </Layout>
  );
};

export default PartnerWithIntv;
