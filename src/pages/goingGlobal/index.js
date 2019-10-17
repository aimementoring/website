import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import scrollToComponent from 'react-scroll-to-component';
import ImaginationDeclarationForm from '../../components/eoiForm';
import { getAssetsBaseUrl } from '../../services/craftAPI';
// import VideoButton from '../../components/videoButton';
// import VioletVideoCarousel from '../../components/carousel/customCarousels/violetCarousel';
// import { STUDENT_CHAPTER_FIRST_VIDEO_CAROUSEL_ELEMENTS } from '../../constants';
// import { uploadHoodedScholarEOI } from '../../services/portalApi';
import './goingGlobal.scss';

const GoingGlobal = ({ location, history }) => {
  const [reloadData, setReloadData] = useState(false);
  const { search, hash, state } = location;
  const sectionRefs = {};
  const assetsUrl = getAssetsBaseUrl();
  
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, false);
    const cleanup = () => {
      window.removeEventListener('scroll', scrollHandler, false);
    };
    return cleanup;
  });

  useEffect(() => {
    const section = hash.replace('#', '').toLowerCase();
    window.removeEventListener('scroll', scrollHandler, false);
    if (section in sectionRefs) {
      if (!state || (state && !state.noScroll)) {
        const scroller =
          section === 'welcome'
            ? scrollToComponent(sectionRefs[section], { align: 'top' })
            : scrollToComponent(sectionRefs[section], { offset: -50, align: 'top' });
        scroller.on('end', () => window.addEventListener('scroll', scrollHandler, false));
      } else {
        window.addEventListener('scroll', scrollHandler, false);
      }
    }
  }, [hash]);

  const scrollHandler = () => {
    const overSection = Object.keys(sectionRefs).find(section => {
      const top = sectionRefs[section].offsetTop;
      const bottom = top + sectionRefs[section].offsetHeight;
      const scrollPosition = window.pageYOffset;
      return top <= scrollPosition && bottom > scrollPosition;
    });

    if (overSection !== hash.replace('#', '').toLowerCase() && overSection !== undefined) {
      history.push(`/imagination-declaration${search}#${overSection}`, { noScroll: true });
    }
  };

  const handleReloadData = () => setReloadData(!reloadData);

  return (
    <div>
      <div />
      <div className="hoodedScholar micro-site">

        <div className="full-width-wrap" id="welcome">
          <div className="flex flex-wrap items-center">
            <div className="hero-panel full-panel banner-wrapper section-background-image section-background-hoodie hero-panel-imagi-dec">

              <div className="vid-container">
                <div className="bgVideo-container">
                  
                  <video autoPlay muted loop preload="true" id="bgVideo">
                    <source src="https://player.vimeo.com/external/355260061.m3u8?s=c3945cc10ef449bb6cce03bdf6aa005c8e2006ff" type="video/webm" />
                    <source src="https://player.vimeo.com/external/355260061.sd.mp4?s=8a48fab6b37e165b27dde8e5250a6c9fcba60372&profile_id=165" type="video/mp4" />
                  </video>

                </div>
                <h1 className="page-header">Going Global</h1>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white full-panel centered-content dec-text-panel">
          <div className="md-wrap mx-auto intro-text">   
            <p>For the last 3 years we have been on a huge adventure sharing AIME around the world. And now with everything we have learned we are looking to bunker down and capture the learnings of AIME Global with a 3 year research focused pilot, featuring programs marginalised youth in Uganda, South Africa, Nigeria, USA and Australia.</p>
            <p>Our dream is to distill the philosophy, processes and products at the heart of AIME so we can share them with teachers, mentors and guides across the world looking to unlock the limitless potential of the kids being left behind.</p>
            <p>Check out some of the case studies &amp; experiences from the last 3 years.</p>
            
          </div>
        </section>



        <section className="centered-content bg-white dec-text-panel" >
          <div className="flex think-diff-wrapper">
            <div>
              <h5>2017</h5>
              <h4>The Golden Ticket</h4>
            </div>
            <div>
              <h5>2018</h5>
              <h4>Going local to go global</h4>
            </div>
            <div>
              <h5>2019</h5>
              <h4>USA - The Hooded Hustle</h4>
            </div>
          </div>              
        </section>

        <section className="full-panel centered-content bg-marble-wrapper">
          <div className="flex bg-marble">
            {/* TODO: really don't want to have the image size inline on all the images but doing it for timesake now. will fix later */}
            <img src={`${assetsUrl}/assets/images/imagination_dec/EYE-min@2x.gif`} alt="left eye" style={{ width: '250px' }} />
            <h1>&bull; <br />keeping here in case we use 4 <br />Going <br />Global <br />&bull; </h1>
            <img src={`${assetsUrl}/assets/images/imagination_dec/EYE-min@2x.gif`} alt="right eye" style={{ width: '250px' }} />
          </div>
        </section>

        <section 
          className="bg-white full-panel centered-content dec-text-panel">
          <div className="mx-auto declaration-text-wrapper">   
            <p>When you look at a student who has been labelled as disadvantaged, we ask you to challenge your thinking and instead, <em>imagine what’s possible</em>. </p>

            <p><strong>We don’t want to be boxed.</strong></p>

            <p><strong>We don’t want ceilings.</strong></p>

            <p><strong>We want freedom to be whatever a human mind can dream.</strong></p>

            <p>When you think of an underprivileged kid, or in fact, any kid, <em>imagine what’s possible</em>. Don’t define us through the lens of disadvantage or label us as limited. </p>

          </div>
        </section>

        <section 
          className="full-panel centered-content layout-2col bg-yellow-gradient">
          <div className="col-wrap">
            <div className="col">
              <p><strong>Test us. </strong></p>
              <p><strong>Expect the best of us. </strong></p>
              <p><strong>Expect the unexpected. </strong></p>
              <p>Expect us to continue carrying the custodianship of imagination, entrepreneurial spirit and genius that is at the heart of human existence. </p>
              <p><strong>Expect us to be complex. </strong></p>
            </div>
            <div className="col">
              <img src={`${assetsUrl}/assets/images/imagination_dec/IMAGINE-min@2x.gif`} alt="Imagine" style={{ width: '500px' }} />
            </div>
          </div>
        </section>

        <section 
          className="full-panel centered-content bg-white dec-text-panel flex-col"
          >
          <div className="md-wrap mx-auto">   
            <p>And then let us spread our wings, and soar higher than ever before.</p>
            <p>We do not want to inherit a world that is in pain. We do not want to stare down huge inequality, feeling powerless to change our fate. We do not want to be unarmed as we face some of the biggest problems faced by the human race: rising sea levels which will lead to huge refugee challenges; droughts and food shortages; and our own challenges around a cycle of perpetuated disadvantaged. </p>
          </div>

          <div className="flex think-diff-wrapper">
            <img src={`${assetsUrl}/assets/images/imagination_dec/BRAIN-min@2x.gif`} alt="Brain" style={{ width: '250px' }} className="brain-left" />
            <h2 className="think-diff-header">It’s time to <br /><strong className="sunset-gradient-text">think differently.</strong></h2>
            <img src={`${assetsUrl}/assets/images/imagination_dec/BRAIN-min@2x.gif`} alt="Brain" style={{ width: '250px' }} className="brain-right" />
          </div>              
        </section>

        <section className="centered-content dec-text-panel dec-text-panel-mid dec-text-panel-final">
          <div className="md-wrap mx-auto">   
            <h2 className="highlighted">We are not the problem; <br />we are the solution.</h2>
          </div>
        </section>

        <section 
          className="full-panel centered-content bg-white dec-text-panel layout-3col col-wrap"
          >
          <div className="col layout-3col-images">
            <div className="img-wrap">
              <img src={`${assetsUrl}/assets/images/imagination_dec/COGS-min@2x.gif`} alt="Moving cogs" style={{ width: '300px' }} />
            </div>
            <div className="img-wrap">
              <img src={`${assetsUrl}/assets/images/imagination_dec/left_garma-min@2x.jpg`} alt="Garma" style={{ width: '300px' }} />
            </div>
            <div className="img-wrap">
              <img src={`${assetsUrl}/assets/images/imagination_dec/ATOM-min@2x.gif`} alt="ATOM" style={{ width: '300px' }} />
            </div>
          </div>
          <div className="col layout-3col-content">   
            <p>We can work on creative agricultural solutions that are in sync with our natural habitat. We can re-engineer schooling. We can invent new jobs and technologies. And we can unite around kindness.</p>
            <p>We call on all education leaders across the world to establish an imagination agenda for all children.</p>
            <p><strong>We urge you to give us the freedom to write a new story.</strong></p>
          </div>
          <div className="col layout-3col-images">
            <div className="img-wrap">
              <img src={`${assetsUrl}/assets/images/imagination_dec/EARTH-min@2x.gif`} alt="Earth" style={{ width: '300px' }} />
            </div>
            <div className="img-wrap">
              <img src={`${assetsUrl}/assets/images/imagination_dec/right_garma-min@2x.jpg`} alt="Garma" style={{ width: '300px' }} />
            </div>
            <div className="img-wrap">
              <img src={`${assetsUrl}/assets/images/imagination_dec/SPEAK-min@2x.gif`} alt="Speaker" style={{ width: '300px' }} />
            </div>
          </div>                  
        </section>
      
        <section 
          className="full-panel centered-content layout-fullimagetext"
          >
          <div className="fullimagetext-bg centered-content">
            <h3>Set an imagination agenda for our classrooms. Remove the limited thinking around our disadvantage. Stop looking at us as a problem to fix; set us free to be the solution and give us the stage to light up the world.</h3>
          </div>
        </section>

        <section 
          className="bg-white full-panel centered-content dec-text-panel dec-text-panel-final">
          <div className="md-wrap mx-auto">   
            <h2>Imagine what’s possible</h2>
          </div>
        </section>

        <section
          className="centered-content dec-text-panel dec-text-panel-final"
        >
          <ImaginationDeclarationForm handleReloadData={handleReloadData} />
        </section>
        <section
          className="centered-content section-dec-signatures lg-wrap"
        >
          {/* <GoingGlobalList reloadData={reloadData} /> */}
        </section> 
      </div>
    </div>
  );
};

GoingGlobal.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default GoingGlobal;
