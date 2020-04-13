import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import './index.scss';

const LinksComponent = dynamic(() => import('./linksComponent'));

const MENU_LINKS = {
  'going-global': [
    { url: '/going-global#intro', title: 'Intro' },
    { url: '/going-global#casestudies', title: 'Case Studies' },
    { url: '/going-global#results', title: 'Results' },
    { url: '/going-global#philosophies', title: 'Philosohiies' },
    { url: '/going-global#resources', title: 'Resources' },
    { url: '/going-global#enquire', title: 'Enquire', class: 'c-purple' },
  ],
  default: [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About' },
    { url: '/stories/intv', title: 'Stories' },
    { url: '/imagi-nation-tv', title: 'IN{TV}' },
    { url: '/be-a-mentor', title: 'Be a mentor' },
    { url: '/positions', title: 'Work with us' },
    { url: 'donate', title: 'Donate' },
    // { url: 'https://shop.aimementoring.com/', title: 'Shop' },
    { url: '', title: null },
  ],
};

const MobileMenu = ({ type, logoIsWhite }) => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [activeMenuOption, setActiveMenuOption] = useState(() => (
    type === 'going-global'
      ? 'Intro'
      : 'Home'
  ));

  const handleLinkClicked = (linkClicked) => () => {
    setShowNavMenu(false);
    setActiveMenuOption(linkClicked);
  };

  const mobileHeaderClasses = classNames({
    'mobile-header': true,
    active: showNavMenu,
  });

  const customColorClass = {
    'c-white': logoIsWhite,
    'c-black': !logoIsWhite,
    'material-icons': true,
    cursor: true,
  };

  return (
    <>
      <div className="sm-col-right ml-auto flex mobile-menu">
        <i
          id="mobileMenu"
          className={classNames('mobile-menu-icon', customColorClass)}
          onClick={() => setShowNavMenu(true)}
          onKeyPress={() => setShowNavMenu(true)}
          role="presentation"
        >
          menu
        </i>
      </div>
      <nav id="mobileHeader" className={mobileHeaderClasses}>
        <div
          className="flex justify-between items-center pt2 px3 pb0 sm-col-12"
          style={{ flexDirection: 'column', alignItems: 'flex-start' }}
        >
          <div className="flex flex-column items-start" />
          <i
            id="mobileMenuClose"
            className={classNames('mobileMenuClose icon-close', customColorClass)}
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
    </>
  );
};

MobileMenu.propTypes = {
  type: PropTypes.string,
  logoIsWhite: PropTypes.bool,
};

MobileMenu.defaultProps = {
  type: 'default',
  logoIsWhite: true,
};

export default MobileMenu;
