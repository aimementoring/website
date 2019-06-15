import express from 'express';
import Loadable from 'react-loadable';

import indexController from './controllers/index';

const PORT = 3000;
const app = express();

app.use(indexController);

// start the app
Loadable.preloadAll().then(() => {
  app.listen(PORT, (error) => {
    if (error) return console.log('something bad happened', error);
    console.log(`listening on ${PORT} ...`);
  });
});
