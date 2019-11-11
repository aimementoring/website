export const checkCountryParams = (props) => (
  props.match && props.match.isExact && props.match.params
    && props.match.params.countryId
    ? props.match.params.countryId
    : 'global'
);

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
