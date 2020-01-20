import React from 'react';
import dynamic from 'next/dynamic';
import './customCarousels.scss';

const Carousel = dynamic(() => import(/* webpackChunkName 'Carousel' */ '../index'));

const Wall = () => {
  const customCarouselValues = {
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: true,
          infinite: true,
          slidesToScroll: 1,
          swipeToSlide: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="wall">
      <div className="xs-px2 sm-px3 md-px4 lg-px4">
        <div className="carousel relative xs-px3 sm-px2 md-px3 lg-px3">
          <Carousel type="testimonials" settings={customCarouselValues}>
            <div className="flex-center flex-wrap">
              <div className="col-12 mx-auto">
                <div className="">
                  <h3>2005</h3>
                  <ul>
                    <li>The University of Sydney - first university partner</li>
                    <li>Alexandria Park Community School – first school</li>
                    <li>25 university volunteers attend the first ever AIME session</li>
                    <li>25 Year 9 students are the first in the program</li>
                    <li>AIME has 0 staff and 0 budget</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex-center flex-wrap">
              <div className="col-12 mx-auto">
                <div className="">
                  <h3>2006</h3>
                  <ul>
                    <li>Leichhardt High School (Sydney Secondary College) joins the program</li>
                    <li>Year 10 sessions are developed</li>
                    <li>First grant of $10K from the AEC NSW Inc</li>
                    <li>47 mentees are in the program</li>
                    <li>47 mentors step up</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex-center flex-wrap">
              <div className="col-12 mx-auto">
                <div className="">
                  <h3>2007</h3>
                  <ul>
                    <li>5 schools partner with AIME</li>
                    <li>100 mentees enrol</li>
                    <li>100 mentors are in the program</li>
                    <li>The first AIME website goes live</li>
                    <li>Baker & McKenzie becomes our first corporate partner</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex-center flex-wrap">
              <div className="col-12 mx-auto">
                <div className="">
                  <h3>2008</h3>
                  <ul>
                    <li>University of Wollongong becomes our second uni partner</li>
                    <li>18 schools sign up</li>
                    <li>Mentee and mentor numbers jump to 300 each</li>
                    <li>AIME gets 3 full time staff members and a proper office</li>
                    <li>The AIME textbook is born</li>
                    <li>We become a corporation with a board of directors</li>
                    <li>Our first board meeting takes place</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex-center flex-wrap">
              <div className="col-12 mx-auto">
                <div className="">
                  <h3>2009</h3>
                  <ul>
                    <li>AIME expands to SCU Coffs Harbour and Macquarie University</li>
                    <li>School partners jump to 33</li>
                    <li>Staff increase to 11</li>
                    <li>Social Ventures Australia takes AIME on board</li>
                    <li>AIME holds a national launch</li>
                    <li>Mentee numbers reach 325</li>
                    <li>500 mentors provide support</li>
                    <li>Strut the Streets takes over the Sydney CBD</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex-center flex-wrap">
              <div className="col-12 mx-auto">
                <div className="">
                  <h3>2010</h3>
                  <ul>
                    <li>
                      AIME is the only Australian charity to receive one of the world-wide Google
                      grants.
                    </li>
                    <li>AIME expands to Queensland and Victoria</li>
                    <li>We start the year with 7 university partners and 44 school partners</li>
                    <li>18 full time staff step up</li>
                    <li>AIME goes large and HQ becomes a reality at the NCIE</li>
                    <li>529 mentees are matched with 529 mentors</li>
                    <li>AIME Hoodies are everywhere on the first AIME National Hoodie Day</li>
                    <li>100% of Year 12 mentees complete the year</li>
                    <li>
                      An AIME mentee becomes the first Indigenous Australian captain at their school
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex-center flex-wrap">
              <div className="col-12 mx-auto">
                <div className="">
                  <h3>2011</h3>
                  <ul>
                    <li>AIME has 75 schools across 10 regions</li>
                    <li>787 kids participate in the program with 566 completing</li>
                    <li>
                      Corporate Australia joins the party, including: Coke, CommBank, Virgin
                      Australia, Origin Energy, Lend Lease and Foxtel.
                    </li>
                    <li>27 full time staff work out of 10 universities</li>
                    <li>Salesforce enters the building</li>
                    <li>A new Outreach model is trialled in Victoria</li>
                    <li>92.6% of Year 10 mentees transition into Year 11</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex-center flex-wrap">
              <div className="col-12 mx-auto">
                <div className="">
                  <h3>2012</h3>
                  <ul>
                    <li>7 new university partners come on board</li>
                    <li>1018 mentees completed the program from 1417 participants</li>
                    <li>956 mentors volunteer their time</li>
                    <li>37 staff cover 15 uni campuses</li>
                    <li>18 regions with 121 school partners</li>
                    <li>Facebook likes hit the 5K mark</li>
                    <li>31% of Year 12 AIME kids qualify for university admission</li>
                    <li>
                      Year 9 to 12 completion rate for AIME students is 71.2% almost on par with the
                      national non-Indigenous average of 79.9%
                    </li>
                    <li>Year 11 & 12 Leadership and Development program launches</li>
                    <li>
                      First ever Federal Government grant: DEEWR kicks in $2.5M over three years to
                      expand into two regions
                    </li>
                    <li>The Outreach Programs rolls out at all sites</li>
                    <li>AIME National Hoodie Day raises over $200K</li>
                    <li>
                      Yearbook Portal is developed to connect mentees to post - school opportunities
                    </li>
                    <li>Australian Story features JMB and AIME</li>
                    <li>33 % of all support received is in -kind</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex-center flex-wrap">
              <div className="col-12 mx-auto">
                <div className="">
                  <h3>2013</h3>
                  <ul>
                    <li>Facebook likes rocket to 30K</li>
                    <li>14 university partners across 5 states</li>
                    <li>3000 people read our Tweets</li>
                    <li>750 people love our pics on Instagram</li>
                    <li>Of the 1066 participating mentors over 100 are Indigenous</li>
                    <li>50 full time staff work across 23 uni campuses</li>
                    <li>241 schools are spread across 39 regions</li>
                    <li>1910 mentees engage in and complete the program</li>
                    <li>54 Tutor Squads take off</li>
                    <li>89.7 % of Year 11 kids transition into Year 12</li>
                    <li>
                      The Other Election sees 646 AIME kids stepping up to speak as PM with 70, 000
                      votes picking the winners
                    </li>
                    <li>
                      Economic evaluation by KPMG finds for every $1 spent AIME generates $7 in
                      benefit: totally $38 million in 2012
                    </li>
                    <li>14 AIME mentees are school captains</li>
                    <li>#26 on BRW’s 50 Top Places to Work in Australia</li>
                    <li>AIME launches its online shop, selling limited edition AIME Hoodies</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex-center flex-wrap">
              <div className="col-12 mx-auto">
                <div className="">
                  <h3>2014</h3>
                  <ul>
                    <li>62 full time staff are supported by 48 casual staff</li>
                    <li>AIME goes to the ACT</li>
                    <li>16 university partners see AIME delivered on 28 campuses</li>
                    <li>School partners reach 317 across 47 regions</li>
                    <li>3,059 hours of sessions are delivered across 5 states and the ACT</li>
                    <li>4,484 mentees participate in the program along with 1,526 mentors</li>
                    <li>
                      26.8% of Year 12 AIME kids from 2013 secure admission to university in 2014
                    </li>
                    <li>Confluence changes the way we work</li>
                    <li>28,400 hours of support are provided to mentees</li>
                    <li>AIME’s Got Game showcases the extraordinary talents of our mentees</li>
                    <li>The inaugural Gala Ball kicks off</li>
                    <li>We bid farewell to Strut the Streets</li>
                    <li>
                      Yearbook portal relaunches with over 400 conversations initiated between
                      mentees and unis or corporates
                    </li>
                    <li>AIME High is a world - first mentoring session in the sky</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex-center flex-wrap">
              <div className="col-12 mx-auto">
                <div className="">
                  <h3>2015</h3>
                  <ul>
                    <li>
                      AIME grew to 4864 mentees, 1923 mentors, 325 partner schools and 18 university
                      partners.
                    </li>
                    <li>
                      The AIME Research Partnership continued to investigate the impact of the
                      program on the mentees but shifted the research focus to the impact of AIME on
                      the mentors. From extensive interviews, observations and surveys we found
                      that:
                    </li>
                    <li>
                      Mentors are reporting significant learning experiences derived from
                      participation in AIME;
                    </li>
                    <li>
                      Many mentors told us they feel like they are learning as much or more than the
                      mentees;
                    </li>
                    <li>
                      Mentors are developing knowledge and appreciation of Indigenous culture as
                      well as growing awareness of social injustices experienced by Indigenous
                      Australians;
                    </li>
                    <li>
                      Mentors are describing an increased capacity and motivation for volunteering;
                    </li>
                    <li>
                      Mentors have described that they are focussing their volunteering efforts to
                      specifically benefit Indigenous young people;
                    </li>
                    <li>
                      90% of mentor survey respondents reported that participation in AIME has
                      enhanced their university experience;
                    </li>
                    <li>
                      84% of mentor respondents reported that AIME has enhanced the way they connect
                      and serve the wider community;
                    </li>
                    <li>On average, mentor survey respondents reported growth in:</li>
                    <li>Their knowledge of Indigenous Australian cultures</li>
                    <li>Their connection to Indigenous Australia</li>
                    <li>Their cultural and social awareness</li>
                    <li>Their leadership skills</li>
                    <li>Their communication skills</li>
                    <li>Their teamwork skills</li>
                    <li>Their creativity</li>
                    <li>
                      The AIME Research Partnership published 3 more academic journal articles,
                      published in The Conversation and delivered 3 more conference presentations.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex-center flex-wrap">
              <div className="col-12 mx-auto">
                <div className="">
                  <h3>2016</h3>
                  <ul>
                    <li>
                      AIME grew to 6686 mentees, 2255 mentors, 340 partner schools and 18 university
                      partners.
                    </li>
                    <li>
                      The 3-year Partnership Project was finalised and the results showed that AIME
                      can produce good and relevant numbers that can assist policy and practice to
                      drive towards better and brighter futures for our Aboriginal and Torres Strait
                      Islander students. We found that AIME positively impacts mentees:
                    </li>
                    <li>
                      The AIME program creates relationships and a culturally safe spaces that
                      support mentees’ engagement in the program;
                    </li>
                    <li>
                      AIME is effective in increasing mentees’ academic self-perceptions and
                      motivation;
                    </li>
                    <li>
                      An increased amount of time spent within the AIME program significantly
                      increased the mentees’ sense of self-esteem, school confidence and cultural
                      confidence at school;
                    </li>
                    <li>
                      Mentees value not only how AIME promotes stronger study habits and
                      aspirations, but also helps students value themselves and their culture within
                      the learning environment;
                    </li>
                    <li>
                      The AIME Research Partnership published another academic journal article and
                      delivered another 6 conference presentations.
                    </li>
                    <li>
                      The AIME Research Partnership created a central repository of all AIME
                      Research Partnership publications in the website:
                      {' '}
                      <a aria-label="partnership" href="https://aimeresearchpartnership.wordpress.com/" target="_blank" rel="noopener noreferrer">
                        aimeresearchpartnership.wordpress.com
                      </a>
                      . All publications are listed under the publications tab, with links to
                      full-text for most items listed.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Wall;
