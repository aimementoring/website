import crossFetch from 'cross-fetch';
import { getFromStorage } from '../utils/localStorage';
import handleError from '../utils/errorHandler';

const API = process.env.REACT_APP_CRAFT_API;

export const getAssetsBaseUrl = () =>
  process.env.REACT_APP_HOST_ENV === 'production'
    ? 'https://d2ylaz7bdw65jx.cloudfront.net'
    : 'https://dbhff1axysj9i.cloudfront.net';

export const getSeoTags = async (page, site) => {
  if (page) {
    const url = `${API}/actions/seomatic/meta-container/all-meta-containers/?uri=${page}&siteId=${site}`;
    return crossFetch(url)
      .then(response => response.json())
      .then(response => response)
      .catch(error => handleError(error, `${error} URL: ${url}`));
  }
};

async function getEntries(section) {
  const loaded = getFromStorage(`${section}_entry`);
  return new Promise((resolve, reject) => {
    if (loaded) {
      resolve(loaded);
    } else {
      const url = `${API}/api/${section}`;
      return fetch(url)
        .then(response => response.json())
        .then(response => response || {})
        .then(response => resolve(response))
        .catch(error => reject(handleError(error, `${error} URL: ${url}`)));
    }
  });
}

export async function getGlobalVariables() {
  const url = `${API}/api/global`;
  return fetch(url)
    .then(response => response.json())
    .then(response => response)
    .catch(error => handleError(error, `${error} URL: ${url}`));
}

export default getEntries;
