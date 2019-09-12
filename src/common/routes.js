import { getAsyncComponent } from '../utils/fileLoader';

export default [
  {
    path: '/coming-soon',
    component: getAsyncComponent({
      loader: () => import('../pages/comingSoon')
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
      loader: () => import('../pages/reports')
    })
  },
  {
    path: '/blog/:storySlug/',
    component: getAsyncComponent({
      loader: () => import('../pages/story')
    })
  },
  {
    path: '/faq',
    component: getAsyncComponent({
      loader: () => import('../pages/faq')
    })
  },
  {
    path: '/founder',
    component: getAsyncComponent({
      loader: () => import('../pages/founder')
    })
  },
  {
    path: '/terms-of-service',
    component: getAsyncComponent({
      loader: () => import('../pages/termsOfService')
    })
  },
  {
    path: '/the-mentor',
    component: getAsyncComponent({
      loader: () => import('../pages/theMentor')
    })
  },
  {
    path: '/hooded-scholar',
    component: getAsyncComponent({
      loader: () => import('../pages/hoodedScholar')
    })
  },
  {
    path: '/contact',
    component: getAsyncComponent({
      loader: () => import('../pages/contact')
    })
  },
  {
    path: '/know-aime',
    component: getAsyncComponent({
      loader: () => import('../pages/knowAime')
    }),
  },
  {
    path: '/impact',
    component: getAsyncComponent({
      loader: () => import('../pages/impact')
    })
  },
  {
    path: '/',
    exact: true,
    component: getAsyncComponent({
      loader: () => import('../pages/home')
    })
  }
];
