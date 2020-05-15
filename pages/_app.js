import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import App from 'next/app';
import TagManager from 'react-gtm-module';
import MainAppComponent from '../components/mainAppComponent';
import initStore from '../store';

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
