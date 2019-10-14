
import { getAllCountries, getCountriesFromUniversities } from './country';
import { COUNTRY_CODES } from './countryCodes';
import { COUNTRIES_WITH_AIME_COMING_SOON } from '../constants';

export const getCountriesAccordingToAimeProgram = (universitiesLoaded) => {
  const countries = getAllCountries()
    .map(country => {
      return {
        value: country.code,
        label: country.name,
      };
    });
  const countriesWithAimeProgram = getCountriesFromUniversities(universitiesLoaded);

  // Setting countries with AIME program in the first positions of the array
  countries.sort((a, b) => (
    countriesWithAimeProgram.indexOf(a.value) > -1 || a > b
      ? -1
      : (a === b ? 0 : 1)
  ));
  // sorting alphabetically the countries with AIME
  const countriesForState = [
    ...countries.slice(0, countriesWithAimeProgram.length)
      .sort((a, b) => (
        a.value > b.value ? 1 : (a.value === b.value ? 0 : -1))
      ),
    ...countries.slice(countriesWithAimeProgram.length, countries.length),
  ];
  // Show first the coming soon countries
  countriesForState.sort((a, b) => (
    COUNTRIES_WITH_AIME_COMING_SOON.indexOf(a.value) > -1 || a > b
      ? -1
      : (a === b ? 0 : 1)
  ));
  return { countriesForState, countriesWithAimeProgram };
};

export const getDataOfUniversity = (universityOptions, universityId) => {
  const universitySelected = universityOptions
    .filter(university => (
      university.reportingName &&
      university.reportingName ===
      universityId
    ));
  const universityValue = universitySelected[0].value;
  const countrySelected = universitySelected[0].country;
  const countryObj = COUNTRY_CODES.find(country => country.code === countrySelected);
  let countryName = '';
  let countryCode = '';
  if (countryObj) {
    countryName = countryObj.name;
    countryCode = countryObj.code;
  }
  return {
    universityValue,
    countrySelected,
    countryName,
    countryCode,
  };
};
