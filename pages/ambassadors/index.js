import React from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
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
              People of
              <strong>AIME</strong>
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
            <Title type="h4Title" theme={process.env.REACT_APP_THEME}>
              Meet some of the people of AIME
            </Title>
            {/* <h1 className="inline-block lh-base">People of AIME</h1> */}
            <Paragraph>
              Our ambassadors, mentors, program managers, hooded scholars, friends from around the world
            </Paragraph>
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
