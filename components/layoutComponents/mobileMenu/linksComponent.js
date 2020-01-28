import React from 'react';
import PropTypes from 'prop-types';
import Anchor from '../../common/link';
import './index.scss';
import IntercomChat from '../../intercom';

const LinksComponent = ({
  links, handleLinkClicked, active,
}) => (
  <ul className="overflow-scroll list-reset pl3 pb3 pt2 flex flex-column items-start flex-auto">
    <div>
      {
        links.map((link) => (
          <li key={link.title} className="py2">
            {!link.title && link.url === '' ? (
              <IntercomChat classNames={`text-decoration-none menuNavLink ${link.class || 'c-black'}${active === link.title ? 'active' : ''}`} />
            ) : (
              <Anchor
                className={`text-decoration-none menuNavLink ${link.class || 'c-black'} 
                    ${active === link.title ? 'active' : ''}`}
                onClick={handleLinkClicked(link.title)}
                to={link.url}
              >
                {link.title}
              </Anchor>
            )}
          </li>
        ))
      }
    </div>
  </ul>
);

LinksComponent.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    class: PropTypes.string,
  })).isRequired,
  handleLinkClicked: PropTypes.func.isRequired,
  active: PropTypes.string,
};

LinksComponent.defaultProps = {
  active: '',
};

export default LinksComponent;
