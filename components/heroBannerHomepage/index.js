import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

const HeroBannerAustralia = dynamic(() => import('./heroBannerAustralia'));
const HeroBannerUSA = dynamic(() => import('./heroBannerUSA'));

const HeroBannerHomepage = ({ currentSite }) => (
  currentSite === 'us' || currentSite === 'global' ? <HeroBannerUSA /> : <HeroBannerAustralia />
);

HeroBannerHomepage.propTypes = {
  currentSite: PropTypes.string.isRequired,
};

export default HeroBannerHomepage;
