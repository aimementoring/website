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
              We are driven to unlock the limitless potential of children who have
              been left behind.
              We do that by building mentoring bridges between universities and high schools,
              between the powerful and the powerless, the haves and the have nots. We know that
              our fiery and intuitive brand of mentoring ends the cycle of disadvantage by
              permanently changing mindsets. Based in Redfern, Australia, our operation runs
              across campuses worldwide.
            </Paragraph>
            <Button theme={process.env.REACT_APP_THEME} aria-label="cta" type="link" url="/know-aime">
              Tell me more
            </Button>
          </div>
        </div>
        <div className={styles.column}>
          <img
            className={styles.imageBlock}
            src={`${ASSETS_URL}/assets/images/about/about-aime.jpg`}
            alt="about aime"
          />
        </div>
      </section>
      <section className={styles.sectionAbout}>
        <div className={styles.column}>
          <Title type="headingLockup" className={styles.sectionHeading} theme={process.env.REACT_APP_THEME}>
            The
            <strong>Kids</strong>
            At AIME
          </Title>
          <div className={styles.copy}>
            <Paragraph>
              <strong>
                Providing the stage.
              </strong>
            </Paragraph>
            <Paragraph>
              Everything we do is about these kids. They see themselves as being on the outside
              looking in…. that’s until we give them the mic. AIME program days are all about
              that. The Kids at AIME are central to the entire organisation. We’re just
              providing the framework, but they’re making the difference.
            </Paragraph>
          </div>
        </div>
        <div className={styles.column}>
          <img
            className={styles.imageBlock}
            alt="kids at aime"
            src={`${ASSETS_URL}/assets/images/about/the-kids-at-aime.jpg`}
          />
        </div>
      </section>
      <section className={styles.sectionAbout}>
        <div className={styles.column}>
          <Title type="headingLockup" className={styles.sectionHeading} theme={process.env.REACT_APP_THEME}>
            Hard lined
            <strong>Impact</strong>
          </Title>
          <div className={styles.copy}>
            <Paragraph>
              <strong>
                Not another smiley faced program.
              </strong>
            </Paragraph>
            <Paragraph>
              We turn up. Turn up. Turn up. We&apos;ve been at it since 2005
              and we&apos;re only just getting started! AIME benefits mentees,
              mentors and the entire community we work
              in. Don&apos;t take our word for it, check out the evidence.
            </Paragraph>
            <Button theme={process.env.REACT_APP_THEME} aria-label="cta" type="link" url="/impact">
              Read more
            </Button>
          </div>
        </div>
        <div className={styles.column}>
          <img
            className={styles.imageBlock}
            alt="impact"
            src={`${ASSETS_URL}/assets/images/about/impact.jpg`}
          />
        </div>
      </section>
      <section className={styles.sectionAbout}>
        <div className={styles.column}>
          <Title type="headingLockup" className={styles.sectionHeading} theme={process.env.REACT_APP_THEME}>
            The gift of
            <strong>Knowledge</strong>
          </Title>
          <div className={styles.copy}>
            <Paragraph>
              <strong>
                We&apos;ve got knowledge & tools to share.
              </strong>
            </Paragraph>
            <Paragraph>
              In 2018 we opened our model on demand to Universities from across the globe, with
              plans to be operational in 10+ different countries in 2020. Checkout our knowledge
              and tools and how you can get involved.
            </Paragraph>
            <Button theme={process.env.REACT_APP_THEME} aria-label="cta" type="link" url="/know-aime">
            Learn more
            </Button>
          </div>
        </div>
        <div className={styles.column}>
          <img
            className={styles.imageBlock}
            alt="gift of knowledge"
            src={`${ASSETS_URL}/assets/images/about/gift-of-knowladge.jpg`}
          />
        </div>
      </section>
      <section className={styles.sectionAbout}>
        <div className={styles.column}>
          <Title type="headingLockup" className={styles.sectionHeading} theme={process.env.REACT_APP_THEME}>
            Our
            <strong>Team</strong>
          </Title>
          <div className={styles.copy}>
            <Paragraph>
              <strong>
                Rebels with a cause.
              </strong>
            </Paragraph>
            <Paragraph>
              We are a small band of artists at AIME, writing, shaping, creating new worlds,
              challenging est world orders, making magic, fueling imaginative fire.
            </Paragraph>
            <div className={styles.btnWrap}>
              <Button theme={process.env.REACT_APP_THEME} aria-label="cta" type="link" url="/jack-manning-bancroft">
              Read about our founder
              </Button>
              <Button theme={process.env.REACT_APP_THEME} aria-label="cta" type="link" url="/positions">
              Join our team
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <img
            className={styles.imageBlock}
            alt="team"
            src={`${ASSETS_URL}/assets/images/about/team.jpg`}
          />
        </div>
      </section>
      <section className={styles.sectionAbout}>
        <div className={styles.column}>
          <Title type="headingLockup" className={styles.sectionHeading} theme={process.env.REACT_APP_THEME}>
            <strong>Apparel</strong>
            That changes lives
          </Title>
          <div className={styles.copy}>
            <Paragraph>
              <strong>
                AIME makes the greatest hoodie on earth.
              </strong>
            </Paragraph>
            <Paragraph>
              We are doing our best to make the most meaningful hoodie on the planet, check out
              the range designed and inspired by kids to change the world. Our shop currently
              ships out of Australia, if you can’t wait to get your hands on it, it usually
              takes a few weeks to send over. And jump onto our Saturday Swag list to be the
              first to know when AIME Apparel launches into the US in a legit way in 2020.
            </Paragraph>
            <Button theme={process.env.REACT_APP_THEME} aria-label="cta" type="link" url="https://shop.aimementoring.com/">
            Shop Apparel
            </Button>
          </div>
        </div>
        <div className={styles.column}>
          <img
            className={styles.imageBlock}
            alt="hoodie"
            src={`${ASSETS_URL}/assets/images/about/hoodie.jpg`}
          />
        </div>
      </section>
    </div>
  </Layout>
);

export default About;
