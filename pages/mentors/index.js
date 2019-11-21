import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '../../hocs/basicLayout';
import MENTORS_LIST from '../../constants/mentorsList';

const MentorBox = dynamic(() => import(/* webpackChunkName 'MentorBox' */ '../../components/mentorBox'));

const Mentors = () => (
  <Layout>
    <div className="hero-banner--default hero-banner--case-studies full-width-wrap">
      <div className="flex flex-wrap items-center full-height">
        <div className="banner-wrapper">
          <h1>
            <span className="highlight-text">
              <em>
                Global Mentors
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
        <div className="mb2 mt0 pt1 md-pt3 lg-pt3 md-mt4 lg-mt4 flex items-center">
          <span className="line bg-brand-tertiary inline-block mr2 md-mr3 lg-mr3" />
          <div className="inline-block">
            <h1 className="inline-block lh-base">
              <span className="line-through">Ambassadors</span>
              {' '}
Mentors
            </h1>
            <p className="f-16 light c-grey block pt0 md-pt1 lg-pt1">
              Some of our Mentors from around the world
            </p>
          </div>
        </div>
        <div className="grid about-grid">
          {MENTORS_LIST.map((mentor) => <MentorBox {...mentor} key={mentor.name} />)}
        </div>
      </div>
    </section>
  </Layout>
);

export default Mentors;
