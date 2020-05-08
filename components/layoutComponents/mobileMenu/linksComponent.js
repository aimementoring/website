import React from 'react';
import PropTypes from 'prop-types';
import Anchor from '../../common/link';
import useDonate from '../../../hooks/useDonate';
import IntercomChat from '../../intercom';
import './index.scss';

const LinksComponent = ({
  links, handleLinkClicked, active,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [modalVisible, toggleDonateModal] = useDonate();

  const showDonate = ({ title }) => () => {
    handleLinkClicked(title)();
    toggleDonateModal();
  };

  const renderLink = (link) => {
    if (!link.title && link.url === '') {
      return (
        <IntercomChat classNames={`text-decoration-none menuNavLink ${link.class || 'c-black'}${active === link.title ? 'active' : ''}`} />
      );
    }
    if (link.url === 'donate') {
      return (
        <div
          onClick={showDonate(link)}
          onKeyPress={showDonate(link)}
          role="presentation"
          className={`text-decoration-none menuNavLink ${link.class || 'c-black'} 
            ${active === link.title ? 'active' : ''}`}
        >
          {link.title}
        </div>
      );
    }
    return (
      <Anchor
        className={`text-decoration-none menuNavLink ${link.class || 'c-black'} 
            ${active === link.title ? 'active' : ''}`}
        onClick={handleLinkClicked(link.title)}
        to={link.url}
        target={link.target || null}
      >
        {link.title}
      </Anchor>
    );
  };

  return (
    <ul className="overflow-scroll list-reset pl3 pb3 pt2 flex flex-column items-start flex-auto">
      <div>
        {links.map((link) => (
          <li key={link.title} className="py2">
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
  })).isRequired,
  handleLinkClicked: PropTypes.func.isRequired,
  active: PropTypes.string,
};

LinksComponent.defaultProps = {
  active: '',
};

export default LinksComponent;
