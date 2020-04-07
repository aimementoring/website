/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import useDonate from '../../hooks/useDonate';
import styles from './donateToAime.module.scss';

const DonateToAime = () => {
  // eslint-disable-next-line no-unused-vars
  const [modalVisible, toggleDonateModal] = useDonate();

  return (

    <div
      role="link"
      onClick={toggleDonateModal}
    >
      <svg className={styles.frameSvg} viewBox="0 0 100 14.8" preserveAspectRatio="none">
        <defs>
          <filter id="dropshadow" height="120%">
            <feDropShadow dx="0.1" dy="0.1" stdDeviation="0" floodColor="#9135F0" floodOpacity="1" />
          </filter>
        </defs>
        <g className={styles.donateSvgGroup}>
          <path className={styles.donateSvgShape} d="M0 14.3h.2c6.2 0 9.3-1.4 12.4-2.9h0c3.1-1.5 6.3-2.9 12.6-2.9s9.4 1.5 12.5 2.9h0c3.1 1.5 6.2 2.9 12.5 2.9s12.5-2.9 12.5-2.9c3.2-1.5 6.1-2.9 12.1-2.9 6.1 0 9.1 1.4 12.2 2.9h0c3.1 1.5 6.8 2.9 13 2.9h0V6.9h0c-6.2 0-9.9-1.5-13-2.9h0c-2.9-1.5-6-3-12.1-3s-9 1.5-12.2 2.9c0 0-6.3 2.9-12.5 2.9s-9.3-1.5-12.5-2.9h0C34.6 2.4 31.5 1 25.2 1s-9.4 1.5-12.6 2.9h0c-3.1 1.5-6.5 3-12.6 3h0v7.4z" />
          <path id="donateBottomPath" d="M-74.3 6.5c6.3 0 9.4 1.5 12.5 2.9 3.1 1.5 6.2 2.9 12.5 2.9 6.2 0 9.4-1.5 12.4-2.9h.1c3.1-1.4 6.1-2.9 12.2-2.9s9.2 1.4 12.3 2.9C-9.2 10.9-6 12.3.2 12.3h.1c6.1 0 9.2-1.4 12.3-2.9 3.1-1.5 6.3-2.9 12.6-2.9S34.6 8 37.7 9.4c3.1 1.5 6.2 2.9 12.5 2.9 6.2 0 9.4-1.5 12.4-2.9h.1c3.1-1.4 6.1-2.9 12.2-2.9s9.2 1.4 12.3 2.9c3.1 1.5 6.8 2.9 13 2.9s9.4-1.5 12.4-2.9h.1c3.1-1.4 6.1-2.9 12.2-2.9s9.2 1.4 12.3 2.9" />
          <path id="donateTopPath" d="M-74.3 3.6c6.3 0 9.4 1.5 12.5 2.9 3.1 1.5 6.2 2.9 12.5 2.9 6.2 0 9.4-1.5 12.4-2.9h.1c3.1-1.4 6.1-2.9 12.2-2.9s9.2 1.4 12.3 2.9C-9.2 8-6 9.4.2 9.4h.1c6.1 0 9.2-1.4 12.3-2.9 3.1-1.5 6.3-2.9 12.6-2.9s9.4 1.5 12.5 2.9c3.1 1.5 6.2 2.9 12.5 2.9 6.2 0 9.4-1.5 12.4-2.9h.1c3.1-1.4 6.1-2.9 12.2-2.9S84.1 5 87.2 6.5c3.1 1.5 6.8 2.9 13 2.9s9.4-1.5 12.4-2.9h.1c3.1-1.4 6.1-2.9 12.2-2.9s9.2 1.4 12.3 2.9" />
          <text className={styles.donateSvgText} width="100">
            <textPath href="#donateBottomPath" alignmentBaseline="right" startOffset="100%" textAnchor="top">
              {'DONATE TO IN{TV}'}
              <animate attributeName="startOffset" from="100%" to="0%" begin="0s" dur="15s" repeatCount="indefinite" />
            </textPath>
          </text>
          <text className={`${styles.donateTitleText} ${styles.donateSvgText}`} width="100">
            <textPath href="#donateTopPath" alignmentBaseline="top" startOffset="60%" textAnchor="middle">
        - GET A MENTOR IN THE HOME EVERDAY -
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
};

export default DonateToAime;
