import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import classNames from 'classnames';
import Anchor from '../../common/link';
import styles from './header.module.scss';

const Logo = dynamic(() => import(/* webpackChunkName 'Logo' */ './logo'));

const HoodedScholarHeader = ({ location }) => {
  const [showFirstHeader, setShowFirstHeader] = useState(!location.hash && !location.search);

  useEffect(() => {
    setShowFirstHeader((!location.hash || location.hash === '#undefined') && !location.search);
  }, [location.hash]);

  return (
    <div>
      <div className={classNames(styles.hoodedScholarHeaderTitle, { isHidden: showFirstHeader })}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        {Router.pathname.indexOf('/fam-details') === -1 && (
          <div className={styles.countdownContainer}>
            <li className={styles.inlineListItem}>
              <Anchor className={styles.donateBtn} to="/hoodedScholar" as="/hooded-scholar#register">
                SIGN ME UP
              </Anchor>
            </li>
          </div>
        )}
      </div>
    </div>
  );
};

HoodedScholarHeader.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
};

export default HoodedScholarHeader;
