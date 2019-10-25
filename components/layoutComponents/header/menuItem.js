import React from 'react'
import PropTypes from 'prop-types'
import Anchor from '../../common/link'

const BE_A_MENTOR_LINK = '/be-a-mentor'

const MenuItem = ({ title, subTitle, description, links }) => {
  const firstHref = links.length && links[0].href ? links[0].href : BE_A_MENTOR_LINK
  return (
    <li className="inline-block relative header-link--with-submenu" key={`${title}-key`}>
      <Anchor className="nav-btn" to={firstHref}>{title}</Anchor>
      <div className="submenu-wrapper">
        <div className="submenu-arrow" />
        <div className="flex flex-column pt3 pb2 px3">
          <h3 className="light c-white mb1 f-18">{subTitle}</h3>
          <p className="f-14 mb1 c-white sm-col-10">{description}</p>
        </div>
        {links.map((link, key) => (
          <Anchor key={key}
            to={link.href ? link.href : BE_A_MENTOR_LINK}
            className="c-brand-primary f-14 header-dropdown-button"
          >
            {link.linkText}
          </Anchor>
        ))}
      </div>
    </li>
  )
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
}

export default MenuItem
