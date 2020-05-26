import React from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Layout from '../../hocs/basicLayout';
import { SimpleBanner } from '../../components/banner/index';
import CASE_STUDIES from '../../constants/caseStudiesList';
import styles from './case-studies.module.scss';

const CaseStudyBox = dynamic(() => import('../../components/caseStudyBox'));

const CaseStudies = () => (
  <Layout>
    <SimpleBanner
      title={(<strong>Case Studies</strong>)}
      titleType="headingLockup"
      titleStyleClass={styles.bannerHeadingAmbassadors}
      bannerContainerClass={styles.banner}
      bannerWrapperClass={styles.bannerWrapperClass}
      groovy
    />
    <section className={styles.mainSection}>
      <div className={styles.mainSectionWrapper}>
        <div className={styles.flexWrapper}>
          <Title id="classroom-video" type="h3Title">
            Classroom Interview
          </Title>
          <Paragraph>
            Award-winning journalist and human rights campaigner, Jeff McMullen got together
            with a group of AIME mentors and alumni to chat about their experiences with the
            program and what they gained from it.
          </Paragraph>
          <div className={styles.videoContainer}>
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
          <Title type="h3Title">Case Studies</Title>
          <Paragraph>THe AIME Classroom</Paragraph>
        </div>
        <div className={styles.aboutGrid}>
          {CASE_STUDIES.map((caseStudy) => <CaseStudyBox {...caseStudy} key={caseStudy.name} />)}
        </div>
      </div>
    </section>
  </Layout>
);

export default CaseStudies;
