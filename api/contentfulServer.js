const contentful = require('contentful');
// const bugsnagClient = require('../utils/bugsnag');

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY,
  entry_id: process.env.REACT_APP_CONTENTFUL_API_ENVIRONMENT === 'staging'
    ? process.env.REACT_APP_CONTENTFUL_ENTRY_KEY_STORIES
    : process.env.REACT_APP_CONTENTFUL_ENTRY_KEY_REDIRECTS,
  environment: process.env.REACT_APP_CONTENTFUL_API_ENVIRONMENT === 'staging'
    ? process.env.REACT_APP_CONTENTFUL_API_ENVIRONMENT
    : 'master',
});

module.exports = () => (
  client
    .getEntries({
      content_type: process.env.REACT_APP_CONTENTFUL_API_ENVIRONMENT === 'staging'
        ? process.env.REACT_APP_CONTENTFUL_CONTENT_TYPE_STORIES
        : process.env.REACT_APP_CONTENTFUL_CONTENT_TYPE_REDIRECTS,
      include: 2,
    })
    .then((response) => response.items)
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
      // bugsnagClient.notify(
      //   new Error(`There was an issue fetching content from Contentful ${error}`),
      //   { context: error }
      // );
    })
);
