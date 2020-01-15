import React from 'react';
import PropTypes from 'prop-types';
import Anchor from '../common/link';
import styles from './navItem.module.scss';

const NavItem = ({
  label, className, target, as, to, type, action,
}) => {
  const restProps = {
    'aria-label': label,
    className: className || styles.itemLink,
  };
  if (target) {
    restProps.target = target;
    restProps.rel = 'noopener noreferrer';
  }
  if (as) {
    restProps.as = as;
  }
  return (
    <li className={styles.listItem} key={to}>
      {type === 'button'
        ? (
          <button
            onClick={action}
            type="button"
            {...restProps}
          >
            {/* eslint-disable-next-line react/no-danger */}
            <span dangerouslySetInnerHTML={{ __html: label }} />
          </button>
        ) : (
          <Anchor
            to={to}
            {...restProps}
          >
            {/* eslint-disable-next-line react/no-danger */}
            <span dangerouslySetInnerHTML={{ __html: label }} />
          </Anchor>
        )}
    </li>
  );
};

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  target: PropTypes.string,
  as: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.oneOf(['button', 'link']),
  action: PropTypes.func,
};

NavItem.defaultProps = {
  className: null,
  target: null,
  as: null,
  to: '',
  type: 'link',
  action: () => {},
};

export default NavItem;
