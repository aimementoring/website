import React from 'react';
import Layout from '../../hocs/basicLayout';
import styles from './be-a-mentor.module.scss';
import BeAMentorForm from '../../components/beAMentor/beAMentorForm';
import WelcomeBox from '../../components/beAMentor/welcomeBox';
import HeroBanner from '../../components/beAMentor/heroBanner';
import YearHeader from '../../components/beAMentor/yearHeader';

const BeAMentor = () => (
  <Layout>
    <HeroBanner />
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <YearHeader />
        <WelcomeBox />
        <BeAMentorForm />
      </div>
    </section>
  </Layout>
);


export default BeAMentor;
