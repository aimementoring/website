import { getAllCountries, getCountriesFromUniversities } from './country';
import { COUNTRIES_WITH_AIME_COMING_SOON } from '../constants';
import COUNTRY_CODES from './countryCodes';

export const getCountriesAccordingToAimeProgram = (universitiesLoaded) => {
  const countries = getAllCountries().map((country) => ({
    value: country.code,
    label: country.name,
  }));
  const countriesWithAimeProgram = getCountriesFromUniversities(universitiesLoaded).filter((country) => country !== '');

  // Setting countries with AIME program in the first positions of the array
  countries.sort((a, b) => {
    if (countriesWithAimeProgram.indexOf(a.value) > -1 || a > b) {
      return -1;
    }
    return a === b ? 0 : 1;
  });
  // sorting alphabetically the countries with AIME
  const countriesForState = [
    ...countries
      .slice(0, countriesWithAimeProgram.length)
      .sort((a, b) => {
        if (a.value > b.value) {
          return 1;
        }
        return a.value === b.value ? 0 : -1;
      }),
    ...countries.slice(countriesWithAimeProgram.length, countries.length),
  ];
  // Show first the coming soon countries
  countriesForState.sort((a, b) => {
    if (COUNTRIES_WITH_AIME_COMING_SOON.indexOf(a.value) > -1 || a > b) {
      return -1;
    }
    return a === b ? 0 : 1;
  });
  return { countriesForState, countriesWithAimeProgram };
};

// Group the countries for the country selector (in the list we sorted first
// 'Countries with AIME/We are here!' then 'Coming soon :)' and after that
// 'Countries without AIME/One day...')
export const getCountryGroupOptions = (countries, countriesWithAimeProgram) => {
  const commingSoonLength = COUNTRIES_WITH_AIME_COMING_SOON.length;
  if (!countriesWithAimeProgram || !countriesWithAimeProgram.length) {
    return [];
  }
  const countriesWithAimeArrangement = commingSoonLength + countriesWithAimeProgram.length;
  return [
    {
      label: 'We are here!',
      options: [
        ...countries
          .slice(commingSoonLength, countriesWithAimeArrangement)
          .map((country) => ({ ...country, group: 'AIME in country' })),
      ],
      value: '',
    },
    {
      label: 'Coming soon :)',
      options: [
        ...countries
          .slice(0, commingSoonLength)
          .map((country) => ({ ...country, group: 'AIME in country' })),
      ],
      value: '',
    },
    {
      label: 'One day...',
      options: [
        ...countries
          .slice(countriesWithAimeArrangement, countries.length)
          .map((country) => ({ ...country, group: 'AIME in country' })),
      ],
      value: '',
    },
  ];
};

export const getDataOfUniversity = (universityOptions, universityId) => {
  const universitySelected = universityOptions.filter(
    (university) => university.reportingName && university.reportingName === universityId,
  );
  const universityValue = universitySelected[0].value;
  const countrySelected = universitySelected[0].country;
  const countryObj = COUNTRY_CODES.find((country) => country.code === countrySelected);
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
