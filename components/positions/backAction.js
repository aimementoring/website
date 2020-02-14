import React from 'react';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Anchor from '../common/link';

const BackAction = () => (
  <Paragraph>
    <Anchor to="/positions#opportunity-list" className="backToOpps">
      <i className="material-icons">keyboard_backspace</i>
      Back to list of opportunities
    </Anchor>
  </Paragraph>
);

export default BackAction;
