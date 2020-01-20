import React from 'react';
import Layout from '../../hocs/basicLayout';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const Founder = () => (
  <Layout>
    <div className="hero-banner--default hero-banner--founder full-width-wrap">
      <div className="flex flex-wrap items-center full-height">
        <div className="banner-wrapper">
          <h1>
            <span className="pre-text">Jack Manning Bancroft</span>
            <span className="highlight-text">
              <em>
                Founder &amp; CEO
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
      <div className="wrap-md pt3 pb2">
        <p>Hi!</p>
        <p>My name’s Jack and I founded AIME fifteen years ago with imagination.</p>
        <p>For 60,000 years my ancestors have been passing on their stories and imagination.</p>
        <p>
          I used imagination to build a story that my generation could connect to and think of how
          we could find a solution to the challenge of Indigenous inequality in Australia.
        </p>
        <p>
          That story is AIME and it is our imagination that allows us to help create more stories
          and ideas, in turn unlocking the imaginations of tens-of-thousands of university
          students and high school kids across the world.
        </p>
        <p>
          I now lead our Dream Factory inside of AIME. I have imagination pouring through me and
          am desperate to to use it to help solve some of the challenges of our time.
        </p>
        <p>
          If your interested in partnering or working with us, seeing what we can imagine, know
          that we run the walk and rap the talk. We do not conform.
        </p>
        <p>We would love to hear what you’re crazy about.</p>
        <p>
          Below are some examples of what we have achieved along the way - in other peoples words.
        </p>
        <p>Yours in imagination.</p>
        <p>Jack.</p>
      </div>
      <div className="wrap-md">
        <div className="mt0 mb3 md-mt2 lg-mt2 flex items-center">
          <span className="sm-line bg-brand-primary inline-block mr2 md-mr3 lg-mr3" />
          <div className="inline-block">
            <h1 className="f-20 inline-block lh-base">Awards</h1>
          </div>
        </div>
      </div>
      <div className="wrap-md">
        <h4 className="f-15 c-grey feature-font-family regular">Individual</h4>
      </div>
      <div className="wrap-md">
        <ul>
          <li>
            2016 - Youngest Person in Australian History to receive an Honorary Doctorate,
            University of South Australia
          </li>
          <li>2016 - Honorary Fellowship, Western Sydney University </li>
          <li>2014 - MJ Bale Man of Character</li>
          <li>2013 - Happy Harold Education Award </li>
          <li>2013 - Stanford Association Dyson Bequest Scholarship</li>
          <li>2010 - University of Sydney Young Alumni of the Year</li>
          <li>2010 - NSW Young Australian of the Year</li>
          <li>2010 - GQ Man of Inspiration</li>
          <li>2010 - Australian Human Rights Medal</li>
        </ul>
      </div>
      <div className="wrap-md">
        <h4 className="f-15 c-grey feature-font-family regular">Organisational</h4>
      </div>
      <div className="wrap-md">
        <ul>
          <li>2016 - BRW 12th Best Place to work in Asia</li>
          <li>2015 - Google Impact Challenge</li>
          <li>2015 - BRW 9th Best Place to work in Australia</li>
        </ul>
      </div>
      <div className="wrap-md">
        <h4 className="f-15 c-grey feature-font-family regular">Qualifications </h4>
      </div>
      <div className="wrap-md">
        <ul>
          <li>2013 - Executive Program - Stanford University </li>
          <li>2006 - BA Media and Communications, University of Sydney</li>
        </ul>
      </div>
      <div className="wrap-md">
        <h4 className="f-15 c-grey feature-font-family regular">Publications </h4>
      </div>
      <div className="wrap-md">
        <ul>
          <li>
            2016 -
            {' '}
            <a
              href="https://shop.aimementoring.com/collections/random/products/the-mentor/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="The mentor"
            >
              The Mentor
            </a>
          </li>
          <li>
            2015 -
            {' '}
            <a
              href="https://shop.aimementoring.com/collections/random/products/book-the-eagle-inside/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="The Eagle Inside"
            >
              The Eagle Inside
            </a>
          </li>
        </ul>
      </div>
      <div className="wrap-md">
        <div className="mt0 pt3 mb3 md-mt2 lg-mt2 flex items-center">
          <span className="sm-line bg-brand-primary inline-block mr2 md-mr3 lg-mr3" />
          <div className="inline-block">
            <h1 className="f-20 inline-block lh-base">Media Snapshot</h1>
          </div>
        </div>
      </div>
      <div className="wrap-md">
        <h4 className="f-15 c-grey feature-font-family regular">TV</h4>
      </div>
      <div className="wrap-md">
        <ul>
          <li>The Drum - Monday May 1, 2017</li>
          <li>The Drum - Friday March 24, 2017</li>
          <li>
            <a href="https://youtu.be/Mt5RxdQRFR4" target="_blank" rel="noreferrer noopener" aria-label="Australian Story">
              Australian Story (30-minute life story piece), 2012
            </a>
          </li>
        </ul>
      </div>
      <div className="wrap-md">
        <h4 className="f-15 c-grey feature-font-family regular">Articles</h4>
      </div>
      <div className="wrap-md">
        <ul>
          <li>
            <a
              href={`${ASSETS_URL}/assets/pdf/Jack-Manning-Bancroft’s-indigenous-program-to-go-international.pdf`}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="The Australian, 2016"
            >
              The Australian, 2016 - Jack Manning Bancroft&apos;s indigenous program to go
              international (PDF)
            </a>
          </li>
          <li>
            <a
              href={`${ASSETS_URL}/assets/pdf/Top-banker-Ian-Narev-funds-novel-Indigenous-succession-plan-_-afr.pdf`}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Australian Financial Review, 2015"
            >
              Australian Financial Review, 2015 - Top banker Ian Narev funds novel Indigenous
              succession plan (PDF)
            </a>
          </li>
          <li>
            <a
              href="http://www.smh.com.au/comment/we-wont-close-the-gap-well-smash-it-20150212-13dpa8.html"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Sydnet Morning Herald, 2015"
            >
              Sydney Morning Herald, 2015 - We won&apos;t close the gap, we&apos;ll smash it
            </a>
          </li>
          <li>
            <a
              href="http://www.dailytelegraph.com.au/news/nsw/aime-founder-jack-manning-bancroft-launches-campaign-for-first-indigenous-prime-minister/news-story/9595babc53591b29fdf953416dd6c62d"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="The Daily Telegraph, 2013"
            >
              The Daily Telegraph, 2013 - AIME founder Jack Manning Bancroft launches campaign for
              first indigenous prime minister
            </a>
          </li>
          <li>
            <a
              href="http://www.smh.com.au/national/a-persuasive-push-all-the-way-to-university-20090802-e5vd.html"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Sydnet Morning Herald, 2009"
            >
              Sydney Morning Herald, 2009 - A persuasive push all the way to university
            </a>
          </li>
          <li>
            <a
              href="http://www.smh.com.au/news/national/the-power-of-oneonone/2008/09/21/1221935450306.html"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Sydney Morning Herald, 2008"
            >
              Sydney Morning Herald, 2008 - The power of one-on-one
            </a>
          </li>
        </ul>
      </div>
    </article>
  </Layout>
);

export default Founder;
