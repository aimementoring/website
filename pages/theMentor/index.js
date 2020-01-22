import React from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Button from 'aime-blueprint/lib/components/button';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Layout from '../../hocs/basicLayout';
import styles from './theMentor.module.scss';

const Testimonials = dynamic(() => import(/* webpackChunkName 'Testimonials' */ '../../components/testimonials'));

const TheMentor = () => (
  <Layout>
    <div className="theMentor">
      <div className="full-width-wrap">
        <div className="flex flex-wrap items-center">
          <div className="banner-wrapper full-height section-background-image xs-py4">
            <div className={styles.mentorBannerContent}>
              <Title>
                The Mentor
              </Title>
              <Paragraph className={styles.mentorPara}>
                The Mentor, by AIME Founder and CEO Jack Manning Bancroft is the story of how
                it all started. Gain a real insight into contemporary Indigenous Australia.
                How from humble beginnings a young Indigenous man&apos;s journey through university
                lead to starting a fire that tackles education inequality across Australia and
                now the world.
              </Paragraph>
              <Button
                theme={process.env.REACT_APP_THEME}
                aria-label="buy-copy"
                type="link"
                target="_blank"
                url="https://shop.aimementoring.com/products/the-mentor"
              >
                Grab a copy
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-container relative">
        <Testimonials />
      </div>
    </div>
  </Layout>
);

export default TheMentor;
