import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { getAssetsBaseUrl } from '../../services/craftAPI';
import bugsnagClient from '../../utils/bugsnag';
import './index.scss';

class Page404 extends PureComponent {
  state = {
    assetsUrl: '',
  }

  componentDidMount() {
    bugsnagClient.notify(new Error('Page not found (404)'), {
      beforeSend: (report) => {
        report.severity = 'info';
        report.groupingHash = this.props.location.pathname;
        report.metaData = {
          request: { referer: document.referrer },
        }
      },
    });
    this.setState({ assetsUrl: getAssetsBaseUrl() });
  }

  render() {
    const { assetsUrl } = this.state;
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
                      OH<br />
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
                  Oops, this wasn't meant to happen.
                </p>
                <p className="f-14 light pt2">
                  Sorry for any inconvenience.
                </p>
                <Link to="/" className="basic-btn bold bg-brand-primary mt3">Back to home</Link>
              </div>
              <div>
                <img className="w85 p2 xs-hide sm-hide" src={`${assetsUrl}/assets/images/404-dancing.gif`} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Page404.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default Page404;
