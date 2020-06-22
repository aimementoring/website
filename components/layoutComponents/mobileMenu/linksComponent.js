import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Anchor from '../../common/link';
import { DonationContext } from '../../../context';
import IntercomChat from '../../intercom';
import styles from './mobileMenu.module.scss';

const LinksComponent = ({ links, handleLinkClicked, active }) => {
  const { toggleDonationModal } = useContext(DonationContext);

  const showDonate = ({ title }) => () => {
    handleLinkClicked(title)();
    toggleDonationModal();
  };

  const renderLink = (link) => {
    const navLinkClassNames = classNames(styles.menuNavLink,
      link.class, (active === link.title ? styles.active : ''));
    if (link.type === 'intercom') {
      return (
        <IntercomChat classNames={navLinkClassNames} />
      );
    }
    if (link.type === 'donate') {
      return (
        <div
          onClick={showDonate(link)}
          onKeyPress={showDonate(link)}
          role="presentation"
          className={navLinkClassNames}
        >
          {link.title}
        </div>
      );
    }
    if (link.type === 'external') {
      return (
        <Anchor
          className={navLinkClassNames}
          onClick={handleLinkClicked(link.title)}
          href={link.url}
          target="_blank"
        >
          {link.title}
        </Anchor>
      );
    }
    return (
      <Anchor
        className={navLinkClassNames}
        onClick={handleLinkClicked(link.title)}
        to={link.url}
        target={link.target || null}
      >
        {link.title}
      </Anchor>
    );
  };

  return (
    <ul className={styles.mobileMenuList}>
      <div>
        {links.map((link) => (
          <li key={link.title} className={styles.mobileMenuListItem}>
            {renderLink(link)}
          </li>
        ))}
      </div>
    </ul>
  );
};

LinksComponent.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    class: PropTypes.string,
    action: PropTypes.func,
    type: PropTypes.string,
  })).isRequired,
  handleLinkClicked: PropTypes.func.isRequired,
  active: PropTypes.string,
};

LinksComponent.defaultProps = {
  active: '',
};

export default LinksComponent;
