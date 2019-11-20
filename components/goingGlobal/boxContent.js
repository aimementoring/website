import React from 'react';
import PropTypes from 'prop-types';
import styles from './goingGlobal.module.scss';

const BoxContent = ({
  title, description, onClick, index,
}) => (
  <div
    className={styles.caseStudy}
    onClick={onClick(index)}
    onKeyPress={onClick(index)}
    role="presentation"
  >
    <h5>{title}</h5>
    <p>{description}</p>
    <button className={styles.btn} type="button" onClick={onClick(index)} aria-label="read case study">
      Read Case Study
    </button>
  </div>
);

BoxContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BoxContent;
