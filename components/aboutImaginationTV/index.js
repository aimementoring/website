import React from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import IntercomChat from '../intercom';
import styles from './aboutImaginationTV.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const AboutImaginationTv = (props) => {
  const { scrollHandler } = props;

  return (
    <section className={styles.aboutInTVSection}>
      <div className={styles.aboutInTVWrapper}>
        <div className={styles.aboutParagraphColumn}>
          <Title type="h3Title" className={styles.aboutInTVTitle}>
            A mentor in the home for every kid, every day.
          </Title>
          <Paragraph>
            AIME was founded in 2005 to bring mentors into the lives of kids left behind.
            Since then we’ve grown to become global experts in mentoring - last year
            being awarded one of the top 50 education groups in the world.
          </Paragraph>
          <Paragraph>
            {'We created IMAGI-NATION{TV} & the IMAGI-NATION{CLASSROOM} experience to put a mentor in the home every day during the tough times of COVID-19 and beyond. It’s a daily TV show broadcast live on the Internet, and it’s a gift for teachers, parents and kids to help make sense of today & imagine tomorrow.'}
          </Paragraph>
          <div className={styles.becomeAPartnerBtn}>
            <Button onClick={scrollHandler} theme={process.env.REACT_APP_THEME}>
              Partner with  us
            </Button>
          </div>
        </div>
        <div className={styles.aboutCyclopsColumn}>
          <div className={styles.cyclopsSpeechBubble}>
            <div>
              {/* <Button type="text" className={styles.speechButtonContent} onClickFunction={() => {}}>
                Read the full
                story
                <br />
                <span>here</span>
              </Button> */}
              <Title type="h5Title" className={styles.speechButtonContent}>
                More partner
                options
                on the way
              </Title>
            </div>
            <img
              src={`${ASSETS_URL}/assets/images/illustrations/kyle-cyclops@2x.png`}
              alt="Kyle the Cyclops"
              className={styles.cyclopsImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

AboutImaginationTv.propTypes = {
  scrollHandler: PropTypes.func.isRequired,
};

export default AboutImaginationTv;
