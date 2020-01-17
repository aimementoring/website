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
      <li className="py2">
        <IntercomChat classNames="intercom-button-nav navBtn" />
      </li>
      {
        links.map((link) => (
          <li key={link.title} className="py2">
            <Anchor
              className={`text-decoration-none f-18 feature-font-family ${link.class || 'c-white'} 
                    ${active === link.title ? 'active' : ''}`}
              onClick={handleLinkClicked(link.title)}
              to={link.url && link.url}
            >
              {link.title}
            </Anchor>
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
