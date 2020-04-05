import React from 'react';
// import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import Anchor from '../../components/common/link';
import Layout from '../../hocs/basicLayout';
import MovingWaves from '../../components/movingWaves';
import './impact.scss';
import IntercomChat from '../../components/intercom';

// // const VideoButton = dynamic(() => import('../../components/videoButton'));

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const Impact = () => (
  <Layout>
    <div className="impact-page">
      <div className="">
        <div className="full-width-wrap">
          <MovingWaves />
          <div className="flex flex-wrap items-center">
            <div className="hero-panel banner-wrapper hero-banner--default">
              <Title type="headingLockup" className="bannerHeaderImpact" theme={process.env.REACT_APP_THEME}>
                Our
                <strong>
                  Impact
                </strong>
              </Title>
            </div>
          </div>
        </div>
        <section className="section bg-white" id="panel1">
          <div className="wrap items-center p3 center">
            <Title type="h4Title" theme={process.env.REACT_APP_THEME}>
              We’ve got a story of change that’s lit up the world since 2005, one kid at a time.
              It’s a simple idea, mentoring.
            </Title>
            <br />
            <Title type="h4Title" theme={process.env.REACT_APP_THEME}>
              It’s a proven model to end inequality and bring the
              powerful and powerless together, cost-effectively
              and at scale.
            </Title>
          </div>
        </section>
        <section className="section-impact">
          <div className="wrapImpactFacts">
            <section className="section-about">
              <div className="section-about__column p2 xs-p1 items-center">
                <div className="section-about__copy lg-col-8 section-impact-copy">
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
              <div className="section-about__column p2" style={{ alignItems: 'flex-end' }}>
                <img
                  className="block"
                  src={`${ASSETS_URL}/assets/images/impact/yr12attain.png`}
                  alt="Year 12 Attainment over the last 5 years"
                />
              </div>
            </section>
            <section className="section-about">
              <div className="section-about__column p2">
                <div className="section-about__copy lg-col-8 section-impact-copy">
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
              <div className="section-about__column p2" style={{ alignItems: 'flex-start' }}>
                <img
                  className="block"
                  src={`${ASSETS_URL}/assets/images/impact/dollarinvest.png`}
                  alt="For every $1 invested, $8.90 return"
                />
              </div>
            </section>
            <section className="section-about">
              <div className="section-about__column p2">
                <div className="section-about__copy lg-col-8 section-impact-copy">
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
              <div className="section-about__column p2" style={{ alignItems: 'flex-end' }}>
                <img
                  className="block"
                  src={`${ASSETS_URL}/assets/images/impact/100kkids.png`}
                  alt="100k Kids by 2025"
                />
              </div>
            </section>
          </div>
          <div className="wrap items-center xs-p2 sm-p2 md-p4 lg-p4 center">
            <Title type="h4Title" theme={process.env.REACT_APP_THEME}>
              And most importantly…
              <br />
              AIME CHANGES LIVES
            </Title>
          </div>
        </section>
        <section className="section-impact section-impact-caseStudies" id="panel4">
          <div className="wrap xs-p3 sm-p2 md-p4 lg-p4">
            <div className="flex flex-row flex-wrap justify-between pb2">
              <div>
                <Title type="h4Title" theme={process.env.REACT_APP_THEME}>
                  Don’t just take our word for it…
                </Title>
              </div>
              <div className="buttons-container right">
                <Button theme={process.env.REACT_APP_THEME} aria-label="cta" type="link" url="/reports">
                  Our Reports
                </Button>
              </div>
            </div>
            <div className="main-grid">
              <div className="tile">
                <div className="">
                  <a
                    href="https://www.dropbox.com/s/1uxaohjfrtaled7/Economic%20Evaluation%20of%20AIME%20Mentoring%20by%20KPMG.pdf?dl=0"
                    aria-label="Economic evaluation"
                  >
                    <div
                      className="flex items-center video-button rounded"
                      style={{
                        backgroundImage: `url('${ASSETS_URL}/assets/images/impact/kpmg-ecom.jpg')`,
                        backgroundSize: 'cover',
                        width: '100%',
                      }}
                    >
                      <img
                        alt=""
                        className="center mx-auto"
                        style={{ width: '50px' }}
                        src={`${ASSETS_URL}/assets/images/Download.svg`}
                      />
                    </div>
                  </a>
                </div>
                <div className="">
                  <h3 className="tile-title">Economic Evaluation of AIME Mentoring by KPMG</h3>
                  <p className="tile-copy">
                    This evaluation by KPMG shows that AIME returns $8 back into the economy for
                    every $1 invested, and most importantly the program has literally closed the
                    education gap for 10,000+ Indigenous Australian kids who have been through it
                  </p>
                </div>
              </div>
              <div className="tile">
                <div className="">
                  <a href="global-letter" target="_blank" aria-label="global letter">
                    <div
                      className="flex items-center video-button rounded"
                      style={{
                        backgroundImage: `url('${ASSETS_URL}/resources/no-shame.jpg')`,
                        backgroundSize: 'cover',
                        width: '100%',
                      }}
                    >
                      <img
                        alt=""
                        className="center mx-auto"
                        style={{ width: '50px' }}
                        src={`${ASSETS_URL}/assets/images/Download.svg`}
                      />
                    </div>
                  </a>
                </div>
                <div className="">
                  <h3 className="tile-title">Open Letter to Universities</h3>
                  <p className="tile-copy">
                    An open letter from University & business leaders across Australia in support
                    of AIME
                  </p>
                </div>
              </div>
              <div className="tile">
                <div className="">
                  <a
                    href="https://www.dropbox.com/s/2flcrg5q7i57bhb/AIME%20Mentoring-A%20Solution%20for%20Educational%20Inequality%20%20.pdf?dl=0"
                    aria-label="AIME Mentoring solution for education inequality"
                  >
                    <div
                      className="flex items-center video-button rounded"
                      style={{
                        backgroundImage: `url('${ASSETS_URL}/resources/white-paper.jpg')`,
                        backgroundSize: 'cover',
                        width: '100%',
                      }}
                    >
                      <img
                        alt=""
                        className="center mx-auto"
                        style={{ width: '50px' }}
                        src={`${ASSETS_URL}/assets/images/Download.svg`}
                      />
                    </div>
                  </a>
                </div>
                <div className="">
                  <h3 className="tile-title">
                    AIME Mentoring - A Solution for Educational Inequality
                  </h3>
                  <p className="tile-copy">
                    This White Paper explores issues of educational inequality in the U.S. and
                    presents an evidence-based case for AIME.
                  </p>
                </div>
              </div>
              <div className="tile">
                <div className="">
                  <a href="https://aimementoring.com/reports/2016-annual-story" aria-label="2016 annual story">
                    <div
                      className="flex items-center video-button rounded"
                      style={{
                        backgroundImage: `url('${ASSETS_URL}/resources/annual-report_180219_073230.jpg')`,
                        backgroundSize: 'cover',
                        width: '100%',
                      }}
                    >
                      <img
                        alt=""
                        className="center mx-auto"
                        style={{ width: '50px' }}
                        src={`${ASSETS_URL}/assets/images/Download.svg`}
                      />
                    </div>
                  </a>
                </div>
                <div className="">
                  <h3 className="tile-title">2016 Annual Story</h3>
                  <p className="tile-copy">
                    2016 was another year of transformational education and wonderful outcomes for
                    the Indigenous kids participating in AIME across Australia. It was also a year
                    of exploring new evolutionary pathways for the AIME model.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section more-info" id="panel5">
          <div className="">
            <div className="grid">
              <div className="baseGrid sidebar">
                <div className="">
                  <h2 className="sidebarTitle feature-font-family">More info</h2>
                  <hr className="sidebarTitle-hr gradient-purple" />
                </div>
                <div className="buttons-container pt2">
                  <Anchor
                    to="/jack-manning-bancroft"
                    as="/jack-manning-bancroft"
                    className="ghost-btn bg-brand-primary c-white mb2"
                    aria-label="jack manning bancroft"
                  >
                    <span className=" download-btn-text">Meet our Founder & CEO</span>
                  </Anchor>
                  <Anchor to="/about" className="ghost-btn bg-brand-primary c-white mb2">
                    <span className=" download-btn-text">Learn more about AIME</span>
                  </Anchor>
                  <Anchor to="/case-studies" as="/case-studies" className="ghost-btn bg-brand-primary c-white mb2">
                    <span className=" download-btn-text">AIME Classroom</span>
                  </Anchor>
                  <Anchor to="/global-letter" as="/global-letter" className="ghost-btn bg-brand-primary c-white mb2">
                    <span className=" download-btn-text">Global Letter</span>
                  </Anchor>
                </div>
              </div>
              <div className="baseGrid main-content">
                <div className="sectionLastQuote full-height full-width-wrap flex flex-wrap items-center">
                  <div className="xs-p2 sm-p2 md-p4 lg-p4">
                    <span className="white center bottom-panel-impact-heading">
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
        <section className="section bg-lavender-light" id="panel6">
          <div className="wrap items-center xs-px2 sm-px2 xs-py4 sm-py4 md-p4 lg-p4">
            <h2 className="center">
              <span className="f-24 feature-font-family">Want to create change?</span>
            </h2>
            <div className="intercomBtnWrap center pt2">
              <IntercomChat className="navBtn" label="Partner with us" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);

export default Impact;
