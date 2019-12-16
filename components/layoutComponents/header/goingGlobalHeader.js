import React, { useState, useEffect } from 'react';
import Logo from './logo';
import Anchor from '../../common/link';
import { isClientSide } from '../../../utils/utilities';
import MobileMenu from '../mobileMenu';
import styles from './goingGlobalHeader.module.scss';

const GoingGlobalHeader = () => {
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
        <div className={styles.navMicrosite}>
          <div className={styles.logoContainer}>
            <Logo isStandard={false} />
          </div>
          <nav id="nav-microsite" className={styles.navMenuLinks}>
            <ul>
              <li className={styles.goingGlobalMenuItem}>
                <Anchor to="/going-global" as="/going-global#intro">Intro</Anchor>
              </li>
              <li className={styles.goingGlobalMenuItem}>
                <Anchor to="/going-global" as="/going-global#casestudies">Case Studies</Anchor>
              </li>
              <li className={styles.goingGlobalMenuItem}>
                <Anchor to="/going-global" as="/going-global#results">Results</Anchor>
              </li>
              <li className={styles.goingGlobalMenuItem}>
                <Anchor to="/going-global" as="/going-global#philosophies">Imagination Curriculum</Anchor>
              </li>
              <li className={styles.goingGlobalMenuItem}>
                <Anchor to="/going-global" as="/going-global#resources">Resources</Anchor>
              </li>
            </ul>
            <Anchor to="/going-global" as="/going-global#enquire" className={styles.navLink}>
              Register
            </Anchor>
          </nav>
          <MobileMenu
            type="going-global"
            logoIsWhite={false}
          />
        </div>
      </div>
    </div>
  );
};

export default GoingGlobalHeader;
