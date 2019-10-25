export const checkCountryParams = props => (
  props.match && props.match.isExact && props.match.params
    && props.match.params.countryId
      ? props.match.params.countryId
      : 'global'
)

export const sortArrayOfObjectByField = (arrayToSort, field, order = 'desc') => {
  const orderValue = order === 'desc' ? 1 : -1
  const sortedArray = arrayToSort.sort(
    (a, b) => (a[field] < b[field] ? 1 : a[field] > b[field] ? -1 : 0) * orderValue
  )
  return sortedArray
}
