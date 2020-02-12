import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'aime-blueprint/lib/components/select';
import { loadUniversities } from '../../services/positions';
import { isClientSide } from '../../utils/utilities';
import './styles.scss';

const UniversitySelector = ({
  placeholder, classNames, containerClassNames, onChangeFunction, value,
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
        onChangeFunction={onChangeFunction}
        theme={process.env.REACT_APP_THEME}
        value={value}
        options={universities && universities.length
          ? universities
            .filter((university) => university.text && university.value)
            .map((university) => ({
              value: university.value,
              label: university.text,
            }))
          : []}
      />
    </div>
  );
};

UniversitySelector.propTypes = {
  placeholder: PropTypes.string.isRequired,
  classNames: PropTypes.string,
  containerClassNames: PropTypes.string,
  onChangeFunction: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UniversitySelector.defaultProps = {
  onChangeFunction: () => {},
  classNames: '',
  containerClassNames: '',
  value: null,
};

export default UniversitySelector;
