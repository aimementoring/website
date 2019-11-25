import React from 'react';

import styles from './contact.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const SupportCentre = () => (
  <div className={styles.supportCentreContainer}>
    <img
      className={styles.contactUsImg}
      alt="Support Group"
      src={`${ASSETS_URL}/assets/images/about-small.jpg`}
    />
    <div className={styles.supportCentreContent}>
      <ul className={styles.supportCentreList}>
        <h4 className={styles.title}>Support Centre</h4>
        <p className={styles.textParagraph}>
          {"Can't find the answer?"}
          {' '}
          <br />
          {' '}
We are here to help you.
        </p>
        <li className={styles.listItem}>
          <svg className={styles.iconQuestion}>
            <use xlinkHref="#icon-question" />
          </svg>
          {' '}
          &nbsp;&nbsp;
          <a
            to="https://faqs.aimementoring.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="Frequently asked questions"
          >
            Frequently Asked Questions
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default SupportCentre;
