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
