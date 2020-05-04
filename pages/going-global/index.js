import React, {
  useState,
  useEffect,
} from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import scrollToComponent from '../../utils/scrollToComponent';
import isClientSide from '../../utils/isClientSide';
import Layout from '../../hocs/basicLayout';
import styles from './going-global.module.scss';

const Intro = dynamic(() => import('../../components/goingGlobal/introSection'));
const CaseStudies = dynamic(() => import('../../components/goingGlobal/caseStudiesSection'));
const Results = dynamic(() => import('../../components/goingGlobal/resultsSection'));
const ImaginationCurriculum = dynamic(() => import('../../components/goingGlobal/imaginationCurriculumSection'));
const Resources = dynamic(() => import('../../components/goingGlobal/resourcesSection'));
const Register = dynamic(() => import('../../components/goingGlobal/registerSection'));
const Message = dynamic(() => import('../../components/goingGlobal/messageSection'));

const GoingGlobal = () => {
  const [reloadData, setReloadData] = useState(false);
  const sectionRefs = {};

  const hash = isClientSide() ? window.location.hash.replace('#', '') : '';

  const scrollHandler = () => {
    if (isClientSide()) {
      const overSection = Object.keys(sectionRefs).find((section) => {
        const top = sectionRefs[section].offsetTop;
        const bottom = top + sectionRefs[section].offsetHeight;
        const scrollPosition = window.pageYOffset;
        return top <= scrollPosition && bottom > scrollPosition;
      });
      if (overSection && overSection !== hash.replace('#', '').toLowerCase()) {
        Router.push(
          `/going-global#${overSection}`,
          `/going-global#${overSection}`,
          { shallow: true },
        );
      }
    }
  };

  useEffect(() => {
    if (isClientSide()) window.addEventListener('scroll', scrollHandler, false);
  }, []);

  useEffect(() => {
    if (isClientSide() && hash && hash !== '') {
      const section = hash.replace('#', '').toLowerCase();
      window.removeEventListener('scroll', scrollHandler, false);
      if (section in sectionRefs) {
        // const scrollerOptions = { align: 'top' };
        // if (section === 'welcome') scrollerOptions.offset = -50;
        scrollToComponent(sectionRefs[section]);
        setTimeout(() => {
          window.addEventListener('scroll', scrollHandler, false);
        }, 1000);
        // .on('end', () => window.addEventListener('scroll', scrollHandler, false));
      }
    }
    const cleanup = () => {
      window.removeEventListener('scroll', scrollHandler, false);
    };
    return cleanup;
  }, [hash]);

  const handleScrollAfterLastPopup = () => {
    scrollToComponent(sectionRefs.results);
  };

  const setReference = (name, reference) => {
    sectionRefs[name] = reference;
  };

  const handleReloadData = () => setReloadData(!reloadData);

  return (
    <Layout>
      <div>
        <div />
        <div className={styles.microSite}>
          <section className={styles.sectionWrapper}>
            <div className={styles.heroPanelWrapper}>
              <h1 className={styles.pageHeroHeader}>
                Global Research Partnership Application
              </h1>
            </div>
          </section>
          <Intro setReference={setReference} />
          <CaseStudies
            setReference={setReference}
            handleScrollAfterLastPopup={handleScrollAfterLastPopup}
          />
          <Results setReference={setReference} />
          <ImaginationCurriculum setReference={setReference} />
          <Resources setReference={setReference} />
          <Register
            setReference={setReference}
            handleReloadData={handleReloadData}
          />
          <Message setReference={setReference} />
        </div>
      </div>
    </Layout>
  );
};

export default GoingGlobal;
