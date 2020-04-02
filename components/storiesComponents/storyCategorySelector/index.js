import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import styles from './storyCategorySelector.module.scss';

const Button = dynamic(() => import('aime-blueprint/lib/components/button'));

const StoryCategorySelector = ({ categories, selectedCategories, onChangeFunction }) => {
  const allCategoriesSelected = selectedCategories.length === categories.length;
  return (
    <div className={styles.storyCategorySelectorContainer}>
      <div className={styles.tabContainer} key="All">
        <Button
          className={`${styles.tab} ${allCategoriesSelected ? styles.activeTab : ''}`}
          name="All"
          onClickFunction={onChangeFunction()}
          theme={process.env.REACT_APP_THEME}
        >
          <span className={styles.tabText}>All</span>
        </Button>
      </div>
      {categories.map((category) => (
        <div className={styles.tabContainer} key={category}>
          <Button
            className={`${styles.tab} ${!allCategoriesSelected && selectedCategories.indexOf(category) !== -1 ? styles.activeTab : ''}`}
            name={category}
            onClickFunction={onChangeFunction(category)}
            theme={process.env.REACT_APP_THEME}
          >
            <span className={styles.tabText}>{category}</span>
          </Button>
        </div>
      ))}
    </div>
  );
};


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
