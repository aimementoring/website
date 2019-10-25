import React from 'react';
import Anchor from '../../common/link';

const Logo = () => (
  <Anchor className="flex" to="/">
    <svg className="icon icon-aime-logo">
      <use xlinkHref="#icon-aime-logo" />
    </svg>
  </Anchor>
);

export default Logo;
