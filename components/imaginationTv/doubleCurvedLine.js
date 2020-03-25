import React from 'react';
import styles from './doubleCurvedLine.module.scss';

const DoubleCurvedLine = () => (
  <svg className={styles.doubleline} viewBox="0 0 100 8" preserveAspectRatio="none">
    <path
      className={styles.top}
      d="M100,6.4L100,6.4L100,6.4c-6.2,0-9.5-1.5-12.6-2.9l0,0c-2.9-1.5-6-3-12.2-3S66.1,2,62.9,3.4
      c0,0-6.4,2.9-12.6,2.9s-9.4-1.5-12.6-2.9l0,0c-3.1-1.5-6.3-2.9-12.6-2.9S15.6,2,12.4,3.4l0,0c-3.1,1.5-6.2,3-12.4,3l0,0l0,0"
    />
    <path
      className={styles.bottom}
      d="M100,6.9L100,6.9L100,6.9c-6.2,0-9.5-1.5-12.6-2.9l0,0c-2.9-1.5-6-3-12.2-3s-9.1,1.5-12.3,2.9
      c0,0-6.4,2.9-12.6,2.9s-9.4-1.5-12.6-2.9l0,0C34.6,2.4,31.5,1,25.1,1s-9.5,1.5-12.7,2.9l0,0c-3.1,1.5-6.2,3-12.4,3l0,0l0,0"
    />
  </svg>
);

export default DoubleCurvedLine;
