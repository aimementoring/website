// const fs = require('fs');
const { exec } = require('child_process');

const AWS_ENVIRONMENTS = ['staging', 'master'];

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
    exec(`aws s3 sync .next "s3://aimementoring${environment}/website/public/_next" --acl public-read --delete`, (error, stdout, stderr) => {
      if (error) reject(error);
      if (stderr) console.info(stderr);
      resolve(stdout);
    });
  });
}

async function runBuild() {
  const buildEnv = process.env.REACT_APP_HOST_ENV;
  console.info('BUILD PROCESS STARTED');
  try {
    console.info('POSITIONING IN ROOT FOLDER');
    await goToRootFolder();
    try {
      console.info('BUILDING PROJECT');
      const buildStdout = await buildProject();
      console.log(buildStdout);
      console.log('ENVIRONMENT:', { environment: buildEnv });
      if (AWS_ENVIRONMENTS.indexOf(buildEnv) > -1) {
        try {
          console.info('UPLOADING BUILD FOLDER TO AWS S3');
          const awsStdout = await uploadToAWS(buildEnv);
          console.log(awsStdout);
        } catch (error) {
          console.error('error in uploadToAWS process:', error);
        }
      }
    } catch (error) {
      console.error('error in buildProject process:', error);
    }
  } catch (error) {
    console.error('error in goToRootFolder process:', error);
  }
  console.info('BUILD PROCESS ENDED');
}

runBuild();
