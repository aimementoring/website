import React from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import Layout from '../../hocs/basicLayout';
import CASE_STUDIES from '../../constants/caseStudiesList';
import VideoPlayer from '../../components/videoPlayer';
import styles from './styles.module.scss';

const CaseStudyBox = dynamic(() => import('../../components/caseStudyBox'));
const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const ImagiNationTV = () => (
  <Layout>
    {/* <div className="hero-banner--default hero-banner--case-studies full-width-wrap">
      <div className="flex flex-wrap items-center full-height">
        <div className="banner-wrapper">
          <Title
            className={styles.headingLockup}
            type="headingLockup"
            theme={process.env.REACT_APP_THEME}
            >
            Welcome to
            <strong className={styles.hiddenTitle}>Imagi-Nation TV</strong>
          </Title>
        </div>
      </div>
    </div> */}

    <div className={styles.heroBannerImagiTV}>
      <div className={styles.bannerWrapper}>
        <div className={styles.bannerContent}>
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
      </div>
    </div>

    <div className={styles.contentWrapperCampaignPg}>

      <section className={styles.videoContainerFeature}>
        <VideoPlayer
          url="https://www.youtube.com/watch?v=DiQaOlsDZlY"
          imageUrl="https://images.ctfassets.net/iz0aikshgysc/4veRQTJ6ilhYLtfflt5yPu/514ecaff0ba258f1853b718ca70115bc/Sherice_banner.jpg"
        >
          <div>
            <Title type="h4Title" theme={process.env.REACT_APP_THEME}>
              Hey Lara
            </Title>
            <Paragraph theme={process.env.REACT_APP_THEME}>
              Lara should click this video.
            </Paragraph>
            <Button type="link" text="Watch now" theme={process.env.REACT_APP_THEME} url="https://www.youtube.com/watch?v=DiQaOlsDZlY" />
          </div>
        </VideoPlayer>
      </section>

    </div>

    <section className="py3 relative">

      <div className="wrap mx-auto">
        <div className="mt0 pt1 mb3 flex items-center">
          <span className="line bg-brand-tertiary inline-block mr2 md-mr3 lg-mr3" />
          <div className="inline-block">
            <p className="f-16 light c-grey block pt0 md-pt1 lg-pt1">
              Award-winning journalist and human rights campaigner, Jeff McMullen got together
              with a group of AIME mentors and alumni to chat about their experiences with the
              program and what they gained from it.
            </p>
          </div>
        </div>
        <div className="video-container">
          <iframe
            title="case-studies-video-container"
            src="https://player.vimeo.com/video/219339041?title=0&amp;byline=0&amp;portrait=0"
            width="640"
            height="360"
            frameBorder="0"
            webkitallowfullscreen=""
            mozallowfullscreen=""
            allowFullScreen=""
          />
        </div>

        <div className="mb2 mt0 pt1 md-pt3 lg-pt3 md-mt4 lg-mt4 flex items-center">
          <span className="line bg-brand-tertiary inline-block mr2 md-mr3 lg-mr3" />
          <div className="inline-block">
            <h1 className="inline-block lh-base">Case Studies</h1>
            <p className="f-16 light c-grey block pt0 md-pt1 lg-pt1">THe AIME Classroom</p>
          </div>
        </div>

        <div className="grid about-grid">
          {CASE_STUDIES.map((caseStudy) => <CaseStudyBox {...caseStudy} key={caseStudy.name} />)}
        </div>
      </div>
    </section>
  </Layout>
);

export default ImagiNationTV;
