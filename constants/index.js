export const AUTH0_RECRUITMENT_CONFIG = {
  auth: {
    redirect: false,
    responseType: 'token id_token',
    params: {
      scope: 'openid email',
    },
  },
  theme: {
    logo: 'https://d2ylaz7bdw65jx.cloudfront.net/assets/images/aime-logo.svg',
    primaryColor: '#7603db',
  },
  languageDictionary: {
    title: 'AIME Recruitment Log In',
  },
};

export const AUTH0_STAFF_CONFIG = {
  auth: {
    redirect: false,
    responseType: 'token id_token',
    params: {
      scope: 'openid email',
    },
  },
  theme: {
    logo: 'https://d2ylaz7bdw65jx.cloudfront.net/assets/images/aime-logo.svg',
    primaryColor: '#7603db',
  },
  languageDictionary: {
    title: 'AIME Staff Log In',
  },
};

export const HEADER_MENU_ITEMS = [
  {
    title: 'About',
    subTitle: 'About AIME',
    description: 'We\'re an Imagination Factory aiming to put a mentor in every kid\'s life every day',
    links: [
      {
        to: '/about',
        as: '/about',
        linkText: 'Overview',
      },
      {
        to: '/know-aime',
        as: '/know-aime',
        linkText: 'Get to know AIME',
      },
      {
        to: '/impact',
        as: '/impact',
        linkText: 'Our Impact',
      },
      {
        to: '/jack-manning-bancroft',
        as: '/jack-manning-bancroft',
        linkText: 'CEO & Founder',
      },
    ],
  }, {
    title: 'Get Inspired',
    subTitle: 'Visit Imagi-nation',
    description: 'Read our stories, experience IN{TV} & more',
    links: [
      {
        to: '/imagi-nation-tv',
        as: '/imagi-nation-tv',
        linkText: 'IN{TV}',
      },
      {
        to: '/stories/[categorySlug]',
        as: '/stories/intv',
        linkText: 'Read our stories',
      },
    ],
  }, {
    title: 'Get Involved',
    subTitle: 'Board the AIME Rocket Ship',
    description: 'As a Social Network 4 Good, together we can change the world!',
    links: [
      {
        to: '/be-a-mentor',
        as: '/be-a-mentor',
        linkText: 'Be a mentor',
      },
      {
        to: '/positions',
        as: '/positions',
        linkText: 'Work with us',
      },
      // {
      //   to: 'https://shop.aimementoring.com/pages/this-hoodie-pays-rent',
      //   as: 'https://shop.aimementoring.com/pages/this-hoodie-pays-rent',
      //   linkText: 'Become a Hoodie Connector',
      // },
    ],
  },
];

export const CTA_AU_HOMEPAGE = [
  {
    title: 'About AIME',
    link: '/about',
    button: 'See what we\'re about',
    description: 'We\'re an Imagination Factory aiming to put a mentor in every kid\'s life every day',
  },
  {
    title: 'Shop Apparel',
    link: 'https://shop.aimementoring.com',
    button: 'Grab some gear',
    description: 'The home of the hoodie that changed the world',
  },
  {
    title: 'Become a Mentor',
    link: '/be-a-mentor',
    button: 'Let\'s change the world',
    description: 'Want to change the world? It\'s time to walk the talk!',
  },
  {
    title: 'Our Impact',
    link: '/impact',
    button: 'Explore our Impact',
    description: 'Not another smiley faced program',
  },
];

export const CTA_US_HOMEPAGE = [
  {
    title: 'College Students',
    link: '/hooded-scholar',
    button: 'Apply now',
    description: 'Find out whats involved and apply to be a Hooded Scholar',
  },

  {
    title: 'Organisations',
    link: '/seatontheplane',
    button: 'Nominate',
    description: 'Nominate yourself or someone else from your org to fly to Australia',
  },
  {
    title: 'About AIME',
    link: '/about',
    button: 'Get to Know AIME',
    description: 'Get to know AIME. Who we are and why we do what we do.',
  },
];

export const TALENT_HEADER_MENU_ITEMS = [
  'Welcome',
  'Deets',
  'Vids',
];

export const STUDENT_CHAPTER_QUESTIONS_FORM = [
  'Do you know which demographic of kids you want to mentor and have a case ready as to what inequality they are facing educationally?',
  'Are you one of these kids? The lead mentors have to be from the community of the kids we are working with, if that\'s not your story, you can play a role as a volunteer once the student chapter gets started.',
  'Do you understand that you have to get a College & a School to commit to this?',
  'Can you commit 1 year of your life to this?',
  'Can you get yourself to LA with a valid Passport and Aus Tourist Visa by 2/19?',
  'Do you believe we can make magic?',
];

export const ANNUAL_2016_REPORT_YEARS = [
  {
    year: '2005',
    content: `
      <p>The AIME program commenced with a Year 9 program for 25 mentees, 25 mentors, 1 partner school and 1 university
      partner. In this first year, there was a 40% attendance increase by Year 9 students for days when mentoring took
      place compared to the other school days (in the early years of AIME research was internally designed and undertaken).</p>
    `,
  },
  {
    year: '2006',
    content: `
      <p>The program grew to 47 mentees, 47 mentors, 2 partner schools and 1 university partner.</p>
      <ul>
        <li>AIME introduced a new Year 10 program, which based on post-program feedback, had a positive impact on the
        mentees self-belief and self-esteem.</li>
      </ul>
    `,
  },
  {
    year: '2007',
    content: `
      <p>The program grew to 100 mentees, 100 mentors, 5 partner schools and 1 university partner.</p>
      <ul>
        <li>AIME launched its first ever after school homework centre and Year 11 &amp; 12 tutoring program.</li>
        <li>100% of mentees believed that AIME was preparing them better for life after school (based on post-program
        feedback)</li>
      </ul>
    `,
  },
  {
    year: '2008',
    content: `
      <p>The program grew to 300 mentees, 300 mentors, 18 partner schools and 2 university partners.</p>
      <ul>
        <li>AIME launched its first ever workbook.</li>
        <li>100% of mentees who were not going to finish Year 12 changed their minds and wanted to finish Year 12 after they participated in AIME (based on post-program feedback).</li>
      </ul>
    `,
  },
  {
    year: '2009',
    content: `
      <p>The program grew to 325 mentees, 500 mentors, 33 partner schools and 4 university partners.</p>
      <ul>
        <li>2 mentees from the AIME Sydney program became the first ever Aboriginal school captains of their schools.</li>
        <li>73% of AIME mentees completed Year 12 and 38% transitioned into university.</li>
      </ul>
    `,
  },
  {
    year: '2010',
    content: `
      <p>AIME grew to 529 mentees, 529 mentors, 44 partner schools and 7 university partners.</p>
      <p>Pre and post-program surveys were given to all the mentees and the results showed that mentees were more likely to aspire to finish Year 10, Year 12 and go to university after participation in the program.</p>
      <ul>
        <li>100% of Year 12 mentees achieve Year 12 attainment.</li>
      </ul>
    `,
  },
  {
    year: '2011',
    content: `
      <p>AIME grew to 787 mentees, 787 mentors, 75 partner schools and 10 university partners.</p>
      <ul>
        <li>AIME progression rates were significantly higher than the national Indigenous progression rates across every year level.</li>
        <li>A new Year 11&amp;12 Leadership and Development Program was piloted.</li>
        <li>A new outreach model was piloted.</li>
        <li>36% of Year 12 mentees transition into university.</li>
      </ul>
    `,
  },
  {
    year: '2012',
    content: `
      <p>AIME grew to 1417 mentees, 956 mentors, 121 partner schools and 9 university partners.</p>
      <ul>
        <li>The Year 9 to 12 completion rate for AIME mentees was 71.2%, exceeding the national Indigenous average of 38% and approaching the national non-Indigenous average of 79.9%.</li>
        <li>AIME commenced a research partnership with the University of Wollongong (named the AIME Research Partnership) which is committed to working to try and better understand how and why the AIME program works in order to improve educational engagement and outcomes for Indigenous young people.</li>
        <li>AIME commissioned an independent evaluation through a research team at the University of Wollongong to investigate the achievements and impacts of the program and identify what it would take to replicate and expand the Outreach program across other university sites nationally.</li>
      </ul>
    `,
  },
  {
    year: '2013',
    content: `
      <p>AIME grew to 1910 mentees, 1066 mentors, 241 partner schools and 14 university partners.</p>
      <ul>
        <li>The results of the independent evaluation that commenced in 2012 indicated that the AIME Outreach Program was achieving positive results for participants (mentees) that were comparable with the Core Program. The evaluation also found that AIME positively impacted:</li>
      </ul>
      <ul>
        <li>The strength and resilience of mentees;</li>
        <li>Mentee pride in being Indigenous;</li>
        <li>Mentees making strong connections with Indigenous peers, role models and culture;</li>
        <li>Aspirations and engagement for finishing school; and</li>
        <li>Aspirations for continuing to further study.</li>
      </ul>
      <p>The AIME Research Partnership, through Higher Education Participation and Partnerships Program (HEPPP) funding, commenced a 3-year research project to identify, describe and explain the AIME model of mentoring and its impact on university student mentors and Indigenous young people (the Partnership Project).</p>
      <p>AIME commissioned KPMG to undertake an economic evaluation of the program with the primary purpose of assessing the value-for-money of AIME. The economic evaluation quantified the benefits relating to education (the potential total lifetime earnings of the AIME mentee population in 2012, compared to potential total
        lifetime earnings of a similarly sized group of Indigenous students around the country). Findings included:</p>
      <ul>
        <li>AIME mentees performed better than Indigenous students around the country and reached levels of school performance close to their non-Indigenous peers.</li>
        <li>Due to the mentoring benefits received, AIME mentees are likely to be more employable and earn more.</li>
        <li>An AIME mentee that completes a university degree can be expected to earn up to $332,000 more over their lifetime compared to an Indigenous student that does not complete high school.</li>
        <li>The AIME program generates $7 in benefits for every $1 of cost.</li>
      </ul>
      <p>The AIME Research Partnership was successful in winning funding for an Australian Research Council (ARC) Discovery Project: <em>Mentoring and Indigenous Higher Education: Understanding how university students mentor Indigenous school students</em> (DP140103690).</p>
      <p>The AIME Research Partnership published its first book chapter, first academic journal article and delivered its first conference presentation.</p>
    `,
  },
  {
    year: '2014',
    content: `
      <p>AIME grew to 3773 mentees, 1526 mentors, 313 partner schools and 16 university partners.</p>
      <p>The AIME Partnership Project continued with:</p>
      <ul>
        <li>150 AIME session observations at 15 different university campuses across Australia;</li>
        <li>618 matched mentee pre and post program surveys;</li>
        <li>143 mentee interviews; and</li>
        <li>Group discussions or interviews with 115 mentors.</li>
      </ul>
      <p>The AIME Research Partnership published 2 more academic book chapters.</p>
      <p>AIME was cited in major publications as an example of best practice:</p>
      <ul>
        <li>Cited as ‘things that work’ (best practice) in the <em>Productivity Commission Report: Overcoming Indigenous Disadvantage, Key Indicators 2014</em>;</li>
        <li>Cited as ‘what works’ on the Australian Institute of Family Studies website;</li>
        <li>Cited as best practice in <em>‘Can’t be what you can’t see’: The transition of Aboriginal and Torres Strait Islander students into higher education Final Report 2014.</em></li>
      </ul>
      <p>93.2% of our Year 12 mentees satisfied the requirements of Year 12 attainment in their relevant state or territory. This was 6.7% higher than the national non-Indigenous Year 12 attainment rate and 34.7% higher than the national Indigenous rate.</p>
    `,
  },
  {
    year: '2015',
    content: `
      <p>AIME grew to 4864 mentees, 1923 mentors, 325 partner schools and 18 university partners.</p>
      <p>The AIME Research Partnership continued to investigate the impact of the program on the mentees but shifted the research focus to the impact of AIME on the mentors. From extensive interviews, observations and surveys we found that:</p>
      <ul>
        <li>Mentors are reporting significant learning experiences derived from participation in AIME;</li>
        <li>Many mentors told us they feel like they are learning as much or more than the mentees;</li>
        <li>Mentors are developing knowledge and appreciation of Indigenous culture as well as growing awareness of social injustices experienced by Indigenous Australians;</li>
        <li>Mentors are describing an increased capacity and motivation for volunteering;</li>
        <li>Mentors have described that they are focussing their volunteering efforts to specifically benefit Indigenous young people;</li>
        <li>90% of mentor survey respondents reported that participation in AIME has enhanced their university experience;</li>
        <li>84% of mentor respondents reported that AIME has enhanced the way they connect and serve the wider community;</li>
        <li>On average, mentor survey respondents reported growth in:
          <ul>
            <li>Their knowledge of Indigenous Australian cultures</li>
            <li>Their connection to Indigenous Australia</li>
            <li>Their cultural and social awareness</li>
            <li>Their leadership skills</li>
            <li>Their communication skills</li>
            <li>Their teamwork skills</li>
            <li>Their creativity</li>
          </ul>
        </li>
      </ul>
      <p>The AIME Research Partnership published 3 more academic journal articles, published in The Conversation and delivered 3 more conference presentations.</p>
    `,
  },
  {
    year: '2016',
    content: `
    <p>AIME grew to 6686 mentees, 2255 mentors, 340 partner schools and 18 university partners.</p>
    <p>The 3-year Partnership Project was finalised and the results showed that AIME can produce good and relevant numbers that can assist policy and practice to drive towards better and brighter futures for our Aboriginal and Torres Strait Islander students. We found that AIME positively impacts mentees: </p>
    <ul>
      <li>The AIME program creates relationships and a culturally safe spaces that support mentees’ engagement in the program;</li>
      <li>AIME is effective in increasing mentees’ academic self-perceptions and motivation;</li>
      <li>An increased amount of time spent within the AIME program significantly increased the mentees’ sense of self-esteem, school confidence and cultural confidence at school;</li>
      <li>Mentees value not only how AIME promotes stronger study habits and aspirations, but also helps students value themselves and their culture within the learning environment;</li>
    </ul>
    <p>The AIME Research Partnership published another academic journal article and delivered another 6 conference presentations.</p>
    <p>The AIME Research Partnership created a central repository of all AIME Research Partnership publications in the website: <a href="https://aimeresearchpartnership.wordpress.com/" target="_blank">aimeresearchpartnership.wordpress.com</a>. All publications are listed under the publications tab, with links to full-text for most items listed.</p>
    `,
  },
];

export const STUDENT_CHAPTER_FIRST_VIDEO_CAROUSEL_ELEMENTS = [
  {
    video: 'https://player.vimeo.com/external/268931179.m3u8?s=4d7bec5817b90f9227891dd828e32deb91fa01e7',
    backgroundImage: '/assets/images/student-chapter/welcome.jpg',
    bannerImage: '/assets/images/play-btn-white.svg',
    title: 'Welcome to AIME',
    description: 'This vid tells the AIME story alongside that of the oldest continuing surviving culture, Indigenous Australians, from which AIME has its roots.',
  },
  {
    video: 'https://player.vimeo.com/external/220543875.m3u8?s=fef0be1439c6cd9179ade0e502dea995e0a75a8f',
    backgroundImage: '/assets/images/know-aime/cogs.jpg',
    bannerImage: '/assets/images/play-btn-white.svg',
    title: 'Cogs',
    description: 'This short film is directed by Oscar-winning filmmaker, Laurent Witz, and tells the story of a world built on a mechanised system that favours only some.',
  },
  {
    video: 'https://player.vimeo.com/external/289201000.m3u8?s=8e2156e4c6126f23d949d8ee81f22d4a14e3e2f7',
    backgroundImage: '/assets/images/know-aime/programday.jpg',
    bannerImage: '/assets/images/play-btn-white.svg',
    title: 'What\'s a Program Day?',
    description: 'An explanation of what a Program Day is and how they work',
  },
  {
    video: 'https://player.vimeo.com/external/289185456.m3u8?s=cc6bb0722818b162c8f16d9dbb8800ca53136864',
    backgroundImage: '/assets/images/know-aime/tutor-squad-thumb.jpg',
    bannerImage: '/assets/images/play-btn-white.svg',
    title: 'What\'s a Tutor Squad?',
    description: 'An explanation of what a Tutor Squad is and how they work',
  },
];

export const STUDENT_CHAPTER_SECOND_VIDEO_CAROUSEL_ELEMENTS = [
  {
    video: 'https://player.vimeo.com/external/245127515.m3u8?s=b0f180b5cbd403dbddd5f01ed421e36c2e13bf4e',
    backgroundImage: '/assets/images/know-aime/tutorsquads.jpg',
    bannerImage: '/assets/images/play-btn-white.svg',
    title: 'Day in the Life: Tutor Squads',
    description: 'A look inside an actual AIME tutor squad at St Scholastica\'s College in Glebe, New South Wales, Australia.',
  },
  {
    video: 'https://player.vimeo.com/external/243212684.m3u8?s=741dd0153164d1d5ae369cc5540a35df7662eade',
    backgroundImage: '/assets/images/know-aime/programday.jpg',
    bannerImage: '/assets/images/play-btn-white.svg',
    title: 'Day in the Life: Program Day',
    description: 'A look inside how an AIME Program Day actually looks at the University of Wollongong in New South Wales, Australia.',
  },
  {
    video: 'https://player.vimeo.com/external/292061146.m3u8?s=a95ca7d917a8f9dca8b62fdcb3e6c489dd965962',
    backgroundImage: '/assets/images/know-aime/schools-thumb.jpg',
    bannerImage: '/assets/images/play-btn-white.svg',
    title: 'Working with Schools',
    description: '',
  },
  {
    video: 'https://player.vimeo.com/external/293851096.m3u8?s=b65bc45a484b784e03f551b4c26e9cadc2af8b8e',
    backgroundImage: '/assets/images/know-aime/programday.jpg',
    bannerImage: '/assets/images/play-btn-white.svg',
    title: 'Working with Universities',
    description: '',
  },
];

export const COUNTRIES_WHERE_AIME_ACCEPT_JOBS = [
  'AU',
  'UG',
  'NG',
  'US',
  'ZA',
  'US',
];

export const COUNTRIES_WITH_AIME_COMING_SOON = [
  'RW',
  'ZW',
];

export const TESTIMONIALS = [
  {
    paragraph: `This book led me to redemption, redemption of my roots, my culture, my past,
      my present and my future. This is now my favourite book, to me it’s not just a
      book. It’s a reminder, telling me I am what I am and nothing or no one can
      stand in my way and tell me I’m not.`,
    signature: '- Hope Bradshaw-Wright',
  },
  {
    paragraph: 'A riveting story with eloquent prose and brutal honesty. I can\'t wait to read the sequel.',
    signature: '- Patrick Orme (AIME Staffer)',
  },
  {
    paragraph: `The messages are very clear. Sometimes you have to get knocked down lower than
      you’ve ever been, to stand up taller than you ever were before.`,
    signature: '- Rhian Miller (AIME Mentor &amp; Centre Manager)',
  },
  {
    paragraph: `Just like AIME itself, ‘the Mentor’ is entrenched with human connection. Very
      rarely do books find a way to draw you in and unlock your mind like this book.`,
    signature: '- Emma Dunn (AIME Mentor Leader &amp; Program Assistant)',
  },
  {
    paragraph: `The book made me reflect on my own life especially as a young Indigenous man
      who went to Uni to get the skills to change things for the people in my
      community. The Mentor challenged me to be ambitious in my actions as well as
      thoughts.`,
    signature: '- Rhys Pearcy (AIME Mentor &amp; Program Manager)',
  },
  {
    paragraph: `Thank you for the work you have done in Australia and thank you for having the
      courage to dream bigger and go global. Thank you for sharing your inspiring
      story and continuing to take as many people as possible on such an important
      journey.`,
    signature: '- Emma Gallagher',
  },
];
