import React, {
  useEffect, useRef, useContext,
} from 'react';
import { useRouter } from 'next/router';
import HeroBannerAustralia from '../../components/heroBannerHomepage/heroBannerAustralia';
import Layout from '../../hocs/basicLayout';
import { CTA_GRID_CAMPAIGNS } from '../../constants';
import WavyDonateSection from '../../components/wavyDonateSection';
import { setOnStorage, getFromStorage } from '../../utils/localStorage';
import { DonationContext } from '../../context';
import scrollToComponent from '../../utils/scrollToComponent';

import DoubleCurvedLine from '../../components/imaginationTv/doubleCurvedLine';
import QuicklinksHomepage from '../../components/quicklinksHomepage';
import CtaGrid from '../../components/ctaGrid';
import AmbassadorsCarousel from '../../components/ambassadorsCarousel';
import FooterBanner from '../../components/footerBanner';

const Home = () => {
  const partnerRef = useRef(null);
  const getInvolvedRef = useRef(null);
  const router = useRouter();
  const { toggleDonationModal } = useContext(DonationContext);

  useEffect(() => {
    if (!getFromStorage('home_first_visit')) {
      setOnStorage('home_first_visit', true);
    }
  }, []);

  useEffect(() => {
    if (router.query && router.query.donate === 'true') {
      toggleDonationModal();
      router.push('/', '/', { shallow: true });
    }
  }, [router.query]);

  const scrollToGetInvolved = () => scrollToComponent(getInvolvedRef);
  const scrollToPartnerBanner = () => scrollToComponent(partnerRef);

  return (
    <Layout>
      <HeroBannerAustralia scrollHandler={scrollToGetInvolved} />
      <CtaGrid elements={CTA_GRID_CAMPAIGNS} partnerRef={partnerRef} />
      <br />
      <DoubleCurvedLine />
      <QuicklinksHomepage scrollHandler={scrollToPartnerBanner} getInvolvedRef={getInvolvedRef} />
      <WavyDonateSection />
      <AmbassadorsCarousel />
      <FooterBanner />
    </Layout>
  );
};

export default Home;
