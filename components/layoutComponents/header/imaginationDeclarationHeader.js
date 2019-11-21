import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import Anchor from '../../common/link';
import MyContext from '../../../layouts/context';
import styles from './header.module.scss';

const Logo = dynamic(() => import(/* webpackChunkName 'Logo' */ './logo'));

const ImaginationDeclarationHeader = () => {
  const { imaginationDeclarationNumber } = useContext(MyContext);

  return (
    <div className={styles.talentHeaderBox}>
      <div className={styles.navMicrosite}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <nav id="nav-microsite" className={styles.navMenuLinks}>
          <span className={styles.micrositeNavMsg}>
            <strong>{imaginationDeclarationNumber}</strong>
            People have pledged
          </span>
          <Anchor to="/imaginationDeclaration" as="/imagination-declaration#pledge" className={styles.navLink}>
            Pledge
          </Anchor>
        </nav>
      </div>
    </div>
  );
};

export default ImaginationDeclarationHeader;
