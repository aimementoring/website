import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Anchor = ({
  to, as, className, children, ...props
}) => (
  <Link href={to} as={as}>
    <a className={className} {...props}>{children}</a>
  </Link>
);

Anchor.propTypes = {
  to: PropTypes.string.isRequired,
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Anchor.defaultProps = {
  as: null,
  className: null,
};

export default Anchor;
