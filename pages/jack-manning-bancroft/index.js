import React from 'react';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Layout from '../../hocs/basicLayout';
import './styles.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const Founder = () => (
  <Layout>
    <div className="hero-banner--default hero-banner--founder full-width-wrap">
      <div className="flex flex-wrap items-center full-height">
        <div className="banner-wrapper">
          <Title type="headingLockup" className="founderBannerHeader" theme={process.env.REACT_APP_THEME}>
            Our
            <strong>
              Founder &amp; CEO
            </strong>
          </Title>
        </div>
      </div>
    </div>

    <article>
      <div className="plainContentWrapper">
        <Paragraph>
          Jack Manning Bancroft is the CEO and Founder of AIME, an
          award-winning social movement that uses mentoring and imagination
          to unlock the potential of marginalised youth to create a fairer
          world.
        </Paragraph>
        <Paragraph>
          AIME is an imaginative educational program and a volunteer mentoring
          movement - a social network for good.
        </Paragraph>
        <Paragraph>
          Jack, a proud Indigenous Australian from the Bundjalung nation,
          founded AIME in 2005 at the age of 19, with the goal of finding a
          solution to Indigenous inequality in Australia. Driven by
          imagination and audacious kindness, he re-engineered the concept of
          mentoring. He developed a cost-effective and scalable model that
          brings university students together as volunteers to mentor
          marginalised and minority high schools kids so that they complete
          high school successfully, go on to university and ultimately, into
          fulfilling careers.
        </Paragraph>
        <Paragraph>
          Over the past 16 years, AIME’s mentoring tools and techniques - its
          Imagination Curriculum, of which Jack has been the lead designer -
          have helped transform schooling for thousands of marginalised kids.
        </Paragraph>
        <Paragraph>
          Jack’s vision is to unlock the AIME Imagination Curriculum for every
          school in the world and train teachers to be mentors so we can
          achieve educational parity and beyond for marginalised kids across
          the Earth’s surface.
        </Paragraph>
        <Paragraph>
          Jack has received a string of awards and recognition for his work,
          his philosophy, and his vision for a fairer world. He was MJ Bale’s
          Man of Character in 2014 and won Australia’s Happy Harold Education
          Award in 2013. In 2010, five years after founding AIME, he received
          the <a href="https://hrawards.humanrights.gov.au/2010-human-rights-medal-and-awards-winners" target="_blank">
            Australian Human Rights Medal
          </a>, <a href="https://www.gq.com.au/men-of-the-year/previous-winners/jack-manning-bancroft/news-story/105819449424e7c085ba1527b80f4fda" target="_blank">
            GQ Man of Inspiration
          </a>, New South Wales <a href="https://www.australianoftheyear.org.au/alumni/connect/jack-manning-bancroft/" target="_blank">
            Young Australian of the Year
          </a>, and the University of Sydney <a href="https://sydney.edu.au/news/84.html?newsstoryid=5978" target="_blank">
            Young Alumni of the Year
          </a> awards. Most recently Jack was the <a href="http://www.mediaring.com.au/news/indigenous-entrepreneur-becomes-australias-youngest-honorary-doctor/#more-981" target="_blank">
            youngest person in Australian history to receive an Honorary Doctorate
          </a>.
        </Paragraph>
        <Paragraph>
          Jack holds a BA in Media and Communications from the University of
          Sydney. He was awarded the Stanford Australia Foundation Dyson
          Bequest Scholarship in 2013 to attend Stanford University’s flagship
          Executive Program. In 2016, he received an Honorary Fellowship from
          Western Sydney University and the same year, became the youngest
          person in Australian history to receive an Honorary Doctorate from
          the University of South Australia.
        </Paragraph>
        <Paragraph>
          Jack is also a published children’s author with <a href="https://www.hardiegrant.com/au/publishing/bookfinder/book/the-eagle-inside-by-jack-manning-bancroft/9781760125271" target="_blank">The Eagle Inside</a>,
          and has written <a href="https://www.goodreads.com/book/show/45899178-the-mentor" target="_blank">The Mentor</a> and <a href="https://www.amazon.co.uk/Mentoring-Fairer-World-Jack-Manning-Bancroft/dp/1743793537" target="_blank">Mentoring - The Key to a Fairer World</a>.
        </Paragraph>
      </div>

      {/* <div className="wrap-md">
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
      </div> */}
    </article>
  </Layout>
);

export default Founder;
