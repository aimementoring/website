import React from 'react';
import Loadable from 'react-loadable';

export const getAsyncComponent = opts => (
  Loadable(Object.assign({
    loading: () => <div>Loading page...</div>,
  }, opts))
);
