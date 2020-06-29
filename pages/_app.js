import React from 'react';
import App from 'next/app';
import TagManager from 'react-gtm-module';
import MainAppComponent from '../components/mainAppComponent';
import { DonationContext, ContactContext } from '../context';
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
  constructor(props) {
    super(props);

    this.toggleDonationModal = () => {
      this.setState((prevState) => ({ ...prevState, donationModal: !prevState.donationModal }));
    };

    this.toggleContactModal = () => {
      this.setState((prevState) => ({ ...prevState, contactModal: !prevState.contactModal }));
    };

    this.state = {
      donationModal: false,
      toggleDonationModal: this.toggleDonationModal,
      contactModal: false,
      toggleContactModal: this.toggleContactModal,
    };
  }

  componentDidMount() {
    TagManager.initialize(tagManagerArgs);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <DonationContext.Provider value={this.state}>
        <ContactContext.Provider value={this.state}>
          <MainAppComponent />
          <Component {...pageProps} />
        </ContactContext.Provider>
      </DonationContext.Provider>
    );
  }
}

export default MyApp;
