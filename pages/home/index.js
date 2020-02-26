import React, { useEffect, createRef } from 'react';
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
  const partnerRef = createRef();
  const getInvolvedRef = createRef();

  useEffect(() => {
    if (!getFromStorage('home_first_visit')) {
      setOnStorage('home_first_visit', true);
    }
  }, []);

  const scrollToPartnerBanner = () => {
    if (isClientSide()) {
      partnerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGetInvolved = () => {
    if (isClientSide()) {
      getInvolvedRef.current.scrollIntoView({ behavior: 'smooth' });
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
