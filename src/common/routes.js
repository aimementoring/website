// import { getAsyncComponent } from '../utils/fileLoader';
import StoriesPage from '../pages/stories';
import ReportsPage from '../pages/reports';
import StoryPage from '../pages/story';
import AboutPage from '../pages/about';
import AnnualReportPage from '../pages/annualReport2016';
import ComingSoonPage from '../pages/comingSoon';
import DonatePage from '../pages/donate';
import PositionsPage from '../pages/positions';
import HomePage from '../pages/home';
import BeAFriendPage from '../pages/beAFriend';
import BeAMentorPage from '../pages/beAMentor';
import FaqPage from '../pages/faq';
import FounderPage from '../pages/founder';
import TermsOfServicePage from '../pages/termsOfService';
import TheMentorPage from '../pages/theMentor';
import HoodedScholarPage from '../pages/hoodedScholar';
import GoingGlobalPage from '../pages/goingGlobal';
import DynamicEOIPage from '../pages/dynamicEOI';
import QuizzesPage from '../pages/quizzes';
import CaseStudiesPage from '../pages/caseStudies';
import PositionsEntryPage from '../pages/positionsEntry';
import ThanksPage from '../pages/thanksPage';
import TheMentorProductsPage from '../pages/theMentorProducts';
import GlobalLetterPage from '../pages/globalLetter';
import ContactPage from '../pages/contact';
import AmbassadorsPage from '../pages/ambassadors';
import KnowAimePage from '../pages/knowAime';
import ImpactPage from '../pages/impact';

const countryRegex = '/:countryId(au|za|us|ug)'; // Match one of the 4 site versions

export default [
  {
    path: '/coming-soon',
    component: ComingSoonPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/comingSoon')
    // })
  },
  {
    path: '/about',
    component: AboutPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/about')
    // })
  },
  {
    path: '/reports/2016-annual-story',
    component: AnnualReportPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/annualReport2016')
    // })
  },
  {
    path: '/be-a-friend',
    component: BeAFriendPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/beAFriend')
    // })
  },
  {
    path: '/be-a-mentor',
    component: BeAMentorPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/beAMentor')
    // })
  },
  {
    path: '/be-a-mentor/:universityId',
    exact: true,
    component: BeAMentorPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/beAMentor')
    // })
  },
  {
    path: '/stories',
    component: StoriesPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/stories')
    // })
  },
  {
    path: '/story/:storySlug/',
    component: StoryPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/story')
    // })
  },
  {
    path: '/reports',
    component: ReportsPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/reports')
    // })
  },
  {
    path: '/blog/:storySlug/',
    component: StoryPage,
    // getAsyncComponent({
    //   loader: () => import('../pages/story')
    // })
  },
  {
    path: '/faq',
    component: FaqPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/faq')
    // })
  },
  {
    path: '/founder',
    component: FounderPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/founder')
    // })
  },
  {
    path: '/terms-of-service',
    component: TermsOfServicePage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/termsOfService')
    // })
  },
  {
    path: '/the-mentor',
    component: TheMentorPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/theMentor')
    // })
  },
  {
    path: '/hooded-scholar',
    component: HoodedScholarPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/hoodedScholar')
    // })
  },
  {
    path: '/going-global',
    component: GoingGlobalPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/goingGlobal')
    // })
  },
  {
    path: '/eoi/:tableName',
    exact: true,
    component: DynamicEOIPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/dynamicEOI')
    // })
  },
  {
    path: '/quizzes',
    exact: true,
    component: QuizzesPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/quizzes')
    // })
  },
  {
    path: '/case-studies',
    exact: true,
    component: CaseStudiesPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/caseStudies')
    // })
  },
  {
    path: '/donate',
    exact: true,
    component: DonatePage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/donate')
    // })
  },
  {
    path: '/positions',
    exact: true,
    component: PositionsPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/positions')
    // })
  },
  {
    path: `${countryRegex}/positions`,
    exact: true,
    component: PositionsPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/positions')
    // }),
  },
  {
    path: '/positions/:id/:jobCategory',
    exact: true,
    component: PositionsEntryPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/positionsEntry')
    // }),
  },
  {
    path: `${countryRegex}/positions/:id/:jobCategory`,
    exact: true,
    component: PositionsEntryPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/positionsEntry')
    // }),
  },
  {
    path: '/products/:productId',
    component: TheMentorProductsPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/theMentorProducts')
    // }),
  },
  {
    path: '/global-letter',
    exact: true,
    component: GlobalLetterPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/globalLetter')
    // })
  },
  {
    path: '/thanks',
    exact: true,
    component: ThanksPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/thanksPage')
    // })
  },
  {
    path: '/contact',
    exact: true,
    component: ContactPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/contact')
    // })
  },
  {
    path: '/ambassadors',
    exact: true,
    component: AmbassadorsPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/ambassadors')
    // })
  },
  {
    path: '/know-aime',
    exact: true,
    component: KnowAimePage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/knowAime')
    // }),
  },
  {
    path: '/impact',
    exact: true,
    component: ImpactPage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/impact')
    // })
  },
  {
    path: '/',
    exact: true,
    component: HomePage,
    // component: getAsyncComponent({
    //   loader: () => import('../pages/home')
    // })
  }
];
