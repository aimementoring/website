import React from 'react';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Anchor from '../common/link';
import styles from './backAction.module.scss';

const BackAction = () => (
  <Paragraph>
    <Anchor to="/positions#opportunity-list" className={styles.backActionParagraph}>
      <i className={styles.materialIcons}>keyboard_backspace</i>
      Back to list of opportunities
    </Anchor>
  </Paragraph>
);

export default BackAction;
