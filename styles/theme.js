const purple = '#9135F0';
const magenta = '#E82A9E';
const watermelon = '#FF6187';

const theme = {
  cdn: 'https://d1muvgoqe3g8vw.cloudfront.net/website/',
  breakpoints: {
    sm: '40em',
    md: '52em',
    lg: '64em',
  },
  colors: {
    black: '#000',
    grey: '#666',
    grey40: '#C6CACC',
    grey90: '#3E4345',
    mediumGrey: '#a3a3a3',
    lightGrey: '#e8e8e8',
    white: '#fff',

    /* subtle depth colours */
    blueMedium: '#669dc1',
    blueLight: '#e5eef4',
    peach: '#ffada3',
    lilac: '#f9ebff',
    lavender: '#9da1b4',
    lavenderLight: '#dde0f1',
    lavenderGrey: '#b1a9c1',

    /* CMYK campaign colours */
    cmykPink: '#e9178c',
    cmykBlue: '#1eafec',
    cmykYellow: '#fef035',
    fluroPink: '#f0c',
    fluroBlue: '#00deff',
    fluroYellow: '#ffea00',

    /* purple storm colours */
    darkestPurple: '#0d0012',
    accentPurple: '#8621df',
    accentBlue: '#31e9ff',
    accentPink: '#dc0aff',
    eggplant: '#380249',
    vibrantPurple: '#9d60ec',

    /* imagination rainbow colours */
    purple,
    magenta,
    watermelon,
    pink: '#FF91C5',
    orange: '#FFA235',
    yellow: '#FCC606',
    green: '#09CD7B',
    cyan: '#24D1F6',

    errorColor: '#ff0000',

    colorPrimary: purple,

    brandPrimary: purple,
    brandSecondary: magenta,
    brandTertiary: watermelon,

    /* Form element colours */
    defaultInputBg: '#fef6ff',
    activeInputBg: '#fff',
    defaultInputBorder: '#550d94',
    activeInputBorder: '#9013fe',
    placeholderText: '#410048c4',

    loadingBlack: 'rgba(0, 0, 0, 0.3)',
    translucentBlack: 'rgba(0, 0, 0, 0.65)',

    /* Hover colours */
    yellowHover: '#f49814',
    brandPrimaryHover: magenta,
    aimeShopColorCounter: '#f1be59',
  },
  fonts: {
    featureFontFamily: 'Poppins, Helvetica, Arial, sans-serif',
    featureFontFamilyBold: 'PoppinsBold, Helvetica, Arial, sans-serif',
    featureFontBlackItalic: 'PoppinsBlackItalic, Helvetica, Arial, sans-serif',
    bodyFontFamily: '"GT Pressura Mono", "Univers", Helvetica, Arial, sans-serif',
    bodyFontFamilyBold: '"GT Pressura Mono Bold", "Univers", Helvetica, Arial, sans-serif',
    primaryFontFamily: 'Univers, Helvetica, Arial, sans-serif',
    serifFontFamily: 'Georgia, "Times New Roman", Times, serif',
    iconFontFamily: 'Material Icons',
    signatureFontFamily: '"Indie Flower", Helvetica, Arial, sans-serif',
  },
  borderRadius: {
    borderRadius: '6px', // Forms
    borderRadiusLarge: '20px', // Feature Buttons
    borderRadiusButton: '3px', // Buttons
  },
};

export default theme;
