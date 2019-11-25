// initialize bugsnag ASAP, before other imports
import React from 'react';
import bugsnag from '@bugsnag/js';
import bugsnagReact from '@bugsnag/plugin-react';

const bugsnagClient = process.env.NODE_ENV !== 'test'
  ? bugsnag({
    apiKey: process.env.REACT_APP_BUGSNAG_KEY,
    releaseStage: process.env.REACT_APP_HOST_ENV,
    notifyReleaseStages: ['production', 'staging'],
  })
  : null;

if (bugsnagClient) bugsnagClient.use(bugsnagReact, React);

export default bugsnagClient;
