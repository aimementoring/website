import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import bugsnagClient from '../../utils/bugsnag';
import IntercomChat from '../intercom';
import styles from './errorBoundary.module.scss';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: true,
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
          <div className={styles.errorBoundaryWrapper}>
            <div className={styles.errorHeroBanner}>
              <div className={styles.bannerContainer}>
                <div className={styles.subpageBanner}>
                  <div>
                    <Title type="headingLockup" className={styles.headingJobsSingle} theme={process.env.REACT_APP_THEME}>
                      <strong>
                        Uh Oh
                      </strong>
                    </Title>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.page404Container}>
              <div className={styles.page404Content}>
                <div>
                  <Title type="h4Title" theme={process.env.REACT_APP_THEME}>
                    {'Oops, this wasn\'t meant to happen.'}
                  </Title>
                  <Paragraph>
                    {'Sorry for any inconvenience. If you\'re seeing this often, please'}
                  </Paragraph>
                  <div className={styles.errorInterComWrapper}>
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
