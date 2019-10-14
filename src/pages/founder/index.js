import React, { PureComponent } from 'react';
import { getAssetsBaseUrl } from '../../services/craftAPI';

export default class Founder extends PureComponent {
  state = {
    assetsUrl: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      assetsUrl: ''
    };
    this.sectionRefs = {};
  }

  componentDidMount() {
    this.setState({ assetsUrl: getAssetsBaseUrl() });
  }

  render() {
    const { assetsUrl } = this.state;
    return (
      <React.Fragment>
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
            <p>
              Jack founded AIME as a 19 year old university student and has
              since grown the model across the planet with the goal to take it
              to every campus across the world. Below are some awards and
              samples of recognition of Jack and the teams work at AIME since
              inception in 2005.
            </p>
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
            <h4 className="f-15 c-grey feature-font-family regular">
              Individual
            </h4>
          </div>
          <div className="wrap-md">
            <ul>
              <li>
                2016 - Youngest Person in Australian History to receive an
                Honorary Doctorate, University of South Australia
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
            <h4 className="f-15 c-grey feature-font-family regular">
              Organisational
            </h4>
          </div>
          <div className="wrap-md">
            <ul>
              <li>2016 - BRW 12th Best Place to work in Asia</li>
              <li>2015 - Google Impact Challenge</li>
              <li>2015 - BRW 9th Best Place to work in Australia</li>
            </ul>
          </div>
          <div className="wrap-md">
            <h4 className="f-15 c-grey feature-font-family regular">
              Qualifications{' '}
            </h4>
          </div>
          <div className="wrap-md">
            <ul>
              <li>2013 - Executive Program - Stanford University </li>
              <li>2006 - BA Media and Communications, University of Sydney</li>
            </ul>
          </div>
          <div className="wrap-md">
            <h4 className="f-15 c-grey feature-font-family regular">
              Publications{' '}
            </h4>
          </div>
          <div className="wrap-md">
            <ul>
              <li>
                2016 -{' '}
                <a
                  href="https://shop.aimementoring.com/collections/random/products/the-mentor/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  The Mentor
                </a>
              </li>
              <li>
                2015 -{' '}
                <a
                  href="https://shop.aimementoring.com/collections/random/products/book-the-eagle-inside/"
                  target="_blank"
                  rel="noreferrer noopener"
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
                <a
                  href="https://youtu.be/Mt5RxdQRFR4"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Australian Story (30-minute life story piece), 2012
                </a>
              </li>
            </ul>
          </div>
          <div className="wrap-md">
            <h4 className="f-15 c-grey feature-font-family regular">
              Articles
            </h4>
          </div>
          <div className="wrap-md">
            <ul>
              <li>
                <a
                  href={`${assetsUrl}/assets/pdf/Jack-Manning-Bancroft’s-indigenous-program-to-go-international.pdf`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  The Australian, 2016 - Jack Manning Bancroft&apos;s indigenous
                  program to go international (PDF)
                </a>
              </li>
              <li>
                <a
                  href={`${assetsUrl}/assets/pdf/Top-banker-Ian-Narev-funds-novel-Indigenous-succession-plan-_-afr.pdf`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Australian Financial Review, 2015 - Top banker Ian Narev funds
                  novel Indigenous succession plan (PDF)
                </a>
              </li>
              <li>
                <a
                  href="http://www.smh.com.au/comment/we-wont-close-the-gap-well-smash-it-20150212-13dpa8.html"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Sydney Morning Herald, 2015 - We won&apos;t close the gap,
                  we&apos;ll smash it
                </a>
              </li>
              <li>
                <a
                  href="http://www.dailytelegraph.com.au/news/nsw/aime-founder-jack-manning-bancroft-launches-campaign-for-first-indigenous-prime-minister/news-story/9595babc53591b29fdf953416dd6c62d"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  The Daily Telegraph, 2013 - AIME founder Jack Manning Bancroft
                  launches campaign for first indigenous prime minister
                </a>
              </li>
              <li>
                <a
                  href="http://www.smh.com.au/national/a-persuasive-push-all-the-way-to-university-20090802-e5vd.html"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Sydney Morning Herald, 2009 - A persuasive push all the way to
                  university
                </a>
              </li>
              <li>
                <a
                  href="http://www.smh.com.au/news/national/the-power-of-oneonone/2008/09/21/1221935450306.html"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Sydney Morning Herald, 2008 - The power of one-on-one
                </a>
              </li>
            </ul>
          </div>
        </article>
      </React.Fragment>
    );
  }
}
