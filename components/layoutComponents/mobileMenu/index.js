import React, { useState, useEffect } from 'react';
import { withRouter } from 'next/router';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './mobileMenu.module.scss';
import LinksComponent from './linksComponent';

const MENU_LINKS = {
  'going-global': [
    { url: '/going-global#intro', title: 'Intro' },
    { url: '/going-global#casestudies', title: 'Case Studies' },
    { url: '/going-global#results', title: 'Results' },
    { url: '/going-global#philosophies', title: 'Philosophies' },
    { url: '/going-global#resources', title: 'Resources' },
    { url: '/going-global#enquire', title: 'Enquire', class: styles.purpleText },
  ],
  default: [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About' },
    { url: '/stories/intv', title: 'Stories' },
    { url: '/imagi-nation-tv', title: 'IMAGI-NATION{TV}' },
    { url: '/be-a-mentor', title: 'Be a mentor' },
    { url: '/positions', title: 'Work with us' },
    { url: 'donate', title: 'Donate', type: 'donate' },
    { url: 'https://shop.aimementoring.com/', title: 'Shop', type: 'external' },
    { url: '', title: 'Get in touch', type: 'intercom' },
  ],
};

const MobileMenu = ({ type, logoIsWhite, router }) => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [activeMenuOption, setActiveMenuOption] = useState(() => (
    type === 'going-global'
      ? 'Intro'
      : 'Home'
  ));

  useEffect(() => {
    if (type && router.asPath) {
      const activeMenuItem = MENU_LINKS[type].find((element) => element.url === router.asPath);
      if (activeMenuItem) setActiveMenuOption(activeMenuItem.title);
    }
  }, []);

  const handleLinkClicked = (linkClicked) => () => {
    setShowNavMenu(false);
    setActiveMenuOption(linkClicked);
  };

  const mobileHeaderClasses = classNames(
    styles.mobileHeader,
    showNavMenu ? styles.active : '',
  );

  const customColorClasses = [
    logoIsWhite ? styles.whiteText : styles.blackText,
    styles.materialIcons,
  ];

  return (
    <div className={styles.mobileMenuContainer}>
      <div>
        <i
          id="mobileMenu"
          className={classNames(styles.mobileMenuIcon, ...customColorClasses)}
          onClick={() => setShowNavMenu(true)}
          onKeyPress={() => setShowNavMenu(true)}
          role="presentation"
        >
          menu
        </i>
      </div>
      <nav id="mobileHeader" className={mobileHeaderClasses}>
        <div
          className={styles.closeIconContainer}
          style={{ flexDirection: 'column', alignItems: 'flex-end' }}
        >
          <div className="flex flex-column items-start" />
          <i
            id="mobileMenuClose"
            className={classNames(styles.mobileMenuClose, styles.closeIcon, ...customColorClasses)}
            onClick={() => setShowNavMenu(false)}
            onKeyPress={() => setShowNavMenu(false)}
            role="presentation"
          >
            close
          </i>
        </div>
        <LinksComponent
          links={MENU_LINKS[type] || MENU_LINKS.default}
          handleLinkClicked={handleLinkClicked}
          active={activeMenuOption}
        />
      </nav>
    </div>
  );
};

MobileMenu.propTypes = {
  type: PropTypes.string,
  logoIsWhite: PropTypes.bool,
  router: PropTypes.shape({
    pathname: PropTypes.string,
    asPath: PropTypes.string,
    query: PropTypes.shape({}),
  }).isRequired,
};

MobileMenu.defaultProps = {
  type: 'default',
  logoIsWhite: true,
};

export default withRouter(MobileMenu);
