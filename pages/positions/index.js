import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import Layout from '../../hocs/basicLayout';
import { checkCountryParams, isClientSide } from '../../utils/utilities';
import './positions.scss';

const Jobs = dynamic(() => import(/* webpackChunkName 'Jobs' */ '../../components/jobs'));
const VideoButton = dynamic(() => import(/* webpackChunkName 'VideoButtons' */ '../../components/videoButton'));

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const Positions = ({ redirected, redirectJobTitle, ...props }) => {
  const currentSite = checkCountryParams(props);
  const [isRedirect, setIsRedirect] = useState(redirected);
  const [jobTitle, setJobTitle] = useState(redirectJobTitle);

  const isClient = isClientSide();

  useEffect(() => {
    const tabs = document.querySelectorAll('.js-job-tabs .job-tabs--link');
    const tabContents = document.querySelectorAll('.js-job-tabs-contents > div');
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');

        tabContents.forEach((t) => t.classList.remove('active'));
        if (tabContents[index]) {
          tabContents[index].classList.add('active');
        }
      });
    });
  }, []);

  useEffect(() => {
    setIsRedirect(redirected);
    setJobTitle(redirectJobTitle);
  }, [isClient, redirected, redirectJobTitle]);

  const currentUrl = typeof window !== 'undefined' ? `/${Router.pathname.split('/')[1]}` : null;
  if (typeof window !== 'undefined' && currentUrl === '/positions') {
    Router.push(currentUrl);
  }

  return (
    <Layout>
      <div className="positions">
        <div className="hero-banner--default hero-banner--jobs full-width-wrap">
          <div className="flex flex-wrap items-center full-height">
            <div className="banner-wrapper subpage-banner center pt3">
              <h1>
                <span className="pre-text">AIME</span>
                <span className="highlight-text">
                  <em>
                    Jobs
                    <br />
                  </em>
                </span>
                <span className="sm-col-2 mx-auto block pt1 border-bottom border-gradient" />
              </h1>
            </div>
            <div className="wrap mx-auto center c-white pb4">
              <p className="bold feature-font-family pb2 mx-auto sm-col-8">
                We ranked 12th best place to work in Asia for 2016. Check below to find out why.
              </p>
            </div>
          </div>
        </div>
        <section className="relative">
          <div className="scratch-overlay-wrapper top-scratch bg-white" />
          <div className="wrap mx-auto p3">
            <div className="js-job-tabs pt2 pb3 flex justify-around items-baseline xs-hide sm-hide md-hide">
              <div className="job-tabs--link active">Life at AIME</div>
              {currentSite === 'au' && <div className="job-tabs--link">Perks and Benefits</div>}
              <div className="job-tabs--link">Salary Guide</div>
            </div>
            <div className="js-job-tabs-contents">
              <div className="job-tabs-content job-tabs-content--life justify-between items-center mt2 mb4 col-12 active">
                <div className="flex items-start col-12 sm-col-6">
                  <div className="mb2">
                    <h1 className="inline-block lh-base mb1">Experience like no other.</h1>
                    <p className="f-16 light c-grey block pt0 md-pt1 lg-pt1">
                      {`A chance to lead, to learn and to be pushed to achieve limits you didn't even
                      know you had.`}
                    </p>
                  </div>
                </div>
                <div className="scratch-bg video-button grid-tile">
                  <VideoButton video="https://player.vimeo.com/external/241432957.m3u8?s=e63dd3d41fcf9e5655fa13e8ab968726b02c1298" />
                  <div
                    className="video-banner mt1 mb0 py2 flex items-center video-button rounded col-12 sm-col-5"
                    style={{
                      backgroundImage: `url('${ASSETS_URL}/assets/images/square-features/Student-min.jpg')`,
                      backgroundSize: 'cover',
                      width: '100%',
                    }}
                  >
                    <img
                      alt=""
                      className="center mx-auto"
                      style={{ width: '70px' }}
                      src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                    />
                  </div>
                </div>
              </div>
              {currentSite === 'au' && (
                <div className="job-tabs-content mt2 mb4 col-12 clearfix">
                  <div className="flex items-start">
                    <div className="mb2">
                      <h1 className="inline-block lh-base mb1">Perks and Benefits.</h1>
                      <p className="f-16 light c-grey block pt0 md-pt1 lg-pt1">
                        We have all these additional features because we recognise that our team are
                        humans too who have wants and desires.
                      </p>
                      <div className="flex flex-wrap mt3 sm-mt4 md-mt4 lg-mt4">
                        <div className="flex flex-column col-12 pr0 pb3 md-pb4 lg-pb4 border-box sm-col-6 sm-pr3 md-col-3 lg-col-3 md-pr3 lg-pr3">
                          <div
                            style={{
                              width: '100px',
                              height: '100px',
                              backgroundImage: `url('${ASSETS_URL}/assets/images/job-perks-icons/annual-increase.svg')`,
                              backgroundSize: 'contain',
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'center',
                            }}
                          />
                          <h3 className="bold mt0 mb1 feature-font-family">Annual increase</h3>
                          <p className="body-font-family">
                            Each role receives a 4% salary increase annually, with an expectation
                            that excellence is the norm.
                          </p>
                        </div>
                        <div className="flex flex-column col-12 pr0 pb3 md-pb4 lg-pb4 border-box sm-col-6 md-col-3 lg-col-3 md-pr3 lg-pr3">
                          <div
                            style={{
                              width: '100px',
                              height: '100px',
                              backgroundImage: `url('${ASSETS_URL}/assets/images/job-perks-icons/discount.svg')`,
                              backgroundSize: 'contain',
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'center',
                            }}
                          />
                          <h3 className="bold mt0 mb1 feature-font-family">Apparel discount</h3>
                          <p className="body-font-family">
                            All AIME employees receive a 25% discount across AIME apparel.
                          </p>
                        </div>
                        <div className="flex flex-column col-12 pr0 pb3 md-pb4 lg-pb4 border-box sm-col-6 sm-pr3 md-col-3 lg-col-3 md-pr3 lg-pr3">
                          <div
                            style={{
                              width: '100px',
                              height: '100px',
                              backgroundImage: `url('${ASSETS_URL}/assets/images/job-perks-icons/baby.svg')`,
                              backgroundSize: 'contain',
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'center',
                            }}
                          />
                          <h3 className="bold mt0 mb1 feature-font-family">Baby covered</h3>
                          <p className="body-font-family">
                            Wanna have a baby at AIME? Cool. Do it. You get 2 weeks per year worth
                            of paid parental leave in your first 2 years of parenthood. And the
                            option to work from home in flexible work arrangement in the first 2
                            years.
                          </p>
                        </div>
                        <div className="flex flex-column col-12 pr0 pb3 md-pb4 lg-pb4 border-box sm-col-6 md-col-3 lg-col-3 md-pr3 lg-pr3">
                          <div
                            style={{
                              width: '100px',
                              height: '100px',
                              backgroundImage: `url('${ASSETS_URL}/assets/images/job-perks-icons/extra-leave.svg')`,
                              backgroundSize: 'contain',
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'center',
                            }}
                          />
                          <h3 className="bold mt0 mb1 feature-font-family">Extra leaves</h3>
                          <p className="body-font-family">
                            5 days of study and development leave per annum. 3 days worth of
                            cultural leave. Also, 1 day of legend leave to volunteer for another
                            cause.
                          </p>
                        </div>
                        <div className="flex flex-column col-12 pr0 pb3 md-pb4 lg-pb4 border-box sm-col-6 sm-pr3 md-col-3 lg-col-3 md-pr3 lg-pr3">
                          <div
                            style={{
                              width: '100px',
                              height: '100px',
                              backgroundImage: `url('${ASSETS_URL}/assets/images/job-perks-icons/health.svg')`,
                              backgroundSize: 'contain',
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'center',
                            }}
                          />
                          <h3 className="bold mt0 mb1 feature-font-family">Health and Wellbeing</h3>
                          <p className="body-font-family">
                            Thankful Tuesday every fortnight for a regular chance to reflect with
                            gratitude. And on the last friday of every month we have Fluro Friday,
                            where you have to go to nature for at least an hour, to take stock of
                            your mental health, and rock fluro gear to be a beacon of openness to
                            others.
                          </p>
                        </div>
                        <div className="flex flex-column col-12 pr0 pb3 md-pb4 lg-pb4 border-box sm-col-6 md-col-3 lg-col-3 md-pr3 lg-pr3">
                          <div
                            style={{
                              width: '100px',
                              height: '100px',
                              backgroundImage: `url('${ASSETS_URL}/assets/images/job-perks-icons/interaction.svg')`,
                              backgroundSize: 'contain',
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'center',
                            }}
                          />
                          <h3 className="bold mt0 mb1 feature-font-family">
                            Transparent interaction
                          </h3>
                          <p className="body-font-family">
                            {`All full time staff are on Slack and get to interact with the CEO on a
                            daily basis, and together we gather each Friday for FAM (Friday Arvo
                            Meeting), with our team from across the globe to reflect on what we've
                            acheived and learned.`}
                          </p>
                        </div>
                        <div className="flex flex-column col-12 pr0 pb3 md-pb4 lg-pb4 border-box sm-col-6 sm-pr3 md-col-3 lg-col-3 md-pr3 lg-pr3">
                          <div
                            style={{
                              width: '100px',
                              height: '100px',
                              backgroundImage: `url('${ASSETS_URL}/assets/images/job-perks-icons/learning.svg')`,
                              backgroundSize: 'contain',
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'center',
                            }}
                          />
                          <h3 className="bold mt0 mb1 feature-font-family">
                            Learning and Development
                          </h3>
                          <p className="body-font-family">
                            {`Global Festival of Mentoring, the world's premiere mentoring training
                            program, annually. Chance to attend AIME’s Gala Ball. Book Club. We
                            facilitate internal mentoring programs and recruitment of external
                            mentors.`}
                          </p>
                        </div>
                        <div className="flex flex-column col-12 pr0 pb3 md-pb4 lg-pb4 border-box sm-col-6 md-col-3 lg-col-3 md-pr3 lg-pr3">
                          <div
                            style={{
                              width: '100px',
                              height: '100px',
                              backgroundImage: `url('${ASSETS_URL}/assets/images/job-perks-icons/salary-sacrifice.svg')`,
                              backgroundSize: 'contain',
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'center',
                            }}
                          />
                          <h3 className="bold mt0 mb1 feature-font-family">Salary sacrifice</h3>
                          <p className="body-font-family">
                            With AIME you can salary sacrifice which means you can clip off a
                            section of your salary tax free — more cash in your pocket.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="job-tabs-content mt2 mb4 col-12 clearfix">
                <div className="flex items-start w100">
                  <div className="mb2 w100">
                    <h1 className="inline-block lh-base mb1">Salary Guide.</h1>
                    <p className="f-16 light c-grey block pt0 md-pt1 lg-pt1">
                      This salary table should help guide current and prospective staff around
                      whether this value package lines up with your respective expectations and
                      desires. Please note this table is a guide only and more specific information
                      can be found in the Job Packs for each position. Amounts are inclusive of
                      Super.
                    </p>
                    <div className="overflow-auto w100">
                      <div className="salary-guide--container border b-lavender flex justify-between mt2 sm-mt3 md-mt3 lg-mt3 rounded">
                        <div className="salary-guide--col salary-guide--col-year">
                          <div
                            className="salary-guide--cell salary-guide--cell-header"
                            style={{ color: 'transparent' }}
                          >
                            No. Year
                          </div>
                          <div className="salary-guide--cell">Year 1</div>
                          <div className="salary-guide--cell bg-lavender-light">Year 2</div>
                          <div className="salary-guide--cell salary-guide--bonus-cell">
                            <span className="salary-guide--bonus-bubble">$2K Bonus</span>
                            <span>Year 3</span>
                          </div>
                          <div className="salary-guide--cell bg-lavender-light">Year 4</div>
                          <div className="salary-guide--cell">Year 5</div>
                          <div className="salary-guide--cell bg-lavender-light salary-guide--bonus-cell">
                            <span className="salary-guide--bonus-bubble">$5K Bonus</span>
                            <span>Year 6</span>
                          </div>
                          <div className="salary-guide--cell">Year 7</div>
                          <div className="salary-guide--cell bg-lavender-light">Year 8</div>
                          <div className="salary-guide--cell">Year 9</div>
                          <div className="salary-guide--cell bg-lavender-light">Year 10</div>
                          <div className="salary-guide--cell salary-guide--bonus-cell">
                            <span className="salary-guide--bonus-bubble">$10K Bonus</span>
                            <span>Year 11</span>
                          </div>
                        </div>
                        <div className="salary-guide--col salary-guide--col-program-manager flex-auto">
                          <div className="salary-guide--cell salary-guide--cell-header">
                            Program Manager
                          </div>
                          <div className="salary-guide--cell">57</div>
                          <div className="salary-guide--cell bg-lavender-light">59</div>
                          <div className="salary-guide--cell">61</div>
                          <div className="salary-guide--cell bg-lavender-light">64</div>
                          <div className="salary-guide--cell">66</div>
                          <div className="salary-guide--cell bg-lavender-light">69</div>
                          <div className="salary-guide--cell">72</div>
                          <div className="salary-guide--cell bg-lavender-light">75</div>
                          <div className="salary-guide--cell">78</div>
                          <div className="salary-guide--cell bg-lavender-light">81</div>
                          <div className="salary-guide--cell">84</div>
                        </div>
                        <div className="salary-guide--col salary-guide--col-centre-manager flex-auto">
                          <div className="salary-guide--cell salary-guide--cell-header">
                            Centre Manager
                          </div>
                          <div className="salary-guide--cell">70</div>
                          <div className="salary-guide--cell bg-lavender-light">72</div>
                          <div className="salary-guide--cell">75</div>
                          <div className="salary-guide--cell bg-lavender-light">78</div>
                          <div className="salary-guide--cell">81</div>
                          <div className="salary-guide--cell bg-lavender-light">85</div>
                          <div className="salary-guide--cell">88</div>
                          <div className="salary-guide--cell bg-lavender-light">92</div>
                          <div className="salary-guide--cell">95</div>
                          <div className="salary-guide--cell bg-lavender-light">99</div>
                          <div className="salary-guide--cell">103</div>
                        </div>
                        <div className="salary-guide--col salary-guide--col-support-staff flex-auto">
                          <div className="salary-guide--cell salary-guide--cell-header">
                            Support Staff
                          </div>
                          <div className="salary-guide--cell">60</div>
                          <div className="salary-guide--cell bg-lavender-light">62</div>
                          <div className="salary-guide--cell">64</div>
                          <div className="salary-guide--cell bg-lavender-light">67</div>
                          <div className="salary-guide--cell">70</div>
                          <div className="salary-guide--cell bg-lavender-light">72</div>
                          <div className="salary-guide--cell">75</div>
                          <div className="salary-guide--cell bg-lavender-light">78</div>
                          <div className="salary-guide--cell">82</div>
                          <div className="salary-guide--cell bg-lavender-light">85</div>
                          <div className="salary-guide--cell">88</div>
                        </div>
                        <div className="salary-guide--col salary-guide--col-executive-team flex-auto">
                          <div className="salary-guide--cell salary-guide--cell-header">
                            Executive Team
                          </div>
                          <div className="salary-guide--cell">80</div>
                          <div className="salary-guide--cell bg-lavender-light">83</div>
                          <div className="salary-guide--cell">86</div>
                          <div className="salary-guide--cell bg-lavender-light">89</div>
                          <div className="salary-guide--cell">93</div>
                          <div className="salary-guide--cell bg-lavender-light">97</div>
                          <div className="salary-guide--cell">101</div>
                          <div className="salary-guide--cell bg-lavender-light">105</div>
                          <div className="salary-guide--cell">109</div>
                          <div className="salary-guide--cell bg-lavender-light">113</div>
                          <div className="salary-guide--cell">118</div>
                        </div>
                      </div>
                    </div>
                    <p className="f-15 light c-grey block pt1">Note:</p>
                    <ul className="f-15 light c-grey block pl3">
                      <li className="mb1">
                        Numbers above are in thousands. It is a range from which AIME sets it
                        salaries. For example, we may open up a role seeking varied levels of
                        experience and have a range from say 57-70k.
                      </li>
                      <li>
                        Casual roles &amp; rates are offered as per relevant award wage legislation
                        for both back-of-house and program team positions.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="video-banner-cta hero endorsement-wrap my4 flex flex-column items-center justify-center changed"
            style={{
              backgroundImage: `url('${ASSETS_URL}/assets/images/banner/endorsement-video.png')`,
            }}
          >
            <div className="video-button flex items-center p3">
              <VideoButton video="https://player.vimeo.com/external/220543875.m3u8?s=fef0be1439c6cd9179ade0e502dea995e0a75a8f" />
              <div className="flex">
                <img
                  alt=""
                  className="video-play-button"
                  src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                />
                <p className="video-text">
                  {`AIME ain't the place to come for the big bucks. We aren't here for the money. We are
                  here to change the planet, yesterday.`}
                </p>
              </div>
            </div>
          </div>
          <div className="wrap mx-auto px3">
            {!!currentSite && (
              <Jobs
                cdnUrl={ASSETS_URL}
                currentSite={currentSite}
                jobTitle={jobTitle}
                isRedirect={isRedirect}
                handleRedirectHide={() => setIsRedirect(false)}
              />
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

Positions.getInitialProps = async ({ query }) => ({
  redirected: query.redirected,
  redirectJobTitle: query.redirectJobTitle,
});


Positions.propTypes = {
  redirected: PropTypes.bool,
  redirectJobTitle: PropTypes.string,
};

Positions.defaultProps = {
  redirected: false,
  redirectJobTitle: '',
};

export default Positions;
