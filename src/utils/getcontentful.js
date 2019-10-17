import * as contentful from "contentful";

const { REACT_APP_CONTENTFUL_SPACE_ID, REACT_APP_CONTENTFUL_CONTENT_TYPE, REACT_APP_CONTENTFUL_ENTRY_KEY, REACT_APP_CONTENTFUL_API_KEY } = process.env;

const client = contentful.createClient({
  space: REACT_APP_CONTENTFUL_SPACE_ID,
  entry_id: REACT_APP_CONTENTFUL_ENTRY_KEY,
  accessToken: REACT_APP_CONTENTFUL_API_KEY,
});

const fetchContentfulEntries = async () => {
  try {
    const response = await client
      .getEntries({
        content_type: REACT_APP_CONTENTFUL_CONTENT_TYPE,
        include: 2
      });
    return response.items;
  }
  catch (error) {
    alert('There was an issue fetching your content from Contentful ', error);
  }
};

export const getAllRedirectUrlEntries = async () => {
  let response = await fetchContentfulEntries();
  const data = response;
  let redirectEntries;
  data.map((entires) => {
    return redirectEntries = entires.fields;
  });
  return redirectEntries;
};