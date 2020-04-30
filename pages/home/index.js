import React, {
  useEffect, useRef,
} from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Layout from '../../hocs/basicLayout';
import { CTA_AU_HOMEPAGE } from '../../constants';
import { setOnStorage, getFromStorage } from '../../utils/localStorage';
import useDonate from '../../hooks/useDonate';
import scrollToComponent from '../../utils/scrollToComponent';
import './home.scss';

const HeroBannerHomepage = dynamic(() => import('../../components/heroBannerHomepage'));
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
      <QuicklinksHomepage scrollHandler={scrollToPartnerBanner} getInvolvedRef={getInvolvedRef} />
      <CtaGrid elements={CTA_AU_HOMEPAGE} partnerRef={partnerRef} />
      <AmbassadorsCarousel />
      <FooterBanner />
    </Layout>
  );
};

export default Home;
