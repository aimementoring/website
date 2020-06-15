import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import isClientSide from '../../../utils/isClientSide';
import styles from './header.module.scss';
import StandardHeader from './standardHeader';

const GoingGlobalHeader = dynamic(() => import('./goingGlobalHeader'));

const getHeaderComponent = (pathname) => {
  let component = 'default';
  if (pathname.indexOf('/going-global') > -1 || pathname.indexOf('/goingGlobal') > -1) {
    component = 'goingGlobal';
  } else if (pathname.indexOf('/hooded-scholar') > -1 || pathname.indexOf('/hoodedScholar') > -1) {
    component = null;
  }
  return component;
};

const HEADERS_MAP = {
  default: StandardHeader,
  goingGlobal: GoingGlobalHeader,
};

const Header = ({ location }) => {
  const [headerClass, setHeaderClass] = useState(classNames(styles.headerTransparent, {
    [styles.doNotDisplay]: location.pathname.indexOf('/hooded-scholar') > -1,
  }));
  const [headerComponent, setHeaderComponent] = useState(getHeaderComponent(location.pathname));

  const handleScroll = () => {
    setHeaderClass(classNames({
      [styles.headerTransparent]: window.scrollY < 1,
      [styles.headerFilled]: window.scrollY > 1,
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

  const HeaderComponent = headerComponent ? HEADERS_MAP[headerComponent] : null;
  return (
    <div>
      <header className={headerClass}>
        {headerComponent && <HeaderComponent location={location} />}
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
