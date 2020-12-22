import React from 'react';
import ErrorBoundary from '../../components/common/errorBoundary';
import styles from './be-a-mentor.module.scss';
import BeAMentorForm from '../../components/beAMentor/beAMentorForm';
import WelcomeBox from '../../components/beAMentor/welcomeBox';
import HeroBanner from '../../components/beAMentor/heroBanner';
import YearHeader from '../../components/beAMentor/yearHeader';

const BeAMentor = () => (
  <div>
    <ErrorBoundary>
      <main role="main">
        <HeroBanner />
        <section className={styles.wrapper}>
          <div className={styles.container}>
            <YearHeader />
            <WelcomeBox />
            <BeAMentorForm />
          </div>
        </section>
        <div id="aime-parent-video-box" />
      </main>
    </ErrorBoundary>
  </div>
);


export default BeAMentor;
