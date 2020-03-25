import React from 'react';
import styles from './movingWaves.module.scss';

const MovingWaves = () => (
  <svg viewBox="0 0 100 2.2" xmlns="http://www.w3.org/2000/svg" className={styles.waveForm}>
    <path
      className={styles.topLine}
      d="M100,2.2C87.5,2.2,87.5,0,75,0S62.5,2.2,50,2.2S37.5,0,25,0S12.5,2.2,0,2.2C-12.5,2.2-12.5,0-25,0
      s-12.5,2.2-25,2.2S-62.5,0-75,0s-12.5,2.2-25,2.2"
      fillRule="nonzero"
      fill="none"
    >
      <animateTransform
        attributeName="transform"
        type="translate"
        from="100 0"
        to="0 0"
        begin="0s"
        dur="31s"
        repeatCount="indefinite"
      />
    </path>
    <path
      className={styles.middleLine}
      d="M100,2.2C87.5,2.2,87.5,0,75,0S62.5,2.2,50,2.2S37.5,0,25,0S12.5,2.2,0,2.2C-12.5,2.2-12.5,0-25,0
      s-12.5,2.2-25,2.2S-62.5,0-75,0s-12.5,2.2-25,2.2"
      fillRule="nonzero"
      fill="none"
    >
      <animateTransform
        attributeName="transform"
        type="translate"
        from="0 0"
        to="100 0"
        begin="0s"
        dur="13s"
        repeatCount="indefinite"
      />
    </path>
    <path
      className={styles.bottomLine}
      d="M100,2.2C87.5,2.2,87.5,0,75,0S62.5,2.2,50,2.2S37.5,0,25,0S12.5,2.2,0,2.2C-12.5,2.2-12.5,0-25,0
      s-12.5,2.2-25,2.2S-62.5,0-75,0s-12.5,2.2-25,2.2"
      fillRule="nonzero"
      fill="none"
    >
      <animateTransform
        attributeName="transform"
        type="translate"
        from="100 0"
        to="0 0"
        begin="0s"
        dur="23s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

export default MovingWaves;
