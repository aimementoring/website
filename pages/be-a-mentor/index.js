import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '../../hocs/basicLayout';
import styles from './be-a-mentor.module.scss';

const BeAMentorForm = dynamic(() => import('../../components/beAMentor/beAMentorForm'));
const WelcomeBox = dynamic(() => import('../../components/beAMentor/welcomeBox'));
const HeroBanner = dynamic(() => import('../../components/beAMentor/heroBanner'));
const YearHeader = dynamic(() => import('../../components/beAMentor/yearHeader'));

const BeAMentor = () => (
  <Layout>
    <div className={styles.beAMentorContainer}>
      <HeroBanner />
      <section className={styles.fullWidthWrap}>
        <div className={styles.mentorEOIContainer}>
          <YearHeader />
          <WelcomeBox />
          <BeAMentorForm />
        </div>
      </section>
    </div>
  </Layout>
);


export default BeAMentor;
