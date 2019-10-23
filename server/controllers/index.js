import express from 'express';

import serverRenderer from '../middleware/renderer';
import configureStore from '../../src/store/configureStore';
import { setAsyncMessage } from '../../src/store/appReducer';
import { getAllRedirectUrlEntries } from '../middleware/getcontentfulserver';

const router = express.Router();
const path = require('path');

const actionIndex = (req, res, next) => {
  const store = configureStore();
  
  store.dispatch(setAsyncMessage('Hi, I\'m from server!'))
    .then(() => {
      serverRenderer(store)(req, res, next);
    });
};

getAllRedirectUrlEntries().then(response => { 
  response.forEach((url) => {
    router.get(url.fields.sourceUrl, (req, res, next) => {
      res.redirect(url.fields.redirectType, url.fields.destinationUrl);
      next();
    });
  }); 
});

// root (/) should always serve our server rendered page
router.use('^/$', actionIndex);

// other static resources should just be served as they are
router.use(express.static(
  path.resolve(__dirname, '..', '..', 'build'),
  { maxAge: '30d' },
));

// any other route should be handled by react-router, so serve the index page
// router.use('*', actionIndex);

export default router;
