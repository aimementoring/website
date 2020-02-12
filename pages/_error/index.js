import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Router from 'next/router';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import bugsnagClient from '../../utils/bugsnag';
import './index.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const ErrorPage = () => {
  useEffect(() => {
    bugsnagClient.notify(new Error('Page not found (404)'), {
      beforeSend: (report) => {
        /* eslint no-param-reassign: "off" */
        report.severity = 'info';
        report.groupingHash = Router.pathname;
        if (typeof window !== 'undefined') {
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
      <div id="404page" className="full-width-wrap">
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
                Sorry for any inconvenience.
              </Paragraph>
              <Button type="link" url="/" theme={process.env.REACT_APP_THEME}>
                Back to home
              </Button>
            </div>
            <div>
              <img className="w85 p2 xs-hide sm-hide" src={`${ASSETS_URL}/assets/images/404-dancing.gif`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
