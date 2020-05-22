import React from 'react';
import dynamic from 'next/dynamic';
import Button from 'aime-blueprint/lib/components/button';
import Layout from '../../hocs/basicLayout';
import { SimpleBanner } from '../../components/banner/index';
import styles from './theMentor.module.scss';

const Testimonials = dynamic(() => import('../../components/testimonials'));

const TheMentor = () => (
  <Layout>
    <div>
      <div className={styles.container}>
        <SimpleBanner
          title="The Mentor"
          titleType="headingLockup"
          groovy
          bannerContainerClass={styles.fullWidthWrap}
          bannerWrapperClass={styles.container}
          bannerContentWrapperClass={styles.banner}
          bannerContentClass={styles.bannerContent}
          copy="The Mentor, by AIME Founder and CEO Jack Manning Bancroft is the story of how
            it all started. Gain a real insight into contemporary Indigenous Australia.
            How from humble beginnings a young Indigenous man&apos;s journey through university
            lead to starting a fire that tackles education inequality across Australia and
            now the world."
          button={(
            <Button
              theme={process.env.REACT_APP_THEME}
              aria-label="buy-copy"
              type="link"
              target="_blank"
              rel="noopener noreferrer"
              url="https://shop.aimementoring.com/products/the-mentor"
            >
              Grab a copy
            </Button>
          )}
        />
        <div className={styles.testimonials}>
          <Testimonials />
        </div>
      </div>
    </div>
  </Layout>
);

export default TheMentor;
