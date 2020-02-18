import fetch from 'node-fetch';
import errorHandler from '../../utils/errorHandler';

const AIME_FRIENDS_LIST = '30964260b5';

module.exports = (req, res) => {
  const body = JSON.stringify({
    email_address: req.query.email,
    status: 'subscribed',
  });
  fetch(`${process.env.REACT_APP_MAILCHIMP_API}/lists/${AIME_FRIENDS_LIST}/members`, {
    method: 'POST',
    headers: {
      Authorization: `apikey ${process.env.REACT_APP_MAILCHIMP_KEY}`,
    },
    body,
  })
    .then((response) => response.json())
    .then((data) => res.send(data))
    .catch((err) => errorHandler(err, { message: err.message }));
};
