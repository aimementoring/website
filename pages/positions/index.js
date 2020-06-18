import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Layout from '../../hocs/basicLayout';
import VideoPlayer from '../../components/videoPlayer';
import isClientSide from '../../utils/isClientSide';

import styles from './positions.module.scss';

const JobsBanner = dynamic(() => import('../../components/jobsBanner'));
const Jobs = dynamic(() => import('../../components/jobs'));

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const Positions = ({ redirected, redirectJobTitle, countryId }) => {
  const [isRedirect, setIsRedirect] = useState(redirected);
  const [jobTitle, setJobTitle] = useState(redirectJobTitle);

  const isClient = isClientSide();

  useEffect(() => {
    setIsRedirect(redirected);
    setJobTitle(redirectJobTitle);
    const currentUrl = isClient ? `/${Router.pathname.split('/')[1]}` : null;
    if (isClient && currentUrl === '/positions') {
      Router.push(currentUrl, currentUrl, { shallow: true });
    }
  }, [isClient, redirected, redirectJobTitle]);

  return (
    <Layout>
      <JobsBanner />
      <section>
        <div className={styles.contentPanel}>
          <div className={styles.flexPanel}>
            <div className={styles.containerTitle}>
              <Title type="headingLockup">
                <strong>
                  Get&nbsp;
                  <span>involved</span>
                </strong>
              </Title>
              <div>
                <Paragraph>
                  Welcome to AIME. A group that is looking to transform education
                  from the inside out, through imagination & mentoring in order to
                  create more educational equality, access to opportunities
                  and in turn a fairer world.
                </Paragraph>
                <Paragraph>
                  If you get the chance to work with us -&nbsp;
                  <mark>bring everything you have</mark>
                  , embrace our 21 mentor values,
                  and enter a world of imagining what’s possible.
                </Paragraph>
              </div>
            </div>
            <div className={styles.videoContainer}>
              <div>
                <VideoPlayer
                  url="https://player.vimeo.com/external/390403643.m3u8?s=93f254baaef717dc9591e594f84a2367b3d1ce01"
                  imageUrl={`${ASSETS_URL}/assets/images/media/vid-puppets.jpg`}
                >
                  <Paragraph className={styles.videoCaption}>Welcome to AIME</Paragraph>
                </VideoPlayer>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.positionsList}>
          {!!countryId && (
            <Jobs
              cdnUrl={ASSETS_URL}
              currentSite={countryId}
              jobTitle={jobTitle}
              isRedirect={isRedirect}
              handleRedirectHide={() => setIsRedirect(false)}
            />
          )}
        </div>
      </section>
    </Layout>
  );
};

Positions.getInitialProps = async ({ query }) => ({
  redirected: query.redirected,
  redirectJobTitle: query.redirectJobTitle,
  countryId: query.countryId || 'global',
});

Positions.propTypes = {
  redirected: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  redirectJobTitle: PropTypes.string,
  countryId: PropTypes.string,
};

Positions.defaultProps = {
  redirected: false,
  redirectJobTitle: '',
  countryId: 'global',
};

export default Positions;
