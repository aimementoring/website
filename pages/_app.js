import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import App from 'next/app';
import TagManager from 'react-gtm-module';
import MainAppComponent from '../components/mainAppComponent';
import initStore from '../store';
import isClientSide from '../utils/isClientSide';
import './_app.scss';

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
    TagManager.initialize(tagManagerArgs);
  }

  render() {
    const {
      Component, pageProps, store,
    } = this.props;
    return (
      <Provider store={store}>
        <MainAppComponent />
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(initStore, { debug: true })(MyApp);
