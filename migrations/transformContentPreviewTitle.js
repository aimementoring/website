
const craft = require('./getCraft');

module.exports = async (migration) => {
  const entriesCraft = await craft.getCraftEntries().then((response) => response.data);
  // eslint-disable-next-line no-console
  console.log('TCL: entriesCraft', entriesCraft);

  // Simplistic function updating title from craft.
  const titleFromCraft = (title, changeCount) => {
    // eslint-disable-next-line no-console
    console.log('func: titleFromCraft -> current Content Preview title, ', title, '->', 'craft title ', entriesCraft[changeCount - 1].title);
    return entriesCraft[changeCount - 1].title;
  };
  const titleChangeArray = [];

  // Derives titles based on title, and links these back to post title entry.
  migration.transformEntries({
    // Start from post's title field
    contentType: 'contentPreview',
    from: ['title'],
    // replacing the same title entry.
    to: ['title'],
    shouldPublish: true,
    transformEntryForLocale: async (from, locale) => {
      if (locale !== 'en-US' || from.title === undefined) {
        return;
      }

      titleChangeArray.push(from.title[locale]);
      // eslint-disable-next-line consistent-return
      return {
        title: titleFromCraft(from.title[locale], titleChangeArray.length),
      };
    },
  });
};
