import React from 'react';
import dynamic from 'next/dynamic';
import Anchor from '../../common/link';
import { HEADER_MENU_ITEMS } from '../../../constants';
import styles from './header.module.scss';
import IntercomChat from '../../intercom';

const Logo = dynamic(() => import('./logo'));
const MenuItem = dynamic(() => import('./menuItem'));
const MobileMenu = dynamic(() => import('../mobileMenu'));

const StandardHeader = () => (
  <div>
    {/* <div className={styles.navHiring}>
      This site’s in draft mode.
      Please be patient with us while it’s updated to reflect AIME in 2020 & beyond.
    </div> */}
    <div className={styles.siteHeaderContainer}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <nav id="nav" className={styles.navMenuLinks}>
        <ul className={styles.list}>
          {HEADER_MENU_ITEMS.map((item) => (
            <MenuItem key={item.title.replace(/\s/g, '-')} {...item} />
          ))}
          <li className={styles.listItem}>
            <Anchor className={styles.navBtn} to="/positions">
              Work with us
            </Anchor>
          </li>
          <li className={styles.listItem}>
            <IntercomChat />
          </li>
          <li className={styles.inlineListItem}>
            <a
              className={styles.navBtn}
              target="_blank"
              rel="noopener noreferrer"
              href="https://shop.aimementoring.com/"
            >
              Shop
            </a>
          </li>
          <li className={styles.inlineListItem}>
            <Anchor className={styles.navBtn} to="https://aimedonations.raisely.com/" target="_blank">
              Donate
            </Anchor>
          </li>
        </ul>
      </nav>
      <MobileMenu />
    </div>
  </div>
);

export default StandardHeader;
