import React from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import Layout from '../../hocs/basicLayout';
import CASE_STUDIES from '../../constants/caseStudiesList';
import VideoPlayer from '../../components/videoPlayer';
import styles from './styles.module.scss';

const CaseStudyBox = dynamic(() => import('../../components/caseStudyBox'));
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
    </div>

    <div className={styles.contentWrapperCampaignPg}>

      <section className={styles.videoContainerFeature}>
        <VideoPlayer
          url="https://www.youtube.com/watch?v=Kcqz2ShknNw&feature=emb_logo"
          imageUrl="https://images.ctfassets.net/iz0aikshgysc/4veRQTJ6ilhYLtfflt5yPu/514ecaff0ba258f1853b718ca70115bc/Sherice_banner.jpg"
        >
          <div className={styles.videoCaptionWrapper}>
            <Title type="h4Title" theme={process.env.REACT_APP_THEME}>
              Hey Lara
            </Title>
            <Paragraph theme={process.env.REACT_APP_THEME}>
              Lara should click this video.
            </Paragraph>
            <Button type="link" text="Watch now" theme={process.env.REACT_APP_THEME} url="https://www.youtube.com/watch?v=DiQaOlsDZlY" />
          </div>
        </VideoPlayer>
      </section>

    </div>
    
  </Layout>
);

export default ImagiNationTV;
