import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ctaFAQ.module.scss';

const CtaFAQ = () => (
  <div className={styles.wrapper}>
    <Link to="/faq" className={styles.ctaBtn}>
      <span className={styles.ctaText}>Got questions? Check out our FAQs</span>
      <svg className={styles.arrowNext}>
        <use xlinkHref="#icon-arrow-next" />
      </svg>
    </Link>
  </div>
);

export default CtaFAQ;
