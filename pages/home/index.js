import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '../../hocs/basicLayout';
import { CTA_AU_HOMEPAGE } from '../../constants';
import './home.scss';

const HeroBannerHomepage = dynamic(() => import(/* webpackChunkName 'HeroBannerHomepage' */ '../../components/heroBannerHomepage'));
const IntroPanelHomepage = dynamic(() => import(/* webpackChunkName 'IntroPanelHomepage' */ '../../components/introPanelHomepage'));
const CtaGrid = dynamic(() => import(/* webpackChunkName 'CtaGrid' */ '../../components/ctaGrid'));
const CtaFAQ = dynamic(() => import(/* webpackChunkName 'CtaFAQ' */ '../../components/ctaFAQ'));
const FooterBanner = dynamic(() => import(/* webpackChunkName 'FooterBanner' */ '../../components/footerBanner'));

const Home = () => (
  <Layout>
    <HeroBannerHomepage currentSite="au" />
    <IntroPanelHomepage />
    <CtaGrid elements={CTA_AU_HOMEPAGE} />
    <CtaFAQ />
    <FooterBanner />
  </Layout>
);

export default Home;
