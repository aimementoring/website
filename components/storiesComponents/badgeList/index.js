import React from 'react';
import PropTypes from 'prop-types';
import Anchor from '../../common/link';
import styles from './badgeList.module.scss';
import { slugify } from '../../../utils/formatting';

const BadgeList = ({ items, itemClass, isLinked }) => (
  <>
    {items.map((item) => (
      <div className={`${styles.badge} ${itemClass}`} key={item}>
        <p className={styles.badgeLabel}>
          {isLinked ? (
            <Anchor to={`/stories/${slugify(item)}`}>{item}</Anchor>
          ) : (
            <>{item}</>
          )}
        </p>
      </div>
    ))}
  </>
);

BadgeList.defaultProps = {
  items: [],
  itemClass: '',
  isLinked: false,
};

BadgeList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  itemClass: PropTypes.string,
  isLinked: PropTypes.bool,
};

export default BadgeList;
