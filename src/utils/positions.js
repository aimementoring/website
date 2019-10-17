const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const addOrdinalSuffixToNumber = number => {
  const ordinalArray = ['th', 'st', 'nd', 'rd'];
  const v = number % 100;
  return `${number}${ordinalArray[(v - 20) % 10] || ordinalArray[v] || ordinalArray[0]}`;
};

const getDay = date => {
  const day = date.getDate();
  return addOrdinalSuffixToNumber(day);
};

export const getFormattedDate = jobDate => {
  if (!jobDate) return;
  const date = new Date(jobDate);
  if (date) {
    return `${monthNames[date.getMonth()]} ${getDay(date)}, ${date.getFullYear()} `;
  }
  return jobDate;
};

export const formatJobs = jobs => {
  return jobs
    .filter(job => !!job.name)
    .map(job => ({ ...job, expire: getFormattedDate(job.expire) }));
};
