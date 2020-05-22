/* eslint-disable no-console */
require('dotenv').config();
const fs = require('fs');
const prettier = require('prettier');
const sitemap = require('nextjs-sitemap-generator');
const { exec } = require('child_process');
const fetchContentfulEntries = require('../api/contentfulRedirects');

const AWS_ENVIRONMENTS = ['staging', 'production'];
const CONFIG_FILE = 'vercel.json';

async function goToRootFolder() {
  return new Promise((resolve, reject) => {
    exec('cd ..', (error, stdout, stderr) => {
      if (error) reject(error);
      if (stderr) console.info(stderr);
      resolve(stdout);
    });
  });
}

async function addRedirectsFromContentful() {
  return new Promise((resolve, reject) => {
    fetchContentfulEntries().then((response = []) => {
      const redirects = response.map((url) => ({
        src: url.fields.sourceUrl,
        dest: url.fields.destinationUrl || '/',
        status: url.fields.redirectType || 302,
      }));
      console.info(`Found ${redirects.length} redirects in Contentful.`);
      try {
        const configFile = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
        const newRoutes = [];
        for (let i = 0; i > redirects.length; i + 1) {
          const redirectForThisSrcExists = configFile.routes.find(
            ({ src }) => src === redirects[i].src,
          );
          console.log(redirects[i].src);
          if (!redirectForThisSrcExists) newRoutes.push(...redirects[i]);
        }
        configFile.routes.push(newRoutes);
        fs.writeFile(CONFIG_FILE, prettier.format(configFile, { parser: 'json-stringify' }), (e) => reject(e));
        console.info(`Added ${newRoutes.length} redirects to ${CONFIG_FILE}.`);
        resolve();
      } catch (fileError) {
        console.error(`Had trouble reading or writing the config ${CONFIG_FILE}: ${fileError}`);
        reject(fileError);
      }
    }).catch((contentfulError) => {
      console.error('Had trouble getting the redirects from Contentful: ', contentfulError);
      reject(contentfulError);
    });
  });
}

async function buildProject() {
  return new Promise((resolve, reject) => {
    exec('yarn build', (error, stdout, stderr) => {
      if (error) reject(error);
      if (stderr) console.info(stderr);
      resolve(stdout);
    });
  });
}

async function uploadToAWS(buildEnv) {
  const environment = buildEnv === 'staging' ? '-staging' : '';
  return new Promise((resolve, reject) => {
    exec(`aws s3 sync .next "s3://aimementoring${environment}/website/_next" --acl public-read --cache-control max-age=31557600,public --delete`, (error, stdout, stderr) => {
      if (error) reject(error);
      if (stderr) console.info(stderr);
      resolve(stdout);
    });
  });
}

async function runBuild() {
  const buildEnv = process.env.REACT_APP_HOST_ENV;
  const goesToAws = AWS_ENVIRONMENTS.indexOf(buildEnv) > -1;
  const totalActions = goesToAws ? 7 : 5;
  console.info('\x1b[32m%s\x1b[0m', `• 1 of ${totalActions} -> 🛠  BUILD PROCESS STARTED`);
  try {
    console.info('\x1b[32m%s\x1b[0m', `• 2 of ${totalActions} -> 📁 POSITIONING IN ROOT FOLDER`);
    await goToRootFolder();
    console.info('\x1b[32m%s\x1b[0m', `• 3 of ${totalActions} -> ♻️  ADDING REDIRECTS`);
    try {
      await addRedirectsFromContentful();
    } catch (error) {
      console.error('\x1b[31m%s\x1b[0m', 'error in adding redirects process:', error);
    }
    if (goesToAws) {
      try {
        console.info('\x1b[32m%s\x1b[0m', `• 4 of ${totalActions} -> 🗺 GENERATING SITEMAP`);
        sitemap({
          baseUrl: 'https://aimementoring.com',
          pagesDirectory: 'pages',
          targetDirectory: 'public/static/',
        });
      } catch (error) {
        console.error('\x1b[31m%s\x1b[0m', 'error in sitemap process:', error);
      }
    }
    try {
      console.info('\x1b[32m%s\x1b[0m', `• ${goesToAws ? 5 : 4} of ${totalActions} -> BUILDING PROJECT`);
      const buildStdout = await buildProject();
      console.log(buildStdout);
      console.log('\x1b[36m%s\x1b[0m', `ENVIRONMENT: ${buildEnv}`);
      // exec('cp .next/service-worker.js public/service-worker.js');
      if (goesToAws) {
        try {
          console.info('\x1b[32m%s\x1b[0m', `• ${goesToAws ? 6 : 5} of ${totalActions} -> UPLOADING BUILD FOLDER TO AWS S3`);
          const awsStdout = await uploadToAWS(buildEnv);
          console.log(awsStdout);
        } catch (error) {
          console.error('\x1b[31m%s\x1b[0m', 'error in uploadToAWS process:', error);
        }
      }
    } catch (error) {
      console.error('\x1b[31m%s\x1b[0m', 'error in buildProject process:', error);
    }
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', 'error in goToRootFolder process:', error);
  }
  console.info('\x1b[32m%s\x1b[0m', `• ${totalActions} of ${totalActions} -> BUILD PROCESS ENDED`);
}

runBuild();
