import { getAsyncComponent } from '../utils/fileLoader';

export default [
  {
    path: '/home',
    component: getAsyncComponent({
      loader: () => import('../pages/home')
    })
  },
  {
    path: '/about',
    component: getAsyncComponent({
      loader: () => import('../pages/about')
    })
  },
  {
    path: '/reports/2016-annual-story',
    component: getAsyncComponent({
      loader: () => import('../pages/annualReport2016')
    })
  },
  {
    path: '/be-a-friend',
    component: getAsyncComponent({
      loader: () => import('../pages/beAFriend')
    })
  },
  {
    path: '/be-a-mentor',
    component: getAsyncComponent({
      loader: () => import('../pages/beAMentor')
    })
  },
  {
    path: '/be-a-mentor/:universityId',
    exact: true,
    component: getAsyncComponent({
      loader: () => import('../pages/beAMentor')
    })
  },
  {
    path: '/stories',
    component: getAsyncComponent({
      loader: () => import('../pages/stories')
    })
  },
  {
    path: '/story/:storySlug/',
    component: getAsyncComponent({
      loader: () => import('../pages/story')
    })
  },
  {
    path: '/reports',
    component: getAsyncComponent({
      loader: () => import('../pages/reports'),
    }),
  },
  {
    path: '/blog/:storySlug/',
    component: getAsyncComponent({
      loader: () => import('../pages/story')
    })
  },
  {
    path: '/another',
    component: getAsyncComponent({
      loader: () => import('../pages/pageAnother')
    })
  },
  {
    path: '/faq',
    component: getAsyncComponent({
      loader: () => import('../pages/faq')
    })
  },
  {
    path: '/',
    component: getAsyncComponent({
      loader: () => import('../pages/pageDefault')
    })
  }
  // {
  //   path: '/comming-soon',
  //   component: getAsyncComponent({
  //     loader: () => import('../pages/comingSoon'),
  //   }),
  // },
];
