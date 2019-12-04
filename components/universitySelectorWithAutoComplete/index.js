import React from 'react';
import PropTypes from 'prop-types';
import Select from '../commonElements/reactSelect';

const defaultUniversityValue = {
  value: 'I can’t find my university/college here',
  label: 'I can’t find my university/college here',
};

const UniversitySelector = ({
  placeholder,
  containerClassNames,
  onChangeFunction,
  name,
  error,
  isClearable,
  universityOptions,
  country,
  value,
  borderColor,
  backgroundColor,
}) => {
  const getStylesForCountrySelection = () => ({
    control: {
      background: backgroundColor,
    },
    input: {
      color: '#7603DB',
    },
    singleValue: {
      color: '#7603DB',
      position: 'initial',
      overflow: 'inherit',
      top: 'inherit',
      transform: 'inherit',
      maxWidth: 'inherit',
    },
    menu: {
      borderRadius: 0,
      marginTop: '0px',
      width: '100%',
      zIndex: 10000,
    },
    menuList: {
      zIndex: 10000,
      padding: 0,
    },
  });

  const universitiesWithCountry = universityOptions.filter(
    (university) => !country || country === university.country,
  );
  const universities = [defaultUniversityValue, ...universitiesWithCountry];

  return (
    <div>
      {universityOptions && universityOptions.length > 0 && (
        <Select
          name={name}
          placeholder={placeholder}
          className={containerClassNames}
          onChangeFunction={onChangeFunction}
          options={universities}
          error={error}
          isClearable={isClearable}
          value={value}
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          color="#DA0DFF"
          styles={getStylesForCountrySelection()}
        />
      )}
    </div>
  );
};

UniversitySelector.propTypes = {
  placeholder: PropTypes.string.isRequired,
  containerClassNames: PropTypes.string,
  onChangeFunction: PropTypes.func,
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
  isClearable: PropTypes.bool,
  country: PropTypes.string,
  universityOptions: PropTypes.arrayOf(PropTypes.shape({
    country: PropTypes.string,
  })).isRequired,
  value: PropTypes.string,
  borderColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

UniversitySelector.defaultProps = {
  isClearable: true,
  containerClassNames: '',
  country: null,
  value: null,
  onChangeFunction: () => {},
  error: false,
};

export default UniversitySelector;
