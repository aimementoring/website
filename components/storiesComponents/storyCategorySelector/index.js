import React from 'react';
import PropTypes from 'prop-types';
import Button from 'aime-blueprint/lib/components/button';
import styles from './storyCategorySelector.module.scss';

const StoryCategorySelector = ({
  categories, selectedCategories, onClickFunction,
}) => {
  const allCategoriesSelected = selectedCategories.length === categories.length;
  return (
    <div className={styles.storyCategorySelectorContainer}>
      <div className={styles.tabContainer} key="All">
        <Button
          className={`${styles.tab} ${styles.allTab} ${allCategoriesSelected ? styles.activeTab : ''}`}
          name="All"
          onClickFunction={onClickFunction(categories)}
          theme={process.env.REACT_APP_THEME}
        >
          <span className={styles.tabText}>All</span>
        </Button>
      </div>
      {categories.map((category) => (
        <div className={styles.tabContainer} key={category}>
          <Button
            className={`${styles.tab} ${(!allCategoriesSelected && selectedCategories.indexOf(category) !== -1) ? styles.activeTab : ''}`}
            name={category}
            onClickFunction={onClickFunction([category])}
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
  onClickFunction: () => {},
};

StoryCategorySelector.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  selectedCategories: PropTypes.arrayOf(PropTypes.string),
  onClickFunction: PropTypes.func,
};

export default StoryCategorySelector;
