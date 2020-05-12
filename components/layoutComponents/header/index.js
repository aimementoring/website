import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import isClientSide from '../../../utils/isClientSide';
import styles from './header.module.scss';

const TalentHeader = dynamic(() => import('./talentHeader'));
const GoingGlobalHeader = dynamic(() => import('./goingGlobalHeader'));
const ImaginationDeclarationHeader = dynamic(() => import('./imaginationDeclarationHeader'));
const StandardHeader = dynamic(() => import('./standardHeader'));

const getHeaderComponent = (pathname) => {
  let component = 'default';
  if (pathname.indexOf('/seatontheplane') > -1) {
    component = 'talent';
  } else if (pathname.indexOf('/imagination-declaration') > -1 || pathname.indexOf('/imaginationDeclaration') > -1) {
    component = 'imaginationDeclaration';
  } else if (pathname.indexOf('/going-global') > -1 || pathname.indexOf('/goingGlobal') > -1) {
    component = 'goingGlobal';
  } else if (pathname.indexOf('/hooded-scholar') > -1 || pathname.indexOf('/hoodedScholar') > -1) {
    component = null;
  }
  return component;
};

const HEADERS_MAP = {
  default: StandardHeader,
  talent: TalentHeader,
  imaginationDeclaration: ImaginationDeclarationHeader,
  goingGlobal: GoingGlobalHeader,
};

const Header = ({ location }) => {
  const [headerClass, setHeaderClass] = useState(classNames(styles.headerTransparent, {
    [styles.doNotDisplay]: location.pathname.indexOf('/hooded-scholar') > -1,
  }));
  const [headerComponent, setHeaderComponent] = useState(getHeaderComponent(location.pathname));

  const handleScroll = () => {
    setHeaderClass(classNames({
      [styles.headerTransparent]: window.scrollY === 0,
      [styles.doNotDisplay]: window.scrollY === 0 && headerComponent === null,
      [styles.headerFilled]: window.scrollY > 0,
      [styles.micrositeHeader]: headerComponent !== StandardHeader,
    }));
  };

  const isClient = isClientSide();
  const scrolling = () => {
    if (isClient) window.addEventListener('scroll', handleScroll);
    const cleanup = () => {
      if (isClient) window.removeEventListener('scroll', handleScroll);
    };
    return cleanup;
  };

  useEffect(scrolling, []);
  useEffect(scrolling, [isClient]);

  useEffect(() => {
    setHeaderComponent(getHeaderComponent(location.pathname));
  }, [location.pathname]);

  const handleTalentItemClicked = (item) => {
    const hashtag = item.replace(' ', '').toLowerCase();
    Router.push(`/seatontheplane${location.search}#${hashtag}`);
  };

  const HeaderComponent = headerComponent ? HEADERS_MAP[headerComponent] : null;
  return (
    <div>
      <header className={headerClass}>
        {headerComponent && (
          <HeaderComponent
            location={location}
            handleTalentItemClicked={handleTalentItemClicked}
          />
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
