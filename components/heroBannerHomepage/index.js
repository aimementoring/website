import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

const HeroBannerAustralia = dynamic(() => import('./heroBannerAustralia'));
const HeroBannerUSA = dynamic(() => import('./heroBannerUSA'));

const HeroBannerHomepage = ({ currentSite, scrollHandler }) => (
  currentSite === 'us' || currentSite === 'global' ? <HeroBannerUSA /> : <HeroBannerAustralia scrollHandler={scrollHandler} />
);

HeroBannerHomepage.propTypes = {
  currentSite: PropTypes.string.isRequired,
  scrollHandler: PropTypes.func.isRequired,
};

export default HeroBannerHomepage;
