import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Router from 'next/router';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import { SimpleBanner } from '../../components/banner/index';
import IntercomChat from '../../components/intercom';
import bugsnagClient from '../../utils/bugsnag';
import isClientSide from '../../utils/isClientSide';
import styles from './error.module.scss';

import './index.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const ErrorPage = () => {
  useEffect(() => {
    bugsnagClient.notify(new Error('Page not found (404)'), {
      beforeSend: (report) => {
        /* eslint no-param-reassign: "off" */
        report.severity = 'info';
        report.groupingHash = Router.pathname;
        if (isClientSide()) {
          report.metaData = {
            request: { referer: document.referrer },
          };
        }
        /* eslint no-param-reassign: "error" */
      },
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>AIME | Error 404 </title>
        <meta name="description" content="Helmet application" />
        <meta name="prerender-status-code" content="404" />
      </Helmet>
      <div id="404page" className={styles.errorBoundaryWrapper}>
        <SimpleBanner
          title={(
            <strong>
              Uh Oh
            </strong>
          )}
          titleType="headingLockup"
          titleStyleClass={styles.headingJobsSingle}
          bannerContainerClass={styles.errorHeroBanner}
          bannerWrapperClass={styles.bannerContainer}
          bannerContentWrapperClass={styles.subpageBanner}
          bannerContentClass={styles.subpageBanner}
        />
        <div className={styles.page404Container}>
          <div className={styles.page404Content}>
            <div>
              <Title type="h4Title" theme={process.env.REACT_APP_THEME}>
                {'Oops, this wasn\'t meant to happen.'}
              </Title>
              <Paragraph>
                Sorry for any inconvenience.
              </Paragraph>
              <div className={styles.errorInterComWrapper}>
                <IntercomChat />
              </div>
              <Button type="link" url="/" theme={process.env.REACT_APP_THEME}>
                Back to home
              </Button>
            </div>
            <div>
              <img className={styles.sadFaceError} src={`${ASSETS_URL}/assets/images/illustrations/oops.gif`} alt="sad face error" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
