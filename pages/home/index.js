import React, {
  useEffect, useRef,
} from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import HeroBannerHomepage from '../../components/heroBannerHomepage';
import Layout from '../../hocs/basicLayout';
import { CTA_GRID_CAMPAIGNS } from '../../constants';
import WavyDonateSection from '../../components/wavyDonateSection';
import { setOnStorage, getFromStorage } from '../../utils/localStorage';
import useDonate from '../../hooks/useDonate';
import scrollToComponent from '../../utils/scrollToComponent';

const DoubleCurvedLine = dynamic(() => import('../../components/imaginationTv/doubleCurvedLine'));
const QuicklinksHomepage = dynamic(() => import('../../components/quicklinksHomepage'));
const CtaGrid = dynamic(() => import('../../components/ctaGrid'));
const AmbassadorsCarousel = dynamic(() => import('../../components/ambassadorsCarousel'));
const FooterBanner = dynamic(() => import('../../components/footerBanner'));

const Home = () => {
  const partnerRef = useRef(null);
  const getInvolvedRef = useRef(null);
  const router = useRouter();
  // eslint-disable-next-line no-unused-vars
  const [modalVisible, toggleDonateModal] = useDonate();

  useEffect(() => {
    if (!getFromStorage('home_first_visit')) {
      setOnStorage('home_first_visit', true);
    }
  }, []);

  useEffect(() => {
    if (router.query && router.query.donate === 'true') {
      toggleDonateModal();
      router.push('/', '/', { shallow: true });
    }
  }, [router.query]);

  const scrollToGetInvolved = () => scrollToComponent(getInvolvedRef);
  const scrollToPartnerBanner = () => scrollToComponent(partnerRef);

  return (
    <Layout>
      <HeroBannerHomepage currentSite="au" scrollHandler={scrollToGetInvolved} />
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
