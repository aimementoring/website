import { getFromStorage } from './localStorage';

export const isClientSide = () => typeof window !== 'undefined';

export const checkCountryParams = (props) => (
  props.match && props.match.isExact && props.match.params
    && props.match.params.countryId
    ? props.match.params.countryId
    : 'global'
);

export function getCountrySite() {
  return getFromStorage('country_code_selected');
}

export const sortArrayOfObjectByField = (arrayToSort, field, order = 'desc') => {
  const orderValue = order === 'desc' ? 1 : -1;
  const sortedArray = arrayToSort.sort(
    (a, b) => {
      let result;
      if (a[field] < b[field]) {
        result = 1;
      } else {
        result = a[field] > b[field] ? -1 : 0;
      }
      return result * orderValue;
    },
  );
  return sortedArray;
};

export const getUcFirst = (value) => `${value[0].toUpperCase()}${value.slice(1)}`;

export const firstCharacterToUpperCaseAndSpacesForDivision = (theString, originalDivision) => {
  const arrayOfString = theString.split(originalDivision);
  const arrayPascalCase = arrayOfString.map(
    (word) => `${word[0].toUpperCase()}${word.substring(1, word.length)}`,
  );
  return arrayPascalCase.join(' ');
};
