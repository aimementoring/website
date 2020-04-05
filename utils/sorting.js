import moment from 'moment';

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

export const sortDates = (dates) => {
  const sortedDatesArray = dates.sort((a, b) => (
    moment(b.fields.publishDate).format('YYYYMMDD') - moment(a.fields.publishDate).format('YYYYMMDD')
  ));

  return sortedDatesArray;
};
