import React from 'react';
import dynamic from 'next/dynamic';
import Anchor from '../../common/link';
import { HEADER_MENU_ITEMS } from '../../../constants';
import styles from './header.module.scss';
import IntercomChat from '../../intercom';
import useDonate from '../../../hooks/useDonate';

const Logo = dynamic(() => import('./logo'));
const MenuItem = dynamic(() => import('./menuItem'));
const MobileMenu = dynamic(() => import('../mobileMenu'));

const StandardHeader = () => {
  // eslint-disable-next-line no-unused-vars
  const [modalVisible, toggleDonateModal] = useDonate();
  return (
    <div>
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
              <div className={styles.navBtn} onClick={toggleDonateModal} onKeyPress={toggleDonateModal} role="presentation">
                Donate
              </div>
            </li>
          </ul>
        </nav>
        <MobileMenu />
      </div>
    </div>
  );
};

export default StandardHeader;
