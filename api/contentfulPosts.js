const contentful = require('contentful');
// const bugsnagClient = require('../utils/bugsnag');

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY,
  entry_id: process.env.REACT_APP_CONTENTFUL_ENTRY_KEY_STORIES,
  environment: process.env.REACT_APP_CONTENTFUL_API_ENVIRONMENT,
});


const CONTENT_TAGS = {
  terms: 'terms',
  story: 'story',
  report: 'report',
};

const POST_CATEGORIES_FIELD_NAME = 'postCategories';

const getEntriesByContentTag = (contentTag) => client
  .getEntries({
    content_type: process.env.REACT_APP_CONTENTFUL_CONTENT_TYPE_STORIES,
    include: 2,
    'fields.contentTag.sys.contentType.sys.id': 'contentTag',
    'fields.contentTag.fields.name': contentTag,
  }).then((response) => response.items);

export const getTerms = () => getEntriesByContentTag(CONTENT_TAGS.terms);

export const getReports = () => getEntriesByContentTag(CONTENT_TAGS.report);

export const getStories = () => getEntriesByContentTag(CONTENT_TAGS.story);

export const getCategories = () => client
  .getContentType(process.env.REACT_APP_CONTENTFUL_CONTENT_TYPE_STORIES)
  .then((response) => {
    const postCategoriesField = response.fields.find((
      (field) => field.id === POST_CATEGORIES_FIELD_NAME));
    // DANGER! if we ever change the way we validate postCategories, this will break
    try {
      return postCategoriesField.items.validations[0].in;
    } catch {
      return [];
    }
  });
