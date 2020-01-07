
const craft = require('./getCraft');

module.exports = async (migration) => {
  const entriesCraft = await craft.getCraftEntries().then((response) => response.data);
  // eslint-disable-next-line no-console
  console.log('TCL: entriesCraft', entriesCraft.length);

  // Simplistic function updating title from craft.
  const publishDateFromCraft = (publishDate, changeCount) => {
    const craftPublishDate = entriesCraft[changeCount - 1].postDate.date.split(' ');
    // eslint-disable-next-line no-console
    console.log('func: publishDateFromCraft -> current publishDate, ', publishDate, '->', 'craft publishDate ', `${craftPublishDate[0]}T00:00+10:00`);
    return craftPublishDate[0];
  };
  const publishDateChangeArray = [];

  // Derives titles based on title, and links these back to post title entry.
  migration.transformEntries({
    // Start from post's title field
    contentType: 'post',
    from: ['publishDate'],
    // replacing the same title entry.
    to: ['publishDate'],
    shouldPublish: true,
    transformEntryForLocale: async (from, locale) => {
      if (from.publishDate === undefined) {
        return;
      }

      publishDateChangeArray.push(from.publishDate[locale]);
      // eslint-disable-next-line consistent-return
      return {
        publishDate: publishDateFromCraft(from.publishDate[locale], publishDateChangeArray.length),
      };
    },
  });
};
