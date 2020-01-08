import React from 'react';
import { Components } from 'aime-blueprint';

// need to setup css modules
import styles from './index.scss';

const {
  Title,
} = Components;

const FooterBanner = () => (
  <div className="footer-banner full-width-wrap">
    <div className="flex flex-wrap items-center">
      <div className="banner-wrapper">
        <div className="panel__title-lockup center">
          <Title className={styles.footerLockup} type="headingLockup">
            <strong>Imagine</strong>
            What&apos;s possible
          </Title>
        </div>
      </div>
    </div>
  </div>
);

export default FooterBanner;
