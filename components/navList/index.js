import React from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import NavItem from './navItem';
import styles from './navList.module.scss';

const NavList = ({ title, items }) => (
  <nav className={styles.navList}>
    <Title type="h5Title">{title}</Title>
    <ul className={styles.listContainer}>
      {items && items.length > 0 && items.map((item) => (
        <NavItem {...item} key={`${item.to}_${item.label}`} />
      ))}
    </ul>
  </nav>
);

NavList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string,
    as: PropTypes.string,
    label: PropTypes.string,
    target: PropTypes.string,
  })),
};

NavList.defaultProps = {
  items: [],
};

export default NavList;
