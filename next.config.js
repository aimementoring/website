require('dotenv').config();
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(withSass({
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
    REACT_APP_PORTAL_API: process.env.REACT_APP_PORTAL_API,
  },
}));
