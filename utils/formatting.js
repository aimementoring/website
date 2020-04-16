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

export const removeNumbers = (stringValue, replaceValue) => (
  replaceValue ? stringValue.replace(/[0-9\s]+/g, replaceValue) : stringValue.replace(/[0-9]*/g, '')
);


const removeMarkdownLink = (string) => (
  // links look like this [link title](http://url.tld/)
  string.replace(/\[(?<title>.+)\]\((?<url>.+)\)+/g, '$<title>')
);

const removeMarkdownFormatting = (string) => (
  // remove * and _
  string.replace(/(\*|_)/g, '')
);

export const removeMarkdown = (string) => (
  removeMarkdownFormatting(removeMarkdownLink(string))
);

export const slugify = (string) => string.trim().toLowerCase()
  // replace everything that's not a char or number with -
  .replace(/[^a-z0-9]+/g, '-')
  // remove trailing -
  .replace(/[.]*-$/, '')
  // remove initial -
  .replace(/^-[.]*/, '');
