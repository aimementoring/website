import React from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Layout from '../../hocs/basicLayout';
import { SimpleBanner } from '../../components/banner/index';
import AMBASSADORS_LIST from '../../constants/ambassadorsList';
import './style.scss';

const AmbassadorBox = dynamic(() => import('../../components/ambassadorBox'));

const Ambassadors = () => (
  <Layout>
    <SimpleBanner
      title={<strong>People of AIME</strong>}
      titleType="headingLockup"
      titleStyleClass="bannerHeadingAmbassadors"
      bannerContainerClass="hero-banner--default hero-banner--case-studies full-width-wrap"
      bannerWrapperClass="flex flex-wrap items-center full-height"
      bannerContentWrapperClass="banner-wrapper"
      bannerContentClass="bannerContent"
    />
    <section className="py3 relative">
      <div className="wrap mx-auto">
        <div className="mb2 mt0 pt1 md-pt3 lg-pt3 md-mt4 lg-mt4 flex">
          <span className="line bg-brand-tertiary inline-block mr2 md-mr3 lg-mr3" />
          <div className="inline-block ambassadorIntroContent">
            <Title type="h4Title" theme={process.env.REACT_APP_THEME}>
              Meet some of the people of AIME
            </Title>
            <Paragraph>
              {`Meet some people we have connected to AIME from across the world.
              Get a sense of the characters we have, from our current volunteering Mentors
              to the 2017 Global Launch Ambasadors. From Program Managers in
              Brisbane Australia to Hooded Scholars in South Africa.
              We have friends in all corners of the universe, we'll keep updating their profiles
              here to shine a light on the kindness they bring to the world.`}
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
