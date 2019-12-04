import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import classNames from 'classnames';

const VideoButton = dynamic(() => import(/* webpackChunkName 'VideoButtons' */ '../videoButton'));

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const TabsContent = ({ countryId, active }) => (
  <div className="js-job-tabs-contents">
    <div className={classNames('job-tabs-content job-tabs-content--life justify-between items-center mt2 mb4 col-12', { active: active === 'Life at AIME' })}>
      <div className="flex items-start col-12 sm-col-6">
        <div className="mb2">
          <h1 className="inline-block lh-base mb1">Experience like no other.</h1>
          <p className="f-16 light c-grey block pt0 md-pt1 lg-pt1 lh-base">
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
    {countryId === 'au' && (
      <div className={classNames('job-tabs-content mt2 mb4 col-12 clearfix', { active: active === 'Perks and Benefits' })}>
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
    <div className={classNames('job-tabs-content mt2 mb4 col-12 clearfix', { active: active === 'Salary Guide' })}>
      <div className="flex items-start w100">
        <div className="mb2 w100">
          <h1 className="inline-block lh-base mb1">Salary Guide.</h1>
          <p className="f-16 light c-grey block pt0 md-pt1 lg-pt1 lh-base">
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
          <ul className="f-15 light c-grey block pl3 lh-base">
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
);

TabsContent.propTypes = {
  active: PropTypes.string,
  countryId: PropTypes.string.isRequired,
};

TabsContent.defaultProps = {
  active: '',
};

export default TabsContent;
