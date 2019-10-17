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
      <div className="micro-site">
        {/* <section
          className="bg-white centered-content dec-text-panel">
          <div className="mx-auto declaration-text-wrapper">
            <p>To the Prime Minister &amp; Education Ministers across Australia, </p>
            <p>In 1967, we asked to be counted. </p>
            <p>In 2017, we asked for a voice and treaty. </p>
            <p>Today, we ask you to imagine what’s possible. </p>
            <p>The future of this country lies in all of our hands. </p>
            <p>
              We do not want to inherit a world that is in pain. We do not want to stare down huge
              inequality feeling powerless to our fate. We do not want to be unarmed as we confront
              some of the biggest problems faced by the human race, from rising sea levels, which
              will lead to significant refugee challenges, to droughts and food shortages, and our
              own challenges around a cycle of perpetuated disadvantaged.
              {' '}
            </p>
            <p>It’s time to think differently.</p>
            <p>
              With 60,000 years of genius and imagination in our hearts and minds, we can be one of
              the groups of people that transform the future of life on earth, for the good of us
              all.
              {' '}
            </p>
            <p>
              We can design the solutions that lift islands up in the face of rising seas, we can
              work on creative agricultural solutions that are in sync with our natural habitat, we
              can re-engineer schooling, we can invent new jobs and technologies, and we can unite
              around kindness.
            </p>
            <p>We are not the problem, we are the solution. </p>
            <p>We don’t want to be boxed.</p>
            <p>We don’t want ceilings.</p>
            <p>We want freedom to be whatever a human mind can dream.</p>
            <p>
              When you think of an Aboriginal or Torres Strait Islander kid, or in fact, any kid,
              imagine what’s possible. Don’t define us through the lens of disadvantage or label us
              as limited.
              {' '}
            </p>
            <p>Test us. </p>
            <p>Expect the best of us. </p>
            <p>Expect the unexpected. </p>
            <p>
              Expect us to continue carrying the custodianship of imagination, entrepreneurial
              spirit and genius.
              {' '}
            </p>
            <p>Expect us to be complex. </p>
            <p>And then let us spread our wings, and soar higher than ever before. </p>
            <p>
              We call on you and the Education Ministers across the nation to establish an
              imagination agenda for our Indigenous kids and, in fact, for all Australian children.
              {' '}
            </p>
            <p>We urge you to give us the freedom to write a new story.</p>
            <p>We want to show the world Aboriginal genius.</p>
            <p>We want to show the nation Aboriginal leadership and imagination.</p>
            <p>
              Over the coming months we’ll be sharing the declaration with thousands of Indigenous
              kids across our nation and together we’ll stand to say, “set an imagination agenda for
              our classrooms, remove the limited thinking around our disadvantage, stop looking at
              us as a problem to fix, set us free to be the solution and give us the stage to light
              up the world.”
            </p>
            <p>
              We want the Imagination agenda in every school in the nation, from early childhood
              learning centres through to our most prominent universities.
            </p>
            <p>
              To our Prime Minister &amp; Education Ministers, we call on you to meet with us and to
              work on an imagination plan for our country’s education system, for all of us.
            </p>
            <p>We are not the problem, we are the solution.</p>
          </div>
        </section> */}

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
                <h1 className="page-header">It's time to think differently</h1>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white full-panel centered-content dec-text-panel">
          <div className="md-wrap mx-auto intro-text">   
            <p>
              On the 5th of August 2019, AIME gathered in remote Australia to facilitate a 
              workshop on imagination with a group of Indigenous Australian kids. These kids 
              are part of the oldest continuous culture on earth. From this collective thinking, 
              a dream was created, for all children everywhere, being left behind: the <em>Imagination Declaration</em> was born. 
            </p>
            <p>
              The Declaration has quickly evolved into a global message to all educators, resulting 
              in pledges across the earth to enshrine imagination in the school system to unlock the 
              power of disadvantaged kids everywhere. 
            </p>
          </div>
        </section>

        <section 
          className="full-panel centered-content bg-marble-wrapper">
          <div className="flex bg-marble">
            {/* TODO: really don't want to have the image size inline on all the images but doing it for timesake now. will fix later */}
            <img src={`${assetsUrl}/assets/images/imagination_dec/EYE-min@2x.gif`} alt="left eye" style={{ width: '250px' }} />
            <h1>&bull; <br />The <br />Imagination <br />Declaration <br />&bull; </h1>
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
          className="full-panel centered-content bg-white dec-text-panel panel-think-differently"
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
