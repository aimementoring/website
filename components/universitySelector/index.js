import React from 'react';
import PropTypes from 'prop-types';
import { loadUniversities } from '../../services/positions';

const UniversitySelector = ({
  placeholder, classNames, containerClassNames, onChangeFunction, universities,
}) => (
  <div className={containerClassNames}>
    <select
      placeholder={placeholder}
      name="uni-campus-attending"
      className={classNames}
      onChange={onChangeFunction}
      defaultValue=""
      required
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {universities.length
        && universities
          .filter((university) => university.text && university.value)
          .map((university) => (
            <option key={university.value} disabled="" value={university.value}>
              {university.text}
            </option>
          ))}
    </select>
  </div>
);

UniversitySelector.getInitialProps = async () => {
  const universities = await loadUniversities();
  return { universities };
};

UniversitySelector.propTypes = {
  placeholder: PropTypes.string.isRequired,
  classNames: PropTypes.string,
  containerClassNames: PropTypes.string,
  onChangeFunction: PropTypes.func,
  universities: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

UniversitySelector.defaultProps = {
  onChangeFunction: () => {},
  classNames: '',
  containerClassNames: '',
};

export default UniversitySelector;
