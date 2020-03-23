import React from 'react';
// import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import Layout from '../../hocs/basicLayout';
// import CASE_STUDIES from '../../constants/caseStudiesList';
// import VideoPlayer from '../../components/videoPlayer';
import styles from './styles.module.scss';

// const CaseStudyBox = dynamic(() => import('../../components/caseStudyBox'));
const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

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
              Live every weekday 12pm AEDT
            </Title>
            <Paragraph>
              IMAGI-NATION TV is for marginalised kids across the earth’s
              surface to have a daily mentor in their lives. It takes the
              magic of AIME’s Imagination Factory to laptops, phones, and
              homes across the world.
            </Paragraph>
          </div>
        </div>
      </div>
      <div className={styles.videoContainerFeature}>
        <a href="https://www.youtube.com/user/aimementoring/live" target="_blank">
          <img
            src={`${ASSETS_URL}/assets/images/illustrations/imagi-robot-soon@2x.gif`}
            alt="Imagi-nation TV"
            className={styles.videoCoverArt}
          />
        </a>
      </div>
    </div>
    <div className={styles.inTVContentWrapper}>
      <section className={styles.triBtnSet}>
        <Button type="link"
          text="Watch live on YouTube"
          theme={process.env.REACT_APP_THEME}
          className={`${styles.imagiBtn}`}
          url="https://www.youtube.com/playlist?list=PLjfNcXcq0TOTTMNfKomUHtgdjliQ2iW80" />
        <Button type="link"
          className={`${styles.imagiDonate} ${styles.imagiBtn}`}
          text="Donate to [INTV]"
          theme={process.env.REACT_APP_THEME}
          url="https://imagi-nation-tv.raisely.com/" />
        <Button type="link"
          className={`${styles.imagiHoodieBtn} ${styles.imagiBtn}`}
          text="Buy the Imagi-Nation Hoodie"
          theme={process.env.REACT_APP_THEME}
          url="https://shop.aimementoring.com/collections/all-products/products/imagi-nation-hoodie" />
      </section>
      <hr />
      <section className={styles.inTVEpisodesWrapper}>
        <div className={`${styles.introEpisodes} ${styles.episodePanel}`}>
          <Title className={styles.welcomeTitle} type="h3Title" theme={process.env.REACT_APP_THEME}>
            About Each Episode
          </Title>
          <Paragraph>
            The latest from Hope, mentors around the world, Nala, covering
            all the topics from feeling nice, music gigs, blah and this, you
            know. Get in it, good chance to explain it a bit more here.
          </Paragraph>
        </div>
        
        <div className={`${styles.dailyWrapper} ${styles.episodePanel}`}>
          <div className={styles.episodeHeader}>
            <img
              src={`${ASSETS_URL}/assets/images/illustrations/EARTH-min@2x.gif`}
              alt="Spinning Earth"
              className={styles.dancingIllo}
            />
            <Title className={styles.headingLockup} type="h3Title" theme={process.env.REACT_APP_THEME}>
              Monday
              <strong>Thinkers</strong>
            </Title>
          </div>
          <div className={styles.episodeContentInfo}>
            <Paragraph>
              World-class teachers and knowledge holders, across our schools and
              universities and further abroad; the philosophers & big picture thinkers
              of the world.
            </Paragraph>
          </div>
        </div>

        
        <div className={`${styles.dailyWrapper} ${styles.episodePanel}`}>
          <div className={styles.episodeHeader}>
            <img
              src={`${ASSETS_URL}/assets/images/illustrations/EARTH-min@2x.gif`}
              alt="Spinning Earth"
              className={styles.dancingIllo}
            />
            <Title className={styles.headingLockup} type="h3Title" theme={process.env.REACT_APP_THEME}>
              Tuesday
              <strong>Youngsters</strong>
            </Title>
          </div>
          <div className={styles.episodeContentInfo}>
            <Paragraph>
              <strong>
                Presidential Speech for IMAGI-NATION
              </strong>
            </Paragraph>
            <Paragraph>
              Every week, students from across the world are given the stage to deliver a
              3-minute speech as the President of IMAGI-NATION. They will focus on the topic
              of the week, and use the space to inspire us all to make sense of the world
              today so we can imagine the world tomorrow.
            </Paragraph>
            <Paragraph>
              <strong>
                CHAOS Classroom
              </strong>
            </Paragraph>
            <Paragraph>
              Join AIME Founder & CEO Jack Manning Bancroft and 15 students from across
              Australia and around the world who will take part in a 7 minute hyperdrive
              lesson on the topic theme of the week. See a real life case study as to how
              to run a classroom digitally amongst the chaos of today.
            </Paragraph>
            <Paragraph>
              We’ll also be inviting boss human guest teachers take on the reins of
              the CHAOS Classroom and run a session on any one of our 21 core values.
            </Paragraph>
          </div>
        </div>

      </section>
    </div>
  </Layout>
);

export default ImagiNationTV;
