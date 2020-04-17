// just adding some explanation here for future reference:
// to run this you need to install the contentful cli
// yarn global add contentful-cli
// then do
// contentful login
// log into contentful in your browser and paste the token
// and finally to run this migration in the master environment
// (the following line is split into two lines, paste it as one)
// contentful space migration --space-id iz0aikshgysc --environment-id 'master'
// migrations/migratePostCategories.js

module.exports = (migration) => {
  migration.transformEntries({
    contentType: 'post',
    from: ['postCategoriesOLD'],
    to: ['postCategories'],
    transformEntryForLocale: (fromFields, locale) => {
      if (locale !== 'en-US' || fromFields.postCategoriesOLD === undefined) {
        return;
      }

      let newCategories;
      if (fromFields.postCategoriesOLD[locale] === '{IN}TV') {
        newCategories = ['IN{TV}'];
      } else {
        newCategories = [fromFields.postCategoriesOLD[locale]];
      }

      // eslint-disable-next-line consistent-return
      return {
        postCategories: newCategories,
      };
    },
  });
};
