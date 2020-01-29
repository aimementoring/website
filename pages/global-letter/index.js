import React from 'react';
import Anchor from '../../components/common/link';
import Layout from '../../hocs/basicLayout';
import IntercomChat from '../../components/intercom';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const styling = [];
for (let i = 0; i < 3; i += 1) { // To get rid of the hardoced S3 bucket that was previously
  styling.push({
    backgroundImage:
      `url('${ASSETS_URL}/resources/global-letter-${i}.jpg')`,
    backgroundPosition: '0% 25%',
  });
}
const GlobalLetter = () => (
  <Layout>
    <div className="hero-banner--default full-width-wrap">
      <div className="flex flex-wrap items-center full-height">
        <div className="banner-wrapper subpage-banner center">
          <h1>
            <span className="pre-text">Open letter to</span>
            <span className="highlight-text">
              <em>
                Universities
                {' '}
                <br />
                {' '}
                Around the World
              </em>
            </span>
            <span className="sm-col-2 mx-auto block pt1 border-bottom border-gradient">
              &nbsp;
            </span>
          </h1>
        </div>
      </div>
    </div>

    <div className="matrix-general">
      <div className="wrap-md mb0 md-my3 lg-my3 clearfix">
        <p className="destroy-p subtitle-basic center mx-auto">
          It’s not every day that an idea that can change the world comes across your desk.
          Today we wanted to share one we’ve kept secret in Australia for the last 12 years.
        </p>
      </div>

      {/* <!-- H2 --> */}
      <div
        className="about-banner video-button  overlay-dark"
        data-video=""
        style={styling[0]}
      >
        <p className="destroy-p">
          We’ve found a solution to ending inequality for the most disadvantaged kids.
        </p>
      </div>

      {/* <!-- Draws attention to a quote or subtance text piece --> */}
      <div className="wrap-md">
        <p>
          In our nation, those kids are the children of the first sunrise, our Indigenous young
          people. Many of us across the globe have population groups who have landed on the
          wrong side of history and experience dispossession and discrimination, which has
          manifested itself into what seems like an irreversible reality.
        </p>
        <p>
          Twelve years ago, a small group of university students set about reversing the reality
          for our Indigenous kids, and creating a new story, a tale of Indigenous success, of
          educational equality.
        </p>
        <p>
          Twenty-five students at University of Sydney walked into a local school and offered a
          structured mentoring program. These students, they were on their way after their
          degree into the middle or upper classNamees, but in that moment they built a bridge
          between them and the kids whose future was flying towards a path of poverty and
          inequality.
        </p>
        <p>They built a bridge.</p>
      </div>

      {/* <!-- H1 (also page title) --> */}
      <div
        className="about-banner video-button overlay-dark"
        data-video=""
        style={styling[1]}
      >
        <p className="destroy-p">And from that moment, things started to change.</p>
      </div>

      {/* <!-- Draws attention to a quote or subtance text piece --> */}
      <div className="wrap-md">
        <p>
          The kids on the other side started to follow their lead. They reversed the trends
          around school completion. At first as a group of 25, and then there was a hundred, and
          suddenly there were thousands that were dancing to a new beat of Indigenous success.
        </p>
        <p>
          Now, 12 years on, this program has seen over 10,000 kids be ripped out of educational
          inequality, closing a percentage gap of over 35% in participation. For Indigenous kids
          aged 18-25 - 40% transition into Employment, University or Further training.
          Non-Indigenous kids in the same age bracket transition at 75%. AIME Year 12 graduates
          transition rates for the last three years, 2014 = 75%, 2015 = 75.8%, 2016 = 76%.
        </p>
        <p>
          This is a simple solution whereby mentoring, with a scientific backbone of content and
          development that sits on top of the schooling system has manifested a new climate that
          can fast-track the alleviation of disadvantage.
        </p>
        <p>
          As an aside, over 5,000 university students have volunteered to mentor over the last
          12 years, the biggest volunteer movement of university students in Australian history.
          We believe this generation is desperate to take on the challenges ahead of them, and
          you know, like what we’ve seen here, the best place for that to start is the
          birthplace of ideas and world changing revolutionary thinking, universities.
        </p>
      </div>

      {/* <!-- H1 (also page title) --> */}
      <div
        className="about-banner video-button  overlay-dark"
        data-video=""
        style={styling[2]}
      >
        <p className="destroy-p">Today we share our secret with you.</p>
      </div>

      {/* <!-- Draws attention to a quote or subtance text piece --> */}
      <div className="wrap-md">
        <p>
          On June 7, we join our friends at AIME to launch a competition across the globe to
          offer the chance for 10 young people to take the model potentially to your university
          and bring it to life in your country.
        </p>
        <p>
          We want to give you the chance to be a part of an experiment that could prove that if
          university becomes a service hub where its students go back and mentor the most
          disadvantaged kids we could within 10 years rapidly close the existing inequality gaps
          across the globe.
        </p>
        <p>
          If this interests you, AIME would love to talk to you and give you and your students
          the chance to be a part of this experience to change the globe.
        </p>
        <p>
          The AIME model globally is not specifically about Indigenous kids. It’s about using
          the two key economic levers of university and high school and building a bridge
          between the powerful and powerless.
        </p>
        <p>
          So, with one university at a time we create fairer communities and a rapidly more
          equal and just globe.
        </p>
      </div>

      {/* <!-- H1 (also page title) --> */}
      <div className="wrap-md mb3">
        <h3 className="signature-font-family f-24">Jack Manning Bancroft</h3>
        <span className="f-14">
          <strong>AIME Founder &amp; CEO</strong>
        </span>
      </div>

      <div className="wrap-md w100 clearfix">
        <Anchor
          to="/know-aime"
          className="bg-brand-tertiary left basic-btn bold my2"
          style={{ border: '0' }}
        >
          Tell me more
        </Anchor>
      </div>

      <div className="wrap-md w100 clearfix">
        <IntercomChat classNames="bg-blue left basic-btn bold my2" style={{ border: '0' }} label="I&#039;d like AIME at my University" />
      </div>

      <div className="references">
        <p>
          <strong>Co-signed by</strong>
        </p>
        <ul>
          <li>Dame Quentin Bryce AD, CVO</li>
          <li>Dame Marie Bashir, AD, CVO</li>
          <li>
            Edith Cowan University Pro-Vice-Chancellor (Equity and Indigenous) - Prof. Colleen
            Hayward
          </li>
          <li>Edith Cowan University Vice Chancellor &amp; President - Prof. Steve Chapman</li>
          <li>Murdoch University Vice-Chancellor - Prof. Eeva Leinonen</li>
          <li>Southern Cross University Vice-Chancellor - Prof. Adam Shoemaker</li>
          <li>University of Canberra Chancellor - Prof. Tom Calma AO</li>
          <li>University of Canberra Vice Chancellor - Prof. Deep Saini</li>
          <li>University of New England Vice-Chancellor - Prof. Annabelle Duncan</li>
          <li>University of Notre Dame Australia Vice-Chancellor - Prof. Celia Hammond</li>
          <li>University of South Australia Vice-Chancellor - Prof. David Lloyd</li>
          <li>University of Sydney Chancellor - Belinda Hutchinson AM</li>
          <li>University of Sydney Vice-Chancellor - Dr Michael Spence AC</li>
          <li>University of Wollongong Chancellor - Jillian Broadbent AO</li>
          <li>
            University of Wollongong Deputy Vice-Chancellor (Academic) - Prof. Joe Chicharo
          </li>
          <li>
            Universities Australia Chair &amp; Western Sydney University Vice-Chancellor - Prof.
            Barney Glover
          </li>
          <li>
            CQUniversity Australia Pro Vice-Chancellor (Indigenous Engagement) - Prof. Bronwyn
            Fredericks
            {' '}
          </li>
          <li>
            Accenture, Managing Director Financial Services, Australia &amp; NZ - Greg Carroll
          </li>
          <li>Accor Hotels CEO - Simon McGrath</li>
          <li>Allens Linklaters Managing Partner - Richard Spurio</li>
          <li>Allens Linklaters Partner - Chris Schulz</li>
          <li>
            Australian Charities Fund - Deputy Chair &amp; Founding CEO - Greg Hutchinson, AM
          </li>
          <li>Baker &amp; McKenzie Partner - Sean Duffy</li>
          <li>Coca Cola South Pacific President - Roberto Mercade</li>
          <li>Commonwealth Bank of Australia CEO - Ian Narev</li>
          <li>Foxtel CEO - Peter Tonagh</li>
          <li>Insurance Australia Group CEO - Peter Harmer</li>
          <li>M &amp; C Saatchi Worldwide Chairman &amp; Australian founder - Tom Dery, AO</li>
          <li>Origin Foundation, Head of Foundation - Sean Barrett</li>
          <li>Princes Trust International CEO - Jonathan Townsend</li>
          <li>Staples Australia &amp; NZ, Vice President - Michael Oakley Knight</li>
          <li>Virgin Australia CEO - John Borghetti, AO</li>
          <li>Wesfarmers CEO - Richard Goyder, AO</li>
        </ul>
      </div>
    </div>
  </Layout>
);

export default GlobalLetter;
