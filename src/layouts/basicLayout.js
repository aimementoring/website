import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import Helmet from 'react-helmet';

import ScrollToTop from '../components/scrollToTop';
import ErrorBoundary from '../components/errorBoundary';
import Header from '../components/header';
import Footer from '../components/footer';
import Logos from '../components/logos';

import routes from '../common/routes';
import Page404 from '../pages/page404';
import { getSeoTags } from '../services/craftAPI';

const APP_ID = process.env.REACT_APP_INTERCOM_APP_ID;

class BasicLayout extends Component {
  // Starts hack fix to avoid double rendering
  // https://github.com/facebook/react/issues/8017#issuecomment-256351955
  constructor(props) {
    super(props);

    this.state = {
      seo: {},
      hasMounted: false,
      showIntercom: false,
    };
    this.addSeoAndRedirects();
  }

  componentDidMount() {
    this.intercomChat();
    this.setState({ hasMounted: true });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) this.addSeoAndRedirects();
  }

  addSeoAndRedirects = () => {
    const { location: { pathname } } = this.props;
    const seoPath = (pathname.split('/')[1].length > 1) ? pathname : '';

    // The second parameter is because the site country type is global (1)
    // we don't have anymore specific pages for specific countries. If we have,
    // in a future we should call getAvailableSites function from services/craftAPI
    getSeoTags(seoPath, 1).then(seo => this.setState({ seo }));
  }

  intercomChat = () => {
    window.intercomSettings = {
      app_id: APP_ID,
      // change 'hide_default_launcher: true' if you want to remove the round chat icon in bottom right of screen
      // then go to line 106 and uncomment.
      hide_default_launcher: false,
      /*Styles*/
      alignment: "right",
      horizontal_padding: 20,
      vertical_padding: 20,
      background_color: "rgba(255,255,255, 0.7)"
      /*
        user information could be usful for portal
        name: "Jane Doe", // Full name
        email: "customer@example.com", // Email address
        created_at: "1312182000" // Signup date as a Unix timestamp
      */
    };
    (() => {
      var w = window;
      var ic = w.Intercom;
      if (typeof ic === "function") {
        ic("reattach_activator");
        ic("update", w.intercomSettings);
      } else {
        var d = document;
        var i = function() {
          i.c(arguments);
        };
        i.q = [];
        i.c = function(args) {
          i.q.push(args);
        };
        w.Intercom = i;
        var l = function() {
          var s = d.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://widget.intercom.io/widget/" + APP_ID;
          var x = d.getElementsByTagName("script")[0];
          x.parentNode.insertBefore(s, x);
        };
        if (document.readyState === "complete") {
          l();
        } else if (w.attachEvent) {
          w.attachEvent("onload", l);
        } else {
          w.addEventListener("load", l, false);
        }
      }
    })();
  }

  handleShowIntercom = () => {
    window.Intercom("show");
    // window.Intercom("update", { hide_default_launcher: false });
  }

  render() {
    const { seo } = this.state;
    const { location, history } = this.props;

    return (
      <div>
        <ErrorBoundary>
          <Header location={location} history={history} handleShowIntercom={this.handleShowIntercom} />
          <main role="main">
            <div>
              {seo &&
                <Helmet>{Object.keys(seo).map(tagName => ReactHtmlParser(seo[tagName]))}</Helmet>
              }
            </div>
            <ScrollToTop>
              <Switch>
                {routes.map((item, key) => (
                  <Route
                    {...item}
                    path={item.path}
                    key={key}
                    exact={item.exact}
                  />
                ))}
                <Route component={Page404} />
              </Switch>
            </ScrollToTop>
          </main>
          <Footer location={location} handleShowIntercom={this.handleShowIntercom} />
          <Logos />
          <div id="aime-parent-video-box" />
        </ErrorBoundary>
      </div>
    );
  }
}

export default withRouter(BasicLayout);
