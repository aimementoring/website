import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../../hocs/basicLayout';
import { CTA_AU_HOMEPAGE } from '../../constants';
import { setOnStorage, getFromStorage } from '../../utils/localStorage';
import './home.scss';

const HeroBannerHomepage = dynamic(() => import('../../components/heroBannerHomepage'));
const QuicklinksHomepage = dynamic(() => import('../../components/quicklinksHomepage'));
const IntroPanelHomepage = dynamic(() => import('../../components/introPanelHomepage'));
const QuickNewsFeed = dynamic(() => import('../../components/quickNewsFeed'));
const CtaGrid = dynamic(() => import('../../components/ctaGrid'));
const Ambassadors = dynamic(() => import('../../components/ambassadors'));
// const CtaFAQ = dynamic(() => import('../../components/ctaFAQ'));
const FooterBanner = dynamic(() => import('../../components/footerBanner'));

const Home = () => {
  useEffect(() => {
    if (!getFromStorage('home_first_visit')) {
      setOnStorage('home_first_visit', true);
    }
  }, []);

  return (
    <Layout>
      <HeroBannerHomepage currentSite="au" />
      <QuicklinksHomepage />
      <IntroPanelHomepage />
      <QuickNewsFeed />
      <CtaGrid elements={CTA_AU_HOMEPAGE} />
      <Ambassadors />
      {/* <CtaFAQ /> */}
      <FooterBanner />
    </Layout>
  );
};

export default Home;
