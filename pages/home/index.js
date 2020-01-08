import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../../hocs/basicLayout';
import { CTA_AU_HOMEPAGE } from '../../constants';
import { setOnStorage, getFromStorage } from '../../utils/localStorage';
import './home.scss';

const HeroBannerHomepage = dynamic(() => import(/* webpackChunkName 'HeroBannerHomepage' */ '../../components/heroBannerHomepage'));
const IntroPanelHomepage = dynamic(() => import(/* webpackChunkName 'IntroPanelHomepage' */ '../../components/introPanelHomepage'));
const CtaGrid = dynamic(() => import(/* webpackChunkName 'CtaGrid' */ '../../components/ctaGrid'));
const Ambassadors = dynamic(() => import(/* webpackChunkName 'CtaGrid' */ '../../components/ambassadors'));
// const CtaFAQ = dynamic(() => import(/* webpackChunkName 'CtaFAQ' */ '../../components/ctaFAQ'));
const FooterBanner = dynamic(() => import(/* webpackChunkName 'FooterBanner' */ '../../components/footerBanner'));

const Home = () => {
  useEffect(() => {
    if (!getFromStorage('home_first_visit')) {
      setOnStorage('home_first_visit', true);
    }
  }, []);

  return (
    <Layout>
      <HeroBannerHomepage currentSite="au" />
      <IntroPanelHomepage />
      <CtaGrid elements={CTA_AU_HOMEPAGE} />
      <Ambassadors />
      {/* <CtaFAQ /> */}
      <FooterBanner />
    </Layout>
  );
};

export default Home;
