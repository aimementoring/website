import React from 'react';
import Link from 'next/link';
import { resolve, parse } from 'url';
import Router from 'next/router';
import PropTypes from 'prop-types';

class DataPrefetchLink extends Link {
  async prefetch() {
    if (typeof window === 'undefined') {
      return;
    }

    const { pathname } = window.location;
    const href = resolve(pathname, this.props.href);
    const { query } = parse(this.props.href, true);
    const Component = await Router.prefetch(href);

    if (this.props.withData && Component) {
      const ctx = { pathname: href, query, isVirtualCall: true };
      await Component.getInitialProps(ctx);
    }
  }
}

const Anchor = ({
  to, as, className, children, ...props
}) => {
  const { target } = props;
  return target ? (
    <a aria-label={as} className={className} {...props}>{children}</a>
  ) : (
    <DataPrefetchLink href={to} as={as}>
      <a aria-label={as} className={className} {...props}>{children}</a>
    </DataPrefetchLink>
  );
};

Anchor.propTypes = {
  to: PropTypes.string.isRequired,
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  target: PropTypes.string,
};

Anchor.defaultProps = {
  as: null,
  className: null,
  target: null,
};

export default Anchor;
