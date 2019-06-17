import { getAsyncComponent } from '../utils/fileLoader';

export default [
  {
    path: '/another',
    component: getAsyncComponent({
      loader: () => import('../pages/pageAnother'),
    }),
  },
  {
    path: '/home',
    component: getAsyncComponent({
      loader: () => import('../pages/home'),
    }),
  },
  {
    path: '/',
    component: getAsyncComponent({
      loader: () => import('../pages/pageDefault'),
    }),
  },
];
