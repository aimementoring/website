export const GLOBAL_TAGS = {
  facebook: {
    appId: 'profile_id', // <meta content="aimementoring" property="fb:profile_id">
  },
  openGraph: {
    type: 'website',
    description: 'AIME is an Imagination Factory aiming to put a mentor in every kids life every day. Via direct deliver in 6 countries and IMAGI-NATION{TV} into the homes.',
    locale: 'en_001',
    images: [{
      width: 1200,
      height: 630,
      url: 'https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/AIME_social_share.jpg',
    }],
  },
  twitter: {
    site: '@aimementoring',
    cardType: 'summary_large_image',
    description: 'AIME is an Imagination Factory aiming to put a mentor in every kids life every day. Via direct deliver in 6 countries and IMAGI-NATION{TV} into the homes.',
    creator: '@aimementoring', // I think we cannot use this one
    image: {
      url: 'https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/AIME_social_share.jpg',
      width: 1200,
      height: 642,
    },
  },
  jsonLd: [
    {
      type: 'NGO',
      id: '#identity',
      name: 'AIME Mentoring',
      email: 'enquiries@aimementoring.com',
      founder: 'Jack Manning Bancroft',
      foundingLocation: 'Sydney, Australia',
    },
    {
      id: '#creator',
      type: 'Organization',
    },
  ],
};

export const SEO_TAGS = {
  '/': {
    title: 'AIME Mentoring',
    canonical: 'https://aimementoring.com',
    languageAlternate: {
      href: 'https://aimementoring.com/',
      hrefLang: 'x-default',
    },
    description: 'We build mentoring bridges between the powerful and the powerless. We believe a permanent shift in mindset can end the cycle of disadvantage.',
    openGraph: {
      url: 'https://aimementoring.com',
      title: 'AIME Mentoring',
    },
    twitter: {
      title: 'AIME Mentoring',
    },
    jsonLd: [
      {
        type: 'Article',
        authorName: '#identity',
        copyrightHolder: '#identity',
        copyrightYear: '2018-02-15T16:13:50+11:00',
        creatorName: '#creator',
        dateModified: '2018-09-22T11:52:10+10:00',
        datePublished: '2018-02-15T16:13:50+11:00',
        description: 'We build mentoring bridges between the powerful and the powerless. We believe a permanent shift in mindset can end the cycle of disadvantage.',
        title: 'AIME Mentoring',
        images: ['https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/AIME_social_share.jpg'],
        additionalMetaTags: [
          {
            property: 'inLanguage',
            content: 'en-001',
          },
          {
            property: 'mainEntityOfPage',
            content: 'https://aimementoring.com',
          },
        ],
        name: 'AIME Mentoring',
        publisherName: '#creator',
        url: 'https://aimementoring.com',
      },
      {
        type: 'BreadcrumbList',
        itemListElement: [
          {
            position: 1,
            name: 'Home',
            item: 'https://aimementoring.com/',
          },
        ],
      },
    ],
  },
  '/imagi-nation-tv': {
    title: 'IMAGI-NATION{TV}',
    canonical: 'https://aimementoring.com/imagi-nation-tv',
    languageAlternate: {
      href: 'https://aimementoring.com/imagi-nation-tv',
      hrefLang: 'x-default',
    },
    description: 'We build mentoring bridges between the powerful and the powerless. We believe a permanent shift in mindset can end the cycle of disadvantage.',
    openGraph: {
      url: 'https://aimementoring.com/imagi-nation-tv',
      title: 'IMAGI-NATION{TV}',
      images: [{
        width: 1200,
        height: 630,
        url: 'https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/intv_social_share.jpg',
      }],
    },
    twitter: {
      site: '@aimementoring',
      title: 'IMAGI-NATION{TV}',
      url: 'https://aimementoring.com/imagi-nation-tv',
      image: {
        url: 'https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/intv_social_share.jpg',
        width: 1200,
        height: 642,
      },
    },
    jsonLd: [
      {
        type: 'Article',
        authorName: '#identity',
        copyrightHolder: '#identity',
        copyrightYear: '2018-02-15T16:13:50+11:00',
        creatorName: '#creator',
        dateModified: '2018-09-22T11:52:10+10:00',
        datePublished: '2018-02-15T16:13:50+11:00',
        description: 'We build mentoring bridges between the powerful and the powerless. We believe a permanent shift in mindset can end the cycle of disadvantage.',
        title: 'IMAGI-NATION{TV}',
        images: ['https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/intv_social_share.jpg'],
        additionalMetaTags: [
          {
            property: 'inLanguage',
            content: 'en-001',
          },
          {
            property: 'mainEntityOfPage',
            content: 'https://aimementoring.com/imagi-nation-tv',
          },
        ],
        name: 'IMAGI-NATION{TV}',
        publisherName: '#creator',
        url: 'https://aimementoring.com/imagi-nation-tv',
      },
    ],
  },
  '/ambassadors': {
    title: 'Ambassadors',
    canonical: 'https://aimementoring.com/ambassadors',
    languageAlternate: {
      href: 'https://aimementoring.com/ambassadors',
      hrefLang: 'x-default',
    },
    description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
    openGraph: {
      url: 'https://aimementoring.com/ambassadors',
      title: 'Ambassadors',
    },
    twitter: {
      title: 'Ambassadors',
    },
    jsonLd: [
      {
        url: 'https://aimementoring.com/ambassadors',
        title: 'Ambassadors',
        images: ['https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/AIME_social_share.jpg'],
        datePublished: '2018-02-21T12:38:51+11:00',
        dateModified: '2018-03-07T11:33:06+11:00',
        description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
        type: 'Article',
        authorName: '#identity',
        copyrightHolder: '#identity',
        copyrightYear: '2018-02-21T12:38:51+11:00',
        creatorName: '#creator',
        additionalMetaTags: [
          {
            property: 'inLanguage',
            content: 'en-001',
          },
          {
            property: 'mainEntityOfPage',
            content: 'https://aimementoring.com/ambassadors',
          },
        ],
        name: 'Ambassadors',
        publisherName: '#creator',
      },
      {
        type: 'BreadcrumbList',
        itemListElement: [
          {
            position: 1,
            name: 'Home',
            item: 'https://aimementoring.com/',
          },
          {
            position: 2,
            name: 'Ambassadors',
            item: 'https://aimementoring.com/ambassadors',
          },
        ],
      },
    ],
  },
  '/be-a-mentor': {
    title: 'Be an AIME Mentor',
    canonical: 'https://aimementoring.com/be-a-mentor',
    languageAlternate: {
      href: 'https://aimementoring.com/be-a-mentor',
      hrefLang: 'x-default',
    },
    description: 'AIME is a mentoring bridge between university and high school. On that bridge, there are two lanes. One lane has university students making their way to high schools to deliver free tutoring. On the other, school buses travel to university campuses where students participate in mentoring workshops.',
    openGraph: {
      url: 'https://aimementoring.com/be-a-mentor',
      title: 'Be an AIME Mentor',
    },
    twitter: {
      title: 'Be an AIME Mentor',
    },
    jsonLd: [
      {
        url: 'https://aimementoring.com/be-a-mentor',
        title: 'Be an AIME Mentor',
        images: ['https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/AIME_social_share.jpg'],
        datePublished: '2018-02-12T15:52:47+11:00',
        dateModified: '2018-08-20T10:47:16+10:00',
        description: 'AIME is a mentoring bridge between university and high school. On that bridge, there are two lanes. One lane has university students making their way to high schools to deliver free tutoring. On the other, school buses travel to university campuses where students participate in mentoring workshops.',
        type: 'Article',
        authorName: '#identity',
        copyrightHolder: '#identity',
        copyrightYear: '2018-02-12T15:52:47+11:00',
        creatorName: '#creator',
        additionalMetaTags: [
          {
            property: 'inLanguage',
            content: 'en-001',
          },
          {
            property: 'mainEntityOfPage',
            content: 'https://aimementoring.com/be-a-mentor',
          },
        ],
        name: 'Be an AIME Mentor',
        publisherName: '#creator',
      },
      {
        type: 'BreadcrumbList',
        itemListElement: [
          {
            position: 1,
            name: 'Home',
            item: 'https://aimementoring.com/',
          },
          {
            position: 2,
            name: 'Be a Mentor',
            item: 'https://aimementoring.com/be-a-mentor',
          },
        ],
      },
    ],
  },
  '/about': {
    title: 'About AIME Mentoring',
    canonical: 'https://aimementoring.com/about',
    languageAlternate: {
      href: 'https://aimementoring.com/about',
      hrefLang: 'x-default',
    },
    description: 'We are driven to unlock the limitless potential of children who have been left behind. We do that by building mentoring bridges between universities and high schools, between the powerful and the powerless, the haves and the have nots.',
    openGraph: {
      url: 'https://aimementoring.com/about',
      title: 'About AIME Mentoring',
    },
    twitter: {
      title: 'About AIME Mentoring',
    },
    articleJsonLd: [
      {
        url: 'https://aimementoring.com/about',
        title: 'About AIME Mentoring',
        images: ['https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/AIME_social_share.jpg'],
        datePublished: '2018-02-05T10:24:38+11:00',
        dateModified: '2018-03-07T11:36:14+11:00',
        description: 'We are driven to unlock the limitless potential of children who have been left behind. We do that by building mentoring bridges between universities and high schools, between the powerful and the powerless, the haves and the have nots.',
        type: 'Article',
        authorName: '#identity',
        copyrightHolder: '#identity',
        copyrightYear: '2018-02-05T10:24:38+11:00',
        creatorName: '#creator',
        additionalMetaTags: [
          {
            property: 'inLanguage',
            content: 'en-001',
          },
          {
            property: 'mainEntityOfPage',
            content: 'https://aimementoring.com/about',
          },
        ],
        name: 'About AIME Mentoring',
        publisherName: '#creator',
      },
      {
        type: 'BreadcrumbList',
        itemListElement: [
          {
            position: 1,
            name: 'Home',
            item: 'https://aimementoring.com/',
          },
          {
            position: 2,
            name: 'About',
            item: 'https://aimementoring.com/about',
          },
        ],
      },
    ],
  },
  '/reports/2016-annual-story': {
    title: '2016 Annual Story',
    canonical: 'https://aimementoring.com/reports/2016-annual-story',
    languageAlternate: {
      href: 'https://aimementoring.com/reports/2016-annual-story',
      hrefLang: 'x-default',
    },
    description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
    openGraph: {
      url: 'https://aimementoring.com/reports/2016-annual-story',
      title: '2016 Annual Story',
    },
    twitter: {
      title: '2016 Annual Story',
    },
    articleJsonLd: [
      {
        type: 'Article',
        authorName: '#identity',
        copyrightHolder: '#identity',
        copyrightYear: '2016-02-20T19:19:00+11:00',
        creatorName: '#creator',
        dateModified: '2019-01-09T05:35:36+11:00',
        datePublished: '2016-02-20T19:19:00+11:00',
        description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
        title: '2016 Annual Story',
        images: ['https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/AIME_social_share.jpg'],
        name: '2016 Annual Story',
        publisherName: '#creator',
        url: 'https://aimementoring.com/reports/2016-annual-story',
      },
      {
        type: 'BreadcrumbList',
        itemListElement: [
          {
            position: 1,
            name: 'Home',
            item: 'https://aimementoring.com/',
          },
          {
            position: 2,
            name: 'Report Index',
            item: 'https://aimementoring.com/reports',
          },
          {
            position: 3,
            name: '2016 Annual Story',
            item: 'https://aimementoring.com/reports/2016-annual-story',
          },
        ],
      },
    ],
  },
  '/case-studies': {
    description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
    openGraph: {
      url: 'https://aimementoring.com/case-studies',
      title: 'Case Studies',
    },
    twitter: {
      title: 'Case Studies',
    },
    canonical: 'https://aimementoring.com/case-studies',
    languageAlternate: {
      href: 'https://aimementoring.com/case-studies',
      hrefLang: 'x-default',
    },
    title: 'Case Studies',
    jsonLd: [
      {
        type: 'Article',
        authorName: '#identity',
        copyrightHolder: '#identity',
        copyrightYear: '2018-09-21T08:23:00+10:00',
        creatorName: '#creator',
        dateModified: '2018-09-21T08:23:49+10:00',
        datePublished: '2018-09-21T08:23:00+10:00',
        description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
        title: 'Case Studies',
        images: ['https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/AIME_social_share.jpg'],
        additionalMetaTags: [
          {
            property: 'inLanguage',
            content: 'en-001',
          },
          {
            property: 'mainEntityOfPage',
            content: 'https://aimementoring.com/case-studies',
          },
        ],
        name: 'Case Studies',
        publisherName: '#creator',
        url: 'https://aimementoring.com/case-studies',
      },
      {
        type: 'BreadcrumbList',
        itemListElement: [
          {
            position: 1,
            name: 'Home',
            item: 'https://aimementoring.com/',
          },
          {
            position: 2,
            name: 'Ambassadors',
            item: 'https://aimementoring.com/case-studies',
          },
        ],
      },
    ],
  },
  '/donate': {
    description: 'To change the world, we need to change the way it works! You have the opportunity to make a difference!',
    openGraph: {
      url: 'https://aimementoring.com/donate',
      title: 'Donate to AIME Mentoring',
    },
    twitter: {
      title: 'Donate to AIME Mentoring',
    },
    canonical: 'https://aimementoring.com/donate',
    languageAlternate: {
      href: 'https://aimementoring.com/donate',
      hrefLang: 'x-default',
    },
    title: 'Donate to AIME Mentoring',
    jsonLd: [
      {
        type: 'Article',
        authorName: '#identity',
        copyrightHolder: '#identity',
        copyrightYear: '2018-02-23T12:12:22+11:00',
        creatorName: '#creator',
        dateModified: '2018-06-19T06:13:41+10:00',
        datePublished: '2018-02-23T12:12:22+11:00',
        description: 'To change the world, we need to change the way it works! You have the opportunity to make a difference!',
        title: 'Donate to AIME Mentoring',
        images: ['https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/AIME_social_share.jpg'],
        additionalMetaTags: [
          {
            property: 'inLanguage',
            content: 'en-001',
          },
          {
            property: 'mainEntityOfPage',
            content: 'https://aimementoring.com/donate',
          },
        ],
        name: 'Donate to AIME Mentoring',
        publisherName: '#creator',
        url: 'https://aimementoring.com/donate',
      },
      {
        type: 'BreadcrumbList',
        itemListElement: [
          {
            position: 1,
            name: 'Home',
            item: 'https://aimementoring.com/',
          },
          {
            position: 2,
            name: 'Donate',
            item: 'https://aimementoring.com/donate',
          },
        ],
      },
    ],
  },
  '/eoi': {
    title: 'AIME Mentoring',
    languageAlternate: {
      href: 'https://aimementoring.com/actions/seomatic/meta-container/all-meta-containers',
      hrefLang: 'x-default',
    },
    description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
    openGraph: {
      url: 'https://aimementoring.com/actions/seomatic/meta-container/all-meta-containers',
      title: 'AIME Mentoring',
    },
    twitter: {
      title: 'AIME Mentoring',
    },
    jsonLd: [
      {
        type: 'WebSite',
        authorName: '#identity',
        copyrightHolder: '#identity',
        creatorName: '#creator',
        description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
        images: ['https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/AIME_social_share.jpg'],
        mainEntityOfPage: 'https://aimementoring.com/actions/seomatic/meta-container/all-meta-containers',
        name: 'AIME Mentoring',
        url: 'https://aimementoring.com/actions/seomatic/meta-container/all-meta-containers',
      },
      {
        type: 'BreadcrumbList',
        itemListElement: [
          {
            position: 1,
            name: 'Home',
            item: 'https://aimementoring.com/',
          },
        ],
      },
    ],
  },
  '/dynamicEOI': {
    title: 'AIME Mentoring',
    languageAlternate: {
      href: 'https://aimementoring.com/actions/seomatic/meta-container/all-meta-containers',
      hrefLang: 'x-default',
    },
    description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
    openGraph: {
      url: 'https://aimementoring.com/actions/seomatic/meta-container/all-meta-containers',
      title: 'AIME Mentoring',
    },
    twitter: {
      title: 'AIME Mentoring',
    },
    jsonLd: [
      {
        type: 'WebSite',
        authorName: '#identity',
        copyrightHolder: '#identity',
        creatorName: '#creator',
        description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
        images: ['https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/AIME_social_share.jpg'],
        mainEntityOfPage: 'https://aimementoring.com/actions/seomatic/meta-container/all-meta-containers',
        name: 'AIME Mentoring',
        url: 'https://aimementoring.com/actions/seomatic/meta-container/all-meta-containers',
      },
      {
        type: 'BreadcrumbList',
        itemListElement: [
          {
            position: 1,
            name: 'Home',
            item: 'https://aimementoring.com/',
          },
        ],
      },
    ],
  },
  '/jack-manning-bancroft': {
    title: 'Jack Manning Bancroft - Founder & CEO of AIME Mentoring',
    canonical: 'https://aimementoring.com/jack-manning-bancroft',
    languageAlternate: {
      href: 'https://aimementoring.com/jack-manning-bancroft',
      hrefLang: 'x-default',
    },
    description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
    openGraph: {
      url: 'https://aimementoring.com/jack-manning-bancroft',
      title: 'Jack Manning Bancroft - Founder &amp; CEO of AIME Mentoring',
      images: [
        {
          width: 1200,
          height: 630,
          url: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/_1200x630_crop_center-center_82_none/JMB@2x-min.jpg',
        },
      ],
    },
    twitter: {
      title: 'Jack Manning Bancroft - Founder &amp; CEO of AIME Mentoring',
      image: {
        width: 800,
        height: 800,
        url: 'https://d2ylaz7bdw65jx.cloudfront.net/resources/_800x800_crop_center-center_82_none/JMB@2x-min.jpg',
      },
    },
    jsonLd: [
      {
        type: 'Article',
        authorName: '#identity',
        copyrightHolder: '#identity',
        copyrightYear: '2018-02-15T10:42:37+11:00',
        creatorName: '#creator',
        dateModified: '2018-09-21T20:49:48+10:00',
        datePublished: '2018-02-15T10:42:37+11:00',
        description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
        title: 'Jack Manning Bancroft - Founder & CEO of AIME Mentoring',
        images: ['https://d2ylaz7bdw65jx.cloudfront.net/resources/_1200x630_crop_center-center_82_none/JMB@2x-min.jpg'],
        additionalMetaTags: [
          {
            property: 'inLanguage',
            content: 'en-001',
          },
          {
            property: 'mainEntityOfPage',
            content: 'https://aimementoring.com/jack-manning-bancroft',
          },
        ],
        name: 'Jack Manning Bancroft - Founder & CEO of AIME Mentoring',
        publisherName: '#creator',
        url: 'https://aimementoring.com/jack-manning-bancroft',
      },
      {
        type: 'BreadcrumbList',
        itemListElement: [
          {
            position: 1,
            name: 'Home',
            item: 'https://aimementoring.com/',
          },
          {
            position: 2,
            name: 'Founder & CEO',
            item: 'https://aimementoring.com/jack-manning-bancroft',
          },
        ],
      },
    ],
  },
  '/global-letter': {
    title: 'Global Letter',
    canonical: 'https://aimementoring.com/global-letter',
    languageAlternate: {
      href: 'https://aimementoring.com/global-letter',
      hrefLang: 'x-default',
    },
    description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
    openGraph: {
      url: 'https://aimementoring.com/global-letter',
      title: 'Global Letter',
    },
    twitter: {
      title: 'Global Letter',
    },
    jsonLd: [
      {
        type: 'Article',
        authorName: '#identity',
        copyrightHolder: '#identity',
        copyrightYear: '2018-02-19T18:31:49+11:00',
        creatorName: '#creator',
        dateModified: '2018-09-21T20:49:59+10:00',
        datePublished: '2018-02-19T18:31:49+11:00',
        description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
        title: 'Global Letter',
        images: ['https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/AIME_social_share.jpg'],
        additionalMetaTags: [
          {
            property: 'inLanguage',
            content: 'en-001',
          },
          {
            property: 'mainEntityOfPage',
            content: 'https://aimementoring.com/global-letter',
          },
        ],
        name: 'Global Letter',
        publisherName: '#creator',
        url: 'https://aimementoring.com/global-letter',
      },
      {
        type: 'BreadcrumbList',
        itemListElement: [
          {
            position: 1,
            name: 'Home',
            item: 'https://aimementoring.com/',
          },
          {
            position: 2,
            name: 'Global Letter',
            item: 'https://aimementoring.com/global-letter',
          },
        ],
      },
    ],
  },
  '/going-global': {
    title: 'AIME Mentoring',
    languageAlternate: {
      href: 'https://aimementoring.com/actions/seomatic/meta-container/all-meta-containers',
      hrefLang: 'x-default',
    },
    description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
    openGraph: {
      url: 'https://aimementoring.com/actions/seomatic/meta-container/all-meta-containers',
      title: 'AIME Mentoring',
    },
    twitter: {
      title: 'AIME Mentoring',
    },
    jsonLd: [
      {
        type: 'WebSite',
        authorName: '#identity',
        copyrightHolder: '#identity',
        creatorName: '#creator',
        description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
        images: ['https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/AIME_social_share.jpg'],
        mainEntityOfPage: 'https://aimementoring.com/actions/seomatic/meta-container/all-meta-containers',
        name: 'AIME Mentoring',
        url: 'https://aimementoring.com/actions/seomatic/meta-container/all-meta-containers',
      },
      {
        type: 'BreadcrumbList',
        itemListElement: [
          {
            position: 1,
            name: 'Home',
            item: 'https://aimementoring.com/',
          },
        ],
      },
    ],
  },
  '/hooded-scholar': {
    title: 'The Hooded Scholar Scholarship from AIME Mentoring',
    canonical: 'https://aimementoring.com/hooded-scholar/',
    languageAlternate: {
      href: 'https://aimementoring.com/hooded-scholar',
      hrefLang: 'x-default',
    },
    description: 'For the first time ever, AIME Mentoring is offering the chance for 200 US College students to have the chance to become &quot;The Hooded Scholar&quot; and lead a mentoring movement out of their campus to lift kids out of inequality.',
    openGraph: {
      url: 'https://aimementoring.com/hooded-scholar/',
      title: 'The Hooded Scholar Scholarship from AIME Mentoring',
    },
    twitter: {
      title: 'The Hooded Scholar Scholarship from AIME Mentoring',
    },
    jsonLd: [
      {
        type: 'Article',
        authorName: '#identity',
        copyrightHolder: '#identity',
        copyrightYear: '2018-10-01T21:23:00+10:00',
        creatorName: '#creator',
        dateModified: '2018-10-01T21:23:28+10:00',
        datePublished: '2018-10-01T21:23:00+10:00',
        description: 'For the first time ever, AIME Mentoring is offering the chance for 200 US College students to have the chance to become "The Hooded Scholar" and lead a mentoring movement out of their campus to lift kids out of inequality.',
        title: 'The Hooded Scholar Scholarship from AIME Mentoring',
        images: ['https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/AIME_social_share.jpg'],
        additionalMetaTags: [
          {
            property: 'inLanguage',
            content: 'en-001',
          },
          {
            property: 'mainEntityOfPage',
            content: 'https://aimementoring.com/hooded-scholar/',
          },
        ],
        name: 'The Hooded Scholar Scholarship from AIME Mentoring',
        publisherName: '#creator',
        url: 'https://aimementoring.com/hooded-scholar/',
      },
      {
        type: 'BreadcrumbList',
        itemListElement: [
          {
            position: 1,
            name: 'Home',
            item: 'https://aimementoring.com/',
          },
          {
            position: 2,
            name: 'Hooded Scholar',
            item: 'https://aimementoring.com/hooded-scholar',
          },
        ],
      },
    ],
  },
  '/impact': {
    title: 'Impact',
    canonical: 'https://aimementoring.com/impact',
    languageAlternate: {
      href: 'https://aimementoring.com/impact',
      hrefLang: 'x-default',
    },
    description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
    openGraph: {
      url: 'https://aimementoring.com/impact',
      title: 'Impact',
    },
    twitter: {
      title: 'Impact',
    },
    jsonLd: [
      {
        type: 'Article',
        authorName: '#identity',
        copyrightHolder: '#identity',
        copyrightYear: '2018-02-21T16:06:02+11:00',
        creatorName: '#creator',
        dateModified: '2018-02-21T16:06:02+11:00',
        datePublished: '2018-02-21T16:06:02+11:00',
        description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
        title: 'Impact',
        images: ['https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/AIME_social_share.jpg'],
        additionalMetaTags: [
          {
            property: 'inLanguage',
            content: 'en-001',
          },
          {
            property: 'mainEntityOfPage',
            content: 'https://aimementoring.com/impact',
          },
        ],
        name: 'Impact',
        publisherName: '#creator',
        url: 'https://aimementoring.com/impact',
      },
      {
        type: 'BreadcrumbList',
        itemListElement: [
          {
            position: 1,
            name: 'Home',
            item: 'https://aimementoring.com/',
          },
          {
            position: 2,
            name: 'Impact',
            item: 'https://aimementoring.com/impact',
          },
        ],
      },
    ],
  },
  '/know-aime': {
    title: 'Know AIME',
    canonical: 'https://aimementoring.com/know-aime',
    languageAlternate: {
      href: 'https://aimementoring.com/know-aime',
      hrefLang: 'x-default',
    },
    description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
    openGraph: {
      url: 'https://aimementoring.com/know-aime',
      title: 'Know AIME',
    },
    twitter: {
      title: 'Know AIME',
    },
    jsonLd: [
      {
        type: 'Article',
        authorName: '#identity',
        copyrightHolder: '#identity',
        copyrightYear: '2018-08-20T20:46:00+10:00',
        creatorName: '#creator',
        dateModified: '2018-09-21T20:49:57+10:00',
        datePublished: '2018-08-20T20:46:00+10:00',
        description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
        title: 'Know AIME',
        images: ['https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/AIME_social_share.jpg'],
        additionalMetaTags: [
          {
            property: 'inLanguage',
            content: 'en-001',
          },
          {
            property: 'mainEntityOfPage',
            content: 'https://aimementoring.com/know-aime',
          },
        ],
        name: 'Know AIME',
        publisherName: '#creator',
        url: 'https://aimementoring.com/know-aime',
      },
      {
        type: 'BreadcrumbList',
        itemListElement: [
          {
            position: 1,
            name: 'Home',
            item: 'https://aimementoring.com/',
          },
          {
            position: 2,
            name: 'Know AIME',
            item: 'https://aimementoring.com/know-aime',
          },
        ],
      },
    ],
  },
  '/positions': {
    title: 'Work at AIME Mentoring',
    canonical: 'https://aimementoring.com/positions',
    languageAlternate: {
      href: 'https://aimementoring.com/positions',
      hrefLang: 'x-default',
    },
    description: 'We ranked 12th best place to work in Asia for 2016.',
    openGraph: {
      url: 'https://aimementoring.com/positions',
      title: 'Work at AIME Mentoring',
    },
    twitter: {
      title: 'Work at AIME Mentoring',
    },
    jsonLd: [
      {
        type: 'Article',
        authorName: '#identity',
        copyrightHolder: '#identity',
        copyrightYear: '2018-04-19T10:16:13+10:00',
        creatorName: '#creator',
        dateModified: '2018-09-21T20:49:45+10:00',
        datePublished: '2018-04-19T10:16:13+10:00',
        description: 'We ranked 12th best place to work in Asia for 2016.',
        title: 'Work at AIME Mentoring',
        images: ['https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/AIME_social_share.jpg'],
        additionalMetaTags: [
          {
            property: 'inLanguage',
            content: 'en-001',
          },
          {
            property: 'mainEntityOfPage',
            content: 'https://aimementoring.com/positions',
          },
        ],
        name: 'Work at AIME Mentoring',
        publisherName: '#creator',
        url: 'https://aimementoring.com/positions',
      },
      {
        type: 'BreadcrumbList',
        itemListElement: [
          {
            position: 1,
            name: 'Home',
            item: 'https://aimementoring.com/',
          },
          {
            position: 2,
            name: 'Positions',
            item: 'https://aimementoring.com/positions',
          },
        ],
      },
    ],
  },
  '/quizzes': {
    title: 'Quizzes',
    canonical: 'https://aimementoring.com/quizzes',
    languageAlternate: {
      href: 'https://aimementoring.com/quizzes',
      hrefLang: 'x-default',
    },
    description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
    openGraph: {
      url: 'https://aimementoring.com/quizzes',
      title: 'Quizzes',
    },
    twitter: {
      title: 'Quizzes',
    },
    jsonLd: [
      {
        type: 'Article',
        authorName: '#identity',
        copyrightHolder: '#identity',
        copyrightYear: '2018-04-09T10:44:58+10:00',
        creatorName: '#creator',
        dateModified: '2018-04-09T10:46:19+10:00',
        datePublished: '2018-04-09T10:44:58+10:00',
        description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
        title: 'Quizzes',
        images: ['https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/AIME_social_share.jpg'],
        additionalMetaTags: [
          {
            property: 'inLanguage',
            content: 'en-001',
          },
          {
            property: 'mainEntityOfPage',
            content: 'https://aimementoring.com/quizzes',
          },
        ],
        name: 'Quizzes',
        publisherName: '#creator',
        url: 'https://aimementoring.com/quizzes',
      },
      {
        type: 'BreadcrumbList',
        itemListElement: [
          {
            position: 1,
            name: 'Home',
            item: 'https://aimementoring.com/',
          },
          {
            position: 2,
            name: 'Quizzes',
            item: 'https://aimementoring.com/quizzes',
          },
        ],
      },
    ],
  },
  '/reports': {
    title: 'AIME Reports',
    canonical: 'https://aimementoring.com/reports',
    languageAlternate: {
      href: 'https://aimementoring.com/reports',
      hrefLang: 'x-default',
    },
    description: 'Read all about the effects and progress that occur in the AIME Program.',
    openGraph: {
      url: 'https://aimementoring.com/reports',
      title: 'AIME Reports',
    },
    twitter: {
      title: 'AIME Reports',
    },
    jsonLd: [
      {
        type: 'Article',
        authorName: '#identity',
        copyrightHolder: '#identity',
        copyrightYear: '2018-02-21T12:51:52+11:00',
        creatorName: '#creator',
        dateModified: '2018-03-07T11:32:55+11:00',
        datePublished: '2018-02-21T12:51:52+11:00',
        description: 'Read all about the effects and progress that occur in the AIME Program.',
        title: 'AIME Reports',
        images: ['https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/AIME_social_share.jpg'],
        additionalMetaTags: [
          {
            property: 'inLanguage',
            content: 'en-001',
          },
          {
            property: 'mainEntityOfPage',
            content: 'https://aimementoring.com/reports',
          },
        ],
        name: 'AIME Reports',
        publisherName: '#creator',
        url: 'https://aimementoring.com/reports',
      },
      {
        type: 'BreadcrumbList',
        itemListElement: [
          {
            position: 1,
            name: 'Home',
            item: 'https://aimementoring.com/',
          },
          {
            position: 2,
            name: 'Report Index',
            item: 'https://aimementoring.com/reports',
          },
        ],
      },
    ],
  },
  '/stories': {
    title: 'AIME Stories of Sunday Kindness',
    canonical: 'https://aimementoring.com/stories',
    languageAlternate: {
      href: 'https://aimementoring.com/stories',
      hrefLang: 'x-default',
    },
    description: 'At AIME we are confusingly kind. Deal with it! Every Sunday we share stories of hope, positivity and change. Kindness doesn&#039;t cost a thing. Let&#039;s sprinkle it everywhere!',
    openGraph: {
      url: 'https://aimementoring.com/stories',
      title: 'AIME Stories of Sunday Kindness',
    },
    twitter: {
      title: 'AIME Stories of Sunday Kindness',
    },
    jsonLd: [
      {
        type: 'Article',
        authorName: '#identity',
        copyrightHolder: '#identity',
        copyrightYear: '2018-02-21T11:56:33+11:00',
        creatorName: '#creator',
        dateModified: '2018-03-07T11:33:16+11:00',
        datePublished: '2018-02-21T11:56:33+11:00',
        description: "At AIME we are confusingly kind. Deal with it! Every Sunday we share stories of hope, positivity and change. Kindness doesn't cost a thing. Let's sprinkle it everywhere!",
        title: 'AIME Stories of Sunday Kindness',
        images: ['https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/AIME_social_share.jpg'],
        additionalMetaTags: [
          {
            property: 'inLanguage',
            content: 'en-001',
          },
          {
            property: 'mainEntityOfPage',
            content: 'https://aimementoring.com/stories',
          },
        ],
        name: 'AIME Stories of Sunday Kindness',
        publisherName: '#creator',
        url: 'https://aimementoring.com/stories',
      },
      {
        type: 'BreadcrumbList',
        itemListElement: [
          {
            position: 1,
            name: 'Home',
            item: 'https://aimementoring.com/',
          },
          {
            position: 2,
            name: 'Stories',
            item: 'https://aimementoring.com/stories',
          },
        ],
      },
    ],
  },
  '/terms-of-service': {
    title: 'Terms of Service',
    languageAlternate: {
      href: 'https://aimementoring.com/actions/seomatic/meta-container/all-meta-containers',
      hrefLang: 'x-default',
    },
    description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
    openGraph: {
      url: 'https://aimementoring.com/actions/seomatic/meta-container/all-meta-containers',
      title: 'AIME Mentoring',
    },
    twitter: {
      title: 'AIME Mentoring',
    },
    jsonLd: [
      {
        type: 'WebSite',
        authorName: '#identity',
        copyrightHolder: '#identity',
        creatorName: '#creator',
        description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
        images: ['https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/AIME_social_share.jpg'],
        mainEntityOfPage: 'https://aimementoring.com/actions/seomatic/meta-container/all-meta-containers',
        name: 'AIME Mentoring',
        url: 'https://aimementoring.com/actions/seomatic/meta-container/all-meta-containers',
      },
      {
        type: 'BreadcrumbList',
        itemListElement: [
          {
            position: 1,
            name: 'Home',
            item: 'https://aimementoring.com/',
          },
        ],
      },
    ],
  },
  '/thanks': {
    title: 'Thanks',
    canonical: 'https://aimementoring.com/thanks',
    languageAlternate: {
      href: 'https://aimementoring.com/thanks',
      hrefLang: 'x-default',
    },
    description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
    openGraph: {
      url: 'https://aimementoring.com/thanks',
      title: 'Thanks',
    },
    twitter: {
      title: 'Thanks',
    },
    jsonLd: [
      {
        type: 'Article',
        authorName: '#identity',
        copyrightHolder: '#identity',
        copyrightYear: '2018-09-21T08:25:00+10:00',
        creatorName: '#creator',
        dateModified: '2018-09-21T08:25:38+10:00',
        datePublished: '2018-09-21T08:25:00+10:00',
        description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
        title: 'Thanks',
        images: ['https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/AIME_social_share.jpg'],
        additionalMetaTags: [
          {
            property: 'inLanguage',
            content: 'en-001',
          },
          {
            property: 'mainEntityOfPage',
            content: 'https://aimementoring.com/thanks',
          },
        ],
        name: 'Thanks',
        publisherName: '#creator',
        url: 'https://aimementoring.com/thanks',
      },
      {
        type: 'BreadcrumbList',
        itemListElement: [
          {
            position: 1,
            name: 'Home',
            item: 'https://aimementoring.com/',
          },
          {
            position: 2,
            name: 'Thanks',
            item: 'https://aimementoring.com/thanks',
          },
        ],
      },
    ],
  },
  '/the-mentor': {
    title: 'The Mentor',
    canonical: 'https://aimementoring.com/the-mentor',
    languageAlternate: {
      href: 'https://aimementoring.com/the-mentor',
      hrefLang: 'x-default',
    },
    description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
    openGraph: {
      url: 'https://aimementoring.com/the-mentor',
      title: 'The Mentor',
    },
    twitter: {
      title: 'The Mentor',
    },
    jsonLd: [
      {
        type: 'Article',
        authorName: '#identity',
        copyrightHolder: '#identity',
        copyrightYear: '2018-09-21T08:22:00+10:00',
        creatorName: '#creator',
        dateModified: '2018-09-21T08:22:36+10:00',
        datePublished: '2018-09-21T08:22:00+10:00',
        description: 'We build mentoring bridges between the powerful and the powerless. We are driven to unlock the limitless potential of children who have been left behind and we believe a permanent shift in mindset can end the cycle of disadvantage.',
        title: 'The Mentor',
        images: ['https://d2ylaz7bdw65jx.cloudfront.net/website/resources/social_share/AIME_social_share.jpg'],
        additionalMetaTags: [
          {
            property: 'inLanguage',
            content: 'en-001',
          },
          {
            property: 'mainEntityOfPage',
            content: 'https://aimementoring.com/the-mentor',
          },
        ],
        name: 'The Mentor',
        publisherName: '#creator',
        url: 'https://aimementoring.com/the-mentor',
      },
      {
        type: 'BreadcrumbList',
        itemListElement: [
          {
            position: 1,
            name: 'Home',
            item: 'https://aimementoring.com/',
          },
          {
            position: 2,
            name: 'The Mentor',
            item: 'https://aimementoring.com/the-mentor',
          },
        ],
      },
    ],
  },
};
