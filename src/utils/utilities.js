import { setOnStorage, getFromStorage } from './localStorage';

export function getUcFirst(value) {
  return `${value[0].toUpperCase()}${value.slice(1)}`;
}

export function checkCountryParams(props) {
  return props.match && props.match.isExact && props.match.params && props.match.params.countryId ? props.match.params.countryId : 'global';
}

export function getCountrySite() {
  return getFromStorage('country_code_selected')
}

export function setCountrySite(countryCode) {
  return setOnStorage('country_code_selected', countryCode);
}

// This function add the first character to upper case for every word and also change the words
// division to spaces.
// For example: if it receives "hoodie-day" it would return "Hoddie Day"
export function firstCharacterToUpperCaseAndSpacesForDivision(theString, originalDivision) {
  const arrayOfString = theString.split(originalDivision);
  const arrayPascalCase = arrayOfString.map(
    word => `${word[0].toUpperCase()}${word.substring(1, word.length)}`
  );
  return arrayPascalCase.join(' ');
}

export function sortArrayOfObjectByField(arrayToSort, field, order = 'desc') {
  const orderValue = order === 'desc' ? 1 : -1;
  const sortedArray = arrayToSort.sort(
    (a, b) => (a[field] < b[field] ? 1 : a[field] > b[field] ? -1 : 0) * orderValue
  );
  return sortedArray;
}

// capitalises first character of each word
export function capitaliseFirstCharacter(stringValue) {
  return stringValue.replace(/\b([a-z\s])/g, string => string.toUpperCase());
}

// capitalizes entire word
export function capitaliseString(stringValue, replaceValue) {
  if (replaceValue) {
    return stringValue.replace(/\b([a-z\s]+)/g, replaceValue.toUpperCase());
  } else {
    return stringValue.replace(/\b([a-z]*)/g, string => string.toUpperCase());
  }
}

// removes special characters on standard en-us keyboard config
export function removeSpecialCharacters(stringValue, replaceValue) {
  if (replaceValue) {
    // eslint-disable-next-line
    return stringValue.replace(/[$&+,:;=?@#|'<>.^*()%!-._\\\/`~\[\]\{\}0-9]+/g, replaceValue);
  } else {
    // eslint-disable-next-line
    return stringValue.replace(/[$&+,:;=?@#|'<>.^*()%!-._\\\/`~\[\]\{\}0-9]*/g, '');
  }
}

// removes all numbers in a string
export function removeNumbers(stringValue, replaceValue) {
  if (replaceValue) {
    return stringValue.replace(/[0-9\s]+/g, replaceValue);
  } else {
    return stringValue.replace(/[0-9]*/g, '');
  }

}

// returns only the number in a string removing letters and special characters
export function getOnlyNumbers(stringValue, replaceValue) {
  if (replaceValue) {
    // eslint-disable-next-line
    return stringValue.replace(/[a-zA-Z$&+,:;=?@#|'<>.^*()%!-._\\\/`~\[\]\{\}]+/g, replaceValue);
  } else {
    // eslint-disable-next-line
    return stringValue.replace(/[a-zA-Z$&+,:;=?@#|'<>.^*()%!-._\\\/`~\[\]\{\}]*/g, '');
  }
}
