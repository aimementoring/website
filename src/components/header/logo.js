import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link className="flex" to="/">
    <svg className="icon icon-aime-logo">
      <use xlinkHref="#icon-aime-logo" />
    </svg>
  </Link>
);

export default Logo;
