import { appendOptions } from './domHelper';
import request from './request';
import bugsnagClient from './bugsnag';
import countries from 'country-list';


const mainCountryNames = ['Australia', 'South Africa', 'Uganda', 'Nigeria', 'United States'];

export const countryCollection = () => {
  const countryNames = countries.getNames().filter(c => mainCountryNames.indexOf(c) === -1);

  return [].concat(
    mainCountryNames.map(n => ({ text: n })),
    { text: '......', disabled: true },
    countryNames.map(n => ({ text: n })),
  );
};
export const getAllCountries = () => {
  return countries.getData();
}
export const createCountryOptions = () => {
  const select = document.querySelector('.js-country-select');
  if (select) appendOptions(select, countryCollection());
};

export const getMyCountry = () => {
  return request(`https://pro.ip-api.com/json/?key=${process.env.REACT_APP_PRO_IP_KEY}`, {
    method: 'GET',
    hasAuthorization: false,
  });
}

export const getDefaultCountry = () => {
  return {
    countryCode: 'AU',
    country: 'Australia' };
}

export const detectCountry = (callBackFunction) => {
  getMyCountry()
    .then(countryJson => {
      callBackFunction(countryJson);
    })
    .catch(error => {
      callBackFunction(getDefaultCountry());
      // Catching the error manually because of build issues.
      bugsnagClient.notify(new Error(`Error getting country: ${error}`));
    });
}

export const getCountriesFromUniversities = (universitiesLoaded) => {
  return [
    ...new Set(universitiesLoaded.map(item => item.country)),
  ];
}
