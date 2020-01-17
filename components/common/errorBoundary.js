import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Anchor from './link';
import bugsnagClient from '../../utils/bugsnag';
import IntercomChat from '../intercom';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    bugsnagClient.notify(error, { context: info });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div>
          <div className="full-width-wrap bg-darkest-purple">
            <div className="hero-banner--default hero-banner--404 full-width-wrap bg-darkest-purple">
              <div className="flex flex-wrap items-center full-height">
                <div className="banner-wrapper subpage-banner center">
                  <h1>
                    <span className="pre-text">Uh </span>
                    <span className="highlight-text">
                      <em>
                        OH
                        <br />
                      </em>
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="md-wrap mx-auto p3 page-404-container">
              <div className="justify-center items-center sm-flex">
                <div>
                  <p className="f-30 feature-font-family regular c-white">
                    {'Oops, this wasn\'t meant to happen.'}
                  </p>
                  <p className="f-14 light pt2 c-white">
                    {'Sorry for any inconvenience. If you\'re seeing this often, please'}
                    {' '}
                    <IntercomChat classNames="intercom-button-nav nav-btn" />
                  </p>
                  <Anchor to="/home" as="/" className="basic-btn bold bg-brand-primary c-white mt3">Back to home</Anchor>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
