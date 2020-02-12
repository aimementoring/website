import React from 'react';
import dynamic from 'next/dynamic';
import { Components } from 'aime-blueprint';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Layout from '../../hocs/basicLayout';
import styles from './about.module.scss';

const {
  Title,
  Button,
} = Components;

const HeroBannerAbout = dynamic(() => import('../../components/heroBannerAbout'));

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const About = () => (
  <Layout>
    <HeroBannerAbout />
    <div className={styles.aboutWrapper}>
      <section className={styles.sectionAbout}>
        <div className={styles.column}>
          <Title type="headingLockup" className={styles.sectionHeading} theme={process.env.REACT_APP_THEME}>
            About
            <strong>AIME</strong>
          </Title>
          <div className={styles.copy}>
            <Paragraph>
              AIME is an Global organisation working to transform education
              from the inside out, to create equality, more access to opportunities,
              and a fairer world for marginalised children.
            </Paragraph>
            <Paragraph>
              AIME’s structured mentoring model unlocks the potential of marginalised
              children to overcome some of the barriers to success they face, by inspiring
              them and those around them to imagine and create a future different from
              the predetermined narrative of impending disadvantage that surrounds them.
              The program also aims to develop a sense of pride in these children,
              help them see the value education can bring them, and develop
              leadership skills and ambitions early on.
            </Paragraph>
            {/* <Button theme={process.env.REACT_APP_THEME} aria-label="cta" type="link" url="/know-aime">
              Tell me more
            </Button> */}
          </div>
        </div>
        <div className={styles.column}>
          <img
            className={styles.imageBlock}
            src={`${ASSETS_URL}/assets/images/illustrations/creative-person.png`}
            alt="about aime"
          />
        </div>
      </section>
      <section className={styles.sectionAbout}>
        <div className={styles.column}>
          {/* <Title type="headingLockup" className={styles.sectionHeading} theme={process.env.REACT_APP_THEME}>
            The
            <strong>Kids</strong>
            At AIME
          </Title> */}
          <div className={styles.copy}>
            {/* <Paragraph>
              <strong>
                Providing the stage.
              </strong>
            </Paragraph> */}
            <Paragraph>
              Since it was founded in 2005, AIME has worked with 39,000 Indigenous
              kids in Australia, who have achieved educational parity and beyond.
              Over 6,000 university students in Australia have volunteered with
              AIME since 2005, making it the largest volunteer movement in Australian
              history. Having scaled and proven its model of mentoring in Australia,
              AIME has  now expanded the model across the continents of Africa and
              the USA.
            </Paragraph>
          </div>
        </div>
        <div className={styles.column}>
          <img
            className={styles.imageBlock}
            alt="kids at aime"
            src={`${ASSETS_URL}/assets/images/illustrations/pink-earth.png`}
          />
        </div>
      </section>
      <section className={styles.sectionAbout}>
        <div className={styles.column}>
          {/* <Title type="headingLockup" className={styles.sectionHeading} theme={process.env.REACT_APP_THEME}>
            Hard lined
            <strong>Impact</strong>
          </Title> */}
          <div className={styles.copy}>
            {/* <Paragraph>
              <strong>
                Not another smiley faced program.
              </strong>
            </Paragraph> */}
            <Paragraph>
              AIME’s commitment is to keep building its Social Network for Good,
              a worldwide movement of people who want to create a fairer world and
              build bridges between those with power and those without, and to use
              the Imagination Curriculum and its 21 mentoring values, featured below,
              to change the world. The organisation has set out to do this by:
            </Paragraph>
            <Paragraph>
              Helping marginalised kids reach educational parity and beyond,
              and accelerating entrepreneurship and changing mindsets among them;
            </Paragraph>
            <Paragraph>
              Giving privilege a purpose by offering those who will have power tomorrow
              the chance to volunteer today as university mentors, working with school
              teachers to change mindsets and transform schools;
            </Paragraph>
            <Paragraph>
              Offering those with power today the chance to create policy change,
              give away their wealth and create more equal opportunities for all.
            </Paragraph>
            <Paragraph>
              In 2019, AIME received the global “Top 50 Organisations in Education”
              award for its significant contributions towards the field of education.
            </Paragraph>
            {/* <Button theme={process.env.REACT_APP_THEME} aria-label="cta" type="link" url="/impact">
              Read more
            </Button> */}
          </div>
        </div>
        <div className={styles.column}>
          <img
            className={styles.imageBlock}
            alt="impact"
            src={`${ASSETS_URL}/assets/images/illustrations/heart-person.png`}
          />
        </div>
      </section>
      <section className={styles.sectionAbout}>
        <div className={styles.fullWidthPanel}>
          <Title type="headingLockup" className={styles.sectionHeading} theme={process.env.REACT_APP_THEME}>
            Our 21
            <strong>Values</strong>
          </Title>
          <img
            alt="AIME's 21 Values"
            src={`${ASSETS_URL}/assets/images/illustrations/21Values%402x+(1).jpg`}
          />
        </div>
      </section>
    </div>
  </Layout>
);

export default About;
