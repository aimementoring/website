const contentful = require('contentful');
// const bugsnagClient = require('../utils/bugsnag');

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  entry_id: process.env.REACT_APP_CONTENTFUL_ENTRY_KEY,
  accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY,
  environment: 'staging',
});

module.exports = () => (
  client
    .getEntries({
      content_type: process.env.REACT_APP_CONTENTFUL_CONTENT_TYPE,
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
