import React from 'react';
import PropTypes from 'prop-types';
import Anchor from '../common/link';
import styles from './navItem.module.scss';
import IntercomChat from '../intercom';

const NavItem = ({
  label, className, target, as, to, isExternal,
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
      {to === null && isExternal === null
        && (<IntercomChat classNames={styles.itemLink} />)}
      <>
        {
          isExternal ? (
            <a
              href={to}
              {...restProps}
            >
              {/* eslint-disable-next-line react/no-danger */}
              <span dangerouslySetInnerHTML={{ __html: label }} />
            </a>
          ) : (to !== null
            && (
              <Anchor
                to={to}
                {...restProps}
              >
                {/* eslint-disable-next-line react/no-danger */}
                <span dangerouslySetInnerHTML={{ __html: label }} />
              </Anchor>
            )
          )
        }

      </>
    </li>
  );
};

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  target: PropTypes.string,
  as: PropTypes.string,
  to: PropTypes.string,
  isExternal: PropTypes.bool,
};

NavItem.defaultProps = {
  className: null,
  target: null,
  as: null,
  to: '',
  isExternal: null,
};

export default NavItem;
