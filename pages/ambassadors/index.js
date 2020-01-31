import React from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Layout from '../../hocs/basicLayout';
import AMBASSADORS_LIST from '../../constants/ambassadorsList';

const AmbassadorBox = dynamic(() => import('../../components/ambassadorBox'));

const Ambassadors = () => (
  <Layout>
    <div className="hero-banner--default hero-banner--case-studies full-width-wrap">
      <div className="flex flex-wrap items-center full-height">
        <div className="banner-wrapper">
          <div className="bannerContent">
            <Title type="headingLockup" className="bannerHeadingAmbassadors" theme={process.env.REACT_APP_THEME}>
              AIME
              <strong>Ambassadors</strong>
            </Title>
          </div>
        </div>
      </div>
    </div>
    <section className="py3 relative">
      <div className="wrap mx-auto">
        <div className="mb2 mt0 pt1 md-pt3 lg-pt3 md-mt4 lg-mt4 flex items-center">
          <span className="line bg-brand-tertiary inline-block mr2 md-mr3 lg-mr3" />
          <div className="inline-block">
            <h1 className="inline-block lh-base">Ambassadors</h1>
            <p className="f-16 light c-grey block pt0 md-pt1 lg-pt1">
              Some of our ambassadors from around the world
            </p>
          </div>
        </div>
        <div className="grid about-grid">
          {AMBASSADORS_LIST.map((ambassador) => (
            <AmbassadorBox {...ambassador} key={ambassador.name} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Ambassadors;
