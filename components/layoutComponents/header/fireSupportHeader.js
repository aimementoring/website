import React, { useState, useEffect } from 'react';
import Logo from './logo';
import { isClientSide } from '../../../utils/utilities';
import styles from './goingGlobalHeader.module.scss';

const FireSupportHeader = () => {
  const [headerState, setHeaderState] = useState('header-transparent-boo');

  const isClient = isClientSide();
  const handleScroll = () => (
    setHeaderState(window.pageYOffset === 0 ? 'header-transparent-boo' : 'headerFilledYay')
  );

  useEffect(() => {
    if (isClient) {
      window.addEventListener('scroll', handleScroll);
      const cleanup = () => {
        window.removeEventListener('scroll', handleScroll);
      };
      return cleanup;
    }
    return () => {};
  }, [isClient]);

  return (
    <div className={headerState}>
      <div className={styles.navMicrositeWrapper}>
        <div className={`${styles.navMicrosite} ${styles.fireSupportHeader}`}>
          <div className={styles.logoContainer}>
            <Logo isStandard={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FireSupportHeader;
