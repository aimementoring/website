import React, { useEffect } from 'react';
import Layout from '../../hocs/basicLayout';

const Quizzes = () => {
  useEffect(() => {
    const aScript = document.createElement('script');
    aScript.type = 'text/javascript';
    aScript.src = ' https://studiosity.com/connect/assets/random_quiz_loader.js';
    document.head.appendChild(aScript);
  }, []);

  return (
    <Layout>
      <section className="wrap mx-auto px3">
        <div className="mt0 pt1 mb3 md-pt3 lg-pt3 md-mt4 lg-mt4 flex items-center">
          <span className="line bg-brand-tertiary inline-block mr2 md-mr3 lg-mr3" />
          <div className="inline-block">
            <h1 id="classroom-video" className="inline-block lh-base">
              Tutor Squad Quizzes
            </h1>
            <p className="f-16 light c-grey block pt0 md-pt1 lg-pt1">
              {`Below you'll find thousands of quizzes. Pick your year level, select a topic and then
              away you go. If you want to start over just reload the page.`}
            </p>
          </div>
        </div>
        <div id="random-quiz" style={{ minHeight: '600px;' }} />
      </section>
    </Layout>
  );
};

export default Quizzes;
