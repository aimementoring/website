import React, { useEffect } from 'react';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import ErrorBoundary from '../components/common/errorBoundary';
import Header from '../components/layoutComponents/header';
import Footer from '../components/layoutComponents/footer';
import Logos from '../components/layoutComponents/logos';
import isClientSide from '../utils/isClientSide';
import './basicLayout.scss';

const Layout = ({ router, children }) => {
  const openIntercomIfContactPath = () => {
    const { asPath } = router;
    if (asPath && asPath === '/contact') {
      if (isClientSide() && window && window.Intercom) {
        window.Intercom('showNewMessage');
      }
    }
  };

  useEffect(() => {
    openIntercomIfContactPath();
  }, [router]);

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
