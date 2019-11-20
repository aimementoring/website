import React, { useState } from 'react';
import classNames from 'classnames';
import Anchor from '../../common/link';
import './index.scss';

const MobileMenu = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const handleMenu = (newValue) => () => {
    setShowNavMenu(newValue);
  };

  const mobileHeaderClasses = classNames({
    'mobile-header': true,
    active: showNavMenu,
  });

  return (
    <>
      <div className="sm-col-right ml-auto flex mobile-menu">
        <i
          id="mobileMenu"
          className="material-icons cursor mobile-menu-icon"
          onClick={handleMenu(true)}
          onKeyPress={handleMenu(true)}
          role="presentation"
        >
          menu
        </i>
      </div>
      <nav id="mobileHeader" className={mobileHeaderClasses}>
        <div className="flex justify-between items-center pt2 px3 pb0 sm-col-12" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <div className="flex flex-column items-start" />
          <i
            id="mobileMenuClose"
            className="mobileMenuClose material-icons c-white cursor icon-close"
            onClick={handleMenu(false)}
            onKeyPress={handleMenu(false)}
            role="presentation"
          >
            close
          </i>
        </div>
        <ul className="overflow-scroll list-reset pl3 pb3 pt2 flex flex-column items-start flex-auto">
          <li className="py2">
            <Anchor
              prefetch
              withData
              className="text-decoration-none f-18 feature-font-family c-white active"
              onClick={handleMenu(false)}
              to="/"
            >
              Home
            </Anchor>
          </li>
          <li className="py2">
            <Anchor
              prefetch
              withData
              className="text-decoration-none f-18 feature-font-family c-white"
              onClick={handleMenu(false)}
              to="/about"
            >
              About
            </Anchor>
          </li>
          <li className="py2">
            <Anchor
              prefetch
              withData
              className="text-decoration-none f-18 feature-font-family c-white"
              onClick={handleMenu(false)}
              to="/stories"
            >
              Stories
            </Anchor>
          </li>
          <li className="py2">
            <Anchor
              prefetch
              withData
              className="text-decoration-none f-18 feature-font-family c-white"
              onClick={handleMenu(false)}
              to="/be-a-mentor"
            >
              Mentor
            </Anchor>
          </li>
          <li className="py2">
            <Anchor
              prefetch
              withData
              className="text-decoration-none f-18 feature-font-family c-white"
              onClick={handleMenu(false)}
              to="/contact"
            >
              Contact
            </Anchor>
          </li>
          <li className="py2">
            <Anchor
              prefetch
              withData
              to="/donate"
              onClick={handleMenu(false)}
              className="text-decoration-none f-18 feature-font-family c-white toggleRaiselyModal"
            >
              Donate
            </Anchor>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
