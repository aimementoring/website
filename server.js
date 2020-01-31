require('dotenv').config();
const path = require('path');
const cacheableResponse = require('cacheable-response');
const express = require('express');
const ssl = require('express-ssl');
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
  server.use(ssl());
  server.use(compression());

  server.get('/', (req, res) => {
    ssrCache({ req, res, pagePath: '/' });
  });

  // robots.txt
  server.get('/robots.txt', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/robots.txt'));
  });

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
      if (req.headers.host.indexOf(`localhost:${port}`) === -1
        && req.headers.host.indexOf(`127.0.0.1:${port}`) === -1
        && req.headers['x-forwarded-proto'] !== 'https') {
        res.redirect(`https://${req.headers.host}${req.url}`);
      }
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
});
