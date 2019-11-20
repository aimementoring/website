import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Anchor from '../../common/link';
import { TALENT_HEADER_MENU_ITEMS } from '../../../constants';
import './index.scss';

const TalentMobileMenu = ({ handleTalentItemClicked, hash }) => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [itemState, setItemState] = useState(null);

  const handleMenu = (newValue) => () => {
    setShowNavMenu(newValue);
  };

  useEffect(() => {
    handleTalentItemClicked(itemState);
  }, [showNavMenu]);

  const handleTalentItemSelected = (item) => (e) => {
    e.preventDefault();
    setShowNavMenu(false);
    setItemState(item);
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
          {TALENT_HEADER_MENU_ITEMS.map((headerItem) => {
            const item = headerItem.replace(' ', '');
            return (
              <li
                className="py2"
                onClick={handleTalentItemSelected(item)}
                onKeyPress={handleTalentItemSelected(item)}
                role="presentation"
                key={item}
              >
                <Anchor
                  className={classNames('text-decoration-none f-18 feature-font-family c-white', { active: hash === `#${item.toLowerCase()}` })}
                  to="/home"
                  as="/"
                >
                  {headerItem}
                </Anchor>
              </li>
            );
          })}
          <li
            className="py2"
            onClick={handleTalentItemSelected('register')}
            onKeyPress={handleTalentItemSelected('register')}
            role="presentation"
          >
            <Anchor
              className={classNames('text-decoration-none f-18 feature-font-family c-white', { active: hash === '#register' })}
              to="/home"
              as="/"
            >
              Register
            </Anchor>
          </li>
        </ul>
      </nav>
    </>
  );
};

TalentMobileMenu.propTypes = {
  handleTalentItemClicked: PropTypes.func.isRequired,
  hash: PropTypes.string.isRequired,
};

export default TalentMobileMenu;
