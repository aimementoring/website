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
      cssModules: true,
      sassLoaderOptions: {},
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]',
      },
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
        REACT_APP_CANONICAL_HOST: process.env.REACT_APP_CANONICAL_HOST,
        REACT_APP_INTERCOM_APP_ID: process.env.REACT_APP_INTERCOM_APP_ID,
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
        AWS_DEFAULT_REGION: process.env.AWS_DEFAULT_REGION,
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
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
