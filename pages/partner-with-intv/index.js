import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import List from 'aime-blueprint/lib/components/list';
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
      <label htmlFor="drawerToggle" className={styles.drawerToggleLabel} />
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
        <section className={`${styles.heroBannerPartnerIntv}`}>
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
        </section>
        {/* <MovingWaves /> */}
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
                I founded AIME 16 years ago to bring mentors into the lives of kids
                left behind. Since then we’ve grown to become global experts in
                mentoring, last year being honoured as one of the&nbsp;
                <a href="https://medium.com/@gfelworld/aime-honored-with-the-top-50-organisations-in-education-award-at-gfel-dubai-2019-6a962b1af232" target="_blank">
                  top 50 education groups in the world
                </a>.
              </Paragraph>
              <Paragraph>
                {`We created IMAGI-NATION{TV} to put a mentor in the home every day
                during the tough times of COVID-19 and beyond. It’s a daily TV show
                broadcast live on YouTube, and it’s a gift for teachers, parents
                and kids to help make sense of today and imagine tomorrow.`}
              </Paragraph>
              <Paragraph>
                {`For the sake of clarity and ease, we’ve listed all the potential
                partnership opportunities in one pack. You can find your way through
                it via the table of contents on the next page.`}
              </Paragraph>
              <Paragraph>
                {`For all partnership options, the funds and work we do together will
                be employing our team and creating the best and most engaging show.
                It will allow for partnerships with curriculum designers to create
                curriculum content for teachers to incorporate IN{TV} into their
                daily lesson plans. It will allow us to have our best shot together
                to get a mentor into every kid’s life every single day - the number
                of kids affected by COVID-19 school closures stood at almost almost
                1.5 billion as of 28 March.`}
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
                Our show is also relevant for university students whom we’ve
                trained to be mentors for the last 16 years. We can help
                motivate them as they make their way through these times as
                well.
              </Paragraph>
              <Paragraph>
                {`Our pursuit is to elevate knowledge. Every guest we bring on
                knows something; they have wisdom to share. This show is not
                about entertainment to pass the time. We want to remake the
                mould for the modern hero - from beauty to brains, from selfies
                to self knowledge, from hashtags to hope. IMAGI-NATION {TV}
                is surging to unlock the best in every single one of us, to
                release a generation of heroes in the form of mentors who fight
                for a fairer world.`}
              </Paragraph>
              <Paragraph>
                {`I know we are short for time so let’s get into it. Let’s make
                the most important TV show the world has ever seen.`}
              </Paragraph>
              <Paragraph>
                Yours in Imagination,
                <br />
                <br />
                <strong>
                Jack Manning Bancroft
                <br />
                {`IN{TV} EP & Founder, AIME CEO & Founder`}
                </strong>
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

        <section className={`${styles.sectionPanel} ${styles.panelTwoCol} ${styles.detailListsPanel} ${styles.withWhiteWave}`}>
          <svg className={styles.whiteWaveTop} width="1438" height="152" viewBox="0 0 1438 152" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M361.051 76.0001C179.485 76.0001 177.324 152 -1 152L-0.999987 0.000148682L361.051 0.000180334L723.103 0.000227244L1080.65 0.000258502L1440 0.000274658L1440 152C1259.88 152 1257.17 76.0003 1080.65 76.0002C904.128 76.0002 904.128 152 723.103 152C542.077 152 542.617 76.0002 361.051 76.0001Z" fill="white" />
          </svg>
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
            </Paragraph>
            <List type="ulList" list={[
              '5 X 25 min daily episodes at least 21 weeks of content (based on AIME 21 values).', 
              'Audio and podcast in production.', 
              'Impact production in progress, including education resources for teachers around the world to use'
            ]} />
          </div>
          <div className={`${styles.panelCol} ${styles.secondPanelCol}`}>
            <Title type="h3Title" className={styles.aboutInTVTitle}>
              {`
              Weekly themes
            `}
            </Title>

            <List type="ulList" list={[
              'Imagination [23rd March]', 
              'Hope [30th March]',
              'Trust [6th April]',
              'Forgiveness [13th April]', 
              'Empathy [20th April]', 
              'Listening [27th April]', 
              'Asking Questions [4th May]', 
              'Flip the Script [11th May]', 
              'Initiative [18th May]', 
              'Know Yourself [25th May]', 
              'Kindness [1st June]', 
              'Rebelliousness [8th June]', 
              'Change [15th June]', 
            ]} />
          </div>
        </section>
        <section className={`${styles.sectionPanel} ${styles.panelOneCol} ${styles.panelFullImage}`}>
          <div className={styles.panelCol}>
            <Title type="h3Title" className={styles.aboutInTVTitle}>
              {`
              Ingredients
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
