import React from 'react';
import Anchor from '../common/link';
import styles from './ctaFAQ.module.scss';

const CtaFAQ = () => (
  <div className={styles.wrapper}>
    <Anchor to="/faq" className={styles.ctaBtn}>
      <span className={styles.ctaText}>Got questions? Check out our FAQs</span>
      <svg className={styles.arrowNext}>
        <use xlinkHref="#icon-arrow-next" />
      </svg>
    </Anchor>
  </div>
);

export default CtaFAQ;
