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

export const BLOG_MATRIX_AVAILABLE_ELEMENTS = [
  'paragraph',
  'customImage',
  'authorName',
  'blockquote',
  'heading',
  'image',
  'mp4Video',
  'button',
  'iframeHeight',
];

export const GENERAL_MATRIX_AVAILABLE_ELEMENTS =
  [
    'paragraph',
    'heading',
    'blockquote',
    'figure',
    'customImage',
    'signature',
    'video',
    'button',
    'signature',
  ];

export const FORM_MATRIX_AVAILABLE_ELEMENTS =
  [
    'input',
    'datePickerInput',
    'emailInput',
    'phoneInput',
    'countryInput',
    'limitedCountryInput',
    'textAreaInput',
    'becomeAFriend',
    'whatUniversityCampusAreYouAttending',
    'howDidYouHearAboutAime',
    'checkbox',
    'uploadField',
    'dropDown',
    'heading',
    'paragraph',
    'paragraphLabel',
    'addressField',
    'submit',
    'video',
  ];

export const HEADER_MENU_ITEMS = [
  {
    title: 'About',
    subTitle: 'About AIME',
    description: 'Who we are and why we do what we do.',
    links: [
      {
        href: '/about',
        linkText: 'Overview',
      },
      {
        href: '/know-aime',
        linkText: 'Get to know AIME',
      },
      {
        href: '/impact',
        linkText: 'Our Impact',
      },
      {
        href: '/jack-manning-bancroft',
        linkText: 'CEO & Founder',
      },
    ],
  }, {
    title: 'Stories',
    subTitle: 'Kindness, links & more',
    description: 'Stories are how we understand and interact with the world around us',
    links: [
      {
        href: '/stories',
        linkText: 'See our stories',
      },
    ],
  }, {
    title: 'Be a Mentor',
    subTitle: 'Be a mentor',
    description: 'Want to change the world? Come mentor with us.',
    links: [
      {
        href: '',
        linkText: 'Let\'s change the world',
      },
    ],
  },
]

export const CTA_AU_HOMEPAGE = [
  {
    title: 'About AIME',
    link: '/about',
    button: 'See what we\'re about',
    description: 'We are driven to unlock the limitless potential of children who have been left behind',
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
]

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
  {
    title: 'Contact',
    link: '/contact',
    button: 'Contact',
    description: 'If you wanna know more reach out and we\'ll do our best to answer your questions',
  },
]

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

// export const STUDENT_CHAPTER_DATE = '2018-10-08T09:00:00';

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

export const stories = {
  data: [
    {
      title: 'My purpose was found in my wounds ✌🏾',
      authorName: 'Isaiah Dawe',
      id: 2218,
      slug: 'my-purpose-was-found-in-my-wounds',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/my-purpose-was-found-in-my-wounds.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/my-purpose-was-found-in-my-wounds',
      previewText: 'I know what it is like to feel hopeless, unworthy and be treated with disrespect – it’s something I would never wish upon another person. I want everyone to feel a sense of worth around me and to feel comfortable in who they truly are and a way I see myself encouraging this, is by being kind.   ',
      postDate: {
        date: '2018-11-04 15:30:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: '0% 25%',
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/Isaiah_181104_044831.jpg'
        }
      ]
    },
    {
      title: 'I have a passion for people & kindness 😜',
      authorName: 'Lamarr Womble',
      id: 2207,
      slug: 'i-have-a-passion-for-people-kindness',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/i-have-a-passion-for-people-kindness.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/i-have-a-passion-for-people-kindness',
      previewText: 'It doesn’t seem hard to be a kind person, but we are products of our environments and experiences. Until we see what it means to be consistently kind, we may never know how it feels. I ask you all to continue to be an example of what it means to love and take care of people. You very well may change someone\'s life through your kindness!',
      postDate: {
        date: '2018-10-27 20:00:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: null,
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/Lamarr_181027_090409.jpg'
        }
      ]
    },
    {
      title: 'Trekking a kindness trail 🚙',
      authorName: 'Shaun Edwards',
      id: 2191,
      slug: 'trekking-a-kindness-trail',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/trekking-a-kindness-trail.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/trekking-a-kindness-trail',
      previewText: 'When you are dropped in a Subaru outlander 15,979kms away from the sunny beaches of Sydney and instead are placed amongst the tall buildings of New York with the sole intention to fill a chartered plane which flies 200 US College students to Australia in four-months time without knowing a single soul; your instincts tell you kindness is going to be the only thing that gets you through the next month on the road.',
      postDate: {
        date: '2018-10-21 10:00:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: '0% 25%',
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/Shauny-1.jpg'
        }
      ]
    },
    {
      title: 'A different future 👣',
      authorName: 'Bashir Yousufi',
      id: 2171,
      slug: 'a-different-future',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/a-different-future.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/a-different-future',
      previewText: 'My name is Bashir Yousufi. I am a proud new Australian of refugee background. I am part of the Hazara community found mostly in Afghanistan and Pakistan.',
      postDate: {
        date: '2018-10-04 16:01:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: null,
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/Bashir.jpg'
        }
      ]
    },
    {
      title: 'A full extension of kindness ☺️🌱',
      authorName: 'Melati Wijsen',
      id: 2123,
      slug: 'a-full-extension-of-kindness',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/a-full-extension-of-kindness.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/a-full-extension-of-kindness',
      previewText: 'Having kindness at my core, I truly believe it will help me attract the right people, situations and opportunities onto my path. My hope is that with leading by example, my kindness extends to the person in front of me, next to me, the person reading these words, the person who listens to my talks will feel that ripple effect and want to express the same level of kindness they receive.',
      postDate: {
        date: '2018-09-29 22:00:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: null,
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/MELATIWIJSEN-by-Sharon-Angelia-0486.jpg'
        }
      ]
    },
    {
      title: 'Kindness in action 😉',
      authorName: 'Holley Murchison',
      id: 2106,
      slug: 'kindness-in-action',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/kindness-in-action.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/kindness-in-action',
      previewText: 'When you consider today’s social, economic, and political climate, the stories we tell about who we are and how we’re committed to impacting culture are more important than they’ve ever been. And that’s what I’m most excited about – working with people to uncover those stories to activate their potential for the greatest good.',
      postDate: {
        date: '2018-09-22 03:00:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: '0% 0%',
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/H.-Murchison-•-Bio-Photo.jpg'
        }
      ]
    },
    {
      title: 'Stitched with kindness 😊',
      authorName: 'Munjed Al Muderis',
      id: 2016,
      slug: 'stitched-with-kindness',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/stitched-with-kindness.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/stitched-with-kindness',
      previewText: 'Christmas Island is where I learnt the most valuable lesson of my life, the act of human kindness. I was asked to interpret for the Australian Federal Police while they intercepted a boat. One of the Deputies asked me, “when was the last time you spoke to your family?” I replied “just before I left Jakarta”. The Deputy told me that he was putting his job on the line, pulled out a satellite phone and asked me to sit on the ground. He told me to call my family.',
      postDate: {
        date: '2018-09-16 18:30:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: '0% 20%',
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/Munjed.jpg'
        }
      ]
    },
    {
      title: 'Entitled to make a positive change ✊🏾🌷',
      authorName: 'Mercy Ngulube',
      id: 2004,
      slug: 'entitled-to-make-a-positive-change',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/entitled-to-make-a-positive-change.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/entitled-to-make-a-positive-change',
      previewText: 'I talk about the entitlement that is so often spoken of millennials. The one thing I love people feeling entitled to is the right to change their circumstances, for the better. So many of the problems we see in the world today come because of disregard of the simple ability to be kind, to care and to empathise. So many of the solutions we’ve seen in response to injustice, have come because people understand the importance of exercising their ability to change their circumstances.',
      postDate: {
        date: '2018-09-09 18:30:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: '0% 25%',
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/Mercy-Profile.jpg'
        }
      ]
    },
    {
      title: 'A smile is the BEST gift 😄',
      authorName: 'Esther Kalenzi',
      id: 1987,
      slug: 'a-smile-is-the-best-gift',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/a-smile-is-the-best-gift.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/a-smile-is-the-best-gift',
      previewText: 'That weekend was a turning point for me. I had never felt so alive as I did spending time with these children and realising the opportunity we had to impact their lives. The next year, I decided to register 40 days over 40 smiles Foundation (4040) as a non-profit. Soon after, I quit my job in marketing and business development, to pursue this new dream, full time.',
      postDate: {
        date: '2018-09-02 18:30:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: '0% 20%',
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/Esther.jpg'
        }
      ]
    },
    {
      title: 'AIME at Parliament House 🏠',
      authorName: 'Ben Abbatangelo',
      id: 1972,
      slug: 'aime-at-parliament-house',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/aime-at-parliament-house.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/aime-at-parliament-house',
      previewText: 'Australian politics dominated the conversation this week as we witnessed an all too familiar change in political leadership. The journalists smelt blood and relished at the opportunity, paying microscopic attention to the cracks and division within Parliament. The only story, and most compelling of them all, that is yet to be told is the one that I’m about to tell - and it’s a story that will one by one heal wounds, glue together cracks and knit the country back together.',
      postDate: {
        date: '2018-08-26 18:30:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: '0%',
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/AIME-in-the-house.png'
        }
      ]
    },
    {
      title: 'Leaving tracks ♿⚡',
      authorName: 'Marcos Lopez',
      id: 1962,
      slug: 'leaving-tracks',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/leaving-tracks.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/leaving-tracks',
      previewText: 'I want to introduce you to my friend, Abel. A few years ago, he started the nonprofit, What Pushes You? and together, we are taking it worldwide. Recently, at the FIFA World Cup in Moscow, we saw a young guy who we thought could do with a new set of wheels. This is our story.',
      postDate: {
        date: '2018-08-19 18:30:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: '0% 53%',
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/Marcos-Abel.jpg'
        }
      ]
    },
    {
      title: 'Kindness has no limits ✈️',
      authorName: 'Maya Ghazal',
      id: 1956,
      slug: 'kindness-has-no-limits',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/kindness-has-no-limits.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/kindness-has-no-limits',
      previewText: 'The idea of becoming a pilot is quite new for me because it didn’t cross my mind until last year when I decided it is what I want to do. It is cool to think that one day, I will be able to access any country and be respected because it is my job to fly people, and I am the same person who was not only turned away from school, but looked at as a burden by some countries.',
      postDate: {
        date: '2018-08-12 18:30:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: '0% 20%',
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/Maya-Ghazal.-Pilot-in-training.jpg'
        }
      ]
    },
    {
      title: 'The power of kindness  ✊🏾✨',
      authorName: 'Khali Sweeney',
      id: 1945,
      slug: 'the-power-of-kindness',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/the-power-of-kindness.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/the-power-of-kindness',
      previewText: 'I’ve witnessed firsthand what kindness can do for those the world has written off, people who truly believe they’re not good enough, smart enough or strong enough to make it.',
      postDate: {
        date: '2018-08-05 18:30:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: '0% 35%',
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/Khali-Head-Shot.jpg'
        }
      ]
    },
    {
      title: 'AIME’s FIRST African Australian Program Day 💪🏾🔥',
      authorName: 'Bem Ikyanyon',
      id: 1935,
      slug: 'aimes-first-african-australian-program-day',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/aimes-first-african-australian-program-day.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/aimes-first-african-australian-program-day',
      previewText: 'It was the start of flipping the script as African Australian kids take charge of the narrative.',
      postDate: {
        date: '2018-07-29 18:30:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: '0% 25%',
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/0O3A6534.jpg'
        }
      ]
    },
    {
      title: 'When strength met hope 🤘🏾🌷',
      authorName: 'Aminata Conteh-Biger',
      id: 1924,
      slug: 'when-strength-met-hope',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/when-strength-met-hope.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/when-strength-met-hope',
      previewText: 'My soul felt a sense of responsibility to do something about infant mortality in Sierra Leone. Every baby in the world deserves to be born healthy and in a stable environment, irrespective of their country of birth... This is a basic human right; it is just that simple.',
      postDate: {
        date: '2018-07-22 18:30:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: '0% 15%',
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/When-strength-met-hope.jpg'
        }
      ]
    },
    {
      title: 'Kindness from a classroom in Brazil 📚',
      authorName: 'Bruno Paiva',
      id: 1890,
      slug: 'kindness-from-a-classroom-in-brazil',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/kindness-from-a-classroom-in-brazil.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/kindness-from-a-classroom-in-brazil',
      previewText: 'I could not be gifted with greater honor than knowing that thousands of people across the globe are coming back to believing in love for others in the importance of affection thanks to what I have experienced.',
      postDate: {
        date: '2018-07-15 18:30:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: '0% 21%',
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/Screen-Shot-2018-07-09-at-12.11.45-PM.png'
        }
      ]
    },
    {
      title: 'Because of her, we can 💃🏾',
      authorName: 'Rona Glynn-McDonald',
      id: 1880,
      slug: 'because-of-her-we-can',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/because-of-her-we-can.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/because-of-her-we-can',
      previewText: 'I share this knowledge as an act of kindness, because people can’t grow unless we are open to sharing. I share this knowledge to allow people to take a proactive step in displaying kindness and empathy for other cultures.',
      postDate: {
        date: '2018-07-08 18:30:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: null,
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/Screen-Shot-2018-07-03-at-12.07.43-PM.png'
        }
      ]
    },
    {
      title: 'Tales of an adventuring soul 🌍❤️',
      authorName: 'Agustin Di Gennaro',
      id: 1586,
      slug: 'sunday-kindness-tales-of-an-adventuring-soul-️',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/sunday-kindness-tales-of-an-adventuring-soul-️.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/sunday-kindness-tales-of-an-adventuring-soul-️',
      previewText: 'I know I am only a dude with a backpack and ain’t changing anything in the world but this story is not about me after all, it has a purpose of giving you the courage and motivation to discover new places, visit exciting landspaces and even more important; meet fantastic people and find what we do have in common despite of our clear differences.',
      postDate: {
        date: '2018-07-01 18:30:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: '0% 20%',
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/Screen-Shot-2018-06-25-at-10.22.14-AM.png'
        }
      ]
    },
    {
      title: 'Changing the world one brushstroke at a time. 🎨',
      authorName: 'Rouble Nagi',
      id: 1644,
      slug: 'sunday-kindness-changing-the-world-one-brushstroke-at-a-time-1',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/sunday-kindness-changing-the-world-one-brushstroke-at-a-time-1.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/sunday-kindness-changing-the-world-one-brushstroke-at-a-time-1',
      previewText: 'Art means a lot to me, but it’s no longer everything. Today it\'s all about the people I work for, empowering women living in the slums giving them ambition and strength; courage and resilience. It’s all about “paying it forward.”',
      postDate: {
        date: '2018-06-24 10:00:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: '0% 20%',
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/DSC_7204.JPG'
        }
      ]
    },
    {
      title: 'I believe in looking past perceptions & fearlessly shining positivity 🦁',
      authorName: 'Eliza Di Mauro',
      id: 1665,
      slug: 'sunday-kindness-looking-past-perceptions-fearlessly-shining-positivity-1',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/sunday-kindness-looking-past-perceptions-fearlessly-shining-positivity-1.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/sunday-kindness-looking-past-perceptions-fearlessly-shining-positivity-1',
      previewText: 'It’s hard to put into words the rippling positive effect that night had, seeing an overwhelming pride fill the entire choir like a breath of pure oxygen, a wave of confidence and audience recognition transforming their posture and grinning faces into pure joy – it’s transformative.',
      postDate: {
        date: '2018-06-17 00:00:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: null,
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/IMG_3014.jpg'
        }
      ]
    },
    {
      title: 'Be kind to each other, Darlings 😘',
      authorName: 'Deborah Kirby-Parsons',
      id: 1688,
      slug: 'sunday-kindness-be-kind-to-each-other-darlings',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/sunday-kindness-be-kind-to-each-other-darlings.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/sunday-kindness-be-kind-to-each-other-darlings',
      previewText: 'Emotion is a funny thing and it seems to have been holding my heart, very tightly, my entire life: "Deb, you are too soft," "...such a sook," "...overly sensitive." It’s who I am, so I guess it comes as no surprise that at our recent Annual General Meeting, I was once again grabbed by that emotional squeezing.',
      postDate: {
        date: '2018-06-10 15:00:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: '0% 20%',
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/Screen-Shot-2018-06-07-at-4.37.55-PM.png'
        }
      ]
    },
    {
      title: 'There is kindness in trust 💫',
      authorName: 'Xavier Masson-Leach',
      id: 1704,
      slug: 'sunday-kindness-there-is-kindness-in-trust',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/sunday-kindness-there-is-kindness-in-trust.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/sunday-kindness-there-is-kindness-in-trust',
      previewText: 'The most important aspect of trust: it lets you see the world in a new way.',
      postDate: {
        date: '2018-06-03 16:00:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: '0%',
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/Screen-Shot-2018-06-28-at-3.47.35-PM.png'
        }
      ]
    },
    {
      title: 'I believe in kindness and free coffee 😜',
      authorName: 'Pej',
      id: 1759,
      slug: 'sunday-kindness-i-believe-in-kindness-and-free-coffee',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/sunday-kindness-i-believe-in-kindness-and-free-coffee.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/sunday-kindness-i-believe-in-kindness-and-free-coffee',
      previewText: 'Kindness costs nothing - other than your time which is more valuable than anything else. Such a simple act can make a huge difference for someone\'s week, month or year.',
      postDate: {
        date: '2018-05-20 00:00:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: true,
      bannerBackgroundPosition: null,
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/Screen-Shot-2018-06-28-at-4.11.45-PM.png'
        }
      ]
    },
    {
      title: 'Wherever there is a human being, there is an opportunity for kindness 💃🏻',
      authorName: 'Superheroes of kindness',
      id: 1743,
      slug: 'sunday-kindness-wherever-there-is-a-human-being-there-is-an-opportunity-for-kindness',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/sunday-kindness-wherever-there-is-a-human-being-there-is-an-opportunity-for-kindness.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/sunday-kindness-wherever-there-is-a-human-being-there-is-an-opportunity-for-kindness',
      previewText: 'We asked a small group of humans to write how they would commit to kindness, here is the wisdom we unlocked',
      postDate: {
        date: '2018-05-13 00:00:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: '0% 80%',
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/Screen-Shot-2018-06-28-at-4.51.20-PM.png'
        }
      ]
    },
    {
      title: 'What happens when kindness spreads like wildflowers? 🌸',
      authorName: 'Kindness deliverers',
      id: 1838,
      slug: 'sunday-kindness-what-happens-when-kindness-spreads-like-wildflowers',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/sunday-kindness-what-happens-when-kindness-spreads-like-wildflowers.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/sunday-kindness-what-happens-when-kindness-spreads-like-wildflowers',
      previewText: 'It turns out simple acts create big impact. Here\'s how a $50 note sparked a movement of kindness around the world.',
      postDate: {
        date: '2018-05-06 00:00:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: null,
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/Screen-Shot-2018-06-28-at-7.11.01-PM_180628_094509.png'
        }
      ]
    },
    {
      title: 'Making the invisible visible 🙌🏾🌻',
      authorName: 'Jody Barney',
      id: 1541,
      slug: 'sunday-kindness-46',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/sunday-kindness-46.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/sunday-kindness-46',
      previewText: 'I am Jody Barney. I am a Birri-Gubba/Urangan woman from South East Queensland. I am Aboriginal, I am Deaf, I am gay, and currently I am living in rural Victoria Australia. I’m not yet 50, but I have been doing my work for exactly 30 years.',
      postDate: {
        date: '2018-03-25 00:00:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: null,
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/Sunday-copy.png'
        }
      ]
    },
    {
      title: 'Mentoring, key to a fairer world 🔑',
      authorName: 'Kabir Dhanji',
      id: 1528,
      slug: 'sunday-kindness-45',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/sunday-kindness-45.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/sunday-kindness-45',
      previewText: '“Sunday Kindness” has an established beginning that is this week forfeit, because there’s no sense in conventional beginnings; they are always shifting moments that hold still long enough for a breath, and then they’re something else, so there is no correct way for things to begin.',
      postDate: {
        date: '2018-03-18 00:00:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: '25%',
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/Kabir-2.jpg'
        }
      ]
    },
    {
      title: 'Forgiveness liberates the soul 🌿',
      authorName: 'Candice Mama',
      id: 1519,
      slug: 'sunday-kindness-44',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/sunday-kindness-44.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/sunday-kindness-44',
      previewText: 'My name is Candice Mama, I was born in 1991 in South Africa; a country that was gripped by the grossly violent and oppressive system of Apartheid and this is my story.',
      postDate: {
        date: '2018-03-11 00:00:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: null,
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/Sunday-copy-4.png'
        }
      ]
    },
    {
      title: 'Trust & human kindness. The fundamental currencies. 🙏🏾🦄',
      authorName: 'Ben Abbatangelo',
      id: 1481,
      slug: 'sunday-kindness-43',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/sunday-kindness-43.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/sunday-kindness-43',
      previewText: 'AIME Family, my name is Ben Abbatangelo and I’m the Deputy CEO at AIME. I’m penning this note as I tackle the last leg of what has been an immensely rich 10 days in Africa.',
      postDate: {
        date: '2018-03-05 14:16:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: true,
      bannerBackgroundPosition: '0% 30%',
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/untitled-4.jpg'
        }
      ]
    },
    {
      title: 'Apparel Pop Up Stores for Hottest 100',
      authorName: 'Beth Zucker',
      id: 1513,
      slug: 'apparel-pop-up-stores-for-hottest-100',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/apparel-pop-up-stores-for-hottest-100.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/apparel-pop-up-stores-for-hottest-100',
      previewText: 'Missed out on ordering a Hottest 100 tee in time for the 27th? Don\'t sweat it. We got ya back! We\'re running one-off pop up stores at locations around Aus so you\'ll be counting down your favourite tunes in style and supporting AIME.',
      postDate: {
        date: '2018-01-24 09:58:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: null,
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/Apparel-Hats.jpg'
        }
      ]
    },
    {
      title: 'The Backdrop to AIME',
      authorName: 'Jack Manning Bancroft',
      id: 2028,
      slug: 'the-backdrop-to-aime',
      jsonUrl: 'https://aimeweb-backend-production.herokuapp.com/api/stories/the-backdrop-to-aime.json',
      url: 'https://aimeweb-backend-production.herokuapp.com/story/the-backdrop-to-aime',
      previewText: 'Aboriginal and Torres Strait Islander people, the two Indigenous groups in Australia, were invaded by the British in 1788.',
      postDate: {
        date: '2017-02-26 00:00:00.000000',
        timezone_type: 3,
        timezone: 'Australia/Sydney'
      },
      isFeatured: false,
      bannerBackgroundPosition: null,
      bannerImage: [
        {
          image: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/28454321836_c40058e602_k.jpg'
        }
      ]
    }
  ],
  meta: {
    pagination: {
      total: 31,
      count: 31,
      per_page: 100,
      current_page: 1,
      total_pages: 1,
      links: [],
    },
  },
};

export const TESTIMONIALS = [
  {
    paragraph: `This book led me to redemption, redemption of my roots, my culture, my past,
      my present and my future. This is now my favourite book, to me it’s not just a
      book. It’s a reminder, telling me I am what I am and nothing or no one can
      stand in my way and tell me I’m not.`,
    signature: `- Hope Bradshaw-Wright`,
  },
  {
    paragraph: `A riveting story with eloquent prose and brutal honesty. I can't wait to read the sequel.`,
    signature: `- Patrick Orme (AIME Staffer)`,
  },
  {
    paragraph: `The messages are very clear. Sometimes you have to get knocked down lower than
      you’ve ever been, to stand up taller than you ever were before.`,
    signature: `- Rhian Miller (AIME Mentor &amp; Centre Manager)`,
  },
  {
    paragraph: `Just like AIME itself, ‘the Mentor’ is entrenched with human connection. Very
      rarely do books find a way to draw you in and unlock your mind like this book.`,
    signature: `- Emma Dunn (AIME Mentor Leader &amp; Program Assistant)`,
  },
  {
    paragraph: `The book made me reflect on my own life especially as a young Indigenous man
      who went to Uni to get the skills to change things for the people in my
      community. The Mentor challenged me to be ambitious in my actions as well as
      thoughts.`,
    signature: `- Rhys Pearcy (AIME Mentor &amp; Program Manager)`,
  },
  {
    paragraph: `Thank you for the work you have done in Australia and thank you for having the
      courage to dream bigger and go global. Thank you for sharing your inspiring
      story and continuing to take as many people as possible on such an important
      journey.`,
    signature: `- Emma Gallagher`,
  },
];
