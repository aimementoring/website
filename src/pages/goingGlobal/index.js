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
  
          <section className={styles.heroPanelWrapper}>
              <h1 className={styles.pageHeroHeader}>Going Global</h1>
          </section>
  
          <section ref={el => { this.sectionRefs.intro = el }} className={styles.textPanel}>
            <p>For the last 3 years we have been on a huge adventure sharing AIME around the world. And now with everything we have learned we are looking to bunker down and capture the learnings of AIME Global with a 3 year research focused pilot, featuring programs marginalised youth in Uganda, South Africa, Nigeria, USA and Australia.</p>
            <p>Our dream is to distill the philosophy, processes and products at the heart of AIME so we can share them with teachers, mentors and guides across the world looking to unlock the limitless potential of the kids being left behind.</p>
            <p>Check out some of the case studies &amp; experiences from the last 3 years.</p>
          </section>

          <section ref={el => { this.sectionRefs.casestudies = el }} className={styles.caseStudiesWrapper}>
            <Popup />     
          </section>

          <section className={styles.textPanel}>
            <p>Unfamiliar with AIME? Here’s the back story...</p>
            <Link className={styles.btn} to="/story/the-backdrop-to-aime">The Backdrop to AIME</Link>
          </section>
  
          <section 
            ref={el => { this.sectionRefs.blah = el }}
            className={styles.bgmarblewrapper}>
            <div className={styles.bgmarble}>
              {/* TODO: really don't want to have the image size inline on all the images but doing it for timesake now. will fix later */}
              <img src={`${assetsUrl}/assets/images/imagination_dec/EYE-min@2x.gif`} alt="left eye" style={{ width: '250px' }} />
              <h1>&bull; <br />keeping here in case we use 4 <br />Going <br />Global <br />&bull; </h1>
              <img src={`${assetsUrl}/assets/images/imagination_dec/EYE-min@2x.gif`} alt="right eye" style={{ width: '250px' }} />
            </div>
          </section>
  
          <section ref={el => { this.sectionRefs.results = el }} className={styles.resultsSection}>
            <h2>Since 2005, AIME has achieved...</h2>
            <div className={styles.resultImages}>
              <img src={`${assetsUrl}/assets/images/imagination_dec/IMAGINE-min@2x.gif`} alt="Imagine" style={{ width: '500px' }} />
              <img src={`${assetsUrl}/assets/images/imagination_dec/IMAGINE-min@2x.gif`} alt="Imagine" style={{ width: '500px' }} />
              <img src={`${assetsUrl}/assets/images/imagination_dec/IMAGINE-min@2x.gif`} alt="Imagine" style={{ width: '500px' }} />
              <img src={`${assetsUrl}/assets/images/imagination_dec/IMAGINE-min@2x.gif`} alt="Imagine" style={{ width: '500px' }} />
              <img src={`${assetsUrl}/assets/images/imagination_dec/IMAGINE-min@2x.gif`} alt="Imagine" style={{ width: '500px' }} />
            </div>
          </section>


          <section ref={el => { this.sectionRefs.resources = el }} className={styles.pppWrapper}>
            <h5>And through that, AIME has developed a set of philosophies, processes, and product that we’re proud of.</h5>
            <TabComponent />
          </section>
  
          {/* <section
            ref={el => { this.sectionRefs.section5 = el }}
            className={styles.textPanel} >
            <div className={styles.mdwrap}>   
              <p>And then let us spread our wings, and soar higher than ever before.</p>
              <p>We do not want to inherit a world that is in pain. We do not want to stare down huge inequality, feeling powerless to change our fate. We do not want to be unarmed as we face some of the biggest problems faced by the human race: rising sea levels which will lead to huge refugee challenges; droughts and food shortages; and our own challenges around a cycle of perpetuated disadvantaged. </p>
            </div>
  
            <div className={styles.thinkdiffwrapper}>
              <img src={`${assetsUrl}/assets/images/imagination_dec/BRAIN-min@2x.gif`} alt="Brain" style={{ width: '250px' }} className={styles.brainleft}/>
              <h2 className={styles.thinkdiffheader}>It’s time to <br /><strong className={styles.sunset}>think differently.</strong></h2>
              <img src={`${assetsUrl}/assets/images/imagination_dec/BRAIN-min@2x.gif`} alt="Brain" style={{ width: '250px' }} className={styles.brainright}/>
            </div>              
          </section>
  
          <section 
            ref={el => { this.sectionRefs.section6 = el }}
            className={styles.textPanelfinal}>
            <div className={styles.mxauto}>   
              <h2 className={styles.highlighted}>We are not the problem; <br />we are the solution.</h2>
            </div>
          </section>
  
          <section
            ref={el => { this.sectionRefs.section7 = el }}
            className={styles.layout3col} >
            <div className={styles.layout3colimages}>
              <div className={styles.imgwrap}>
                <img src={`${assetsUrl}/assets/images/imagination_dec/COGS-min@2x.gif`} alt="Moving cogs" style={{ width: '300px' }} />
              </div>
              <div className={styles.imgwrap}>
                <img src={`${assetsUrl}/assets/images/imagination_dec/left_garma-min@2x.jpg`} alt="Garma" style={{ width: '300px' }} />
              </div>
              <div className={styles.imgwrap}>
                <img src={`${assetsUrl}/assets/images/imagination_dec/ATOM-min@2x.gif`} alt="ATOM" style={{ width: '300px' }} />
              </div>
            </div>
            <div className={styles.layout3colcontent}>   
              <p>We can work on creative agricultural solutions that are in sync with our natural habitat. We can re-engineer schooling. We can invent new jobs and technologies. And we can unite around kindness.</p>
              <p>We call on all education leaders across the world to establish an imagination agenda for all children.</p>
              <p><strong>We urge you to give us the freedom to write a new story.</strong></p>
            </div>
            <div className={styles.layout3colimages}>
              <div className={styles.imgwrap}>
                <img src={`${assetsUrl}/assets/images/imagination_dec/EARTH-min@2x.gif`} alt="Earth" style={{ width: '300px' }} />
              </div>
              <div className={styles.imgwrap}>
                <img src={`${assetsUrl}/assets/images/imagination_dec/right_garma-min@2x.jpg`} alt="Garma" style={{ width: '300px' }} />
              </div>
              <div className={styles.imgwrap}>
                <img src={`${assetsUrl}/assets/images/imagination_dec/SPEAK-min@2x.gif`} alt="Speaker" style={{ width: '300px' }} />
              </div>
            </div>                  
          </section>
        
          <section
            ref={el => { this.sectionRefs.section8 = el }}
            className={styles.layoutfullimagetext} >
            <div className={styles.centeredcontent}>
              <h3>Set an imagination agenda for our classrooms. Remove the limited thinking around our disadvantage. Stop looking at us as a problem to fix; set us free to be the solution and give us the stage to light up the world.</h3>
            </div>
          </section> */}

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
