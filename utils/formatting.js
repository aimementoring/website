import moment from 'moment';

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

// removes special characters on standard en-us keyboard config
export const removeSpecialCharacters = (stringValue, replaceValue) => (
  replaceValue
    ? stringValue.replace(/[$&+,:;=?@#|'"‘’<>.^*()%!-._\\/`~[\]{}0-9]+/g, replaceValue)
    : stringValue.replace(/[$&+,:;=?@#|'"‘’<>.^*()%!-._\\/`~[\]{}0-9]*/g, '')
);

// replace whitespace with any character or no space
export const replaceWhiteSpace = (stringValue, replaceValue) => (
  replaceValue
    ? stringValue.replace(/[\s] */g, replaceValue)
    : stringValue.replace(/[\s] +/g, '')
);

export const formatDate = (publishDate, format = 'D.M.YYYY') => {
  const splitDateTime = publishDate.split('T');
  const dateComponent = splitDateTime[0];
  const datePublished = moment(dateComponent);

  const DATE_FORMATS = {
    short: 'D.M.YY',
    long: 'Do MMMM YYYY',
  };
  return datePublished.format(DATE_FORMATS[format] || format);
};


// removes all numbers in a string
export const removeNumbers = (stringValue, replaceValue) => (
  replaceValue ? stringValue.replace(/[0-9\s]+/g, replaceValue) : stringValue.replace(/[0-9]*/g, '')
);

export const removeMarkdownLink = (stringValue) => (
  stringValue.replace(/[*_>[^\]0-9]*/g, '')
);
