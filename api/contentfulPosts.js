import bugsnagClient from '../utils/bugsnag';

const contentful = require('contentful');

// since the story grid is either 1-column, 2-columns or 3-columns,
// let's use multiples of 6
const STORIES_PER_PAGE = 18;

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

const getStoryPosts = (categories, page = 0, perPage = STORIES_PER_PAGE) => client
  .getEntries({
    limit: perPage,
    content_type: process.env.REACT_APP_CONTENTFUL_CONTENT_TYPE_STORIES,
    include: 2,
    'fields.contentTag.sys.contentType.sys.id': 'contentTag',
    'fields.contentTag.fields.name': CONTENT_TAGS.story,
    'fields.postCategories[in]': categories.join(','),
    skip: perPage * page,
    order: '-fields.publishDate',
  });

const getPosts = (contentTag) => client.getEntries({
  content_type: process.env.REACT_APP_CONTENTFUL_CONTENT_TYPE_STORIES,
  include: 2,
  'fields.contentTag.sys.contentType.sys.id': 'contentTag',
  'fields.contentTag.fields.name': contentTag,
  order: '-fields.publishDate',
}).then((response) => response.items).catch((e) => bugsnagClient.notify(e));

export const getStoryBySlug = (slug) => client.getEntries({
  content_type: process.env.REACT_APP_CONTENTFUL_CONTENT_TYPE_STORIES,
  include: 2,
  'fields.contentTag.sys.contentType.sys.id': 'contentTag',
  'fields.contentTag.fields.name': CONTENT_TAGS.story,
  'fields.slug': slug,
}).then((response) => response.items).catch((e) => bugsnagClient.notify(e));

export const getTerms = () => getPosts(CONTENT_TAGS.terms);
export const getReports = () => getPosts(CONTENT_TAGS.report);

export const getStories = (categories, page) => getStoryPosts(categories, page).then(
  (response) => ({ stories: response.items, total: response.total }),
).catch((e) => bugsnagClient.notify(e));

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
