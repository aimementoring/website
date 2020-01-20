import React from 'react';
import PropTypes from 'prop-types';
import COUNTRY_CODES from '../../utils/countryCodes';
import { COUNTRIES_WITH_AIME_COMING_SOON } from '../../constants';
import './beAMentor.module.scss';

const getCountryNameByCode = (countryCode) => {
  const countryFound = COUNTRY_CODES.find((country) => country.code === countryCode);
  if (countryFound) return countryFound.name;
  return 'your country';
};

const CountryOutsideProgram = ({ countrySelected }) => {
  const countryName = getCountryNameByCode(countrySelected);
  return (
    <div>
      <p className="pt3">
        {COUNTRIES_WITH_AIME_COMING_SOON.indexOf(countrySelected) > -1 ? (
          `AIME is going to be in ${countryName}
            soon and we will need Mentors! We can't give you an exact date but fill in your details and we will be in touch :)`
        ) : (
          `AIME isn’t located in ${countryName}
              yet but we sure would love to be! Fill in your details below and we'll
              take it from there!`
        )}
      </p>
    </div>
  );
};

CountryOutsideProgram.propTypes = {
  countrySelected: PropTypes.string,
};

CountryOutsideProgram.defaultProps = {
  countrySelected: '',
};

export default CountryOutsideProgram;
