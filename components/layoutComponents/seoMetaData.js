import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const SeoMetadata = ({ seo }) => (
  <div>
    {seo
      && <Helmet>{Object.keys(seo).map((tagName) => ReactHtmlParser(seo[tagName]))}</Helmet>}
  </div>
);

SeoMetadata.propTypes = {
  seo: PropTypes.shape({
    MetaJsonLdContainer: PropTypes.string,
    MetaLinkContainer: PropTypes.string,
    MetaScriptContainer: PropTypes.string,
    MetaTagContainer: PropTypes.string,
    MetaTitleContainer: PropTypes.string,
  }),
};

SeoMetadata.defaultProps = {
  seo: null,
};

export default SeoMetadata;
