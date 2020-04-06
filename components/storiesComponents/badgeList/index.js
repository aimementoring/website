import React from 'react';
import PropTypes from 'prop-types';
import styles from './badgeList.module.scss';

const BadgeList = ({ items, itemClass }) => (
  <>
    {items.map((item) => (
      <div className={`${styles.badge} ${itemClass}`} key={item}>
        <p className={styles.badgeLabel}>
          {item}
        </p>
      </div>
    ))}
  </>
);

BadgeList.defaultProps = {
  items: [],
  itemClass: '',
};

BadgeList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  itemClass: PropTypes.string,
};

export default BadgeList;
