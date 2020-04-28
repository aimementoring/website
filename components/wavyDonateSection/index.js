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
      <svg className={styles.frameSvg} viewBox="0 0 108.6 14.8" preserveAspectRatio="xMinYMid meet">
        <defs>
          <filter id="dropshadow" height="120%">
            <feDropShadow dx="0.1" dy="0.5" stdDeviation="0" floodColor="#9135F0" floodOpacity="1" />
          </filter>
          <path id="donateShape" d="M3.9 14.3c6.2 0 9.5-1.4 12.6-2.9 3.1-1.5 6.3-2.9 12.6-2.9s9.4 1.5 12.5 2.9c3.1 1.5 6.2 2.9 12.5 2.9s12.5-2.9 12.5-2.9c3.2-1.5 6.1-2.9 12.1-2.9 6.1 0 9.1 1.4 12.2 2.9 3.1 1.5 6.8 2.9 13 2.9 5.7 0 6.2-7.4 0-7.4S94 5.4 90.9 4c-2.9-1.5-6-3-12.1-3s-9 1.5-12.2 2.9c0 0-6.3 2.9-12.5 2.9s-9.3-1.5-12.5-2.9C38.5 2.4 35.4 1 29.1 1s-9.4 1.5-12.6 2.9c-3.1 1.5-6.5 3-12.6 3-4.7 0-5 7.4 0 7.4z" />
        </defs>
        <g className={styles.donateSvgGroup}>
          <path className={styles.donateSvgShape} d="M3.9 14.3h0c6.2 0 9.5-1.4 12.6-2.9h0c3.1-1.5 6.3-2.9 12.6-2.9s9.4 1.5 12.5 2.9h0c3.1 1.5 6.2 2.9 12.5 2.9s12.5-2.9 12.5-2.9c3.2-1.5 6.1-2.9 12.1-2.9 6.1 0 9.1 1.4 12.2 2.9h0c3.1 1.5 6.8 2.9 13 2.9h0c5.7 0 6.2-7.4 0-7.4h0c-6.2 0-9.9-1.5-13-2.9h0c-2.9-1.5-6-3-12.1-3s-9 1.5-12.2 2.9c0 0-6.3 2.9-12.5 2.9s-9.3-1.5-12.5-2.9h0C38.5 2.4 35.4 1 29.1 1s-9.4 1.5-12.6 2.9h0c-3.1 1.5-6.5 3-12.6 3v0c-4.7 0-5 7.4 0 7.4z" />
          <path id="donateTopPath" d="M3.9 9.4c12.6 0 12.5-5.8 25.2-5.8s12.6 5.8 25 5.8 12.5-5.8 24.7-5.8 12.4 5.8 25.1 5.8" />
          <clipPath id="svgShape">
            <use xlinkHref="#donateShape" overflow="visible" />
          </clipPath>
          <path id="donateBottomPath" d="M-45.4 12.3c13.9-.6 13.1-5.8 24.7-5.8s12.8 5.4 24.6 5.8c11.8.4 12.5-5.8 25.2-5.8s12.6 5.8 25 5.8 12.5-5.8 24.7-5.8 12.4 5.7 24.9 5.8h12.4" />
          <text className={styles.donateSvgText} width="100">
            <textPath href="#donateBottomPath" alignmentBaseline="top" startOffset="100%" textAnchor="left" clipPath="url(#svgShape)">
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
