'use strict';

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

function promiseFromChildProcess(child) {
  return new Promise(function(resolve, reject) {
    child.addListener('error', e => {
      console.log('Error generating docs:', e);
      reject(e);
    });
    child.addListener('exit', e => {
      if (e !== 0) {
        console.log('Failed process exec:', e);
        reject(e);
      }
      resolve(e);
    })
  })
}

function execPromise(toExec) {
  return promiseFromChildProcess(exec(toExec)).catch(e => console.log('Failed exec', toExec));
}

async function renameFile(folderPath, file) {
  return new Promise(async resolve => {
    const filename = path.join(folderPath, file);
    const stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      await compressAndUploadBuild(filename);
      resolve();
    } else if (filename.slice(-3) === '.gz') {
      const newName = filename.slice(0, -3);
      console.log(`Renaming file ${filename} to ${newName} in folder ${folderPath}`);
      await execPromise(`mv ${filename} ${newName}`);
      resolve();
    }
  })
}

async function compressAndUploadBuild(folderPath) {
  const files = fs.readdirSync(folderPath);
  return Promise.all(files.map(async file => renameFile(folderPath, file)));
}

console.log('/***** Replace name process started *****/');
compressAndUploadBuild('build/static').then(() => {
  console.log('/***** Replace name process ended *****/');
});
