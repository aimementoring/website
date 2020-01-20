import React, { useState } from 'react';
import Layout from '../../hocs/basicLayout';
import { ANNUAL_2016_REPORT_YEARS } from '../../constants';
import './annualReport.scss';

const AnnualReport = () => {
  const [state, setState] = useState({});

  const handleYearSectionClicked = (year) => () => {
    setState({
      ...state,
      [year]: state[year] !== true,
    });
  };

  return (
    <Layout>
      <div className="hero-banner--default hero-banner--founder full-width-wrap">
        <div className="flex flex-wrap items-center full-height">
          <div className="banner-wrapper">
            <h1>
              <span className="pre-text">Jack Manning Bancroft</span>
              <span className="highlight-text">
                <em>
                  From the CEO
                  <br />
                  <span className="scratch-underline">&nbsp;</span>
                </em>
              </span>
            </h1>
          </div>
        </div>
      </div>

      <article className="matrix-general relative">
        <div className="scratch-overlay-wrapper top-scratch bg-white" />

        <div className="wrap-md py3">
          <p>
            There are moments, small moments, when we get the chance to see the wood for the trees.
          </p>
          <p>
            Before we move on to speak of 2016, take a walk down memory lane with me to reflect on
            this journey, which has seen so many lives changed. Check out some of the impact
            highlights below from over the years.
          </p>

          <div name="past-years-container" className="w95 mx-auto flex flex-column my4">
            {ANNUAL_2016_REPORT_YEARS.map((element) => (
              <aside
                className={`year-section ${state[`${element.year}`] ? 'active' : ''}`}
                key={`${element.year}-year-section`}
                onClick={handleYearSectionClicked(element.year)}
                onKeyPress={handleYearSectionClicked(element.year)}
                role="presentation"
              >
                <h3 className="feature-font-family f-24 bold">{element.year}</h3>
                <div
                  className="year-section-content"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: element.content }}
                />
              </aside>
            ))}
          </div>

          <p>
            {`On September 1, 2016, looking over the Hudson River in New York, we shared our story of
            AIME. Of kids rising, of university students desperate to see the tide of inequality
            cease, of a small group of committed citizens bringing to life Margaret Mead's adage of
            changing the world.`}
          </p>
          <p>
            More than ever, I saw the heart of what we offer. Mentors for a fairer world. People
            helping people.
          </p>
          <p>
            {`Luck and the science behind our model has lead to AIME’s impact and why we've been able
            to reach 1000s so far. As I watched people of all colours and creeds don the AIME hoodie
            and dance with us on that night in September, I saw our future. One where we rose to the
            biggest possible challenges, with confidence in the truth behind our work - human
            kindness.`}
          </p>
          <p>
            2016 was a year where you challenged us – the kids, mentors and our team – to rise. And
            2017 will be the year we bring about an AIME with that same pigheadedly hopeful and
            bashful energy of 2005 and with more gusto than ever, at home and around the world.
          </p>
          <p>
            {`We've grown from the ground up and on the streets we will remain, with our burning
            desire to fight for equality.`}
          </p>
          <p>
            {`I'll leave you with a thank you to those whose time on the AIME train has come to a
            close: Geoff Lovell our Chair since 2009, Jess Timmins helped lead the operations of the
            program and gave AIME everything she had, Adam Linforth built strong lasting
            partnerships and financial rigour, and Marlee Silva, our inaugural Co-CEO was brave
            enough to lead and taught us so much in the first year of that program.`}
          </p>
          <p>
            We are people that care, people that try. We want to keep pushing the limits of human
            imagination and potential.
          </p>
          <p>
            Our vision is to end inequality through education, born from the oldest continuous
            surviving culture in the word. We are a dream factory for those who haven’t had the
            chance to dream. To change the world, we have to change the way it works.
          </p>
          <p>
            We build strong bridges between universities and schools – etched with the DNA of human
            connection. Our structure is scientific and scalable with years of proof that our dreams
            create a reality that ends inequality.
          </p>
          <p>
            We are relentlessly positive and our message unlocks the magic of learning through
            story. We believe someone, somewhere, engineered the world to be the way it is today. We
            believe we can engineer the way it is tomorrow.
          </p>
          <p>We are mentors for a fairer world.</p>
          <p>{'One by one, we\'ll get it done.'}</p>
        </div>

        <div
          className="hero flex justify-start items-start"
          style={{
            backgroundPosition: '0 25%',
            backgroundImage:
              "url('https://d2ylaz7bdw65jx.cloudfront.net/assets/images/reports/2016-annual-story/geoff.jpg')",
          }}
        >
          <div className="p2 m3 border b-white feature-font-family c-white bold f-20">
            Chairperson Report
          </div>
        </div>

        <div className="wrap-md py3">
          <h2 className="f-24 feature-font-family mb2 mt3">From the Chairman – Geoff Lovell</h2>
          <article className="blog-post--article">
            <p>
              2016 was another year of transformational education and wonderful outcomes for the
              Indigenous kids participating in AIME across our nation. It was also a year of
              exploring new evolutionary pathways for the AIME model.
            </p>
            <p>
              It was also my last full year as Chair and, after eight years in the role it is
              remarkable to look back to see how far AIME has come in that time.
            </p>
            <p>
              In 2009 there were 500 mentors, in 2016 there were 1571. The number of university
              partners has increased from 4 to 18. The number of high schools with which AIME works
              has jumped remarkably from 30 to 340. And the in-kind support provided to AIME by so
              many willing individuals and corporations has grown from $1.2 million to $6.4 million.
              Such is the enthusiasm with which AIME has been embraced by so many around Australia.
            </p>
            <p>
              This has largely been possible because the Indigenous kids participating in AIME’s
              program have continued to seize the opportunity to embrace education as a pathway to
              success. And haven’t they done that so well. In 2016, progression rates were well
              above 90% at the end of each year of schooling: 99.9% for Year 7, 99.8% for Year 8,
              99.6% for Year 9, 96.2% for Year 10, 92.9% for Year 11 and 94.1% for Year 12. With
              these types of outcomes, anything is possible!
            </p>
            <p>Of course, thankfully, some things have remained similar since 2009.</p>
            <ul>
              <li>
                We remain indebted to our young and vibrant staff, who have such a strong desire to
                learn and make a difference.
              </li>
              <li>
                Our mentors, those university students stepping outside their comfort zones to help
                those in need on a voluntary basis, continue to be the foot soldiers of AIME. They
                too are having their own lives transformed.
              </li>
              <li>
                Our university partners are still making AIME’s work possible through their
                provision of vital financial support and infrastructure.
              </li>
              <li>
                Our high school partners continue to allow us to come alongside them to help
                Indigenous kids.
              </li>
              <li>
                And KPMG faithfully continues to provide invaluable audit and other services at no
                cost to AIME.
              </li>
            </ul>
            <p>
              On behalf of the Board of Directors, I would like to thank everyone who contributed to
              AIME in 2016. In addition to those mentioned above, so many have donated money,
              provided facilities, offered advice, provided transport, and so much more. All of this
              is crucial and flows through for the benefit of those in the classrooms and on the
              stages of AIME.
            </p>
            <p>
              As we continue to strive to make life-changing differences to Indigenous kids, and now
              also reach beyond Australia, may I encourage you all to embolden your support for
              AIME.
            </p>
            <p>
              And I would like to wish my successor, Tom Dery, the very best as he steers the Board
              with fresh eyes and great enthusiasm.
            </p>
          </article>
          <h2 className="f-24 feature-font-family mb2">From the Incoming Chairman – Tom Dery</h2>
          <article className="blog-post--article">
            <p>I am very pleased and humbled to take the position of Chairman of AIME.</p>
            <p>
              I’m looking forward to a very exciting period in front of us, based on the remarkable
              success and achievements attained under Geoff Lovell’s guidance. I’m looking forward
              to seeing the scale the AIME operation extends and in so doing not only for the
              benefit of more education opportunities for Indigenous kids, but also our mentors and
              our team at AIME.
            </p>
            <p>
              I would particularly like to acknowledge the outstanding performance and commitment of
              Geoff Lovell, on behalf of the whole organization, we say thank you.
            </p>
            <hr className="my4" />
            <p>
              {`In 2016, 6686 kids were engaged in the program, that's 1668 more kids than in 2015 and
              we still had really strong results:`}
            </p>
            <div className="y2016-annual-story--timeline">
              <h2 className="f-30 bold feature-font-family c-grey">Progression Rate</h2>
              <div className="flex flex-wrap pt2 pb4">
                <div className="flex flex-column py2 w50">
                  <h3 className="c-lavender mb1">Year 7-8</h3>
                  <h2 className="f-42 lh-title">99.9%</h2>
                </div>
                <div className="flex flex-column py2 w50">
                  <h3 className="c-lavender mb1">Year 8-9</h3>
                  <h2 className="f-42 lh-title">99.8%</h2>
                </div>
                <div className="flex flex-column py2 w50">
                  <h3 className="c-lavender mb1">Year 9-10</h3>
                  <h2 className="f-42 lh-title">99.6%</h2>
                </div>
                <div className="flex flex-column py2 w50">
                  <h3 className="c-lavender mb1">Year 10-11</h3>
                  <h2 className="f-42 lh-title">96.2%</h2>
                </div>
                <div className="flex flex-column py2 w50">
                  <h3 className="c-lavender mb1">Year 11-12</h3>
                  <h2 className="f-42 lh-title">92.9%</h2>
                </div>
                <div className="flex flex-column py2 w50">
                  <h3 className="c-lavender mb1">Year 12 attainment (highest yet)</h3>
                  <h2 className="f-42 lh-title">94.1%</h2>
                </div>
              </div>
            </div>
            <p>
              Of the 603 Year 12 graduates, 73% transitioned into positive post-school pathways:
            </p>
            <div className="y2016-annual-story--timeline">
              <h2 className="f-30 bold feature-font-family c-grey">Post-school Pathways</h2>
              <div className="flex flex-wrap pt2 pb0">
                <div className="flex flex-column py2 w50">
                  <h3 className="c-lavender mb1">University</h3>
                  <h2 className="f-42 lh-title">160</h2>
                </div>
                <div className="flex flex-column py2 w50">
                  <h3 className="c-lavender mb1">Further Education &amp; Training</h3>
                  <h2 className="f-42 lh-title">157</h2>
                </div>
                <div className="flex flex-column py2 w50">
                  <h3 className="c-lavender mb1">Employment</h3>
                  <h2 className="f-42 lh-title">125</h2>
                </div>
                <div className="flex flex-column py2 w50">
                  <h3 className="c-lavender mb1">Still deciding...</h3>
                  <h2 className="f-42 lh-title">76</h2>
                </div>
                <div className="flex flex-column pt2 pb0 w50">
                  <h3 className="c-lavender mb1">Unable to contact</h3>
                  <h2 className="f-42 lh-title">85</h2>
                </div>
              </div>
            </div>
            <hr className="my4" />
            <p>
              In 2016 we partnered with
              {' '}
              <strong>18 universities</strong>
              {' '}
and
              {' '}
              <strong>2255</strong>
              {' '}
              of their students
              {' '}
              <strong>participated as mentors</strong>
              {' '}
in the program (1,571 were
              engaged). Together they
              {' '}
              <strong>volunteered 44,714 hours</strong>
. We ran
              {' '}
              <strong>928 AIME Institute days</strong>
              {' '}
at university campuses, which equates to
              {' '}
              <strong>2659 sessions</strong>
.
              <strong>340 schools</strong>
              {' '}
participated in AIME and
              we ran
              <strong>1513 Tutor Squad</strong>
              {' '}
sessions within these schools across the year,
              providing additional academic and mentor support to AIME kids.
            </p>
            <p>
              Some amazing things have been taking place at our university sites around the country.
            </p>

            <div className="y2016-annual-story--timeline">
              <div className="flex flex-column pt2 pb0">
                <div className="w100 flex flex-column flex-auto py2">
                  <img
                    src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/university/usyd.png"
                    alt="The University of Sydney"
                    className="y2016-annual-story--university-logo"
                  />
                  <h2 className="y2016-annual-story--university-title">The University of Sydney</h2>
                  <p className="f-20">
                    Every single mentee engaged in the program at USYD transitioned into their next
                    year of schooling and every single Year 12 mentee completed Year 12! (408/408)
                    And, 100% of the 34 Year 12 graduates transitioned into positive pathways! 14
                    mentees transitioned into university pathways, 14 to further education and
                    training pathways and 6 to employment pathways.
                  </p>
                </div>

                <div className="w100 flex flex-column flex-auto py2">
                  <img
                    src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/university/uow.png"
                    alt="University of Wollongong"
                    className="y2016-annual-story--university-logo"
                  />
                  <h2 className="y2016-annual-story--university-title">University of Wollongong</h2>
                  <p className="f-20">
                    {`29 mentees from the AIME UOW programs transitioned into university pathways and
                    commenced their higher education studies in 2017 (that's 39% of the UOW Year 12
                    graduates).`}
                  </p>
                </div>

                <div className="w100 flex flex-column flex-auto py2">
                  <img
                    src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/university/scu.png"
                    className="y2016-annual-story--university-logo"
                    alt="Southern Cross University"
                  />
                  <h2 className="y2016-annual-story--university-title">
                    Southern Cross University
                  </h2>
                  <p className="f-20">
                    More than 850 mentees were engaged in the program across the 3 SCU campuses.
                    With their biggest cohort of Year 12 mentees yet, 98.5% completed Year 12
                    (67/68). 12 mentees from the SCU AIME program transitioned to university
                    pathways in 2017!
                  </p>
                </div>

                <div className="w100 flex flex-column flex-auto py2">
                  <img
                    src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/university/bond.png"
                    className="y2016-annual-story--university-logo"
                    alt="Bond University"
                  />
                  <h2 className="y2016-annual-story--university-title">Bond University</h2>
                  <p className="f-20">
                    More mentees were participating in AIME at Bond University across all year
                    levels compared to 2015. One mentee who started attending AIME in Year 9, never
                    missed an AIME day and regularly attended her local Tutor Squad. In her senior
                    years, she began working with our team based at Bond University on a post-school
                    pathway into studying Law. Following her interviews, she was offered a full
                    scholarship, has commenced her studies in Law and has been selected as an AIME
                    Mentor for 2017.
                  </p>
                </div>

                <div className="w100 flex flex-column flex-auto py2">
                  <img
                    src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/university/usc.png"
                    className="y2016-annual-story--university-logo"
                    alt="University of the Sunshine Coast"
                  />
                  <h2 className="y2016-annual-story--university-title">
                    University of the Sunshine Coast
                  </h2>
                  <p className="f-20">
                    The most popular post-school pathway for the Year 12 USC mentees was a
                    university pathway with 12 mentees commencing their studies in 2017. One mentee
                    who has been an exemplary leader from day one at AIME is now studying a double
                    degree in Nursing and Paramedics.
                  </p>
                </div>

                <div className="w100 flex flex-column flex-auto py2">
                  <img
                    src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/university/cqu.png"
                    className="y2016-annual-story--university-logo"
                    alt="CQUniversity"
                  />
                  <h2 className="y2016-annual-story--university-title">CQUniversity</h2>
                  <p className="f-20">
                    Mentee numbers increased significantly in 2016 with more than 650 mentees
                    engaged in the program. Year 12 numbers continued to rise and in 2016 every
                    single Year 12 mentee across the 3 CQUni sites completed Year 12 (68/68). One of
                    these mentees who has been in the program since Year 10 has now graduated and is
                    enrolled in a Bachelor of Medical Science at CQUniversity, Rockhampton and is an
                    AIME mentor in 2017.
                  </p>
                </div>

                <div className="w100 flex flex-column flex-auto py2">
                  <img
                    src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/university/curtin.png"
                    className="y2016-annual-story--university-logo"
                    alt="Curtin University"
                  />
                  <h2 className="y2016-annual-story--university-title">Curtin University</h2>
                  <p className="f-20">
                    One mentee who graduated AIME in 2015, spent 2016 doing a bridging course at
                    Curtin University as well as being an AIME mentor. She was a constant visitor to
                    the AIME office and built great relationships with the staff and mentees. In
                    2017 she is a full time Curtin University student and has commenced her Sports
                    Science degree.
                  </p>
                </div>

                <div className="w100 flex flex-column flex-auto py2">
                  <img
                    src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/university/ecu.png"
                    className="y2016-annual-story--university-logo"
                    alt="Edith Cowan University"
                  />
                  <h2 className="y2016-annual-story--university-title">Edith Cowan University</h2>
                  <p className="f-20">
                    More than 250 mentees were engaged in the program across the 3 ECU campuses. One
                    mentee who started AIME in Year 10 has been accepted into the WA Police
                    Aboriginal Cadet Program where only a small handful of candidates were selected.
                    He wanted to follow in the footsteps of his uncle and grandfather who were both
                    police officers and show this pathway to other young Indigenous people.
                  </p>
                </div>

                <div className="w100 flex flex-column flex-auto py2">
                  <img
                    src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/university/feduni.png"
                    className="y2016-annual-story--university-logo"
                    alt="Federation University Australia"
                  />
                  <h2 className="y2016-annual-story--university-title">
                    Federation University Australia
                  </h2>
                  <p className="f-20">
                    More than 200 mentees were engaged in the program across the 2 Federation Uni
                    campuses. In 2016 100% of the Year 12 mentees completed The Victorian
                    Certificate of Education (VCE). One Year 12 mentee who was a great leader
                    throughout her journey with AIME and at school has been accepted into university
                    but has decided to defer her commencement until 2018 and has landed a job within
                    the AIME Ballarat team with the aim of helping more mentees complete their
                    secondary schooling education.
                  </p>
                </div>

                <div className="w100 flex flex-column flex-auto py2">
                  <img
                    src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/university/murdoch.png"
                    className="y2016-annual-story--university-logo"
                    alt="Murdoch University"
                  />
                  <h2 className="y2016-annual-story--university-title">Murdoch University</h2>
                  <p className="f-20">
                    98% of the mentees engaged in the Murdoch University AIME program transitioned
                    to their next grade of school in 2017. One mentee who has been in the AIME
                    program since 2013 and completed Year 12 in 2016, has commenced her university
                    journey in the K-Track enabling program at Murdoch in 2017. She is a confident,
                    articulate young lady who is going to make some serious changes in her local
                    community.
                  </p>
                </div>

                <div className="w100 flex flex-column flex-auto py2">
                  <img
                    src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/university/unisa.png"
                    className="y2016-annual-story--university-logo"
                    alt="University of South Australia"
                  />
                  <h2 className="y2016-annual-story--university-title">
                    University of South Australia
                  </h2>
                  <p className="f-20">
                    {`One mentee undertook Year 12 in 2015 but didn't achieve his Year 12 certificate
                    as he was facing some pretty big challenges. In 2016 he made the decision to
                    repeat the year and became the first person in his family to complete Year 12.
                    He has now transitioned into university and is completing Foundation Studies at
                    UniSA with the intention of transferring to an Engineering degree.`}
                  </p>
                </div>

                <div className="w100 flex flex-column flex-auto py2">
                  <img
                    src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/university/griffith.png"
                    className="y2016-annual-story--university-logo"
                    alt="Griffith University"
                  />
                  <h2 className="y2016-annual-story--university-title">Griffith University</h2>
                  <p className="f-20">
                    With their biggest cohort of Year 12 mentees yet, 100% of the 101 Year 12s
                    finished Year 12, with around a quarter of these transitioning into a university
                    pathway in 2017 (24/101). One Year 12 mentee who has been part of AIME since she
                    was in Year 9 became School Captain of her school in 2016 and has commenced
                    studying nursing at Griffith University and has become an AIME mentor in 2017.
                  </p>
                </div>

                <div className="w100 flex flex-column flex-auto py2">
                  <img
                    src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/university/notre-dame.png"
                    className="y2016-annual-story--university-logo"
                    alt="The University of Notre Dame"
                  />
                  <h2 className="y2016-annual-story--university-title">
                    The University of Notre Dame
                  </h2>
                  <p className="f-20">
                    One mentee who has been participating in the AIME Notre Dame program for the
                    past few years is currently completing a bridging course to become a nurse. She
                    moved to Perth, away from all her mob in Kalgoorlie, to pursue her higher
                    education and is living in a boarding house with other students. She visits the
                    AIME office almost every day and while she is extremely committed to working
                    hard at her studies, she has also signed up to be an AIME mentor in 2017!
                  </p>
                </div>

                <div className="w100 flex flex-column flex-auto py2">
                  <img
                    src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/university/anu.png"
                    className="y2016-annual-story--university-logo"
                    alt="Australian National University &amp; University of Canberra"
                  />
                  <h2 className="y2016-annual-story--university-title">
                    Australian National University &amp; University of Canberra
                  </h2>
                  <p className="f-20">
                    A Year 9 ACT mentee was one of 18 mentees from across the country who were
                    selected to travel to Sydney and develop a video game that will inspire young
                    minds to pursue pathways in science, maths, engineering, technology and
                    innovation. The students were mentored throughout the week by best game
                    designers and computer engineers in the business, and visited leading tech
                    companies in Sydney.
                  </p>
                </div>

                <div className="w100 flex flex-column flex-auto py2">
                  <img
                    src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/university/adfa.png"
                    className="y2016-annual-story--university-logo"
                    alt="Australian Defence Force Academy"
                  />
                  <h2 className="y2016-annual-story--university-title">
                    Australian Defence Force Academy
                  </h2>
                  <p className="f-20">
                    One mentee who started attending AIME in 2014 formed an excellent mentee/mentor
                    relationship with his mentor throughout the program days. When he transitioned
                    into Senior College, he continued to regularly attend AIME tutor squads and kept
                    the relationship he had with his mentor throughout these sessions. During the
                    ADFA program day, he was really interested in applying for ADFA and spent the
                    time talking to the cadets with his mentor. He has now been successful in his
                    application into ADFA.
                  </p>
                </div>

                <div className="w100 flex flex-column flex-auto py2">
                  <img
                    src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/university/wsu.png"
                    className="y2016-annual-story--university-logo"
                    alt="Western Sydney University"
                  />
                  <h2 className="y2016-annual-story--university-title">
                    Western Sydney University
                  </h2>
                  <p className="f-20">
                    Year 12 mentee numbers tripled at WSU in 2016 and every single mentee completed
                    Year 12! (64/64) On top of that 48% went to uni! One of these graduates attended
                    every single AIME session in her 4 years of AIME. She spoke beautifully at her
                    AIME Year 12 graduation, is now studying a Bachelor of Primary Education at
                    Western Sydney University, is also an Aboriginal Education Officer (AEO) at her
                    old school and an AIME mentor in 2017.
                  </p>
                </div>

                <div className="w100 flex flex-column flex-auto py2">
                  <img
                    src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/university/une.png"
                    className="y2016-annual-story--university-logo"
                    alt="University of New England"
                  />
                  <h2 className="y2016-annual-story--university-title">
                    University of New England
                  </h2>
                  <p className="f-20">
                    In its first year of operation 100% of mentees transitioned to the next grade of
                    school.
                  </p>
                </div>

                <div className="w100 flex flex-column flex-auto pt2">
                  <img
                    src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/university/deakin.png"
                    className="y2016-annual-story--university-logo"
                    alt="Deakin University"
                  />
                  <h2 className="y2016-annual-story--university-title">Deakin University</h2>
                  <p className="f-20">
                    In its first year of operation 98% of mentees transitioned to their next grade
                    of school and all of the mentees that completed Year 12 transitioned into a
                    positive post-school pathway of either university, further education &amp;
                    training or employment.
                  </p>
                </div>
              </div>
            </div>

            <hr className="my4" />

            <p>
              It was another year of transformational education and wonderful outcomes for the
              Indigenous kids participating in AIME across our nation. It was also a year of
              exploring new evolutionary pathways for the AIME model. Here are some other
              highlights...
            </p>

            <div className="flex flex-column pt2 pb0">
              <div className="w100 flex pt2 pb4 y2016-annual-story--highlight">
                <img
                  className="y2016-annual-story--highlight-image"
                  src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/reports/2016-annual-story/marlee.jpg"
                  alt="First Co-CEO - Marlee Silva"
                />
                <div className="flex flex-column pl0 md-pl4 lg-pl4">
                  <h2 className="y2016-annual-story--university-title">First Co-CEO</h2>
                  <p className="f-20">
                    In 2016 Marlee Silva led the way by taking up a leadership development
                    opportunity like no other, to become our inaugural Co-CEO. The next decade will
                    see 9 more 18-25 year old Indigenous Australians participate in this
                    challenging, transformational 12-month program.
                  </p>
                </div>
              </div>

              <div className="w100 flex py3 y2016-annual-story--highlight">
                <img
                  className="y2016-annual-story--highlight-image"
                  src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/reports/2016-annual-story/une.png"
                  alt="UNE Armidale joins the family"
                />
                <div className="flex flex-column pl0 md-pl4 lg-pl4">
                  <h2 className="y2016-annual-story--university-title">
                    UNE Armidale joins the family
                  </h2>
                  <p className="f-20">
                    We held our first program day on campus at UNE Armidale in 2016. The 116 kids
                    who participated in the program achieved amazing educational outcomes this year
                    with 100% progression rates across all years from 7 to 11.
                  </p>
                </div>
              </div>

              <div className="w100 flex py3 y2016-annual-story--highlight">
                <img
                  className="y2016-annual-story--highlight-image"
                  src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/reports/2016-annual-story/branson.jpg"
                  alt="Branson in a AIME Hoodie"
                />
                <div className="flex flex-column pl0 md-pl4 lg-pl4">
                  <h2 className="y2016-annual-story--university-title">Branson in a Hoodie</h2>
                  <p className="f-20">
                    We celebrated the history, culture and achievements of Indigenous Australians
                    during NAIDOC Week and also reflected on how far we’ve come on Hoodie Day.
                    Richard Branson pulled on his 2016 AIME hoodie in support of the work we do.
                  </p>
                </div>
              </div>

              <div className="w100 flex py3 y2016-annual-story--highlight">
                <img
                  className="y2016-annual-story--highlight-image"
                  src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/reports/2016-annual-story/game-on.jpg"
                  alt="Game On Workshop at Google"
                />
                <div className="flex flex-column pl0 md-pl4 lg-pl4">
                  <h2 className="y2016-annual-story--university-title">
                    Game On Workshop at Google
                  </h2>
                  <p className="f-20">
                    AIME and Google partnered in a history first, when 18 Indigenous kids competed
                    to see their maths and science video game concepts come to life, to inspire the
                    next generation of Indigenous scientists, mathematicians and engineers.
                  </p>
                </div>
              </div>

              <div className="w100 flex py3 y2016-annual-story--highlight">
                <img
                  className="y2016-annual-story--highlight-image"
                  src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/reports/2016-annual-story/hottest-100.jpg"
                  alt="First year with jjj Hottest 100"
                />
                <div className="flex flex-column pl0 md-pl4 lg-pl4">
                  <h2 className="y2016-annual-story--university-title">
                    First year with jjj Hottest 100
                  </h2>
                  <p className="f-20">
                    For our new partnership with triple j, one of our year 10 mentees created the
                    artwork for the Hottest 100 t-shirt. 100% of proceeds came directly to AIME.
                    Listeners also donated over $100,000 to AIME as the Hottest 100 counted down.
                  </p>
                </div>
              </div>

              <div className="w100 flex py3 y2016-annual-story--highlight">
                <img
                  className="y2016-annual-story--highlight-image"
                  src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/reports/2016-annual-story/workplace.jpg"
                  alt="12th Best Workplace to work in Asia"
                />
                <div className="flex flex-column pl0 md-pl4 lg-pl4">
                  <h2 className="y2016-annual-story--university-title">
                    12th Best Workplace to work in Asia
                  </h2>
                  <p className="f-20">
                    At number 12 on the list AIME is one of a small group of organisations that put
                    their people first; providing a strong, caring, innovative culture for employees
                    that is distinguished by extraordinary levels of pride and camaraderie.
                  </p>
                </div>
              </div>

              <div className="w100 flex py3 y2016-annual-story--highlight">
                <img
                  className="y2016-annual-story--highlight-image"
                  src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/reports/2016-annual-story/hon-doc.jpg"
                  alt="Youngest person in Australian History to get Hon Doc"
                />
                <div className="flex flex-column pl0 md-pl4 lg-pl4">
                  <h2 className="y2016-annual-story--university-title">
                    Youngest person in Australian History to get Hon Doc
                  </h2>
                  <p className="f-20">
                    Jack Manning Bancroft made history as Australia’s youngest recipient of an
                    Honorary Doctorate. Breaking with tradition UniSA made the award in recognition
                    of Jack’s work improving educational outcomes for Indigenous high school kids.
                  </p>
                </div>
              </div>

              <div className="w100 flex pt4 y2016-annual-story--highlight">
                <img
                  className="y2016-annual-story--highlight-image"
                  src="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/reports/2016-annual-story/nyc.jpg"
                  alt="AIME Global announced from New York"
                />
                <div className="flex flex-column pl0 md-pl4 lg-pl4">
                  <h2 className="y2016-annual-story--university-title">
                    AIME Global announced from New York
                  </h2>
                  <p className="f-20">
                    After 12 years working with Indigenous kids in Australia, our CEO announced at
                    an AIME event in New York that we would soon be sharing our DNA with the world,
                    to ensure educational equality for marginalized students everywhere. In Jack’s
                    words, “You ain’t seen nothin’ yet.”
                  </p>
                </div>
              </div>
            </div>

            <hr className="my4" />

            <p>
              KPMG once again audited AIME’s accounts. Headline is, we got enough cash in to be able
              to deliver the program to more kids than ever before. Second headline is that over $6
              Million worth of in-kind support was generated throughout 2016 - we are very proud of
              this. Click through below for the deets.
            </p>
            <div className="w100 flex justify-center">
              <a
                target="_blank"
                href="https://d2ylaz7bdw65jx.cloudfront.net/assets/pdf/AIME-2016-Financial-Report.pdf"
                className="submit my3"
                rel="noopener noreferrer"
                aria-label="Sell All The Dollars and Cents"
              >
                Sell All The Dollars and Cents
              </a>
            </div>
            <p className="mt3">
              As we get set to charge the program around the globe we wanted to take you back in
              time to our 2010 Film, nice to see how much it’s coming to life.
            </p>
            <p>Thank you family.</p>
            <p>Keep walking with us,</p>
            <p className="f-20">
              <strong>The AIME Team</strong>
            </p>
            <div className="video-container mb3">
              <iframe
                title="join-journey-iframe"
                width="1075"
                height="605"
                src="https://www.youtube.com/embed/qRkAXLJmvkY"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </article>
        </div>
      </article>
    </Layout>
  );
};

export default AnnualReport;
