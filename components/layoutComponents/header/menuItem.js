import React from 'react';
import PropTypes from 'prop-types';
import Anchor from '../../common/link';

const BE_A_MENTOR_TO = '/beAMentor';
const BE_A_MENTOR_AS = '/be-a-mentor';

const MenuItem = ({
  title, subTitle, description, links,
}) => {
  const firstHref = links.length && links[0].href ? links[0].href : BE_A_MENTOR_TO;
  const firstHrefAs = links.length && links[0].href ? links[0].href : BE_A_MENTOR_AS;
  return (
    <li className="inline-block relative header-link--with-submenu" key={`${title}-key`}>
      <Anchor prefetch withData className="nav-btn" to={firstHref} as={firstHrefAs}>{title}</Anchor>
      <div className="submenu-wrapper">
        <div className="submenu-arrow" />
        <div className="flex flex-column pt3 pb2 px3">
          <h3 className="light c-white mb1 f-18">{subTitle}</h3>
          <p className="f-14 mb1 c-white sm-col-10">{description}</p>
        </div>
        {links.map((link) => (
          <Anchor
            prefetch
            withData
            key={link.href ? link.href : BE_A_MENTOR_TO}
            to={link.href ? link.href : BE_A_MENTOR_TO}
            as={link.href ? link.href : BE_A_MENTOR_AS}
            className="c-brand-primary f-14 header-dropdown-button"
          >
            {link.linkText}
          </Anchor>
        ))}
      </div>
    </li>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({ href: PropTypes.string })).isRequired,
};

export default MenuItem;
