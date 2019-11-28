require('dotenv').config();
const cacheableResponse = require('cacheable-response');
const express = require('express');
const next = require('next');
const compression = require('compression');
// const fetchContentfulEntries = require('./api/contentfulRedirectsServer');

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

  /*
    fetchContentfulEntries().then((response = []) => {
      response.forEach((url) => {
        server.get(url.fields.sourceUrl, (_req, res, nextCall) => {
          res.redirect(url.fields.redirectType, url.fields.destinationUrl);
          nextCall();
        });
      });
    });
  */

  server.get('/', (req, res) => ssrCache({ req, res, pagePath: '/' }));

  // Positions
  server.get('/:country/positions', (req, res) => {
    const pagePath = '/positions';
    const queryParams = { country: req.params.country };
    return ssrCache({
      req, res, pagePath, queryParams,
    });
  });

  // Positions
  server.get('/positions/:positionId/:jobCategory', (req, res) => {
    const pagePath = '/positionsEntry';
    const queryParams = {
      positionId: req.params.positionId,
      jobCategory: req.params.jobCategory,
    };
    return ssrCache({
      req, res, pagePath, queryParams,
    });
  });

  // Positions
  server.get('/:country/positions/:id/:jobCategory', (req, res) => {
    const pagePath = '/positionsEntry';
    const queryParams = {
      id: req.params.id,
      jobCategory: req.params.jobCategory,
      country: req.params.country,
    };
    return ssrCache({
      req, res, pagePath, queryParams,
    });
  });

  // Story
  server.get('/story/:storySlug', (req, res) => {
    const pagePath = '/story';
    const queryParams = {
      storySlug: req.params.storySlug,
    };
    return ssrCache({
      req, res, pagePath, queryParams,
    });
  });

  // Story
  server.get('/blog/:storySlug', (req, res) => {
    const pagePath = '/story';
    const queryParams = { storySlug: req.params.storySlug };
    return ssrCache({
      req, res, pagePath, queryParams,
    });
  });

  // StoryTwo
  server.get('/storyTwo/:slug', (req, res) => {
    const pagePath = '/storyTwo';
    const queryParams = {
      slug: req.params.slug,
    };
    return ssrCache({
      req, res, pagePath, queryParams,
    });
  });

  // Products
  server.get('/products/:productId', (req, res) => {
    const pagePath = '/theMentorProducts';
    const queryParams = { productId: req.params.productId };
    return ssrCache({
      req, res, pagePath, queryParams,
    });
  });

  // BeAMentor
  server.get('/be-a-mentor/:universityId', (req, res) => {
    const pagePath = '/beAMentor';
    const queryParams = { universityId: req.params.universityId };
    return ssrCache({
      req, res, pagePath, queryParams,
    });
  });

  // EOI
  server.get('/eoi/:table?', (req, res) => {
    const pagePath = '/dynamicEOI';
    const queryParams = { table: req.params.table || '' };
    return ssrCache({
      req, res, pagePath, queryParams,
    });
  });

  server.get('/eoi', (req, res) => {
    const pagePath = '/dynamicEOI';
    const queryParams = { table: req.params.table || '' };
    return ssrCache({
      req, res, pagePath, queryParams,
    });
  });

  /**
   * Pages rename URL
   */

  // Going Global
  server.get('/going-global', (req, res) => {
    const pagePath = '/goingGlobal';
    const queryParams = {};
    return ssrCache({
      req, res, pagePath, queryParams,
    });
  });

  // Be a mentor
  server.get('/be-a-mentor', (req, res) => {
    const pagePath = '/beAMentor';
    const queryParams = {};
    return ssrCache({
      req, res, pagePath, queryParams,
    });
  });

  // Be a friend
  server.get('/be-a-friend', (req, res) => {
    const pagePath = '/beAFriend';
    const queryParams = {};
    return ssrCache({
      req, res, pagePath, queryParams,
    });
  });

  // Terms of service
  server.get('/terms-of-service', (req, res) => {
    const pagePath = '/termsAndConditions';
    const queryParams = {};
    return ssrCache({
      req, res, pagePath, queryParams,
    });
  });

  // Global letter
  server.get('/global-letter', (req, res) => {
    const pagePath = '/globalLetter';
    const queryParams = {};
    return ssrCache({
      req, res, pagePath, queryParams,
    });
  });

  // Annual report 2016
  server.get('/reports/2016-annual-story', (req, res) => {
    const pagePath = '/annualReport2016';
    const queryParams = {};
    return ssrCache({
      req, res, pagePath, queryParams,
    });
  });

  // Case studies
  server.get('/case-studies', (req, res) => {
    const pagePath = '/caseStudies';
    const queryParams = {};
    return ssrCache({
      req, res, pagePath, queryParams,
    });
  });

  // Know AIME
  server.get('/know-aime', (req, res) => {
    const pagePath = '/knowAime';
    const queryParams = {};
    return ssrCache({
      req, res, pagePath, queryParams,
    });
  });

  // Jack Manning Bancroft
  server.get('/jack-manning-bancroft', (req, res) => {
    const pagePath = '/founder';
    const queryParams = {};
    return ssrCache({
      req, res, pagePath, queryParams,
    });
  });

  // The mentor
  server.get('/the-mentor', (req, res) => {
    const pagePath = '/theMentor';
    const queryParams = {};
    return ssrCache({
      req, res, pagePath, queryParams,
    });
  });

  // Hooded Scholar
  server.get('/hooded-scholar', (req, res) => {
    const pagePath = '/hoodedScholar';
    const queryParams = {};
    return ssrCache({
      req, res, pagePath, queryParams,
    });
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`);
  });
});
