import React from 'react';
import App from 'next/app';
import { withRouter } from 'next/router';
import TagManager from 'react-gtm-module';
import {
  DefaultSeo, BreadcrumbJsonLd, ArticleJsonLd, BlogJsonLd,
} from 'next-seo';
import SeoComponent from '../components/seoComponent';
import { GLOBAL_TAGS } from '../constants/seoTags';

const TYPE_MAPPING = {
  BreadcrumbList: BreadcrumbJsonLd,
  Article: ArticleJsonLd,
  WebSite: BlogJsonLd,
};

const { jsonLd, ...defaultSeoProps } = GLOBAL_TAGS;

const tagManagerArgs = {
  gtmId: process.env.REACT_APP_GOOGLE_TAG_MANAGER,
  // auth: '',// Optional, see GTM => Admin => Environments, useful when using staging environment
  // preview: 'env-2' // Optional
};

class MyApp extends App {
  componentDidMount() {
    TagManager.initialize(tagManagerArgs);
  }
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <DefaultSeo {...defaultSeoProps} />
        <SeoComponent page={router.asPath} />
        {jsonLd && jsonLd.length > 0 && jsonLd.map(({ type, name, ...props }) => {
          if (type in TYPE_MAPPING) {
            const JsonLdComponent = TYPE_MAPPING[type];
            return <JsonLdComponent {...props} name={name} key={`${type}_${name}`} />;
          }
          return null;
        })}
        <Component {...pageProps} />
      </>
    );
  }
}

export default withRouter(MyApp);
