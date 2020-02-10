require('dotenv').config();
const cacheableResponse = require('cacheable-response');
const express = require('express');
const next = require('next');
const compression = require('compression');
const fetchContentfulEntries = require('./api/contentfulRedirects');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

const ssrCache = cacheableResponse({
  ttl: 1000 * 60 * 60, // 1hour
  get: async ({
    req, res, pagePath, queryParams,
  }) => ({
    data: await app.renderToHTML(req, res, pagePath, queryParams),
  }),
  send: ({ data, res }) => res.send(data),
});

app.prepare().then(() => {
  const server = express();
  server.use(compression());

  // Positions
  server.get('/:countryId/positions', (req, res) => {
    const pagePath = '/positions';
    const queryParams = { countryId: req.params.countryId };
    return ssrCache({
      req, res, pagePath, queryParams,
    });
  });

  // Positions
  server.get('/:countryId/positions/:id/:jobCategory', (req, res) => {
    const pagePath = '/positionsEntry';
    const queryParams = {
      id: req.params.id,
      jobCategory: req.params.jobCategory,
      countryId: req.params.countryId,
    };
    return ssrCache({
      req, res, pagePath, queryParams,
    });
  });

  fetchContentfulEntries().then((response = []) => {
    for (let i = 0; i < response.length; i += 1) {
      const url = response[i];
      server.get(url.fields.sourceUrl, (_req, res) => {
        res.redirect(url.fields.redirectType, url.fields.destinationUrl);
      });
    }

    server.get('*', (req, res) => {
      if (req.path.substr(-1) === '/' && req.path.length > 1) {
        const query = req.url.slice(req.path.length);
        res.redirect(301, `${req.path.slice(0, -1)}${query}`);
      }
      if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.REACT_APP_HOST_ENV !== 'development') {
        res.redirect(301, `https://${req.headers.host}${req.url}`);
      }
      return handle(req, res);
    });

    server.get('/', (req, res) => {
      ssrCache({ req, res, pagePath: '/' });
    });

    server.listen(port, (err) => {
      if (err) throw err;

      // eslint-disable-next-line no-console
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
});
