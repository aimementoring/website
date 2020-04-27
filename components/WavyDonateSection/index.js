/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import useDonate from '../../hooks/useDonate';
import styles from './wavyDonateSection.module.scss';

const WavyDonateSection = () => {
  // eslint-disable-next-line no-unused-vars
  const [modalVisible, toggleDonateModal] = useDonate();

  return (

    <div
      role="link"
      onClick={toggleDonateModal}
      className={styles.donateLink}
    >
      <svg className={styles.frameSvg} viewBox="0 0 100 14.8" preserveAspectRatio="xMinYMid meet">
        <defs>
          <filter id="dropshadow" height="120%">
            <feDropShadow dx="0.1" dy="0.5" stdDeviation="0" floodColor="#9135F0" floodOpacity="1" />
          </filter>
        </defs>
        <g className={styles.donateSvgGroup}>
          <path className={styles.donateSvgShape} d="M0 14.3h.2c6.2 0 9.3-1.4 12.4-2.9h0c3.1-1.5 6.3-2.9 12.6-2.9s9.4 1.5 12.5 2.9h0c3.1 1.5 6.2 2.9 12.5 2.9s12.5-2.9 12.5-2.9c3.2-1.5 6.1-2.9 12.1-2.9 6.1 0 9.1 1.4 12.2 2.9h0c3.1 1.5 6.8 2.9 13 2.9h0V6.9h0c-6.2 0-9.9-1.5-13-2.9h0c-2.9-1.5-6-3-12.1-3s-9 1.5-12.2 2.9c0 0-6.3 2.9-12.5 2.9s-9.3-1.5-12.5-2.9h0C34.6 2.4 31.5 1 25.2 1s-9.4 1.5-12.6 2.9h0c-3.1 1.5-6.5 3-12.6 3h0v7.4z" />
          <path id="donateBottomPath" d="M-49.3 12.3c13.9-.6 13.1-5.8 24.7-5.8s12.8 5.4 24.6 5.8c11.8.4 12.5-5.8 25.2-5.8s12.6 5.8 25 5.8 12.5-5.8 24.7-5.8 12.4 5.8 25.1 5.8" />
          <path id="donateTopPath" d="M0 9.4c12.6 0 12.5-5.8 25.2-5.8s12.6 5.8 25 5.8 12.5-5.8 24.7-5.8S87.3 9.4 100 9.4" />
          <text className={styles.donateSvgText} width="100">
            <textPath href="#donateBottomPath" alignmentBaseline="top" startOffset="100%" textAnchor="left">
              {'DONATE TO IN{TV}'}
              <animate attributeName="startOffset" from="100%" to="0%" begin="0s" dur="15s" repeatCount="indefinite" />
            </textPath>
          </text>
          <text className={styles.donateTitleText} width="100">
            <textPath href="#donateTopPath" alignmentBaseline="top" startOffset="50%" textAnchor="middle">
        - GET A MENTOR IN THE HOME EVERDAY -
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
};

export default WavyDonateSection;
