import React, { useEffect } from 'react';
import Layout from '../../hocs/basicLayout';
import { SimpleBanner } from '../../components/banner';
import styles from './quizzes.module.scss';

const Quizzes = () => {
  useEffect(() => {
    const aScript = document.createElement('script');
    aScript.type = 'text/javascript';
    aScript.src = ' https://studiosity.com/connect/assets/random_quiz_loader.js';
    document.head.appendChild(aScript);
  }, []);

  return (
    <Layout>
      <div className="theMentor">
        <div className="full-width-wrap">
          <div className="flex flex-wrap items-center"></div>
          <SimpleBanner
            title={(
              <>
                Tutor Squad
            <strong>Quizzes</strong>
              </>
            )}
            titleType="headingLockup"
            groovy
            copy="Below you'll find thousands of quizzes. Pick your year level, select a topic and then
            away you go. If you want to start over just reload the page."
            titleStyleClass={styles.bannerHeadingQuizzes}
            bannerContainerClass={styles.quizzesBanner}
            bannerWrapperClass={styles.bannerWrapper}
            bannerContentWrapperClass={styles.bannerContentWrapper}
          />
          <section className="wrap mx-auto px3">
            <div id="random-quiz" style={{ minHeight: '600px' }} />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Quizzes;
