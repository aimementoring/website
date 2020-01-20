import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '../../hocs/basicLayout';
import CASE_STUDIES from '../../constants/caseStudiesList';

const CaseStudyBox = dynamic(() => import(/* webpackChunkName 'CaseStudyBox' */ '../../components/caseStudyBox'));

const CaseStudies = () => (
  <Layout>
    <div className="hero-banner--default hero-banner--case-studies full-width-wrap">
      <div className="flex flex-wrap items-center full-height">
        <div className="banner-wrapper">
          <h1>
            <span className="highlight-text">
              <em>
                Case Studies
                <br />
                <span className="scratch-underline">&nbsp;</span>
              </em>
            </span>
          </h1>
        </div>
      </div>
    </div>

    <section className="py3 relative">
      <div className="scratch-overlay-wrapper top-scratch bg-white" />

      <div className="wrap mx-auto">
        <div className="mt0 pt1 mb3 flex items-center">
          <span className="line bg-brand-tertiary inline-block mr2 md-mr3 lg-mr3" />
          <div className="inline-block">
            <h1 id="classroom-video" className="inline-block lh-base">
              Classroom Interview
            </h1>
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

export default CaseStudies;
