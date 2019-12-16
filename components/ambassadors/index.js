import React from 'react';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import Anchor from '../common/link';
import styles from './ambassadors.module.scss';

const Carousel = dynamic(() => import(/* webpackChunkName 'Carousel' */ '../carousel'));

const Ambassadors = () => (
  <div className={styles.mainContainer}>
    <div className={styles.mentorsSection}>
      <div className={styles.mentorsSectionWrapper}>
        <h1>
          <span className={styles.preText}>Global</span>
          <span className={styles.gradientText}>Ambassadors</span>
        </h1>
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
                    <h2>Uzo Aduba</h2>
                    <h3 className={styles.mainTitle}>Ambassador</h3>
                    <p className={styles.paragraph}>
                      By standing together with dignity and hope for the future, AIME transforms
                      lives.
                    </p>
                    <Anchor to="/ambassadors" className={styles.linkButton}>
                      See more ambassadors
                    </Anchor>
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
                    <h2>Patrick J. Adams</h2>
                    <h3 className={styles.mainTitle}>Ambassador</h3>
                    <p className={styles.paragraph}>
                      Beyond my family, no people have helped shape my life, my career and my view
                      of the world more than the mentors I have been lucky enough to work, play and
                      live with. I’m so excited to have found AIME and to do everything I can to
                      serve the cause of mentorship all over the world.
                      {' '}
                    </p>
                    <Anchor to="/ambassadors" className={styles.linkButton}>
                      See more ambassadors
                    </Anchor>
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
                    <h2>Ian Thorpe</h2>
                    <h3 className={styles.mainTitle}>Ambassador</h3>
                    <p className={styles.paragraph}>
                      I believe in the work AIME does and I want to see it broaden to being a
                      service globally. I want to see this happen because I believe in the young
                      people of our future and the future they can create for the world.
                    </p>
                    <Anchor to="/ambassadors" className={styles.linkButton}>
                      See more ambassadors
                    </Anchor>
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
