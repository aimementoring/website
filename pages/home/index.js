import React, {
  useEffect, useRef,
} from 'react';
import dynamic from 'next/dynamic';
import Layout from '../../hocs/basicLayout';
import { CTA_AU_HOMEPAGE } from '../../constants';
import { setOnStorage, getFromStorage } from '../../utils/localStorage';
import { isClientSide } from '../../utils/utilities';
import './home.scss';

const HeroBannerHomepage = dynamic(() => import('../../components/heroBannerHomepage'));
const QuicklinksHomepage = dynamic(() => import('../../components/quicklinksHomepage'));
const IntroPanelHomepage = dynamic(() => import('../../components/introPanelHomepage'));
const CtaGrid = dynamic(() => import('../../components/ctaGrid'));
const Ambassadors = dynamic(() => import('../../components/ambassadors'));
// const CtaFAQ = dynamic(() => import('../../components/ctaFAQ'));
const FooterBanner = dynamic(() => import('../../components/footerBanner'));

const Home = () => {
  const partnerRef = useRef(null);
  const getInvolvedRef = useRef(null);

  useEffect(() => {
    if (!getFromStorage('home_first_visit')) {
      setOnStorage('home_first_visit', true);
    }
  }, []);

  // TODO: finish this function for safari smooth scroll and
  // figure out why it starts from the top of screen each click

  // const smoothScrollTo = (delay, position) => {
  //   const scrollDelay = delay;
  //   if (isClientSide()) {
  //     let i = scrollDelay;
  //     const int = setInterval(() => {
  //       window.scrollTo(0, i);
  //       i += scrollDelay;
  //       if (Math.abs(window.scrollY) >= Math.abs(position)) {
  //         clearInterval(int);
  //       }
  //     }, 20);
  //   }
  // };


  const scrollToGetInvolved = () => {
    if (isClientSide()) {
      const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
      if (isSmoothScrollSupported) {
        getInvolvedRef.current.scrollIntoView({ behavior: 'smooth' });
      } else {
        // const pos = getInvolvedRef.current.getBoundingClientRect();
        // smoothScrollTo(10, pos.top);
        getInvolvedRef.current.scrollIntoView(false);
      }
    }
  };

  const scrollToPartnerBanner = () => {
    if (isClientSide()) {
      const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
      if (isSmoothScrollSupported) {
        partnerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        // const pos = partnerRef.current.getBoundingClientRect();
        // smoothScrollTo(10, pos.top + 500);
        partnerRef.current.scrollIntoView(false);
      }
    }
  };

  return (
    <Layout>
      <HeroBannerHomepage currentSite="au" scrollHandler={scrollToGetInvolved} />
      <QuicklinksHomepage scrollHandler={scrollToPartnerBanner} getInvolvedRef={getInvolvedRef} />
      <IntroPanelHomepage />
      <CtaGrid elements={CTA_AU_HOMEPAGE} partnerRef={partnerRef} />
      <Ambassadors />
      {/* <CtaFAQ /> */}
      <FooterBanner />
    </Layout>
  );
};

export default Home;
