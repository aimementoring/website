import React from 'react';
import PropType from 'prop-types';

import styles from './jobs.module.scss';

const JobFilter = ({ currentFilter, filtersType, filterBy }) => {
  const filterJobs = (type) => () => {
    if (!type) filterBy(undefined);
    return filterBy(type);
  };

  return (
    <div className={styles.containerJobFilter}>
      <h4 className={styles.titleJobFilter}>Refine</h4>
      <ul className={styles.listJobFilter}>
        <li className={styles.elemJobFilter}>
          <span
            className={`${styles.filterList} ${!currentFilter ? styles.active : ''}`}
            onClick={filterJobs(undefined)}
            onKeyPress={filterJobs(undefined)}
            role="presentation"
          >
            All
          </span>
        </li>
        {filtersType.map((type) => (
          <li className={styles.elemJobFilter} key={type || 'undefined'}>
            {!!type && (
              <span
                className={`${styles.filterList} ${currentFilter === type ? styles.active : ''}`}
                onClick={filterJobs(type)}
                onKeyPress={filterJobs(type)}
                role="presentation"
              >
                {type}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

JobFilter.propTypes = {
  currentFilter: PropType.string,
  filterBy: PropType.func.isRequired,
  filtersType: PropType.arrayOf(PropType.string).isRequired,
};

JobFilter.defaultProps = {
  currentFilter: null,
};

export default JobFilter;
