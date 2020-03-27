import React from 'react';
import dynamic from 'next/dynamic';
import Button from 'aime-blueprint/lib/components/button';
import Layout from '../../hocs/basicLayout';
import { SimpleBanner } from '../../components/banner/index';
import styles from './theMentor.module.scss';

const Testimonials = dynamic(() => import('../../components/testimonials'));

const TheMentor = () => (
  <Layout>
    <div className="theMentor">
      <div className="full-width-wrap">
        <div className="flex flex-wrap items-center">
          <SimpleBanner
            title="The Mentor"
            titleType="headingLockup"
            groovy
            bannerContainerClass="full-width-wrap"
            bannerWrapperClass="flex flex-wrap items-center"
            bannerContentWrapperClass="banner-wrapper full-height section-background-image xs-py4"
            bannerContentClass={styles.mentorBannerContent}
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
          <div className="testimonial-container relative">
            <Testimonials />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default TheMentor;
