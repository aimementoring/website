
const craft = require('./getCraft');

module.exports = async (migration) => {
  const entriesCraft = await craft.getCraftEntries().then((response) => response.data);
  // eslint-disable-next-line no-console
  console.log('TCL: entriesCraft', entriesCraft);

  // Simplistic function updating authorName from craft.
  const authorFromCraft = (authorName, changeCount) => {
    // eslint-disable-next-line no-console
    console.log('func: authorFromCraft -> current author, ', authorName, '->', 'craft author ', entriesCraft[changeCount - 1].authorName);
    return entriesCraft[changeCount - 1].authorName;
  };
  const authorChangeArray = [];


  // Derives authorNames based on authorName, and links these back to author authorName entry.
  migration.transformEntries({
    // Start from post's title field
    contentType: 'author',
    from: ['authorName'],
    // replacing the same title entry.
    to: ['authorName'],
    shouldPublish: true,
    transformEntryForLocale: async (from, locale) => {
      if (locale !== 'en-US' || from.authorName === undefined) {
        return;
      }

      authorChangeArray.push(from.authorName[locale]);
      // eslint-disable-next-line consistent-return
      return {
        authorName: authorFromCraft(from.authorName[locale], authorChangeArray.length),
      };
    },
  });
};
