import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

const bodyStyles = {
  margin: 0,
  padding: 0,
  fontFamily: '\'Open Sans\', sans-serif',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontSize: '16px',
};

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <link rel="home" href="/" />
          <link rel="apple-touch-icon" sizes="180x180" href="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/favicon/apple-touch-icon.png" />
          <link rel="icon" href="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/favicon/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="mask-icon" href="https://d2ylaz7bdw65jx.cloudfront.net/assets/images/favicon/safari-pinned-tab.svg" color="#9B00FF" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="preconnect" href="https://storage.googleapis.com" />
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="canonical" href={process.env.REACT_APP_CANONICAL} />
          <link rel="preconnect" href={process.env.REACT_APP_ASSETS_URL} />
          <meta name="msapplication-TileColor" content="#9B00FF" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body style={bodyStyles}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
