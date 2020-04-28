require('dotenv').config();
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withOffline = require('next-offline');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const DAY_SECONDS = 24 * 60 * 60;

function getCanonicalUrl() {
  if (process.env.REACT_APP_HOST_ENV === 'production') {
    return 'https://aimementoring.com/';
  }
  return process.env.REACT_APP_HOST_ENV === 'staging'
    ? 'https://staging.aimementoring.com/'
    : `http://localhost:${process.env.PORT}`;
}

module.exports = withBundleAnalyzer(
  withOffline(
    withCSS(
      withSass({
        webpack: (config) => {
          const originalEntry = config.entry;
          // eslint-disable-next-line no-param-reassign
          config.entry = async () => {
            const entries = await originalEntry();
            if (
              entries['main.js']
                && !entries['main.js'].includes('./client/polyfills.js')
            ) {
              entries['main.js'].unshift('./client/polyfills.js');
            }
            return entries;
          };
          return config;
        },
        poweredByHeader: false,
        exportTrailingSlash: false,
        cssModules: true,
        sassLoaderOptions: {},
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: '[local]',
          // localIdentName: '[name]__[local]___[hash:base64:5]',
        },
        // https://nextjs.org/docs#cdn-support-with-asset-prefix
        assetPrefix: process.env.REACT_APP_HOST !== 'next'
            && (['production', 'staging'].indexOf(process.env.REACT_APP_HOST_ENV) > -1)
          ? process.env.REACT_APP_ASSETS_URL
          : '',
        env: {
          REACT_APP_ASSETS_URL: process.env.REACT_APP_ASSETS_URL,
          REACT_APP_CANONICAL: getCanonicalUrl(),
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
          REACT_APP_CONTENTFUL_ENTRY_KEY_STORIES:
            process.env.REACT_APP_CONTENTFUL_ENTRY_KEY_STORIES,
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
          REACT_APP_MAILCHIMP_KEY: process.env.REACT_APP_MAILCHIMP_KEY,
          REACT_APP_MAILCHIMP_API: process.env.REACT_APP_MAILCHIMP_API,
          REACT_APP_FILE_UPLOADER_API_KEY: process.env.REACT_APP_FILE_UPLOADER_API_KEY,
          NEXTJS_TARGET: process.env.NEXTJS_TARGET,
        },
        target: process.env.NEXTJS_TARGET || 'serverless',
        transformManifest: (manifest) => ['/'].concat(manifest),
        // Service-worker (Offline mode)
        generateInDevMode: false,
        generateSw: true,
        workboxOpts: {
          runtimeCaching: [
            {
              urlPattern: /\.(?:ttf|woff2|otf|woff|eot)$/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'fonts',
                expiration: {
                  maxEntries: 30,
                  maxAgeSeconds: 30 * DAY_SECONDS,
                },
              },
            },
            {
              urlPattern: /\.(?:png|gif|jpg|jpeg|svg)$/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'images',
                expiration: {
                  maxEntries: 150,
                  maxAgeSeconds: 30 * DAY_SECONDS,
                },
              },
            },
            {
              urlPattern: /\.(?:js|css)$/,
              handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'static-resources',
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 1 * DAY_SECONDS,
                },
              },
            },
            {
              urlPattern: /api/,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'apiCalls',
                cacheableResponse: {
                  statuses: [0, 200],
                  headers: {
                    'x-test': 'true',
                  },
                },
              },
            },
          ],
        },
      }),
    ),
  ),
);
