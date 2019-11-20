import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TalentHeader from './talentHeader';
import MenuItem from './menuItem';
import Logo from './logo';
import MobileMenu from '../mobileMenu';
import Anchor from '../../common/link';
import { HEADER_MENU_ITEMS } from '../../../constants';
import './index.scss';

const Header = ({ location }) => {
  const [state, setState] = useState({
    assetsUrl: '',
    countryOptions: [],
    className: classNames('header-transparent', {
      'do-not-display': location.pathname.indexOf('/hooded-scholar') > -1,
    }),
    isTalentPage: location.pathname.indexOf('/seatontheplane') > -1,
    isStudentChapterPage: location.pathname.indexOf('/hooded-scholar') > -1,
  });

  const handleScroll = () => {
    setState({
      ...state,
      className: classNames({
        'header-transparent': window.scrollY === 0,
        'header-filled': window.scrollY > 0,
        'do-not-display': window.scrollY === 0 && state.isStudentChapterPage,
      }),
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') window.addEventListener('scroll', handleScroll);

    const cleanup = () => {
      if (typeof window !== 'undefined') window.removeEventListener('scroll', handleScroll);
    };
    return cleanup;
  }, []);

  useEffect(() => {
    setState({
      ...state,
      isTalentPage: location.pathname.indexOf('/seatontheplane') > -1,
      isStudentChapterPage: location.pathname.indexOf('/hooded-scholar') > -1,
    });
  }, [location.pathname]);

  const handleTalentItemClicked = (item) => {
    const hashtag = item.replace(' ', '').toLowerCase();
    Router.push(`/seatontheplane${location.search}#${hashtag}`);
  };

  return (
    <div>
      <header className={`${state.className} site-header`}>
        {state.isTalentPage ? (
          <TalentHeader
            location={location}
            handleTalentItemClicked={handleTalentItemClicked}
          />
        ) : (
          <div className="container clearfix p3 flex items-center">
            <div className="sm-col align-middle flex">
              <Logo />
            </div>
            <nav id="nav" className="nav menu-links sm-col-right ml-auto">
              <ul className="list-reset">
                {HEADER_MENU_ITEMS.map((item) => <MenuItem key={item.title.replace(/\s/g, '-')} {...item} />)}
                <li className="inline-block relative header-link--with-submenu">
                  <div className="intercom-button-nav nav-btn">Get in touch</div>
                </li>
                <li className="inline-block">
                  <a
                    aria-label="shop"
                    className="nav-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://shop.aimementoring.com/"
                  >
                    Shop
                  </a>
                </li>
                <li className="inline-block">
                  <Anchor prefetch withData className="nav-btn" to="/donate">Donate</Anchor>
                </li>
              </ul>
            </nav>
            <MobileMenu />
          </div>
        )}
      </header>
    </div>
  );
};

Header.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
    search: PropTypes.string,
    pathname: PropTypes.string,
  }).isRequired,
};

export default Header;
