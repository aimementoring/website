import React from 'react';
import styles from './contact.module.scss';

const ContactBanner = () => (
  <div className={styles.contactBanner}>
    <div className={styles.bannerContainer}>
      <div className={styles.bannerWrapper}>
        <h1>
          <span className={styles.preText}>Say </span>
          <span className={styles.highlightText}>
            <em>
              Hello
              <br />
            </em>
          </span>
          <span className={styles.borderGradient}>&nbsp;</span>
        </h1>
      </div>
    </div>
  </div>
);

export default ContactBanner;
