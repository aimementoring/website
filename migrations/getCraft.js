const axios = require('axios');

module.exports.getCraftEntries = () => {
  const url = 'https://aimeweb-backend-production.herokuapp.com/api/stories';
  return new Promise((resolve) => {
    axios(url)
      .then((response) => response.data)
      .then((response) => resolve(response))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error, `${error} URL: ${url}`));
  });
};
