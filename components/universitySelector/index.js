import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'aime-blueprint/lib/components/select';
import { loadUniversities } from '../../services/positions';
import { isClientSide } from '../../utils/utilities';
import './styles.scss';

const UniversitySelector = ({
  placeholder, classNames, containerClassNames, onChangeFunction,
}) => {
  const [universities, setUniversities] = useState([]);

  const fetchUniversities = async () => {
    const data = await loadUniversities();
    setUniversities(data);
  };

  const isClient = isClientSide();
  useEffect(() => {
    fetchUniversities();
  }, [isClient]);

  return (
    <div className={containerClassNames}>
      <Select
        placeholder={placeholder}
        name="uni-campus-attending"
        className={classNames}
        onChange={onChangeFunction}
        theme={process.env.REACT_APP_THEME} 
        defaultValue=""
        required
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {universities && universities.length
          && universities
            .filter((university) => university.text && university.value)
            .map((university) => (
              <option key={university.value} disabled="" value={university.value}>
                {university.text}
              </option>
            ))}
      </Select>
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
  classNames: 'testingClass',
  containerClassNames: '',
};

export default UniversitySelector;
