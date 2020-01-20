
const craft = require('./getCraft');

module.exports = async (migration) => {
  const entriesCraft = await craft.getCraftEntries().then((response) => response.data);
  // eslint-disable-next-line no-console
  console.log('TCL: entriesCraft', entriesCraft);

  // Simplistic function updating title from craft.
  const titleFromCraft = (headingText, changeCount) => {
    // eslint-disable-next-line no-console
    console.log('func: titleFromCraft -> current heading, ', headingText, '->', 'craft title ', entriesCraft[changeCount - 1].title);
    return entriesCraft[changeCount - 1].title;
  };
  const changeArray = [];

  // Derives titles based on title, and links these back to post title entry.
  migration.transformEntries({
    // Start from post's title field
    contentType: 'heading',
    from: ['headingText'],
    // replacing the same title entry.
    to: ['headingText'],
    shouldPublish: true,
    transformEntryForLocale: async (from, locale) => {
      if (locale !== 'en-US' || from.headingText === undefined) {
        return;
      }

      changeArray.push(from.headingText[locale]);
      // eslint-disable-next-line consistent-return
      return {
        headingText: titleFromCraft(from.headingText[locale], changeArray.length),
      };
    },
  });
};
