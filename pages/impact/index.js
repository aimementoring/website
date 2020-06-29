import React from 'react';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import Anchor from '../../components/common/link';
import Layout from '../../hocs/basicLayout';
import MovingWaves from '../../components/movingWaves';
import IntercomChat from '../../components/intercom';
import styles from './impact.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const DownloadImage = () => (
  <img
    alt="Download"
    src={`${ASSETS_URL}/assets/images/Download.svg`}
  />
);

const Impact = () => (
  <Layout>
    <div className={styles.bannerWrap}>
      <MovingWaves />
      <div className={styles.titleWrapper}>
        <div className={styles.banner}>
          <Title
            type="headingLockup"
            className={styles.headerTitle}
            theme={process.env.REACT_APP_THEME}
          >
            Our
            <strong>
              Impact
            </strong>
          </Title>
        </div>
      </div>
    </div>
    <section>
      <div className={styles.introText}>
        <Title type="h4Title" align="center" theme={process.env.REACT_APP_THEME}>
            We’ve got a story of change that’s lit up the world since 2005, one kid at a time.
            It’s a simple idea, mentoring.
        </Title>
        <br />
        <Title type="h4Title" align="center" theme={process.env.REACT_APP_THEME}>
            It’s a proven model to end inequality and bring the
            powerful and powerless together, cost-effectively
            and at scale.
        </Title>
      </div>
    </section>
    <section>
      <div className={styles.factsContainer}>
        <section className={styles.sectionRow}>
          <div className={styles.sectionColumn}>
            <div className={styles.sectionCopy}>
              <Paragraph>
                <strong>
                    We&apos;ve ended educational inequality
                </strong>
              </Paragraph>
              <Paragraph>
                  We do that by building mentoring bridges between universities and high
                  schools, between the powerful and the powerless, the haves and the have nots.
                  We know that our fiery and intuitive brand of mentoring ends the cycle of
                  disadvantage by permanently changing mindsets. Based in Redfern, Australia,
                  our operation runs across campuses worldwide.
              </Paragraph>
            </div>
          </div>
          <div className={styles.impactSectionImageContainer}>
            <img
              src={`${ASSETS_URL}/assets/images/impact/yr12attain.png`}
              alt="Year 12 Attainment over the last 5 years"
            />
          </div>
        </section>
        <section className={styles.sectionRow}>
          <div className={styles.sectionColumn}>
            <div className={styles.sectionCopy}>
              <Paragraph>
                <strong>
                    We’re cost-effective
                </strong>
              </Paragraph>
              <Paragraph>
                  As at 2019, every $ spent on AIME, $8.90 worth of benefits are generated for the
                  society.
              </Paragraph>
            </div>
          </div>
          <div className={styles.impactSectionImageContainer}>
            <img
              src={`${ASSETS_URL}/assets/images/impact/dollarinvest.png`}
              alt="For every $1 invested, $8.90 return"
            />
          </div>
        </section>
        <section className={styles.sectionRow}>
          <div className={styles.sectionColumn}>
            <div className={styles.sectionCopy}>
              <Paragraph>
                <strong>
                    We&apos;re scalable
                </strong>
              </Paragraph>
              <Paragraph>
                  What started as a simple idea working with 25 mentees at the University of
                  Sydney is now a global movement of change through mentoring, fueled by
                  university students, and the model is set for rapid expansion till 2025.
              </Paragraph>
            </div>
          </div>
          <div className={styles.sectionImageContainer}>
            <img
              src={`${ASSETS_URL}/assets/images/impact/100kkids.png`}
              alt="100k Kids by 2025"
            />
          </div>
        </section>
      </div>
      <div className={styles.mostImportantly}>
        <Title type="h4Title" align="center" theme={process.env.REACT_APP_THEME}>
            And most importantly…
          <br />
            AIME CHANGES LIVES
        </Title>
      </div>
    </section>
    <section>
      <div className={styles.caseStudiesContainer}>
        <div className={styles.caseStudiesContent}>
          <div>
            <Title type="h4Title" theme={process.env.REACT_APP_THEME}>
                Don’t just take our word for it…
            </Title>
          </div>
          <div className={styles.caseStudiesButtonContainer}>
            <Button theme={process.env.REACT_APP_THEME} aria-label="cta" type="link" url="/reports">
                Our Reports
            </Button>
          </div>
        </div>
        <div className={styles.impactGrid}>
          <div className={styles.tile}>
            <div>
              <a
                href="https://www.dropbox.com/s/1uxaohjfrtaled7/Economic%20Evaluation%20of%20AIME%20Mentoring%20by%20KPMG.pdf?dl=0"
                aria-label="Economic evaluation"
              >
                <div
                  className={styles.imageButton}
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/impact/kpmg-ecom.jpg')`,
                  }}
                >
                  <DownloadImage />
                </div>
              </a>
            </div>
            <div>
              <h3 className={styles.tileTitle}>Economic Evaluation of AIME Mentoring by KPMG</h3>
              <p className={styles.tileCopy}>
                  This evaluation by KPMG shows that AIME returns $8 back into the economy for
                  every $1 invested, and most importantly the program has literally closed the
                  education gap for 10,000+ Indigenous Australian kids who have been through it
              </p>
            </div>
          </div>
          <div className={styles.tile}>
            <div>
              <a href="global-letter" target="_blank" aria-label="global letter">
                <div
                  className={styles.imageButton}
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/resources/no-shame.jpg')`,
                  }}
                >
                  <DownloadImage />
                </div>
              </a>
            </div>
            <div>
              <h3 className={styles.tileTitle}>Open Letter to Universities</h3>
              <p className={styles.tileCopy}>
                  An open letter from University & business leaders across Australia in support
                  of AIME
              </p>
            </div>
          </div>
          <div className={styles.tile}>
            <div>
              <a
                href="https://www.dropbox.com/s/2flcrg5q7i57bhb/AIME%20Mentoring-A%20Solution%20for%20Educational%20Inequality%20%20.pdf?dl=0"
                aria-label="AIME Mentoring solution for education inequality"
              >
                <div
                  className={styles.imageButton}
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/resources/white-paper.jpg')`,
                  }}
                >
                  <DownloadImage />
                </div>
              </a>
            </div>
            <div>
              <h3 className={styles.tileTitle}>
                  AIME Mentoring - A Solution for Educational Inequality
              </h3>
              <p className={styles.tileCopy}>
                  This White Paper explores issues of educational inequality in the U.S. and
                  presents an evidence-based case for AIME.
              </p>
            </div>
          </div>
          <div className={styles.tile}>
            <div>
              <a href="https://aimementoring.com/reports/2016-annual-story" aria-label="2016 annual story">
                <div
                  className={styles.imageButton}
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/resources/annual-report_180219_073230.jpg')`,
                  }}
                >
                  <DownloadImage />
                </div>
              </a>
            </div>
            <div>
              <h3 className={styles.tileTitle}>2016 Annual Story</h3>
              <p className={styles.tileCopy}>
                  2016 was another year of transformational education and wonderful outcomes for
                  the Indigenous kids participating in AIME across Australia. It was also a year
                  of exploring new evolutionary pathways for the AIME model.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div>
        <div className={styles.grid}>
          <div className={styles.sidebar}>
            <div className={styles.moreInfoTitleContainer}>
              <Title type="h3Title" theme={process.env.REACT_APP_THEME}>
                More info
              </Title>
            </div>
            <div className={styles.moreInfoContainer}>
              <Anchor
                to="/jack-manning-bancroft"
                as="/jack-manning-bancroft"
                className={styles.moreInfoButton}
                aria-label="jack manning bancroft"
              >
                <span className={styles.moreInfoButtonText}>Meet our Founder &amp; CEO</span>
              </Anchor>
              <Anchor to="/about" className={styles.moreInfoButton}>
                <span className={styles.moreInfoButtonText}>Learn more about AIME</span>
              </Anchor>
              <Anchor to="/case-studies" as="/case-studies" className={styles.moreInfoButton}>
                <span className={styles.moreInfoButtonText}>AIME Classroom</span>
              </Anchor>
              <Anchor to="/global-letter" as="/global-letter" className={styles.moreInfoButton}>
                <span className={styles.moreInfoButtonText}>Global Letter</span>
              </Anchor>
            </div>
          </div>
          <div className={styles.quoteContainer}>
            <div className={styles.quoteWrapper}>
              <div className={styles.quoteContent}>
                <span className={styles.quoteText}>
                  <Title type="headingLockup" theme={process.env.REACT_APP_THEME}>
                      AIME achieves the Holy Grail of educational interventions
                    <br />
                      AIME Mentoring - A Solution for Educational Inequality
                  </Title>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.partnerSection}>
      <div className={styles.partnerSectionContent}>
        <Title type="h4Title" align="center">Want to create change?</Title>
        <div className={styles.intercomButtonWrap}>
          <IntercomChat label="Partner with us" />
        </div>
      </div>
    </section>
  </Layout>
);

export default Impact;
