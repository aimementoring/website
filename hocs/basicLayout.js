import React, { useState, useEffect } from 'react';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import SeoMetadata from '../components/layoutComponents/seoMetaData';
import ErrorBoundary from '../components/common/errorBoundary';
import Header from '../components/layoutComponents/header';
import Footer from '../components/layoutComponents/footer';
import Logos from '../components/layoutComponents/logos';
import { getSeoTags } from '../services/craftAPI';
import './basicLayout.scss';

const withLayout = (WrappedComponent) => {
  const BasicLayout = ({ router, children }) => {
    const [seo, setSeo] = useState({});

    const addSeoAndRedirects = () => {
      const { pathname } = router;
      getSeoTags(pathname.split('/')[1].length > 1 ? pathname : '').then(
        (seoTags) => { setSeo(seoTags); },
      );
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
          <WrappedComponent />
          <Footer location={router} />
          <Logos />
          <div id="aime-parent-video-box" />
        </ErrorBoundary>
      </div>
    );
  };

  BasicLayout.propTypes = {
    router: PropTypes.shape({
      pathname: PropTypes.string,
      asPath: PropTypes.string,
      query: PropTypes.shape({}),
    }).isRequired,
    children: PropTypes.node,
  };

  BasicLayout.defaultProps = {
    children: null,
  };

  return withRouter(BasicLayout);
};

export default withLayout;
