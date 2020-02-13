import React from 'react';
import PropType from 'prop-types';

const JobFilter = ({ currentFilter, filtersType, filterBy }) => {
  const filterJobs = (type) => () => {
    if (!type) filterBy(undefined);
    return filterBy(type);
  };

  return (
    <div className="job-grid filter-list-container pt2 pb3">
      <h4 className="c-brand-primary py2 f-15 px2 border border-radius">Refine</h4>
      <ul className="flex flex-wrap">
        <li className="block mr1">
          <span
            className={`filter-list cursor ${!currentFilter ? 'active' : ''}`}
            onClick={filterJobs(undefined)}
            onKeyPress={filterJobs(undefined)}
            role="presentation"
          >
            All
          </span>
        </li>
        {filtersType.map((type) => (
          <li className="block mr1" key={type || 'undefined'}>
            {!!type && (
              <span
                className={`filter-list cursor ${currentFilter === type ? 'active' : ''}`}
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
