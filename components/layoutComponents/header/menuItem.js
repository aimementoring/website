import React from 'react';
import PropTypes from 'prop-types';
import Anchor from '../../common/link';
import styles from './header.module.scss';

const BE_A_MENTOR_TO = '/beAMentor';
const BE_A_MENTOR_AS = '/be-a-mentor';

const MenuItem = ({
  title, subTitle, description, links,
}) => {
  const firstHref = links.length && links[0].to ? links[0].to : BE_A_MENTOR_TO;
  const firstHrefAs = links.length && links[0].as ? links[0].as : BE_A_MENTOR_AS;
  return (
    <li className={styles.listItem} key={`${title}-key`}>
      <Anchor
        className={styles.navBtn}
        to={firstHref}
        as={firstHrefAs}
      >
        {title}
      </Anchor>
      <div className={styles.submenuWrapper}>
        <div className={styles.submenuArrow} />
        <div className={styles.menuTitle}>
          <h3 className={styles.subtitle}>{subTitle}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        {links.map((link) => (
          <Anchor
            key={link.to ? link.to : BE_A_MENTOR_TO}
            to={link.to ? link.to : BE_A_MENTOR_TO}
            as={link.as ? link.as : BE_A_MENTOR_AS}
            className={styles.submenuLink}
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
  links: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string,
    as: PropTypes.string,
  })).isRequired,
};

export default MenuItem;
