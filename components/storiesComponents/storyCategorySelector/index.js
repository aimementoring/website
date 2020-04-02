import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import styles from './storyCategorySelector.module.scss';

const Checkbox = dynamic(() => import('aime-blueprint/lib/components/checkbox'));

const StoryCategorySelector = ({ categories, selectedCategories, onChangeFunction }) => (
  <ul className={styles.storyCategorySelectorContainer}>
    {categories.map((category) => (
      <li key={category}>
        <Checkbox
          // elementClassName=""
          // className=""
          onChangeFunction={onChangeFunction}
          name={category}
          placeholder={category}
          value={selectedCategories.indexOf(category) !== -1}
          theme={process.env.REACT_APP_THEME}
        />
      </li>
    ))}
  </ul>
);

StoryCategorySelector.defaultProps = {
  categories: [],
  selectedCategories: [],
  onChangeFunction: () => {},
};

StoryCategorySelector.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  selectedCategories: PropTypes.arrayOf(PropTypes.string),
  onChangeFunction: PropTypes.func,
};

export default StoryCategorySelector;
