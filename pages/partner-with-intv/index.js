import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import List from 'aime-blueprint/lib/components/list';
import Button from 'aime-blueprint/lib/components/button';
import Layout from '../../hocs/basicLayout';
import VideoPlayer from '../../components/videoPlayer';
// import FeaturedProduct from '../../components/featuredProduct';
import WavyDonateSection from '../../components/wavyDonateSection';
import IntercomChat from '../../components/intercom';
import TypeformModal from '../../components/typeformModal';
import MovingWaves from '../../components/movingWaves';
import scrollToComponent from '../../utils/scrollToComponent';
import styles from './partner-with-intv.module.scss';

const DoubleCurvedLine = dynamic(() => import('../../components/imaginationTv/doubleCurvedLine'));
const IntvHostsCarousel = dynamic(() => import('../../components/imaginationTv/intvHostsCarousel'));
const ImaginationTvCarousel = dynamic(() => import('../../components/imaginationTv/imaginationTvCarousel'));
const IntvPartners = dynamic(() => import('../../components/intvPartners'));
const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;
// const SHOP_PRODUCT_LINK = process.env.REACT_APP_SHOP_PRODUCT_LINK;

const PartnerWithIntv = () => {
  const [showModal, setModal] = useState(false);
  const toggleModal = () => setModal(!showModal);
  const scrollToHosts = useRef(null);
  const scrollToHow = useRef(null);
  const scrollToMentors = useRef(null);
  const scrollToStory = useRef(null);
  const scrollToProductionPartners = useRef(null);
  const scrollToSchoolPartners = useRef(null);
  const scrollToUniversityPartners = useRef(null);
  const scrollToGlobalPartners = useRef(null);
  const scrollToNationalPartners = useRef(null);
  const scrollToStateProvincialPartners = useRef(null);
  const scrollToImaginationInvestors = useRef(null);
  const scrollToContentPartners = useRef(null);
  const scrollToPuppetPartners = useRef(null);
  const scrollToCorporateWellbeing = useRef(null);
  const scrollToSponsorWeek = useRef(null);
  const scrollToSponsorEp = useRef(null);
  const scrollToSponsorSong = useRef(null);

  return (
    <Layout>
      <div className={`${styles.intercomBtnWrap}`}>
        <IntercomChat label="Let's chat" />
      </div>
      <Button
        type="text"
        containerClassName={styles.typeformToggleContainer}
        className={`${styles.typeformAction} ${styles.drawerToggleLabel}`}
        onClickFunction={toggleModal}
      >
        I'm a school or uni
      </Button>
      <input type="checkbox" className={styles.drawerToggle} name="drawerToggle" />
      <label htmlFor="drawerToggle" className={styles.drawerToggleLabel} />
      <nav className={styles.sideDrawerNav}>
        <ul className={styles.sideMenu}>
          <li><Title type="h5Title">{'Imagination {TV}'}</Title></li>
          <li><a onClick={() => scrollToComponent(scrollToHosts)}>Meet the hosts</a></li>
          <li><a onClick={() => scrollToComponent(scrollToHow)}>The format</a></li>
          <li><a onClick={() => scrollToComponent(scrollToMentors)}>The mentors</a></li>
          <li><a onClick={() => scrollToComponent(scrollToStory)}>Background</a></li>
          <br />
          <br />
          <li><Title type="h5Title">Partnership Opportunities</Title></li>
          <li><a onClick={() => scrollToComponent(scrollToProductionPartners)}>Production Partners</a></li>
          <li><a onClick={() => scrollToComponent(scrollToSchoolPartners)}>School Partners</a></li>
          <li><a onClick={() => scrollToComponent(scrollToUniversityPartners)}>University Partners</a></li>
          <li><a onClick={() => scrollToComponent(scrollToGlobalPartners)}>Global Partners</a></li>
          <li><a onClick={() => scrollToComponent(scrollToNationalPartners)}>National Partners</a></li>
          <li><a onClick={() => scrollToComponent(scrollToStateProvincialPartners)}>State/Provincial</a></li>
          <li><a onClick={() => scrollToComponent(scrollToImaginationInvestors)}>Imagination Investors</a></li>
          <li><a onClick={() => scrollToComponent(scrollToContentPartners)}>Content Partners</a></li>
          <li><a onClick={() => scrollToComponent(scrollToPuppetPartners)}>Puppet Partners</a></li>
          <li><a onClick={() => scrollToComponent(scrollToCorporateWellbeing)}>Corporate Wellbeing</a></li>
          <li><a onClick={() => scrollToComponent(scrollToSponsorWeek)}>Sponsor a week</a></li>
          <li><a onClick={() => scrollToComponent(scrollToSponsorEp)}>Sponsor an episode</a></li>
          <li><a onClick={() => scrollToComponent(scrollToSponsorSong)}>Sponsor a song</a></li>
        </ul>
      </nav>

      <div className={styles.mainSectionWrapper}>
        <div>
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
          <MovingWaves svgClass={styles.bannerBottom} />
        </div>


        <section className={`${styles.sectionPanel}`}>
          <div className={`${styles.sectionWrapper} ${styles.panelTwoCol}`}>
            <div className={`${styles.panelCol}`}>
              <Title type="h4Title">
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
                imageUrl={`${ASSETS_URL}/assets/images/imagi-nation-tv/tv_full.png`}
              />
            </div>
          </div>
        </section>

        <DoubleCurvedLine />
        <section className={`${styles.sectionImageParaFlow} ${styles.sectionPanel}`}>
          {/* temp putting this here */}
          <TypeformModal visible={showModal} toggleModal={toggleModal} />

          <div className={styles.column}>
            <Title
              type="headingLockup"
              className={`${styles.sectionHeading} ${styles.titleInTVPartnerPanel}`}
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
                </a>
.
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
                  {'IN{TV} EP & Founder, AIME CEO & Founder'}
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
        <section ref={scrollToHosts} className={`${styles.sectionPanel} ${styles.panelOneCol} ${styles.intvHostsWrapper}`}>
          {/* what's the best way for this thing... creating a new component every time... really?
          shouldn't we be able to use the one comp and replace the content...
          don't know if that will work though... tbc */}
          <Title type="h3Title">
            Meet the hosts
          </Title>
          <IntvHostsCarousel />
          <br />
          <br />
        </section>

        <section ref={scrollToHow} className={`${styles.sectionPanel} ${styles.panelTwoCol} ${styles.detailListsPanel} ${styles.sectionWithBg} ${styles.sectionWithWaves}`}>
          <svg className={styles.whiteWaveTop} width="1438" height="152" viewBox="0 0 1438 152" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M361.051 76.0001C179.485 76.0001 177.324 152 -1 152L-0.999987 0.000148682L361.051 0.000180334L723.103 0.000227244L1080.65 0.000258502L1440 0.000274658L1440 152C1259.88 152 1257.17 76.0003 1080.65 76.0002C904.128 76.0002 904.128 152 723.103 152C542.077 152 542.617 76.0002 361.051 76.0001Z" fill="white" />
          </svg>
          <svg className={styles.whiteWaveBottom} width="1438" height="152" viewBox="0 0 1438 152" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M361.051 76.0001C179.485 76.0001 177.324 152 -1 152L-0.999987 0.000148682L361.051 0.000180334L723.103 0.000227244L1080.65 0.000258502L1440 0.000274658L1440 152C1259.88 152 1257.17 76.0003 1080.65 76.0002C904.128 76.0002 904.128 152 723.103 152C542.077 152 542.617 76.0002 361.051 76.0001Z" fill="white" />
          </svg>
          <div className={styles.sectionWrapper}>
            <div className={styles.panelCol}>
              <Title type="h3Title">
                {`
                How it works
              `}
              </Title>
              <Paragraph>
                The show is broadcast live on YouTube daily, Monday to Friday,
                5 days a week. Our studio is the virtual world. Feedback happens
                live on Youtube.
              </Paragraph>
              <List
                type="ulList"
                list={[
                  '5 X 25 min daily episodes at least 21 weeks of content (based on AIME 21 values).',
                  'Audio and podcast in production.',
                  'Impact production in progress, including education resources for teachers around the world to use',
                ]}
              />
            </div>
            <div className={`${styles.panelCol}`}>
              <Title type="h3Title">
                {`
                Weekly themes
              `}
              </Title>

              <List
                type="ulList"
                list={[
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
                ]}
              />
            </div>
          </div>
        </section>
        <section className={`${styles.sectionPanel} ${styles.panelOneCol} ${styles.panelFullImage}`}>
          <div className={styles.panelCol}>
            <Title type="h3Title">
              {`
              Ingredients
            `}
            </Title>
            <img
              src={`${ASSETS_URL}/assets/images/imagi-nation-tv/Ingredients.png`}
              alt="Imagi-Nation{TV} Ingredients"
              className={styles.videoCoverArt}
            />
          </div>
        </section>

        <DoubleCurvedLine />

        <section className={`${styles.sectionPanel} ${styles.panelOneCol} ${styles.inTVEpisodesWrapper}`}>
          <Title type="h3Title" className={styles.titleInTVPartnerPanel}>
            {`
            About Each Day
          `}
          </Title>
          <ImaginationTvCarousel />
        </section>

        <DoubleCurvedLine />

        <section ref={scrollToMentors} className={`${styles.sectionPanel} ${styles.panelOneCol}`}>
          <Title type="h3Title">
            {`
            Our Guests (so far)
          `}
          </Title>
          <div className={`${styles.flexGridLayout}`}>
            <div className={styles.flexGridItem}>
              <img
                src={`${ASSETS_URL}/assets/images/imagi-nation-tv/guests/intv-guest-benlee.png`}
                alt="Ben Lee"
                className={styles.intvGuestImg}
              />
            </div>
            <div className={styles.flexGridItem}>
              <img
                src={`${ASSETS_URL}/assets/images/imagi-nation-tv/guests/intv-guest-daisyjefferys.png`}
                alt="Daisy Jefferys"
                className={styles.intvGuestImg}
              />
            </div>
            <div className={styles.flexGridItem}>
              <img
                src={`${ASSETS_URL}/assets/images/imagi-nation-tv/guests/intv-guest-damongameau.png`}
                alt="Damon Gameau"
                className={styles.intvGuestImg}
              />
            </div>
            <div className={styles.flexGridItem}>
              <img
                src={`${ASSETS_URL}/assets/images/imagi-nation-tv/guests/intv-guest-jodeeknowles.png`}
                alt="Jodee Knowles"
                className={styles.intvGuestImg}
              />
            </div>
            <div className={styles.flexGridItem}>
              <img
                src={`${ASSETS_URL}/assets/images/imagi-nation-tv/guests/intv-guest-jordanwatson.png`}
                alt="Jordan Watson"
                className={styles.intvGuestImg}
              />
            </div>
            <div className={styles.flexGridItem}>
              <img
                src={`${ASSETS_URL}/assets/images/imagi-nation-tv/guests/intv-guest-natvazer.png`}
                alt="Nat Vazer"
                className={styles.intvGuestImg}
              />
            </div>
            <div className={styles.flexGridItem}>
              <img
                src={`${ASSETS_URL}/assets/images/imagi-nation-tv/guests/intv-guest-sachem.png`}
                alt="Sachem"
                className={styles.intvGuestImg}
              />
            </div>
            <div className={styles.flexGridItem}>
              <img
                src={`${ASSETS_URL}/assets/images/imagi-nation-tv/guests/intv-guest-shanprimrose.png`}
                alt="Shan Primrose"
                className={styles.intvGuestImg}
              />
            </div>
            <div className={styles.flexGridItem}>
              <img
                src={`${ASSETS_URL}/assets/images/imagi-nation-tv/guests/intv-guest-stangrant.png`}
                alt="Stan Grant"
                className={styles.intvGuestImg}
              />
            </div>
            <div className={styles.flexGridItem}>
              <img
                src={`${ASSETS_URL}/assets/images/imagi-nation-tv/guests/intv-guest-tommyfranklin.png`}
                alt="Tommy Franklin"
                className={styles.intvGuestImg}
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
              className={`${styles.sectionHeading} ${styles.titleInTVPartnerPanel}`}
              theme={process.env.REACT_APP_THEME}
            >
              {'IMAGI-NATION {CLASSROOM}'}
            </Title>
            <div className={styles.copy}>
              <Paragraph>
                {`Daily after IMAGI-NATION{TV},
                we run simultaneous classrooms
                locally guided by AIME mentors.`}
              </Paragraph>
              <Paragraph>
                {`In Australia, we run them after the live show at
                12 noon AEST.`}
              </Paragraph>
              <Paragraph>
                {`Globally, our mentors replay the
                show and then host our live IMAGI-
                NATION{CLASSROOMS}.The classrooms have
                university volunteer mentors and a lead
                AIME mentor leading and supporting the
                mentees.`}
              </Paragraph>
              <Paragraph>
                They run for 30 minutes.
              </Paragraph>
              <Paragraph>
                {`The format of each
                IMAGI-NATION{CLASSROOM} is:`}
              </Paragraph>
              <List
                type="ulList"
                list={[
                  '5 minute reflection on what we learned from IN{TV}',
                  '5 minute meditation',
                  '5 minute school questions',
                  '5 minute life questions',
                  '10 minutes failure time*',
                ]}
              />
              <Paragraph>
                {`*Failure Time is AIME’s original
                creation. It provides a learning
                framework for mentees to embrace any
                possible learning activity through
                the lens of seeing failure as a
                pathway to learning.`}
              </Paragraph>
            </div>
          </div>
        </section>
        <WavyDonateSection />
        <section ref={scrollToStory} className={`${styles.sectionPanel} ${styles.panelOneCol} ${styles.panelFullImage} ${styles.aimeStory}`}>
          <br />
          <br />
          <div className={styles.storyFirstPanel}>
            <img src={`${ASSETS_URL}/assets/images/partner-with-intv/aime-story-1.png`} alt="I am AIME" />
          </div>
          {/* Hey Lara! This needs to be responsive! Sorry, didn't get to it! */}
          <div className={styles.panelTwoCol}>
            <div className={styles.panelCol}>
              <img src={`${ASSETS_URL}/assets/images/partner-with-intv/aime-story-2.png`} alt="I come from the land of Imagi-Nation" />
            </div>
            <div className={styles.panelCol}>
              <img src={`${ASSETS_URL}/assets/images/partner-with-intv/aime-story-3.png`} alt="I was born in the dream of a 19 year old student" />
            </div>
          </div>
          <div className={styles.panelTwoCol}>
            <div className={styles.panelCol}>
              <img src={`${ASSETS_URL}/assets/images/partner-with-intv/aime-story-4.png`} alt="Our journey started with small steps." />
            </div>
            <div className={styles.panelCol}>
              <img src={`${ASSETS_URL}/assets/images/partner-with-intv/aime-story-5.png`} alt="Our movement grew." />
            </div>
          </div>
          <div className={styles.panelTwoCol}>
            <div className={styles.panelCol}>
              <img src={`${ASSETS_URL}/assets/images/partner-with-intv/aime-story-6.png`} alt="We mentored 20.000+ kids." />
            </div>
            <div className={styles.panelCol}>
              <img src={`${ASSETS_URL}/assets/images/partner-with-intv/aime-story-7.png`} alt="Then COVID happened." />
            </div>
          </div>
          <div className={styles.panelTwoCol}>
            <div className={styles.panelCol}>
              <img src={`${ASSETS_URL}/assets/images/partner-with-intv/aime-story-8.png`} alt="from 2005 to 2020" />
            </div>
            <div className={styles.panelCol}>
              <img src={`${ASSETS_URL}/assets/images/partner-with-intv/aime-story-9.png`} alt="to IN{TV} going live" />
            </div>
          </div>
        </section>

        <section ref={scrollToHow} className={`${styles.sectionPanel} ${styles.panelTwoCol} ${styles.detailListsPanel} ${styles.sectionWithBg} ${styles.sectionProgramStats} ${styles.sectionWithWaves}`}>
          <svg className={styles.whiteWaveTop} width="1438" height="152" viewBox="0 0 1438 152" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M361.051 76.0001C179.485 76.0001 177.324 152 -1 152L-0.999987 0.000148682L361.051 0.000180334L723.103 0.000227244L1080.65 0.000258502L1440 0.000274658L1440 152C1259.88 152 1257.17 76.0003 1080.65 76.0002C904.128 76.0002 904.128 152 723.103 152C542.077 152 542.617 76.0002 361.051 76.0001Z" fill="white" />
          </svg>
          <svg className={styles.whiteWaveBottom} width="1438" height="152" viewBox="0 0 1438 152" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M361.051 76.0001C179.485 76.0001 177.324 152 -1 152L-0.999987 0.000148682L361.051 0.000180334L723.103 0.000227244L1080.65 0.000258502L1440 0.000274658L1440 152C1259.88 152 1257.17 76.0003 1080.65 76.0002C904.128 76.0002 904.128 152 723.103 152C542.077 152 542.617 76.0002 361.051 76.0001Z" fill="white" />
          </svg>
          <div className={styles.sectionWrapper}>
            <div className={styles.panelCol}>
              <Title type="h4Title">AIME PROGRAM STATS</Title>
              <List
                type="ulList"
                list={[
                  '2740 Program Days run (since 2015)',
                  '45278 Total mentee experiences',
                  '35189 Engaged mentee experiences',
                  '13686 Total mentor experiences',
                  '92.6% of students with Year 12 attainment',
                  '94.8% Average mentee progression rate across all grades',
                  '21 University partnerships (AUS + AFRICA)',
                  '430 School partnerships since 2017',
                  '155235 Total volunteer mentor hours donated',
                  '8991 Tutor squads run (since 2015)',
                  '91 equivalent full time staff employed as of March 2020',
                ]}
              />
              <Title type="h4Title">AIME APPAREL STATS</Title>
              <List
                type="ulList"
                list={[
                  '31 countries shipped to',
                  '5116 hoodies sold',
                  '18 of new apparel styles produced',
                  '1864 hoodies donated',
                  '13 sites submitted artworks',
                  '4 international artists',
                  '15 mentee artists',
                ]}
              />
            </div>
            <div className={`${styles.panelCol} ${styles.zigZagImageFlow}`}>
              <img
                src={`${ASSETS_URL}/assets/images/imagi-nation-tv/stats/1dollar89.png`}
                alt="For every $1, $8.90 return"
              />
              <img
                src={`${ASSETS_URL}/assets/images/imagi-nation-tv/stats/12-attainment.png`}
                alt="Year 12 Attainment"
              />
              <img
                src={`${ASSETS_URL}/assets/images/imagi-nation-tv/stats/post-transitions.png`}
                alt="Post school transitions"
              />
            </div>
          </div>
        </section>
        
        <br />
        <br />
        <br />
        <IntvPartners />
        <DoubleCurvedLine />

        <section className={`${styles.sectionPanel} ${styles.panelOneCol} ${styles.sectionPartnerOpps}`}>
          <div className={`${styles.sectionWrapper}`}>
            <Title type="h3Title" className={styles.titleInTVPartnerPanel}>
              Partnership opportunities
            </Title>
            {/* partnering option */}
            <div ref={scrollToProductionPartners} className={`${styles.panelPartneringOption}`}>
              <div className={styles.titleLockup}>
                <img
                  src={`${ASSETS_URL}/assets/images/illustrations/production-partners.png`}
                  alt="Production Partners"
                  className={styles.imgPartnerType}
                />
                <Title type="h3Title">Production Partners</Title>
              </div>
              <div className={`${styles.panelTwoCol}`}>
                <div className={styles.panelCol}>
                  <Paragraph>
                    {'Let’s produce a day together or the whole week and work relentlessly to get IN{TV} to 1.5 billion kids and put a mentor in the home every day. You can help suggest talent to be on the show and bring it to life. You promote IN{TV} to your people and audiences once guests are in the game. Change the world, for kids and for yourselves, and give mentors in your orbit the stage to rise. '}
                  </Paragraph>
                </div>
                <div className={styles.panelCol}>
                  &nbsp;
                </div>
              </div>
            </div>
            {/* partnering option */}
            <div ref={scrollToSchoolPartners} className={`${styles.panelPartneringOption}`}>
              <div className={styles.titleLockup}>
                <img
                  src={`${ASSETS_URL}/assets/images/illustrations/school-partners.png`}
                  alt="School Partners"
                  className={styles.imgPartnerType}
                />
                <Title type="h3Title">Schools partners</Title>
              </div>
              <div className={`${styles.panelTwoCol}`}>
                <div className={styles.panelCol}>
                  <Paragraph>
                    {'Traditionally, AIME has been focused on marginalised kids but we can’t sit on the sidelines when all kids are struggling to make sense of what education means right now. We are here for parents, teachers and kids to bring mentors into the game to help motivate, coach, counsel and inspire us to make sense of today and imagine tomorrow. We want to make hope the virus that these kids catch daily. For existing AIME school partners and the first 300 new school partners that sign on, the partnership will be for free for 2020. '}
                  </Paragraph>
                  <Paragraph>
                    {'And specifically for AIME IN{​TV} partner schools: '}
                  </Paragraph>
                  <List
                    type="ulList"
                    list={[
                      'AIME will give direct access to Imagination Curriculum resources for teachers to teach with IN{​TV}.',
                      'AIME will ensure over 100 mentors are in the chat room for every live episode, providing a space for the students to engage during the show.',
                      'AIME will provide access to AIMEs Social Network for Good - based on Slack - for every student to have access to registered AIME mentors for guidance, tutoring, and year 12 transition support',
                      'Year 12 Special - all Year 12 students will be invited on the ‘Jobs of the Future’ IN{​TV} special which will feature corporate partners offering jobs to kids on the spot, live job interview coaching and a suite of resources to make the next step into employment or university.',
                    ]}
                  />
                </div>
                <div className={styles.panelCol}>
                  <Paragraph>
                    {'AIME and IN{​TV} will over the course of the year deliver to schools around the world:'}
                  </Paragraph>
                  <List
                    type="ulList"
                    list={[
                      '1500 profile mentors (30 mentors a week across 50 weeks) directly into kids lives with over 250 hours of mentoring throughout the year',
                      'Over 3000 university mentors available as mentors in the live tutoring session online with over 100 hours of free tutoring and mentoring available (based off 30 minute after each show per day, across 50 weeks)',
                      'A stage for 300 kids to co-Host',
                      'A stage for over 300 number of kids in the IMAGI-NATION {Classroom}',
                      'A stage for 150 number of president speeches',
                      'A stage for 50 number of artists to be profiled',
                      'A focused Year 12 transition week to work on jobs and university opportunities bringing some of the worlds biggest employers and universities direct to the students',
                    ]}
                  />
                  <Paragraph>
                    School Partners will commit to:
                  </Paragraph>
                  <List
                    type="ulList"
                    list={[
                      'Sharing a press release when the partnership is formed to the school network.',
                      'On the Monday of the week they are featured on the show, distributing an electronic newsletter about IN{​TV} to all students, staff and friends of the school.',
                      'Working with AIME on implementing IN{​TV} into the curriculum.',
                      'Working on how to feature IN{​TV} as a mentoring service for all their students in an ongoing fashion.',
                      'For the show on which it is a featured partner, the school will ensure:',
                      '10 students in live audience',
                      '1 Student Co-Host',
                      'Principal on the show for the 60 second challenge',
                    ]}
                  />
                </div>
              </div>
            </div>
            {/* partnering option ... */}

            {/* partnering option */}
            <div ref={scrollToUniversityPartners} className={`${styles.panelPartneringOption}`}>
              <div className={styles.titleLockup}>
                <img
                  src={`${ASSETS_URL}/assets/images/illustrations/uni-partners.png`}
                  alt="University Partners"
                  className={styles.imgPartnerType}
                />
                <Title type="h3Title">University partners</Title>
              </div>
              <div className={`${styles.panelTwoCol}`}>
                <div className={styles.panelCol}>
                  <Paragraph>
                    {'IMAGI-NATION{TV} is a live weekday show bringing over 1,500 world class mentors into people’s lives through the year. The university partnership with IN{TV} is to provide guidance and motivation to its students during the times of COVID-19 and beyond. The university works with AIME to explore embedding IN{TV} into courses as curriculum and publishing the opportunity for students far and wide. For existing AIME university partners and the first 100 new university partners that sign on, the partnership will be for free for 2020. AIME will provide: - A space for university students to volunteer as mentors in the live audience during IN{TV} and to provide advice during the 30 minutes of live tutoring AIME provides daily in the post-show chatroom. - The chance for education students to gain practicum experience through the show.'}
                  </Paragraph>
                </div>
                <div className={styles.panelCol}>
                  <Paragraph>
                    Universities commit to:
                  </Paragraph>
                  <List
                    type="ulList"
                    list={[
                      'Sharing a press release when the partnership is formed to the university network, including all students and teachers.',
                      'On the Monday of the week they are featured on the show, distributing an electronic newsletter about IN{TV} to all students, staff and friends of the university.',
                      'Working with AIME on implementing IN{TV} into the curriculum.',
                      'Working with AIME to promote the opportunity for all students to become mentors on the show. For the show on which it is a featured partner, the university will ensure:',
                      'Vice-Chancellor available for 60-second challenge',
                      'One candidate available for the 180-second Wizard segment',
                    ]}
                  />
                </div>
              </div>
            </div>
            {/* partnering option ... */}

            {/* partnering option */}
            <div ref={scrollToGlobalPartners} className={`${styles.panelPartneringOption}`}>
              <div className={styles.titleLockup}>
                <img
                  src={`${ASSETS_URL}/assets/images/illustrations/global-partners.png`}
                  alt="Global Partners"
                  className={styles.imgPartnerType}
                />
                <Title type="h3Title">Global partners $1m+</Title>
              </div>
              <div className={`${styles.panelTwoCol}`}>
                <div className={styles.panelCol}>
                  <Paragraph>
                    Your funding will allow us to:
                  </Paragraph>
                  <List
                    type="ulList"
                    list={[
                      'Employ the staff working on IN{TV} - Create partnerships with curriculum development organisations to give teachers the ability to teach with IN{TV}',
                      'Develop and deliver independent research and reporting tracking the impact of IN{TV}',
                      'Develop our tech team and tech partners for the live stream',
                      'Develop puppets with localised values for different countries and localised voices',
                      'Create IMAGI-NATION{RADIO} for those who can’t access video due to Internet data restrictions',
                      'Build, manage and foster sideways partnerships across the system to lift up education departments, NGOs and other key players in the sector around children',
                      'Create a set of ‘How to’ resources for teachers looking at how to go digital',
                      'Create a daily TV show that puts a mentor in every kid’s life, every single day And we’ll work with you closely to help lift up a system that sees way too many kids left behind across the planet.',
                    ]}
                  />
                </div>
                <div className={styles.panelCol}>
                  &nbsp;
                </div>
              </div>
            </div>
            {/* partnering option ... */}

            {/* partnering option */}
            <div ref={scrollToNationalPartners} className={`${styles.panelPartneringOption}`}>
              <div className={styles.titleLockup}>
                <img
                  src={`${ASSETS_URL}/assets/images/illustrations/national-partners.png`}
                  alt="National Partners"
                  className={styles.imgPartnerType}
                />
                <Title type="h3Title">National partners $500k+</Title>
              </div>
              <div className={`${styles.panelTwoCol}`}>
                <div className={styles.panelCol}>
                  <Paragraph>
                    Your funding will allow us to:
                  </Paragraph>
                  <List
                    type="ulList"
                    list={[
                      'Develop a national curriculum alongside IN{TV} for all teachers across the country',
                      'Create IMAGI-NATION{RADIO} for those who can’t access video due to Internet data restrictions and develop curriculum resources for IMAGI-NATION{RADIO}',
                      'Develop and deliver independent research and reporting tracking the impact of IN{TV}',
                      'Create a set of ‘How to’ resources for teachers looking at how to go digital',
                      'Create a daily TV show that puts a mentor in every kid’s life, every single day',
                    ]}
                  />
                </div>
                <div className={styles.panelCol}>
                  &nbsp;
                </div>
              </div>
            </div>
            {/* partnering option ... */}

            {/* partnering option */}
            <div ref={scrollToStateProvincialPartners} className={`${styles.panelPartneringOption}`}>
              <div className={styles.titleLockup}>
                <img
                  src={`${ASSETS_URL}/assets/images/illustrations/state-partners.png`}
                  alt="State/Provincial Partners"
                  className={styles.imgPartnerType}
                />
                <Title type="h3Title">State/Provincial partners $250k+</Title>
              </div>
              <div className={`${styles.panelTwoCol}`}>
                <div className={styles.panelCol}>
                  <Paragraph>
                    Your funding will allow us to:
                  </Paragraph>
                  <List
                    type="ulList"
                    list={[
                      'Develop a curriculum for all teachers in your state/province',
                      'Create IMAGI-NATION{RADIO} for those who can’t access video due to Internet data restrictions and develop curriculum resources for IMAGI-NATION{RADIO}',
                      'Develop and deliver independent research and reporting tracking the impact of IN{TV}',
                      'Create a set of ‘How to’ resources for teachers looking at how to go digital',
                      'Create a daily TV show that puts a mentor in every kid’s life, every single day',
                    ]}
                  />
                </div>
                <div className={styles.panelCol}>
                  &nbsp;
                </div>
              </div>
            </div>
            {/* partnering option ... */}

            {/* partnering option */}
            <div ref={scrollToImaginationInvestors} className={`${styles.panelPartneringOption}`}>
              <div className={styles.titleLockup}>
                <img
                  src={`${ASSETS_URL}/assets/images/illustrations/imagination-investors.png`}
                  alt="Imagination Investors"
                  className={styles.imgPartnerType}
                />
                <Title type="h3Title">Imagination Investors $200k+</Title>
              </div>
              <div className={`${styles.panelTwoCol}`}>
                <div className={styles.panelCol}>
                  <Paragraph>
                    If you want to see a mentor in every kid’s life every single day, someone who teaches them how to think, not what to think, then invest in an Imagination Agenda to transform the world. If you believe that marginalised kids aren’t the problem but are the solution if given the stage; if you know the power of entrepreneurs to change the world; if you know imagination is critical to change the world, then this is the investor section that says: ‘Hey you guys - I’m here and on your team - let’s do this! Use this funding for anything you need to bring this show to life, to amplify it and light up kids’ minds. This is your untied Imagination Fund.’ In this space we’d imagine philanthropists who have rocked the world would donate funds to work with us; this is for the investors who have made their way and who know that with a little rocket fuel, you can go to the moon.
                  </Paragraph>
                </div>
                <div className={styles.panelCol}>
                  &nbsp;
                </div>
              </div>
            </div>
            {/* partnering option ... */}

            {/* partnering option */}
            <div ref={scrollToContentPartners} className={`${styles.panelPartneringOption}`}>
              <div className={styles.titleLockup}>
                <img
                  src={`${ASSETS_URL}/assets/images/illustrations/content-creators.png`}
                  alt="Content Partners"
                  className={styles.imgPartnerType}
                />
                <Title type="h3Title">Content Partners $100k+</Title>
              </div>
              <div className={`${styles.panelTwoCol}`}>
                <div className={styles.panelCol}>
                  <Paragraph>
                  For organizations looking to reach youngsters, we are open to exploring classy content partnerships. Let’s get it out there. This is a form of advertising… and we’d wanna do it in a ballistically classy way. For example, we’d be up for having your smartest designer on our design show talking about the positive work you and your team are doing and then exploring a potential Q&A with one of our hosts/puppets. We can find classy ways to tell stories together around our 21 values. We can make videos together, write stories, and we may even, if it’s really classy, create a collab piece of AIME apparel together.
                  </Paragraph>
                </div>
                <div className={styles.panelCol}>
                  &nbsp;
                </div>
              </div>
            </div>
            {/* partnering option ... */}

            {/* partnering option */}
            <div ref={scrollToPuppetPartners} className={`${styles.panelPartneringOption}`}>
              <div className={styles.titleLockup}>
                <img
                  src={`${ASSETS_URL}/assets/images/illustrations/puppet-partners.png`}
                  alt="Puppet Partners"
                  className={styles.imgPartnerType}
                />
                <Title type="h3Title">Puppet Partners $50k+</Title>
              </div>
              <div className={`${styles.panelTwoCol}`}>
                <div className={styles.panelCol}>
                  <Paragraph>
                  Invest in the development of our puppets for the show. We want to develop puppets that have all the characteristics of our 21 values. This funding will support employment of our puppet maker and puppeteers. It will allow us to employ writers to work on the puppets and help produce scripts for the show every day. Surely you wanna create a puppet? Maybe we can look at something that’s important to you or your organisation and build a puppet around that?
                  </Paragraph>
                </div>
                <div className={styles.panelCol}>
                  &nbsp;
                </div>
              </div>
            </div>
            {/* partnering option ... */}

            {/* partnering option */}
            <div ref={scrollToCorporateWellbeing} className={`${styles.panelPartneringOption}`}>
              <div className={styles.titleLockup}>
                <img
                  src={`${ASSETS_URL}/assets/images/illustrations/corporate-wellbeing.png`}
                  alt="Corporate Wellbeing"
                  className={styles.imgPartnerType}
                />
                <Title type="h3Title">Corporate Wellbeing $50k+</Title>
              </div>
              <div className={`${styles.panelTwoCol}`}>
                <div className={styles.panelCol}>
                  <Paragraph>
                    FOR Large Organisations (Free packages available for small to medium organisations with donations welcome)
                  </Paragraph>
                  <Paragraph>
                    {'To recognise the challenges of this current time, AIME is offering a subsidised corporate wellbeing package. This gives the chance for corporates to use IN{TV} as an official wellbeing offer for their staff and bring over 1,500 world class mentors into their lives per year. This package allows an organisation to provide guidance and motivation to its staff during the times of COVID-19 and beyond, with a commitment to give staff an official 30 minutes a day to recharge with their friends, family and colleagues by joining the mentors on IMAGI-NATION{TV}.'}
                  </Paragraph>
                  <Paragraph>
                    This is your chance to act on your commitment to health and wellbeing. A chance to send your staff a message about the value of giving space for parents to have a moment during the day with their kids to bring mentors into their lives. And to make it part of the daily diet by scheduling it as a meeting invite for all staff to bring mentors into your teams’ lives every single day. Our core focus is imagination, and we’ve been in the game of behaviour change for marginalised kids and university students for 16 years.
                  </Paragraph>
                  <Paragraph>
                    {'With IMAGI-NATION{TV}, the focus is on our inner child, on unlocking that curiosity and joy to fuel hope, inspiration and action. Considering the challenges that many of us are facing with kids at home, IMAGI-NATION{TV} is a gift for all parents to sit down with their kids for an hour a day. And if you don’t have kids, it’s a gift for the kid inside you! Check out this article in Harvard Business Review from 2 BCG thinkers explaining how imagination helps businesses succeed and why it’s even more critical in the current climate.'}
                  </Paragraph>
                </div>
                <div className={styles.panelCol}>
                  &nbsp;
                </div>
              </div>
            </div>
            {/* partnering option ... */}

            {/* sponsour options */}

            <div className={`${styles.panelTwoCol}`}>
              <div className={styles.panelCol}>
                <div ref={scrollToSponsorWeek} className={`${styles.panelPartneringOption}`}>
                  <div className={`${styles.titleLockup} ${styles.titleLockupStack}`}>
                    <img
                      src={`${ASSETS_URL}/assets/images/illustrations/sponsor-week.png`}
                      alt="Sponsor a week"
                      className={styles.imgPartnerType}
                    />
                    <Title type="h3Title">Sponsor a week - $10k+</Title>
                  </div>
                  <div className={`${styles.panelTwoCol}`}>
                    <div className={styles.panelCol}>
                      <Paragraph>
                        Pick a week - any week - get a credit on the show for each day of the week and know you’ve helped change the world with us.
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.panelCol}>
                <div ref={scrollToSponsorEp} className={`${styles.panelPartneringOption}`}>
                  <div className={`${styles.titleLockup} ${styles.titleLockupStack}`}>
                    <img
                      src={`${ASSETS_URL}/assets/images/illustrations/sponsor-ep.png`}
                      alt="Sponsor an episode"
                      className={styles.imgPartnerType}
                    />
                    <Title type="h3Title">Sponsor an episode - $5k+</Title>
                  </div>
                  <div className={`${styles.panelTwoCol}`}>
                    <div className={styles.panelCol}>
                      <Paragraph>
                        Pick a day and help us bring that day to life! And get a credit on the show!
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.panelCol}>
                <div ref={scrollToSponsorSong} className={`${styles.panelPartneringOption}`}>
                  <div className={`${styles.titleLockup} ${styles.titleLockupStack}`}>
                    <img
                      src={`${ASSETS_URL}/assets/images/illustrations/sponsor-song.png`}
                      alt="Sponsor a song"
                      className={styles.imgPartnerType}
                    />
                    <Title type="h3Title">Sponsor a song - $100</Title>
                  </div>
                  <div className={`${styles.panelTwoCol}`}>
                    <div className={styles.panelCol}>
                      <Paragraph>
                        $100 will allow us to sponsor artists to share a song with us each Friday!
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* <section className={`${styles.sectionPanel} ${styles.panelOneCol}`}>
          <div className={styles.panelCol}>
            <Title type="h3Title" className={styles.titleInTVPartnerPanel}>
              {`
              Appendix ?
            `}
            </Title>
          </div>
        </section> */}
        <WavyDonateSection />
        <br />
        <br />
        <br />
      </div>
    </Layout>
  );
};

export default PartnerWithIntv;
