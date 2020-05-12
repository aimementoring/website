import React from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import withStyles from 'react-jss';
import Layout from '../../hocs/basicLayout';
import { SimpleBanner } from '../../components/banner/index';
import AMBASSADORS_LIST from '../../constants/ambassadorsList';

const AmbassadorBox = dynamic(() => import('../../components/ambassadorBox'));

const getStyles = (theme) => ({
  heroBanner: {
    height: '50vh',
    padding: ['35px', 0],
    background: `url(${theme.cdn}assets/images/banner/banner-pattern-blue.jpg) no-repeat top center / cover fixed ${theme.colors.cyan}`,
    [`@media screen and (min-width: ${theme.breakpoints.sm})`]: {
      padding: 0,
      height: '62vh',
    },
    '@media screen and (max-device-width: 1024px)': {
      backgroundAttachment: 'scroll',
      paddingTop: '8em',
    },
    h1: {
      textAlign: 'center',
      strong: {
        left: 'initial',
      },
    },
    maxHeight: '50vh',
  },
  bannerHeadingAmbassadors: {
    textAlign: 'center',
    [`@media screen and (min-width: ${theme.breakpoints.md})`]: {
      marginTop: '2em',
    },
    strong: {
      left: 'initial',
    },
    position: 'relative',
    maxWidth: '100%',
    width: '100%',
    color: theme.colors.white,
  },
  bannerWrapperClass: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    height: '100%',
  },
  bannerWrapper: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    h1: {
      color: theme.colors.white,
    },
  },
  sectionContainer: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
    position: 'relative',
  },
  divFirstContainer: {
    margin: [0, 'auto'],
    maxWidth: '1120px',
    overflow: 'visible',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  divSecondContainer: {
    marginBottom: '1rem',
    marginTop: 0,
    display: 'flex',
    paddingTop: '.5rem',
    [`@media screen and (min-width: ${theme.breakpoints.md}) and (max-width: ${theme.breakpoints.lg})`]: {
      paddingTop: '2rem',
      marginTop: '4rem',
    },
    [`@media screen and (min-width: ${theme.breakpoints.lg})`]: {
      paddingTop: '2rem',
      marginTop: '4rem',
    },
  },
  emptySpan: {
    width: '9%',
    height: '3px',
    borderRadius: '3px',
    transition: '.2s ease all',
    marginTop: '1em',
    backgroundColor: theme.colors.brandTertiary,
    display: 'inline-block',
    marginRight: '1rem',
    [`@media screen and (min-width: ${theme.breakpoints.md}) and (max-width: ${theme.breakpoints.lg})`]: {
      marginRight: '2rem',
    },
    [`@media screen and (min-width: ${theme.breakpoints.lg})`]: {
      marginRight: '2rem',
    },
  },
  divThirdContainer: {
    display: 'inline-block',
    paddingRight: '2em',
    h4: {
      marginBottom: '1em',
    },
    p: {
      maxWidth: '48em',
      marginBottom: '3em',
    },
  },
  divFouthContainer: {
    display: 'grid',
    gridGap: '1rem',
    flexWrap: 'wrap',
    gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
  },
});

const Ambassadors = ({ classes }) => (
  <Layout>
    <SimpleBanner
      title={<strong>People of AIME</strong>}
      titleType="headingLockup"
      titleStyleClass={classes.bannerHeadingAmbassadors}
      bannerContainerClass={classes.heroBanner}
      bannerWrapperClass={classes.bannerWrapperClass}
      bannerContentWrapperClass={classes.bannerWrapper}
      bannerContentClass="bannerContent"
    />
    <section className={classes.sectionContainer}>
      <div className={classes.divFirstContainer}>
        <div className={classes.divSecondContainer}>
          <span className={classes.emptySpan} />
          <div className={classes.divThirdContainer}>
            <Title type="h4Title" theme={process.env.REACT_APP_THEME}>
              Meet some of the people of AIME
            </Title>
            <Paragraph>
              {`Meet some people we have connected to AIME from across the world.
              Get a sense of the characters we have, from our current volunteering Mentors
              to the 2017 Global Launch Ambasadors. From Program Managers in
              Brisbane Australia to Hooded Scholars in South Africa.
              We have friends in all corners of the universe, we'll keep updating their profiles
              here to shine a light on the kindness they bring to the world.`}
            </Paragraph>
          </div>
        </div>
        <div className={classes.divFouthContainer}>
          {AMBASSADORS_LIST.map((ambassador) => (
            <AmbassadorBox {...ambassador} key={ambassador.name} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

Ambassadors.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(getStyles, { injectTheme: true })(Ambassadors);
