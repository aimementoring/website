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

  useEffect(() => {
    if (!getFromStorage('home_first_visit')) {
      setOnStorage('home_first_visit', true);
    }
  }, []);

  const scrollHandler = () => {
    if (isClientSide()) {
      const goToPartnerBanner = partnerRef.current.getBoundingClientRect().top;
      window.scrollTo(0, goToPartnerBanner);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(partnerRef.current.getBoundingClientRect().top);
  }, [partnerRef]);

  return (
    <Layout>
      <HeroBannerHomepage currentSite="au" />
      <QuicklinksHomepage scrollHandler={scrollHandler} />
      <IntroPanelHomepage />
      <CtaGrid elements={CTA_AU_HOMEPAGE} partnerRef={partnerRef} />
      <Ambassadors />
      {/* <CtaFAQ /> */}
      <FooterBanner />
    </Layout>
  );
};

export default Home;
