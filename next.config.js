require('dotenv').config();
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withOffline = require('next-offline');

module.exports = withOffline(
  withCSS(
    withSass({
      webpack(config) {
        return config;
      },
      exportTrailingSlash: false,
      cssModules: true,
      sassLoaderOptions: {},
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]',
        // localIdentName: '[name]__[local]___[hash:base64:5]',
      },
      // https://nextjs.org/docs#cdn-support-with-asset-prefix
      // assetPrefix: process.env.REACT_APP_HOST !== 'next'
      //     && (process.env.REACT_APP_HOST_ENV === 'production'
      //  || process.env.REACT_APP_HOST_ENV === 'staging')
      //   ? process.env.REACT_APP_ASSETS_URL
      //   : '',
      env: {
        REACT_APP_ASSETS_URL: process.env.REACT_APP_ASSETS_URL,
        REACT_APP_CRAFT_API: process.env.REACT_APP_CRAFT_API,
        PORT: process.env.PORT,
        REACT_APP_BUGSNAG_KEY: process.env.REACT_APP_BUGSNAG_KEY,
        REACT_APP_HOST_ENV: process.env.REACT_APP_HOST_ENV,
        REACT_APP_AIRTABLE_STAFF_RECRUITMENT_BASE:
          process.env.REACT_APP_AIRTABLE_STAFF_RECRUITMENT_BASE,
        REACT_APP_AIRTABLE_API_KEY: process.env.REACT_APP_AIRTABLE_API_KEY,
        REACT_APP_PRO_IP_KEY: process.env.REACT_APP_PRO_IP_KEY,
        REACT_APP_DONATE_USERNAME: process.env.REACT_APP_DONATE_USERNAME,
        REACT_APP_DONATE_PASSWORD: process.env.REACT_APP_DONATE_PASSWORD,
        REACT_APP_DONATE_ORGANISATION_UUID:
          process.env.REACT_APP_DONATE_ORGANISATION_UUID,
        REACT_APP_PORTAL_API: process.env.REACT_APP_PORTAL_API,
        REACT_APP_THEME: process.env.REACT_APP_THEME,
        REACT_APP_INTERCOM_APP_ID: process.env.REACT_APP_INTERCOM_APP_ID,
        REACT_APP_PITCH_YOURSELF_TO_AIME_ID: process.env.REACT_APP_PITCH_YOURSELF_TO_AIME_ID,
        REACT_APP_CONTENTFUL_SPACE_ID: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
        REACT_APP_CONTENTFUL_API_ENVIRONMENT: process.env.REACT_APP_CONTENTFUL_API_ENVIRONMENT,
        REACT_APP_CONTENTFUL_API_STAGING_KEY: process.env.REACT_APP_CONTENTFUL_API_STAGING_KEY,
        REACT_APP_CONTENTFUL_API_KEY: process.env.REACT_APP_CONTENTFUL_API_KEY,
        REACT_APP_CONTENTFUL_CONTENT_TYPE_STORIES:
          process.env.REACT_APP_CONTENTFUL_CONTENT_TYPE_STORIES,
        REACT_APP_CONTENTFUL_ENTRY_KEY_STORIES: process.env.REACT_APP_CONTENTFUL_ENTRY_KEY_STORIES,
        REACT_APP_CONTENTFUL_CONTENT_TYPE_REDIRECTS:
          process.env.REACT_APP_CONTENTFUL_CONTENT_TYPE_REDIRECTS,
        REACT_APP_CONTENTFUL_ENTRY_KEY_REDIRECTS:
          process.env.REACT_APP_CONTENTFUL_ENTRY_KEY_REDIRECTS,
        REACT_APP_CONTENTFUL_MANAGEMENT_AUTHORIZATION_TOKEN:
          process.env.REACT_APP_CONTENTFUL_MANAGEMENT_AUTHORIZATION_TOKEN,
        REACT_APP_SHOPIFY_STORE_FRONT_ACCESS_TOKEN:
          process.env.REACT_APP_SHOPIFY_STORE_FRONT_ACCESS_TOKEN,
        REACT_APP_SHOPIFY_DOMAIN: process.env.REACT_APP_SHOPIFY_DOMAIN,
        REACT_APP_GOOGLE_TAG_MANAGER: process.env.REACT_APP_GOOGLE_TAG_MANAGER,
      },
      target: 'serverless',
      transformManifest: (manifest) => ['/'].concat(manifest),
      // generateInDevMode: true,
      // workboxOpts: {
      //   swDest: join(__dirname, 'static/service-worker.js'),
      //   runtimeCaching: [
      //     {
      //       urlPattern: /^https?.*/,
      //       handler: 'NetworkFirst',
      //       options: {
      //         cacheName: 'https-calls',
      //         networkTimeoutSeconds: 15,
      //         expiration: {
      //           maxEntries: 150,
      //           maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
      //         },
      //         cacheableResponse: {
      //           statuses: [0, 200],
      //         },
      //       },
      //     },
      //   ],
      // },
    }),
  ),
);
