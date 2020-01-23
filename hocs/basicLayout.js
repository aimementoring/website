import React, { useState, useEffect } from 'react';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import SeoMetadata from '../components/layoutComponents/seoMetaData';
import ErrorBoundary from '../components/common/errorBoundary';
import Header from '../components/layoutComponents/header';
import Footer from '../components/layoutComponents/footer';
import Logos from '../components/layoutComponents/logos';
import SEO_TAGS from '../constants/seoTags';
import './basicLayout.scss';

const Layout = ({ router, children }) => {
  const [seo, setSeo] = useState({});

  const addSeoAndRedirects = () => {
    const { pathname } = router;

    if (pathname in SEO_TAGS) {
      setSeo(SEO_TAGS[pathname]);
    }
  };

  useEffect(() => {
    addSeoAndRedirects();
  }, [router]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname]);

  return (
    <div>
      <ErrorBoundary>
        <Header location={router} />
        <main role="main">
          <SeoMetadata seo={seo} />
          {children}
        </main>
        <Footer location={router} />
        <Logos />
        <div id="aime-parent-video-box" />
      </ErrorBoundary>
    </div>
  );
};

Layout.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string,
    asPath: PropTypes.string,
    query: PropTypes.shape({}),
  }).isRequired,
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default withRouter(Layout);
