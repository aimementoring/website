import React from 'react';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import { Components } from 'aime-blueprint';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Anchor from '../common/link';
import styles from './ambassadors.module.scss';

const Carousel = dynamic(() => import(/* webpackChunkName 'Carousel' */ '../carousel'));

const {
  Title,
  Button,
} = Components;

const Ambassadors = () => (
  <div className={styles.mainContainer}>
    <div className={styles.mentorsSection}>
      <div className={styles.mentorsSectionWrapper}>
        {/* <Title>
          <span className={styles.preText}>Global</span>
          <span className={styles.gradientText}>Ambassadors</span>
        </Title> */}
        <Title type="headingLockup">
          Global
          <strong>Ambassadors</strong>
        </Title>
        <div className={styles.carousel}>
          <Carousel type="ambassadors">
            <div className={styles.mentorSlideWrapper}>
              <div className={styles.mentorImageWrapper}>
                <div className={classNames(styles.homepageMentorsImage, styles.mentorUzo)}>
                  &nbsp;
                </div>
              </div>
              <div className={styles.mentorContent}>
                <div className={styles.mentorContentWrapper}>
                  <div className={styles.titleContainer}>
                    <Title type="h2Title" className={styles.ambassadorName}>Uzo Aduba</Title>
                    <Title type="h5Title">Ambassador</Title>
                    <Paragraph>
                      By standing together with dignity and hope for the future, AIME transforms
                      lives.
                    </Paragraph>
                    <Button theme="rainbow" aria-label="cta" type="link" url="/ambassadors">
                      See more ambassadors
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.mentorSlideWrapper}>
              <div className={styles.mentorImageWrapper}>
                <Anchor
                  to="/ambassadors"
                  className={classNames(styles.homepageMentorsImage, styles.mentorPatrick)}
                >
                  &nbsp;
                </Anchor>
              </div>
              <div className={styles.mentorContent}>
                <div className={styles.mentorContentWrapper}>
                  <div className={styles.titleContainer}>
                    <Title type="h2Title" className={styles.ambassadorName}>Patrick J. Adams</Title>
                    <Title type="h5Title">Ambassador</Title>
                    <Paragraph>
                      Beyond my family, no people have helped shape my life, my career and my view
                      of the world more than the mentors I have been lucky enough to work, play and
                      live with. I’m so excited to have found AIME and to do everything I can to
                      serve the cause of mentorship all over the world.
                    </Paragraph>
                    <Button theme="rainbow" aria-label="cta" type="link" url="/ambassadors">
                      See more ambassadors
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.mentorSlideWrapper}>
              <div className={styles.mentorImageWrapper}>
                <Anchor
                  to="/ambassadors"
                  className={classNames(styles.homepageMentorsImage, styles.mentorIan)}
                >
                  &nbsp;
                </Anchor>
              </div>
              <div className={styles.mentorContent}>
                <div className={styles.mentorContentWrapper}>
                  <div className={styles.titleContainer}>
                    <Title type="h2Title" className={styles.ambassadorName}>Ian Thorpe</Title>
                    <Title type="h5Title">Ambassador</Title>
                    <Paragraph>
                      I believe in the work AIME does and I want to see it broaden to being a
                      service globally. I want to see this happen because I believe in the young
                      people of our future and the future they can create for the world.
                    </Paragraph>
                    <Button theme="rainbow" aria-label="cta" type="link" url="/ambassadors">
                      See more ambassadors
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
);

export default Ambassadors;
