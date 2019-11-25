import React from 'react';
import styles from './ctaFAQ.module.scss';

const CtaFAQ = () => (
  <div className={styles.wrapper}>
    <a
      href="https://faqs.aimementoring.com"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.ctaBtn}
      aria-label="FAQs"
    >
      <span className={styles.ctaText}>Got questions? Check out our FAQs</span>
      <svg className={styles.arrowNext}>
        <use xlinkHref="#icon-arrow-next" />
      </svg>
    </a>
  </div>
);

export default CtaFAQ;
