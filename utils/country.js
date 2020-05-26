import countries from 'country-list';

export const getAllCountries = () => countries.getData();

export const getCountriesFromUniversities = (universitiesLoaded) => [
  ...new Set(universitiesLoaded.map((item) => item.country)),
];
