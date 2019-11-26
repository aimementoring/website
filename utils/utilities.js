/* eslint-disable no-useless-escape */
import moment from 'moment';
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

// capitalises first character of each word
export const capitaliseFirstCharacter = (stringValue) => (
  stringValue.replace(/\b([a-z\s])/g, (string) => string.toUpperCase())
);

// capitalizes entire word
export const capitaliseString = (stringValue, replaceValue) => (
  replaceValue
    ? stringValue.replace(/\b([a-z\s]+)/g, replaceValue.toUpperCase())
    : stringValue.replace(/\b([a-z]*)/g, (string) => string.toUpperCase())
);

// removes special characters on standard en-us keyboard config
export const removeSpecialCharacters = (stringValue, replaceValue) => (
  replaceValue
    ? stringValue.replace(/[$&+,:;=?@#|'"‘’<>.^*()%!-._\\\/`~\[\]\{\}0-9]+/g, replaceValue)
    : stringValue.replace(/[$&+,:;=?@#|'"‘’<>.^*()%!-._\\\/`~\[\]\{\}0-9]*/g, '')
);

// removes all numbers in a string
export const removeNumbers = (stringValue, replaceValue) => (
  replaceValue ? stringValue.replace(/[0-9\s]+/g, replaceValue) : stringValue.replace(/[0-9]*/g, '')
);

// returns only the number in a string removing letters and special characters
export const getOnlyNumbers = (stringValue, replaceValue) => (
  replaceValue
    ? stringValue.replace(/[a-zA-Z$&+,:;=?@#|'"‘’<>.^*()%!-._\\\/`~\[\]\{\}]+/g, replaceValue)
    : stringValue.replace(/[a-zA-Z$&+,:;=?@#|'"‘’<>.^*()%!-._\\\/`~\[\]\{\}]*/g, '')
);

// replace whitespace with any character or no space
export const replaceWhiteSpace = (stringValue, replaceValue) => (
  replaceValue
    ? stringValue.replace(/[\s]/g, replaceValue)
    : stringValue.replace(/[\s]+/g, '')
);

export const formatDate = (publishDate) => {
  const splitDateTime = publishDate.slice(0, -1).split('T');
  const dateComponent = splitDateTime[0];
  const datePublished = moment(dateComponent);
  return datePublished.format('D.M.YYYY');
};
