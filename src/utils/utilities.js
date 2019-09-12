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