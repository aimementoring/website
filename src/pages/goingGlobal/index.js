import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import scrollToComponent from 'react-scroll-to-component';
import ImaginationDeclarationForm from '../../components/eoiForm';
// import { getAssetsBaseUrl } from '../../services/craftAPI';
// import VideoButton from '../../components/videoButton';
// import VioletVideoCarousel from '../../components/carousel/customCarousels/violetCarousel';
// import { STUDENT_CHAPTER_FIRST_VIDEO_CAROUSEL_ELEMENTS } from '../../constants';
// import { uploadHoodedScholarEOI } from '../../services/portalApi';
import './goingGlobal.scss';

const GoingGlobal = ({ location, history }) => {
  const [reloadData, setReloadData] = useState(false);
  const { search, hash, state } = location;
  const sectionRefs = {};

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
        <section
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
