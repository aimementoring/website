import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import bugsnagClient from '../../utils/bugsnag';
import IntercomChat from '../intercom';
import './styles.scss';

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
          <div className="full-width-wrap">
            <div className="hero-banner--default hero-banner--404 full-width-wrap">
              <div className="flex flex-wrap items-center full-height">
                <div className="banner-wrapper subpage-banner center">
                  <div className="bannerContent">
                    <Title type="headingLockup" className="headingJobsSingle" theme={process.env.REACT_APP_THEME}>
                      Uh
                      <strong>
                        Oh
                      </strong>
                    </Title>
                  </div>
                </div>
              </div>
            </div>
            <div className="md-wrap mx-auto p3 page-404-container">
              <div className="justify-center items-center sm-flex">
                <div>
                  <Title type="h4Title" theme={process.env.REACT_APP_THEME}>
                    {'Oops, this wasn\'t meant to happen.'}
                  </Title>
                  <Paragraph>
                    {'Sorry for any inconvenience. If you\'re seeing this often, please'}
                  </Paragraph>
                  <div className="errorInterComWrapper">
                    <IntercomChat />
                  </div>
                  <Button type="link" url="/" theme={process.env.REACT_APP_THEME}>
                    Back to home
                  </Button>
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
