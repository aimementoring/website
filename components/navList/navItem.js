import React from 'react';
import PropTypes from 'prop-types';
import Anchor from '../common/link';
import styles from './navItem.module.scss';
import IntercomChat from '../intercom';

const NavItem = ({
  label, className, target, as, to, action,
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

  const rule = new RegExp('^https?://', 'i');
  const linkTest = rule.test(to) ? 'external' : 'internal';
  const labelCheck = label.indexOf('Become a Partner') > -1
    ? 'Become a Partner' : 'Get in Touch';

  const renderNavItem = () => {
    if (to) {
      return linkTest ? (
        <a href={to} {...restProps}>
          {/* eslint-disable-next-line react/no-danger */}
          <span dangerouslySetInnerHTML={{ __html: label }} />
        </a>
      ) : (
        <Anchor to={to} {...restProps}>
          {/* eslint-disable-next-line react/no-danger */}
          <span dangerouslySetInnerHTML={{ __html: label }} />
        </Anchor>
      );
    }
    if (action) {
      return (
        <div onClick={action} onKeyPress={action} role="presentation">
          {/* eslint-disable-next-line react/no-danger */}
          <span className={styles.itemLink} dangerouslySetInnerHTML={{ __html: label }} />
        </div>
      );
    }
    return <IntercomChat classNames={styles.itemLink} label={labelCheck} />;
  };

  return (
    <li className={styles.listItem} key={to}>
      {renderNavItem()}
    </li>
  );
};

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  target: PropTypes.string,
  as: PropTypes.string,
  to: PropTypes.string,
  action: PropTypes.func,
};

NavItem.defaultProps = {
  className: null,
  target: null,
  as: null,
  to: '',
  action: null,
};

export default NavItem;
