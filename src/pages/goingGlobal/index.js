import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import queryString from 'qs';
import { Link } from 'react-router-dom';
import Popup from '../../components/goingGlobal/popup';
import TabComponent from '../../components/goingGlobal/tabComponent';
import scrollToComponent from 'react-scroll-to-component';
import EoiForm from '../../components/eoiForm';
import { getAssetsBaseUrl } from '../../services/craftAPI';
import { uploadCustomEOI } from '../../services/portalApi';
// import VideoButton from '../../components/videoButton';
// import VioletVideoCarousel from '../../components/carousel/customCarousels/violetCarousel';
// import { STUDENT_CHAPTER_FIRST_VIDEO_CAROUSEL_ELEMENTS } from '../../constants';
// import { uploadHoodedScholarEOI } from '../../services/portalApi';
import styles from './goingGlobal.module.scss';


class GoingGlobal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      reloadData: false,
      assetsUrl: getAssetsBaseUrl(),
    }
    this.sectionRefs = {};
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler, false);
  }

  componentWillReceiveProps(nextProps) {
    const { location: { search, hash, state } } = nextProps;
    if (search !== this.props.location.search) {
      const parsed = queryString.parse(search.replace('?', ''));
      if (parsed && parsed.name) this.setState({ name: parsed.name });
    }
    if (hash !== this.props.location.hash) {
      const section = hash.replace('#', '').toLowerCase();
      window.removeEventListener('scroll', this.scrollHandler, false);
      if (section in this.sectionRefs) {
        if (!state || (state && !state.noScroll)) {
          const scroller = section === "welcome"
            ? scrollToComponent(this.sectionRefs[section], { align: 'top' })
            : scrollToComponent(this.sectionRefs[section], { offset: -50, align: 'top' });
          scroller.on('end', () => window.addEventListener('scroll', this.scrollHandler, false));
        } else {
          window.addEventListener('scroll', this.scrollHandler, false);
        }
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler, false);
  }

  scrollHandler = () => {
    const { location: { hash, search }, history } = this.props;
    const overSection = Object.keys(this.sectionRefs).find(section => {
      const top = this.sectionRefs[section].offsetTop;
      const bottom = top + this.sectionRefs[section].offsetHeight;
      const scrollPosition = window.pageYOffset;
      return top <= scrollPosition && bottom > scrollPosition;
    });

    if (overSection !== hash.replace('#', '').toLowerCase() && overSection !== undefined) {
      history.push(`/going-global${search}#${overSection}`, { noScroll: true });
    }
  }

  handleScrollAfterLastPopup = () => {
    scrollToComponent(this.sectionRefs.results, { align: 'top' });
  }

  handleReloadData = () => {
    this.setState(prevState => ({ reloadData: !prevState.reloadData }))
  }

  render() {
    const tableName = 'Going Global';
    const { assetsUrl } = this.state;
    return (
      <div>
        <div />
        <div className={styles.microSite}>
  
          <section className={styles.sectionWrapper}>
            <div className={styles.heroPanelWrapper}>
              <h1 className={styles.pageHeroHeader}>Going Global</h1>
            </div>
          </section>
  
          <section ref={el => { this.sectionRefs.intro = el }} className={styles.textPanel}>
            <p>For the last 3 years we have been on a huge adventure sharing AIME around the world. And now with everything we have learned we are looking to bunker down and capture the learnings of AIME Global with a 3 year research focused pilot, featuring programs marginalised youth in Uganda, South Africa, Nigeria, USA and Australia.</p>
            <p>Our dream is to distill the philosophy, processes and products at the heart of AIME so we can share them with teachers, mentors and guides across the world looking to unlock the limitless potential of the kids being left behind.</p>
            <p>Check out some of the case studies &amp; experiences from the last 3 years.</p>
          </section>

          <section ref={el => { this.sectionRefs.casestudies = el }} className={styles.caseStudiesSection}>
            <Popup
              scrollAfterLastPopup={this.handleScrollAfterLastPopup}
            />     
          </section>

          <section className={styles.textPanel}>
            <p>Unfamiliar with AIME? Here’s the back story...</p>
            <Link className={styles.btn} to="/story/the-backdrop-to-aime" target="_blank">The Backdrop to AIME</Link>
            <p>Since 2005, AIME has achieved..</p>
          </section>
  
          {/* <section 
            ref={el => { this.sectionRefs.blah = el }}
            className={styles.bgmarblewrapper}>
            <div className={styles.bgmarble}>
              <img src={`${assetsUrl}/assets/images/imagination_dec/EYE-min@2x.gif`} alt="left eye" style={{ width: '250px' }} />
              <h1>&bull; <br />keeping here in case we use 4 <br />Going <br />Global <br />&bull; </h1>
              <img src={`${assetsUrl}/assets/images/imagination_dec/EYE-min@2x.gif`} alt="right eye" style={{ width: '250px' }} />
            </div>
          </section> */}
  
          <section ref={el => { this.sectionRefs.results = el }} className={styles.resultsSection}>
            <div className={styles.panel}>
              <h2>Mentee Progression Rates in Australia</h2>
              <div className={styles.resultImages}>
                <img src={`${assetsUrl}/assets/images/going-global/mentees79.png`} alt="Imagine" style={{ width: '500px' }} />
                <img src={`${assetsUrl}/assets/images/going-global/mentees1012.png`} alt="Imagine" style={{ width: '500px' }} />
              </div>
            </div>
            <div className={styles.panel}>
              <h2>Percent of australian aime students who achieved year attainment and completed high school</h2>
              <div className={styles.resultImages}>
                <div>
                  <img src={`${assetsUrl}/assets/images/going-global/transitionrate1.png`} alt="99% transition rate excluding students with no transition data" style={{ width: '500px' }} />
                  <p>Based in the total number of students engaged. EXCLUDING students with no transition data available</p>
                </div>
                <div>
                  <img src={`${assetsUrl}/assets/images/going-global/transitionrate2.png`} alt="79% transition rate including students with transition data" style={{ width: '500px' }} />
                  <p>Based in the total number of students engaged. INCLUDING students with transition data available</p>
                </div>
              </div>
            </div>
            <div className={styles.panel}>
              <h2><strong>22,987</strong> <br />volunteer mentor hours were donated in australia</h2>
              <div className={styles.resultImages}>
                <div>
                  <img src={`${assetsUrl}/assets/images/going-global/volunteerhrs.png`} alt="23000 volunteer hours" style={{ width: '500px' }} />
                  <p>That’s the equivalent of over three years!</p>
                </div>
              </div>
            </div>
          </section>


          <section ref={el => { this.sectionRefs.resources = el }} className={styles.pppWrapper}>
            <h5>Through our experiences, AIME has developed a set of philosophies, processes, and product that we’re proud of.</h5>
            <TabComponent />
          </section>

          <section ref={el => { this.sectionRefs.resources = el }} className={styles.resourcesSection}>
            <h3>View some of our resources:</h3>
            <div className={styles.panel}>
              <div>
                <img src={`${assetsUrl}/assets/images/going-global/volunteerhrs.png`} alt="Harvard University" />
              </div>
              <div>
                <h2>Harvard Case Study</h2>
                <p>Impact of the Hoodie - the uniform and symbol of the kid who has been forgotten. A positive unifying mentor outfit.</p>
                <Link className={styles.btn} to="/">View Case Study</Link>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src={`${assetsUrl}/assets/images/going-global/volunteerhrs.png`} alt="Harvard University" />
              </div>
              <div>
                <h2>Cogs</h2>
                <p>Impact of the Hoodie - the uniform and symbol of the kid who has been forgotten. A positive unifying mentor outfit.</p>
                <Link className={styles.btn} to="/">Watch Cogs</Link>
              </div>
            </div>
            <div className={styles.panel}>
              <div>
                <img src={`${assetsUrl}/assets/images/going-global/volunteerhrs.png`} alt="Harvard University" />
              </div>
              <div>
                <h2>Letter to the universities</h2>
                <p>Impact of the Hoodie - the uniform and symbol of the kid who has been forgotten. A positive unifying mentor outfit..</p>
                <Link className={styles.btn} to="/">View Case Study</Link>
              </div>
            </div>
          </section>

          <section
            className={styles.eoiSection}
            ref={el => { this.sectionRefs.enquire = el }}
          >
            <div className={styles.formWrapper}>
              <h1>How will you change the world?</h1>
              <p>We are looking for 3-5 university/research partners to join a global consortium to creatively track and document the impact of the AIME Global pilot to test if the philosophy, products and processes have weight that can be used to alleviate educational disadvantage across the earth's surface.</p>
              <EoiForm 
                history={this.props.history}
                uploadData={uploadCustomEOI}
                tableName={tableName}
                showBeAFriendCheckbox
                handleReloadData={this.handleReloadData} />
            </div>
              
          </section>
          
        </div>
      </div>
    );
  }
};

GoingGlobal.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default GoingGlobal;
