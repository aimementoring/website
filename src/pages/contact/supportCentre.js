import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetsBaseUrl } from '../../services/craftAPI';

import styles from './contact.module.scss';

const SupportCentre = () => {
  const assetsUrl = getAssetsBaseUrl();

  return (
    <div className={styles.supportCentreContainer}>
      <img
        className={styles.contactUsImg}
        alt="Support Group"
        src={`${assetsUrl}/assets/images/about-small.jpg`}
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
            <Link to="/faq" className={styles.link}>
              Frequently Asked Questions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SupportCentre;
