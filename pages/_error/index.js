import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Router from 'next/router';
import Anchor from '../../components/common/link';
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
              <p className="f-30 feature-font-family regular">
                {'Oops, this wasn\'t meant to happen.'}
              </p>
              <p className="f-14 light pt2">
                Sorry for any inconvenience.
              </p>
              <Anchor to="/" className="basic-btn bold bg-brand-primary mt3">Back to home</Anchor>
            </div>
            <div>
              <img className="w85 p2 xs-hide sm-hide" src={`${ASSETS_URL}/assets/images/illustrations/oops.gif`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
