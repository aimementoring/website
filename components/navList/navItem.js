import React from 'react';
import PropTypes from 'prop-types';
import Anchor from '../common/link';
import styles from './navItem.module.scss';
import IntercomChat from '../intercom';

const NavItem = ({
  label, className, target, as, to,
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

  return (
    <li className={styles.listItem} key={to}>
      {!to ? <IntercomChat classNames={styles.itemLink} label={labelCheck} />
        : (
          <>
            {
              linkTest && (
                <a
                  href={to}
                  {...restProps}
                >
                  {/* eslint-disable-next-line react/no-danger */}
                  <span dangerouslySetInnerHTML={{ __html: label }} />
                </a>
              )
            }
            {!linkTest && (
              <Anchor
                to={to}
                {...restProps}
              >
                {/* eslint-disable-next-line react/no-danger */}
                <span dangerouslySetInnerHTML={{ __html: label }} />
              </Anchor>
            )}
          </>
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
};

NavItem.defaultProps = {
  className: null,
  target: null,
  as: null,
  to: '',
};

export default NavItem;
