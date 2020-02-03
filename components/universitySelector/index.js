import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { loadUniversities } from '../../services/positions';

// getInitialProps can only be used inside the pages directory
const UniversitySelector = (props) => {
  const {
    placeholder, classNames, containerClassNames, onChangeFunction,
  } = props;
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    loadUniversities().then((unis) => { // this is not working.
      setUniversities(unis);
    });
  }, [universities]);

  return (
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
};

UniversitySelector.propTypes = {
  placeholder: PropTypes.string.isRequired,
  classNames: PropTypes.string,
  containerClassNames: PropTypes.string,
  onChangeFunction: PropTypes.func,
};

UniversitySelector.defaultProps = {
  onChangeFunction: () => {},
  classNames: '',
  containerClassNames: '',
};

export default UniversitySelector;
