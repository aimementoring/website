require('dotenv').config()
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  webpack(config, options) {
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
    REACT_APP_AIRTABLE_STAFF_RECRUITMENT_BASE: process.env.REACT_APP_AIRTABLE_STAFF_RECRUITMENT_BASE,
    REACT_APP_AIRTABLE_API_KEY: process.env.REACT_APP_AIRTABLE_API_KEY,
    REACT_APP_PRO_IP_KEY: process.env.REACT_APP_PRO_IP_KEY,
    REACT_APP_DONATE_USERNAME: process.env.REACT_APP_DONATE_USERNAME,
    REACT_APP_DONATE_PASSWORD: process.env.REACT_APP_DONATE_PASSWORD,
    REACT_APP_DONATE_ORGANISATION_UUID: process.env.REACT_APP_DONATE_ORGANISATION_UUID,
  }
})
