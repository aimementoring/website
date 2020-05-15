import React from 'react';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import Layout from '../../hocs/basicLayout';
import IntercomChat from '../../components/intercom';
import useDonate from '../../hooks/useDonate';

import styles from './imagine.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const ImagiNationTV = () => {
  // eslint-disable-next-line no-unused-vars
  const [modalVisible, toggleDonateModal] = useDonate();

  return (
    <Layout>
      <div className={styles.heroBannerImagine}>
        <div className={styles.bannerWrapper}>
          <div className={`${styles.bannerContent} ${styles.bannerItem}`}>
            <Title className={styles.welcomeTitle} type="headingLockup" theme={process.env.REACT_APP_THEME}>
              Introducing
              <strong className={styles.hiddenTitle}>Imagi-Nation TV</strong>
              <img
                src={`${ASSETS_URL}/assets/images/logos/logo_imagine@2x.jpg`}
                alt="Imagine"
                className={styles.logoImagiTV}
              />
            </Title>
            <Paragraph>
              What happens when you combine a pandemic,
              a live YouTube TV show, an open Google Doc and a hoodie?
              <br />
              <br />
              <strong><mark>&nbsp;A feature film, of course.&nbsp;</mark></strong>
              <br />
              <br />
              {`Live on IMAGI-NATION{TV} from May 11, we're sharing an open Google Doc with the
              world, and with the kids AIME mentors across 6 countries, titled ‘IMAGINE’. Together,
              we're inviting you to flip the script and encourage kids who have
              been told that their future is set in stone, to grab the pen and write
              the next chapter.`}
              <br />
              <br />
              Writing live now.
            </Paragraph>
            <div className={styles.triBtnSet}>
              <Button
                theme={process.env.REACT_APP_THEME}
                className={`${styles.triBtn} ${styles.watchBtn}`}
                url="https://docs.google.com/document/d/1MyE1Xv8OSsFnJLEL2WNhLL0DbsKJfMtmcrrUUa7BOh8/edit"
                target="_blank"
                type="link"
              >
                Write
              </Button>
              <Button
                type="link"
                text="Film"
                theme={process.env.REACT_APP_THEME}
                className={`${styles.triBtn} ${styles.imagiDonate}`}
                url="/positions/rec9lXBVd7ju08wtf/Intern-Production-Coordinator"
              />
              <Button
                type="link"
                text="Fund"
                className={`${styles.triBtn} ${styles.imagiHoodieBtn}`}
                theme={process.env.REACT_APP_THEME}
                onClickFunction={toggleDonateModal}
              />
            </div>
            <Paragraph>
              Or if you have any questions,&nbsp;
              <IntercomChat label="chat with us" />
            </Paragraph>
          </div>
          <div className={`${styles.bannerMediaFeature} ${styles.bannerItem} ${styles.welcomeVideoWrapper}`}>
            <div className={styles.bannerImageRotate}>
              <img
                src={`${ASSETS_URL}/assets/images/banner/partnering.webp`}
                alt="Write it, Film it, Fund it"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ImagiNationTV;
