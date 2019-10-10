import { getAsyncComponent } from '../utils/fileLoader';

const countryRegex = '/:countryId(au|za|us|ug)'; // Match one of the 4 site versions

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
    path: '/eoi/:tableName',
    exact: true,
    component: getAsyncComponent({
      loader: () => import('../pages/dynamicEOI')
    })
  },
  {
    path: '/quizzes',
    exact: true,
    component: getAsyncComponent({
      loader: () => import('../pages/quizzes')
    })
  },
  {
    path: '/case-studies',
    exact: true,
    component: getAsyncComponent({
      loader: () => import('../pages/caseStudies')
    })
  },
  {
    path: '/donate',
    exact: true,
    component: getAsyncComponent({
      loader: () => import('../pages/donate')
    })
  },
  {
    path: '/positions',
    exact: true,
    component: getAsyncComponent({
      loader: () => import('../pages/positions')
    })
  },
  {
    path: `${countryRegex}/positions`,
    exact: true,
    component: getAsyncComponent({
      loader: () => import('../pages/positions')
    }),
  },
  {
    path: '/positions/:id/:jobCategory',
    exact: true,
    component: getAsyncComponent({
      loader: () => import('../pages/positionsEntry')
    }),
  },
  {
    path: `${countryRegex}/positions/:id/:jobCategory`,
    exact: true,
    component: getAsyncComponent({
      loader: () => import('../pages/positionsEntry')
    }),
  },
  {
    path: '/global-letter',
    exact: true,
    component: getAsyncComponent({
      loader: () => import('../pages/globalLetter')
    })
  },
  {
    path: '/thanks',
    exact: true,
    component: getAsyncComponent({
      loader: () => import('../pages/thanksPage')
    })
  },
  {
    path: '/contact',
    exact: true,
    component: getAsyncComponent({
      loader: () => import('../pages/contact')
    })
  },
  {
    path: '/ambassadors',
    exact: true,
    component: getAsyncComponent({
      loader: () => import('../pages/ambassadors')
    })
  },
  {
    path: '/know-aime',
    exact: true,
    component: getAsyncComponent({
      loader: () => import('../pages/knowAime')
    }),
  },
  {
    path: '/impact',
    exact: true,
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
