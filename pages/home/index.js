import React from 'react';
import HeroBannerHomepage from '../../components/heroBannerHomepage';
import IntroPanelHomepage from '../../components/introPanelHomepage';
import CtaGrid from '../../components/ctaGrid';
import CtaFAQ from '../../components/ctaFAQ';
import FooterBanner from '../../components/footerBanner';
import Layout from '../../hocs/basicLayout';
import { CTA_AU_HOMEPAGE } from '../../constants';

import './home.scss';

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
