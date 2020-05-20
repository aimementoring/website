// @TODO: Replace anchor by an element as a Blueprint button
import React from 'react';
import PropTypes from 'prop-types';

import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import useDonate from '../../hooks/useDonate';
import styles from './quicklinksHomepage.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const QuicklinksHomepage = (props) => {
  const { scrollHandler, getInvolvedRef } = props;
  // eslint-disable-next-line no-unused-vars
  const [modalVisible, toggleDonateModal] = useDonate();

  return (
    <div className={styles.quicklinksPanel} ref={getInvolvedRef}>
      <Title type="h3Title" className={styles.quicklinksHeader}>
        Get involved
      </Title>
      <div className={styles.quicklinksGrid}>
        <div className={styles.quicklinkGridItem}>
          <span
            onClick={scrollHandler}
            className={styles.quicklinkImage}
            onKeyPress={scrollHandler}
            role="presentation"
          >
            <img
              src={`${ASSETS_URL}/assets/images/illustrations/team-flag.png`}
              alt="Team Flag"
            />
          </span>

          <Paragraph>
            <span
              onClick={scrollHandler}
              target="_blank"
              className={styles.quicklinkTitle}
              onKeyPress={scrollHandler}
              role="presentation"
            >
              Partner with us
            </span>
          </Paragraph>
        </div>

        <div className={styles.quicklinkGridItem}>
          <a href="https://shop.aimementoring.com/" target="_blank" rel="noopener noreferrer" className={styles.quicklinkImage}>
            <img
              src={`${ASSETS_URL}/assets/images/illustrations/hoodie-imagination.png`}
              alt="Hoodie"
            />
          </a>
          <Paragraph>
            <a href="https://shop.aimementoring.com/" target="_blank" rel="noopener noreferrer" className={styles.quicklinkTitle}>
              Buy  a hoodie
            </a>
          </Paragraph>
        </div>

        <div className={styles.quicklinkGridItem}>
          <a href="/be-a-mentor" className={styles.quicklinkImage}>
            <img
              src={`${ASSETS_URL}/assets/images/illustrations/thumbsup-smiley.png`}
              alt="Smiley thumbs up"
            />
          </a>
          <Paragraph>
            <a href="/be-a-mentor" className={styles.quicklinkTitle}>
              Be a uni mentor
            </a>
          </Paragraph>
        </div>

        <div className={styles.quicklinkGridItem}>
          <a href="/positions" className={styles.quicklinkImage}>
            <img
              src={`${ASSETS_URL}/assets/images/illustrations/pinky-earth.png`}
              alt="Pink Earth"
            />
          </a>
          <Paragraph>
            <a href="/positions" className={styles.quicklinkTitle}>
              Work  with us
            </a>
          </Paragraph>
        </div>

        <div className={styles.quicklinkGridItem}>
          <div onClick={toggleDonateModal} onKeyPress={toggleDonateModal} role="presentation" className={styles.quicklinkImage}>
            <img
              src={`${ASSETS_URL}/assets/images/illustrations/bunch-flowers.png`}
              alt="Bunch of Flowers"
            />
          </div>
          <Paragraph>
            <div onClick={toggleDonateModal} onKeyPress={toggleDonateModal} role="presentation" className={styles.quicklinkTitle}>
              Donate
            </div>
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

QuicklinksHomepage.propTypes = {
  scrollHandler: PropTypes.func.isRequired,
  getInvolvedRef: PropTypes.shape({}).isRequired,
};
export default QuicklinksHomepage;
