import React from 'react';
import dynamic from 'next/dynamic';
import Anchor from '../../common/link';
import { HEADER_MENU_ITEMS } from '../../../constants';
import styles from './header.module.scss';

const Logo = dynamic(() => import(/* webpackChunkName 'Logo' */ './logo'));
const MenuItem = dynamic(() => import(/* webpackChunkName 'MenuItem' */ './menuItem'));
const MobileMenu = dynamic(() => import(/* webpackChunkName 'MobileMenu' */ '../mobileMenu'));

const StandardHeader = () => (
  <div>
    {/* <Anchor className={styles.navHiring} to="/positions">
      We are hiring!
    </Anchor> */}
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
            <Anchor className={styles.navBtn} to="/contact">
              Get in touch
            </Anchor>
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
            <Anchor className={styles.navBtn} to="/donate">
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
