import React from 'react';
import dynamic from 'next/dynamic';
import { Components } from 'aime-blueprint';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import List from 'aime-blueprint/lib/components/list';
import Anchor from '../../components/common/link';
import Layout from '../../hocs/basicLayout';
import styles from './about.module.scss';

const {
  Title,
} = Components;

const HeroBannerAbout = dynamic(() => import('../../components/heroBannerAbout'));

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const About = () => (
  <Layout>
    <HeroBannerAbout />
    <div className={styles.aboutWrapper}>
      <section className={styles.sectionAbout}>
        <div className={styles.column}>
          <Title
            type="headingLockup"
            className={styles.sectionHeading}
            theme={process.env.REACT_APP_THEME}
          >
            About
            <strong>AIME</strong>
          </Title>
          <div className={styles.copy}>
            <Paragraph>
              AIME is an Imagination Factory that since 2005, has been creating pop-up
              Imagination Factories on university campuses around the world to unlock
              the internal narrative of marginalised kids, taking them from a world that
              tells them they can’t to a world that tells them they can. Kids who experience
              the Imagination Factory have gone on to achieve educational parity, rise up as
              entrepreneurs, and take on a whole new mindset that prepares them for success.
            </Paragraph>
            <Paragraph>
              What inspires our Imagination Factory are the mentors throughout human history,
              the philosophers, artists, inventors and designers who have moved humanity
              forward in positive ways. With the force of imagination, mentoring and unlikely
              alliances between those with power and those without, AIME is creating a fairer
              world.
            </Paragraph>
          </div>
        </div>
        <div className={styles.column}>
          <img
            className={styles.imageBlock}
            src={`${ASSETS_URL}/assets/images/illustrations/creative-spark-person.png`}
            alt="about aime"
          />
        </div>
      </section>
      <section className={styles.sectionAbout}>
        <div className={styles.column}>
          <div className={styles.copy}>
            <Paragraph>
              In Australia 20,000+ Indigenous youth have experienced AIME&apos;s
              Imagination Factory, helping to solve one of Australia&apos;s most
              complex social challenges - Indigenous inequality.
            </Paragraph>
            <Paragraph>
              In doing so we&apos;ve designed a transferrable solution that works across
              cultures/ borders,
              <Anchor to="/impact" as="/impact">
                cost-effectively (SROI of 8.9x) and at scale (7.5k+ kids p.a. across 5 countries)
              </Anchor>
              . In the process, we&apos;ve also built the largest volunteering movement of
              university students in Australian history.
            </Paragraph>
            <Paragraph>
              Having scaled and proven the model of mentoring in Australia,
              AIME has now expanded via direct delivery in 6 countries and launched&nbsp;
              <a href="http://imagi-nation.tv" target="_blank" rel="noopener noreferrer">
                IMAGI-NATION TV
              </a>
              &nbsp;direct to homes.
            </Paragraph>
          </div>
        </div>
        <div className={styles.column}>
          <img
            className={styles.imageBlock}
            alt="kids at aime"
            src={`${ASSETS_URL}/assets/images/illustrations/pinky-earth.png`}
          />
        </div>
      </section>
      <section className={styles.sectionAbout}>
        <div className={styles.column}>
          <div className={styles.copy}>
            <Paragraph>
              AIME’s commitment is to keep building its Social Network for Good,
              a worldwide movement of people who want to create a fairer world and
              build bridges between those with power and those without, and to use
              the Imagination Curriculum and its 21 mentoring values, featured below,
              to change the world. The organisation has set out to do this by:
            </Paragraph>
            <List
              type="ulList"
              list={[
                'Helping marginalised kids reach educational parity and beyond, and accelerating entrepreneurship and changing mindsets among them;',
                'Giving privilege a purpose by offering those who will have power tomorrow the chance to volunteer today as university mentors, working with school teachers to change mindsets and transform schools;',
                'Offering those with power today the chance to create policy change, give away their wealth and create more equal opportunities for all.',
              ]}
            />
            <Paragraph>
              In 2019, AIME received the global&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/@gfelworld/aime-honored-with-the-top-50-organisations-in-education-award-at-gfel-dubai-2019-6a962b1af232"
              >
                Top 50 Organisations in Education
              </a>
              &nbsp;award for its significant contributions towards the field of education.
            </Paragraph>
          </div>
        </div>
        <div className={styles.column}>
          <img
            className={styles.imageBlock}
            alt="impact"
            src={`${ASSETS_URL}/assets/images/illustrations/heart-explode-person.png`}
          />
        </div>
      </section>
      <section className={styles.sectionAbout}>
        <div className={styles.fullWidthPanel}>
          <Title type="headingLockup" className={styles.sectionHeading} theme={process.env.REACT_APP_THEME}>
            Our 21
            <strong>Values</strong>
          </Title>
          <div className={styles.copy}>
            <Paragraph>
              We have distilled the essence of our model of mentoring into 21
              core values and used these values to develop a suite of training
              tools to get a generation of mentors ready to light the spark
              of marginalised youth worldwide.
            </Paragraph>
          </div>
          <img
            alt="AIME's 21 Values"
            src={`${ASSETS_URL}/assets/images/illustrations/21Values%402x+(1).jpg`}
          />
        </div>
      </section>
      <section className={styles.sectionAbout}>
        <div className={styles.fullWidthPanelStrat}>
          <Title type="h5Title" className={styles.sectionHeading} theme={process.env.REACT_APP_THEME}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`${ASSETS_URL}/assets/pdf/strategy/AIME_strat_1401.pdf`}
            >
                READ OUR STRATEGY NOW
            </a>
          </Title>
        </div>
      </section>
    </div>
  </Layout>
);

export default About;
