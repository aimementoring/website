import React, { useContext } from 'react';
import { HEADER_MENU_ITEMS } from '../../../constants';
import styles from './header.module.scss';
import IntercomChat from '../../intercom';
import DonationContext from '../../../context';

import Logo from './logo';
import MenuItem from './menuItem';
import MobileMenu from '../mobileMenu';

const StandardHeader = () => {
  const { toggleDonationModal } = useContext(DonationContext);
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
              <IntercomChat />
            </li>
            <li className={styles.listItem}>
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
              <div className={styles.navBtn} onClick={toggleDonationModal} onKeyPress={toggleDonationModal} role="presentation">
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
