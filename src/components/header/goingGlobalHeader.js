import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo';
// import MyContext from '../../layouts/Context';
// import styles from './index.scss';
import styles from './goingGlobalHeader.module.scss';

const GoingGlobalHeader = () => {
  //const { imaginationDeclarationNumber } = useContext(MyContext);

  return (
    <div className={styles.navMicrositeWrapper}>
      <div className={styles.navMicrosite}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <nav id="nav-microsite" className={styles.navMenuLinks}>
          <ul>
            <li><Link to="/going-global#intro">Intro</Link></li>
            <li><Link to="/going-global#casestudies">Case Studies</Link></li>
            <li><Link to="/going-global#results">Results</Link></li>
            <li><Link to="/going-global#resources">Resources</Link></li>
          </ul>
          <Link to="/going-global#enquire" className={styles.navLink}>
            Enquire
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default GoingGlobalHeader;
