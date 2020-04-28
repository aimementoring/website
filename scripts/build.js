/* eslint-disable no-console */
const { exec } = require('child_process');
const sitemap = require('nextjs-sitemap-generator');

const AWS_ENVIRONMENTS = ['staging', 'production'];

async function goToRootFolder() {
  return new Promise((resolve, reject) => {
    exec('cd ..', (error, stdout, stderr) => {
      if (error) reject(error);
      if (stderr) console.info(stderr);
      resolve(stdout);
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
  const totalActions = goesToAws ? 6 : 4;
  console.info('\x1b[32m%s\x1b[0m', `• 1 of ${totalActions} -> BUILD PROCESS STARTED`);
  try {
    console.info('\x1b[32m%s\x1b[0m', `• 2 of ${totalActions} -> POSITIONING IN ROOT FOLDER`);
    await goToRootFolder();
    if (goesToAws) {
      try {
        console.info('\x1b[32m%s\x1b[0m', `• 3 of ${totalActions} -> GENERATING SITEMAP`);
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
      console.info('\x1b[32m%s\x1b[0m', `• ${goesToAws ? 4 : 3} of ${totalActions} -> BUILDING PROJECT`);
      const buildStdout = await buildProject();
      console.log(buildStdout);
      console.log('\x1b[36m%s\x1b[0m', `ENVIRONMENT: ${buildEnv}`);
      // exec('cp .next/service-worker.js public/service-worker.js');
      if (goesToAws) {
        try {
          console.info('\x1b[32m%s\x1b[0m', `• ${goesToAws ? 5 : 4} of ${totalActions} -> UPLOADING BUILD FOLDER TO AWS S3`);
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
