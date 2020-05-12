import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import App from 'next/app';
import TagManager from 'react-gtm-module';
import { ThemeProvider } from 'react-jss';
import MainAppComponent from '../components/mainAppComponent';
import initStore from '../store';
import isClientSide from '../utils/isClientSide';
import theme from '../styles/theme';

// @TODO: Remove these imports when they fix this issue: https://github.com/zeit/next.js/issues/12079
// Also reported here https://github.com/zeit/next.js/issues/10059
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

const tagManagerArgs = {
  gtmId: process.env.REACT_APP_GOOGLE_TAG_MANAGER,
  // auth: '',// Optional, see GTM => Admin => Environments, useful when using staging environment
  // preview: 'env-2' // Optional
};

class MyApp extends App {
  componentDidMount() {
    const style = document.getElementById('server-side-styles');

    TagManager.initialize(tagManagerArgs);
    this.unregisterServiceWorker();

    if (style) {
      style.parentNode.removeChild(style);
    }
  }

  componentDidUpdate() {
    this.unregisterServiceWorker();
  }

  unregisterServiceWorker = () => {
    if (isClientSide()) {
      let unregistered = 0;
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        // eslint-disable-next-line no-restricted-syntax
        for (const registration of registrations) {
          registration.unregister();
          unregistered += 1;
        }
      });
      if ('caches' in window) {
        caches.keys()
          .then((keyList) => Promise.all(keyList.map((key) => caches.delete(key))));
      }
      if (unregistered > 0) {
        window.location.reload();
      }
    }
  }

  render() {
    const {
      Component, pageProps, store,
    } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MainAppComponent />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withRedux(initStore, { debug: true })(MyApp);
