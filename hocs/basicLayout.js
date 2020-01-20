import React, { useState, useEffect } from 'react';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import SeoMetadata from '../components/layoutComponents/seoMetaData';
import ErrorBoundary from '../components/common/errorBoundary';
import Header from '../components/layoutComponents/header';
import Footer from '../components/layoutComponents/footer';
import Logos from '../components/layoutComponents/logos';
import IntercomChat from '../components/intercom';
import { getSeoTags } from '../services/craftAPI';
import './basicLayout.scss';

const Layout = ({ router, children }) => {
  const [seo, setSeo] = useState({});

  const addSeoAndRedirects = () => {
    const { pathname } = router;
    getSeoTags(pathname.split('/')[1].length > 1 ? pathname : '').then(
      (seoTags) => { setSeo(seoTags); },
    );
  };

  const handleShowIntercom = () => {
    window.Intercom('showNewMessage');
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
        <Header location={router} handleShowIntercom={handleShowIntercom} />
        <main role="main">
          <SeoMetadata seo={seo} />
          {children}
          <IntercomChat />
        </main>
        <Footer location={router} handleShowIntercom={handleShowIntercom} />
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
