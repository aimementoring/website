import axios from 'axios';
import { getFromStorage } from '../utils/localStorage';
import checkStatus from '../utils/fetchValidations';
import handleError from '../utils/errorHandler';

const API = process.env.REACT_APP_CRAFT_API;

export const getAssetsBaseUrl = () => process.env.REACT_APP_ASSETS_URL;

export const getSeoTags = async (page, site = 1) => {
  if (page || page === '') {
    const url = `${API}/actions/seomatic/meta-container/all-meta-containers/?uri=${page}&siteId=${site}`;
    return axios(url)
      .then(checkStatus)
      .then((response) => (response.status !== 204 ? response.data : {}))
      .catch((error) => handleError(error, `${error} URL: ${url}`));
  }
  return null;
};

export const getEntries = async (section) => {
  const loaded = getFromStorage(`${section}_entry`);
  return new Promise((resolve, reject) => {
    if (loaded) {
      resolve(loaded);
    } else {
      const url = `${API}/api/${section}`;
      axios(url)
        .then(checkStatus)
        .then((response) => (response.status !== 204 ? response.data : {}))
        .then((response) => resolve(response))
        .catch((error) => reject(handleError(error, `${error} URL: ${url}`)));
    }
  });
};

export async function getGlobalVariables() {
  const url = `${API}/api/global`;
  return axios(url)
    .then(checkStatus)
    .then((response) => (response.status !== 204 ? response.data : {}))
    .catch((error) => handleError(error, `${error} URL: ${url}`));
}

export default getEntries;
