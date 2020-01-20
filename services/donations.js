import { setOnStorage, getFromStorage } from '../utils/localStorage';
import request from '../utils/request';

const API = 'https://api.raisely.com/v3';

const LOGIN_ACCESS = {
  username: process.env.REACT_APP_DONATE_USERNAME,
  password: process.env.REACT_APP_DONATE_PASSWORD,
  organisationUuid: process.env.REACT_APP_DONATE_ORGANISATION_UUID,
};

export const MAIN_CAMPAIGNS = {
  'raisely-pk-055e06ff62d772e4212f2a046b6d43fc': 'aimedonations',
  '589a8740-c07c-11e8-b76d-f7315e307f1a': 'aimeus',
  'raisely-pk-a6bad557c70f8f5edffb23e6df1f3b17': 'wannachangetheworld',
  'eee35650-f4df-11e7-a8e7-798988c4a5a9': 'aimeforsudanesekids',
  // 'e4f96150-62c8-11e8-a2d1-8d9f19ad91b5': 'aimegeneraldonationstest',
  // 'raisely-pk-e3dc5300af0f3fbe571aa9aa46702570': 'thementor',
  // '59ecfd60-d4a7-11e7-92bf-4b3a42fa5335': 'aimehottest-100',
};

export const getRaiselyToken = async () => {
  const raiselyToken = getFromStorage('raisely_token');

  return new Promise((resolve, reject) => {
    if (raiselyToken) {
      resolve(raiselyToken);
    } else {
      request(`${API}/login`, {
        method: 'POST',
        body: LOGIN_ACCESS,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
        },
      })
        .then((jsonData) => {
          const { token } = jsonData;
          setOnStorage('raisely_token', token);
          resolve(token);
        })
        .catch((error) => {
          /* eslint no-param-reassign: "off" */
          error.message = `Getting Raisely token: ${error.message}`;
          reject(error);
          /* eslint no-param-reassign: "error" */
        });
    }
  });
};

export async function getActiveCampaigns() {
  const url = `${API}/campaigns?status=ACTIVE&mode=LIVE`;

  return new Promise((resolve, reject) => {
    getRaiselyToken().then((token) => {
      request(url, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    }).catch((error) => reject(error));
  });
}

export const getCampaignDonations = async (campaign) => {
  const url = `${API}/donations?campaign=${campaign}`;

  return new Promise((resolve, reject) => {
    getRaiselyToken().then((token) => {
      request(url, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  });
};
