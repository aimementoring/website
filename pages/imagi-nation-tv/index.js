import React from 'react';
// import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import Layout from '../../hocs/basicLayout';
// import CASE_STUDIES from '../../constants/caseStudiesList';
// import VideoPlayer from '../../components/videoPlayer';
import styles from './styles.module.scss';

// const CaseStudyBox = dynamic(() => import('../../components/caseStudyBox'));
const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const ImagiNationTV = () => (
  <Layout>

    <div className={styles.heroBannerImagiTV}>
      <div className={styles.subpageBannerWrapper}>
        <div className={styles.bannerContent}>
          <Title className={styles.welcomeTitle} type="h3Title" theme={process.env.REACT_APP_THEME}>
            Welcome to
            <strong className={styles.hiddenTitle}>Imagi-Nation TV</strong>
            <img
              src={`${ASSETS_URL}/assets/images/logos/logo_imagitv@2x.png`}
              alt="Imagi-Nation TV"
              className={styles.logoImagiTV}
            />
          </Title>
        </div>
      </div>
      <div className={styles.videoContainerFeature}>
        <a href="https://www.youtube.com/user/aimementoring/live" target="_blank" rel="noopener noreferrer">
          <img
            src={`${ASSETS_URL}/assets/images/illustrations/imagi-robot-soon@2x.gif`}
            alt="Imagi-nation TV"
            className={styles.videoCoverArt}
          />
        </a>
      </div>
    </div>
    <div className="imagi-landing-wrapper">

      <Paragraph className={styles.imagiPara}>
        A chance for kids at home to have mentors in their lives to
        {' '}
        <em>Make Sense of Today & Imagine Tomorrow</em>
.
      </Paragraph>
      <div className="triBtnSet">
        <Button
          type="link"
          text="Watch the episodes"
          theme={process.env.REACT_APP_THEME}
          className={`${styles.imagiBtn}`}
          url="https://www.youtube.com/playlist?list=PLjfNcXcq0TOTTMNfKomUHtgdjliQ2iW80"
        />
        <Button
          type="link"
          className={`${styles.imagiDonate} ${styles.imagiBtn}`}
          text="Donate to [INTV]"
          theme={process.env.REACT_APP_THEME}
          url="https://imagi-nation-tv.raisely.com/"
        />
        <Button
          type="link"
          className={`${styles.imagiHoodieBtn} ${styles.imagiBtn}`}
          text="Buy the Imagi-Nation Hoodie"
          theme={process.env.REACT_APP_THEME}
          url="https://shop.aimementoring.com/collections/all-products/products/imagi-nation-hoodie"
        />
      </div>
    </div>
    {/* <div className={styles.contentWrapperCampaignPg}>

    </div> */}

  </Layout>
);

export default ImagiNationTV;
