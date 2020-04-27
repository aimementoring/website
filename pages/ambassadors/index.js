import React from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Layout from '../../hocs/basicLayout';
import { SimpleBanner } from '../../components/banner/index';
import AMBASSADORS_LIST from '../../constants/ambassadorsList';
import styles from './ambassadors.module.scss';


const AmbassadorBox = dynamic(() => import('../../components/ambassadorBox'));

const Ambassadors = () => (
  <Layout>
    <SimpleBanner
      title={<strong>People of AIME</strong>}
      titleType="headingLockup"
      titleStyleClass={styles.bannerHeadingAmbassadors}
      bannerContainerClass={styles.heroBanner}
      bannerWrapperClass={styles.bannerWrapperClass}
      bannerContentWrapperClass={styles.bannerWrapper}
      bannerContentClass="bannerContent"
    />
    <section className={styles.sectionContainer}>
      <div className={styles.divFirstContainer}>
        <div className={styles.divSecondContainer}>
          <span className={styles.emptySpan} />
          <div className={styles.divThirdContainer}>
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
        <div className={styles.divFouthContainer}>
          {AMBASSADORS_LIST.map((ambassador) => (
            <AmbassadorBox {...ambassador} key={ambassador.name} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Ambassadors;
