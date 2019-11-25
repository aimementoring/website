import React from 'react';
import dynamic from 'next/dynamic';
import Anchor from '../../components/common/link';
import Layout from '../../hocs/basicLayout';
import './impact.scss';

const VideoButton = dynamic(() => import(/* webpackChunkName 'VideoButton' */ '../../components/videoButton'));

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const handleShowIntercom = () => {
  window.Intercom('show');
};

const Impact = () => (
  <Layout>
    <div className="impact-page">
      <div className="">
        <div className="full-width-wrap">
          <div className="flex flex-wrap items-center">
            <div className="hero-panel banner-wrapper full-height section-background-image section-background-image-purple-smoke xs-py4">
              <div className="vid-container">
                <div className="video-overlay" />
                <div className="bgVideo-container">
                  <video autoPlay muted loop preload="true" id="bgVideo">
                    <source
                      src={`${ASSETS_URL}/assets/media/PURPLE_SMOKE_BACKGROUND.webm`}
                      type="video/webm"
                    />
                    <source
                      src={`${ASSETS_URL}/assets/media/PURPLE_SMOKE_BACKGROUND.mp4`}
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="vid-headline flex align-items xs-py4">
                  <div className="px1 center m3">
                    <h1 className="px1 xs-pt4 pb4 center">
                      <span className="highlight-text hoodedScholar-highlight-text-heropanel highlight-text-straight m3">
                        <em className="">
                          Our
                          <br />
                          Impact
                        </em>
                      </span>
                    </h1>
                    <div className="hero-panel-video-button video-button">
                      <VideoButton video="https://player.vimeo.com/external/291611142.m3u8?s=d8b2918ab04b455016524208a81d89ba2fca166f" />
                      <div className="video-banner-overlay center">
                        <img
                          alt=""
                          className="center mx-auto"
                          style={{ width: '70px' }}
                          src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scratch-overlay-wrapper top-scratch bg-white" />
        <section className="section bg-white" id="panel1">
          <div className="wrap items-center lg-px4 lg-pb4 lg-pt0">
            <h2 className="xs-p1 sm-p2 md-p4 lg-p4 center">
              <span className="f-24 feature-font-family">
                We’ve got a story of change that’s lit up the world since 2005, one kid at a time.
                It’s a simple idea, mentoring.
                <br />
                {' '}
                <br />
                It’s a
                {' '}
                <span className="text-highlight purple">
                  <a href="#panel4" aria-label="proven model"> proven model</a>
                </span>
                {' '}
                to end inequality and bring the powerful and powerless together, cost-effectively
                and at scale.
              </span>
            </h2>
          </div>
        </section>
        <section className="section-impact bg-dark-purple-gradient">
          <div className="pt4 pb2 xs-p2 center">
            <h1 className="">
              <span className="c-white highlight-text highlight-text-straight">
                <em className="f-80">Quick facts</em>
              </span>
            </h1>
          </div>
          <div className="wrap">
            <section className="section-about">
              <div className="section-about__column p2 xs-p1 items-center">
                <div className="section-about__copy lg-col-8">
                  <h3 className="c-white my2">We’ve ended educational inequality</h3>
                  <p className="c-white">
                    We do that by building mentoring bridges between universities and high
                    schools, between the powerful and the powerless, the haves and the have nots.
                    We know that our fiery and intuitive brand of mentoring ends the cycle of
                    disadvantage by permanently changing mindsets. Based in Redfern, Australia,
                    our operation runs across campuses worldwide.
                  </p>
                </div>
              </div>
              <div className="section-about__column p2" style={{ alignItems: 'flex-end' }}>
                <img
                  className="block"
                  src={`${ASSETS_URL}/assets/images/impact/edu.png`}
                  alt="about aime"
                />
              </div>
            </section>
            <section className="section-about">
              <div className="section-about__column p2">
                <div className="section-about__copy lg-col-8">
                  <h3 className="c-white my2">We’re cost-effective</h3>
                  <p className="c-white">
                    As at 2018, every $ spent on AIME, $9 worth of benefits are generated for the
                    society.
                    {' '}
                  </p>
                </div>
              </div>
              <div className="section-about__column p2" style={{ alignItems: 'flex-start' }}>
                <img
                  className="block"
                  src={`${ASSETS_URL}/assets/images/impact/cost.png`}
                  alt="about aime"
                />
              </div>
            </section>
            <section className="section-about">
              <div className="section-about__column p2">
                <div className="section-about__copy lg-col-8">
                  <h3 className="c-white my2">We’re scalable</h3>
                  <p className="c-white">
                    What started as a simple idea working with 25 mentees at the University of
                    Sydney is now a global movement of change through mentoring, fueled by
                    university students, and the model is set for rapid expansion till 2025.
                  </p>
                </div>
              </div>
              <div className="section-about__column p2" style={{ alignItems: 'flex-end' }}>
                <img
                  className="block"
                  src={`${ASSETS_URL}/assets/images/impact/scale.png`}
                  alt="about aime"
                />
              </div>
            </section>
          </div>
          <div className="wrap items-center xs-p2 sm-p2 md-p4 lg-p4">
            <h2 className="py4 center">
              <span className="c-white pre-text center f-18 feature-font-family">
                and most importantly…
              </span>
              <span className="c-white highlight-text__small highlight-text highlight-text-straight pt2 f-32">
                AIME CHANGES LIVES
              </span>
            </h2>
          </div>
        </section>
        <section className="section-impact bg-lavender-light" id="panel4">
          <div className="wrap xs-p3 sm-p2 md-p4 lg-p4">
            <div className="flex flex-row flex-wrap justify-between pb2">
              <div>
                <h2 className="f-24 feature-font-family">Don’t just take our word for it…</h2>
              </div>
              <div className="buttons-container right">
                <Anchor to="/reports" className="ghost-btn ghost-btn-alt bg-brand-primary mb2">
                  <span className="download-btn-text">Our Reports</span>
                </Anchor>
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
                    to="/founder"
                    as="/jack-manning-bancroft"
                    className="ghost-btn bg-brand-primary c-white mb2"
                    aria-label="jack manning bancroft"
                  >
                    <span className=" download-btn-text">Meet our Founder & CEO</span>
                  </Anchor>
                  <Anchor to="/about" className="ghost-btn bg-brand-primary c-white mb2">
                    <span className=" download-btn-text">Learn more about AIME</span>
                  </Anchor>
                  <Anchor to="/caseStudies" as="/case-studies" className="ghost-btn bg-brand-primary c-white mb2">
                    <span className=" download-btn-text">AIME Classroom</span>
                  </Anchor>
                  <Anchor to="/globalLetter" as="/global-letter" className="ghost-btn bg-brand-primary c-white mb2">
                    <span className=" download-btn-text">Global Letter</span>
                  </Anchor>
                </div>
              </div>
              <div className="baseGrid main-content">
                <div className="section-background-image full-height full-width-wrap flex flex-wrap items-center">
                  <div className="xs-p2 sm-p2 md-p4 lg-p4">
                    <span className="white center">
                      <span className="impactNew-highlight-text highlight-text highlight-text-straight white center">
                        AIME achieves the Holy Grail of educational interventions
                      </span>
                      <p className="c-white post-text center xs-pt2 sm-pt3 md-pt3 lg-pt4 pb0 f-14 feature-font-family">
                        AIME Mentoring - A Solution for Educational Inequality
                      </p>
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
            <button
              type="button"
              onClick={handleShowIntercom}
              className="ghost-btn bg-brand-primary center mb2"
              aria-label="partner with us"
            >
              <span className=" download-btn-text">Partner with us</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);

export default Impact;
