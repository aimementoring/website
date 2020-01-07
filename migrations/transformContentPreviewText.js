
const craft = require('./getCraft');

module.exports = async (migration) => {
  const entriesCraft = await craft.getCraftEntries().then((response) => response.data);
  // eslint-disable-next-line no-console
  console.log('TCL: entriesCraft', entriesCraft);

  // Simplistic function updating title from craft.
  const previewFromCraft = (previewCopy, changeCount) => {
    // eslint-disable-next-line no-console
    console.log('func: previewFromCraft -> current Preview Copy, ', previewCopy, '->', 'craft previewText \n', entriesCraft[changeCount - 1].previewText, '\n');
    return entriesCraft[changeCount - 1].previewText;
  };
  const changeArray = [];

  // Derives titles based on title, and links these back to post title entry.
  migration.transformEntries({
    // Start from post's title field
    contentType: 'contentPreview',
    from: ['previewCopy'],
    // replacing the same title entry.
    to: ['previewCopy'],
    shouldPublish: true,
    transformEntryForLocale: async (from, locale) => {
      if (locale !== 'en-US' || from.previewCopy === undefined) {
        return;
      }

      changeArray.push(from.previewCopy[locale]);
      // eslint-disable-next-line consistent-return
      return {
        previewCopy: previewFromCraft(from.previewCopy[locale], changeArray.length),
      };
    },
  });
};
