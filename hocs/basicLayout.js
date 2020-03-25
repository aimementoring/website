import React, { useEffect } from 'react';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import ErrorBoundary from '../components/common/errorBoundary';
import Header from '../components/layoutComponents/header';
import Footer from '../components/layoutComponents/footer';
import Logos from '../components/layoutComponents/logos';
import './basicLayout.scss';

const Layout = ({ router, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname]);

  return (
    <div>
      <ErrorBoundary>
        <Header location={router} />
        <main role="main">{children}</main>
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
