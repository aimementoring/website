// contentful login
// log into contentful in your browser and paste the token
// and finally to run this migration in the master environment
// (the following line is split into two lines, paste it as one)
// contentful space migration --space-id iz0aikshgysc --environment-id master
// migrations/generateSlugsForStories.js

const slugify = (string) => string.trim().toLowerCase()
  // replace everything that's not a char or number with -
  .replace(/[^a-z0-9]+/g, '-')
  // remove trailing -
  .replace(/[.]*-$/, '')
  // remove initial -
  .replace(/^-[.]*/, '');

module.exports = (migration) => {
  migration.transformEntries({
    contentType: 'post',
    from: ['title'],
    to: ['slug'],
    transformEntryForLocale: (fromFields, locale) => {
      if (locale !== 'en-US' || !fromFields.title) {
        return;
      }
      const slug = slugify(fromFields.title[locale]);
      // eslint-disable-next-line consistent-return
      return {
        slug,
      };
    },
  });
};
