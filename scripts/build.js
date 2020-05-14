/* eslint-disable no-console */
const { exec } = require('child_process');
const sitemap = require('nextjs-sitemap-generator');
const fs = require('fs');
require('dotenv').config();
const fetchContentfulEntries = require('../api/contentfulRedirects');

const AWS_ENVIRONMENTS = ['staging', 'production'];
const NOW_CONFIG = 'now.json';

async function goToRootFolder() {
  return new Promise((resolve, reject) => {
    exec('cd ..', (error, stdout, stderr) => {
      if (error) reject(error);
      if (stderr) console.info(stderr);
      resolve(stdout);
    });
  });
}

async function addRedirectsToNowJson() {
  return new Promise((resolve, reject) => {
    fetchContentfulEntries().then((response = []) => {
      const redirects = response.map((url) => ({
        src: url.fields.sourceUrl,
        dest: url.fields.destinationUrl,
        status: url.fields.redirectType,
      }));
      const nowJson = JSON.parse(fs.readFileSync(NOW_CONFIG, 'utf8'));
      nowJson.routes.push(...redirects);
      fs.writeFile(NOW_CONFIG, JSON.stringify(nowJson), (err) => reject(err));
      resolve(redirects);
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
  console.info('\x1b[32m%s\x1b[0m', `• 1 of ${totalActions} -> BUILD PROCESS STARTED`);
  try {
    console.info('\x1b[32m%s\x1b[0m', `• 2 of ${totalActions} -> POSITIONING IN ROOT FOLDER`);
    await goToRootFolder();
    console.info('\x1b[32m%s\x1b[0m', `• 3 of ${totalActions} -> ADDING REDIRECTS`);
    await addRedirectsToNowJson();
    if (goesToAws) {
      try {
        console.info('\x1b[32m%s\x1b[0m', `• 4 of ${totalActions} -> GENERATING SITEMAP`);
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
