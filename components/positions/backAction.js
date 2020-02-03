import React from 'react';
import Anchor from '../common/link';

const BackAction = () => (
  <Anchor
    to="/positions#opportunity-list"
    className="article-tile-link basic-btn italic"
  >
    <i className="material-icons">keyboard_backspace</i>
      Back to
      Opportunity List
  </Anchor>
);

export default BackAction;
