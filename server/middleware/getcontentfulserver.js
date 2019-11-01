import * as contentful from "contentful";
import bugsnagClient from '../../src/utils/bugsnag';

const {
  REACT_APP_CONTENTFUL_SPACE_ID,
  REACT_APP_CONTENTFUL_CONTENT_TYPE,
  REACT_APP_CONTENTFUL_ENTRY_KEY,
  REACT_APP_CONTENTFUL_API_KEY
} = process.env;

const client = contentful.createClient({
  space: REACT_APP_CONTENTFUL_SPACE_ID,
  entry_id: REACT_APP_CONTENTFUL_ENTRY_KEY,
  accessToken: REACT_APP_CONTENTFUL_API_KEY
});

export const fetchContentfulEntries = () => {
  return client
    .getEntries({
      content_type: REACT_APP_CONTENTFUL_CONTENT_TYPE,
      include: 2
    })
    .then(response => response.items)
    .catch(error => {
      bugsnagClient.notify(
        new Error(`There was an issue fetching content from Contentful ${error}`),
        { context: error }
      );
    });
};
