import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import classNames from 'classnames';
import Anchor from '../../common/link';
// import { TALENT_HEADER_MENU_ITEMS } from '../../../constants';
import styles from './header.module.scss';

const Logo = dynamic(() => import(/* webpackChunkName 'Logo' */ './logo'));
const TalentMobileMenu = dynamic(() => import(/* webpackChunkName 'TalentMobileMenu' */ '../mobileMenu/talentMobileMenu'));

const TalentHeader = ({ location, handleTalentItemClicked }) => {
  const [showFirstHeader, setShowFirstHeader] = useState(!location.hash && !location.search);

  useEffect(() => {
    setShowFirstHeader((!location.hash || location.hash === '#undefined') && !location.search);
  }, [location.hash]);

  const handleTalentItemAction = (item) => (e) => {
    e.preventDefault();
    handleTalentItemClicked(item);
  };

  const hash = location.hash ? location.hash.toLowerCase() : '';
  return (
    <div className={styles.talentHeaderBox}>
      <div className={classNames(styles.firstHeader, { [styles.isHidden]: !showFirstHeader })} />
      <div className={classNames(styles.secondHeader, { [styles.isHidden]: showFirstHeader })}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <nav id="nav-talent" className={classNames(styles.navMenuLinks, styles.navTalent)}>
          <ul className={styles.list}>
            {/* {TALENT_HEADER_MENU_ITEMS.map((headerItem) => {
              const item = headerItem.replace(' ', '');
              return (
                <li
                  className={styles.listItem}
                  onClick={handleTalentItemAction(item)}
                  onKeyPress={handleTalentItemAction(item)}
                  role="presentation"
                  key={item}
                >
                  {`#${item.toLowerCase()}` === hash ? (
                    <a className={classNames(styles.navBtn, styles.activeItem)} href="#">
                      {headerItem}
                    </a>
                  ) : (
                    <a className={styles.navBtn} href="#">
                      {headerItem}
                    </a>
                  )}
                </li>
              );
            })} */}
            <li className={styles.inlineListItem}>
              <Anchor
                className={styles.donateBtn}
                to="/seatontheplane"
                as="/seatontheplane#register"
                onClick={handleTalentItemAction('register')}
              >
                Register
              </Anchor>
            </li>
          </ul>
        </nav>
        <TalentMobileMenu handleTalentItemClicked={handleTalentItemClicked} hash={hash} />
      </div>
    </div>
  );
};

TalentHeader.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
  handleTalentItemClicked: PropTypes.func.isRequired,
};

export default TalentHeader;
