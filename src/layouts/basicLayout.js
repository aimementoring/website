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

class BasicLayout extends Component {
  // Starts hack fix to avoid double rendering
  // https://github.com/facebook/react/issues/8017#issuecomment-256351955
  constructor(props) {
    super(props);

    this.state = {
      seo: {},
      hasMounted: false,
    };
    this.addSeoAndRedirects();
  }

  componentDidMount() {
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

  render() {
    const { seo } = this.state;
    const { location, history } = this.props;

    return (
      <div>
        <ErrorBoundary>
          <Header location={location} history={history} />
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
          <Footer location={location} />
          <Logos />
          <div id="aime-parent-video-box" />
        </ErrorBoundary>
      </div>
    );
  }
}

export default withRouter(BasicLayout);
