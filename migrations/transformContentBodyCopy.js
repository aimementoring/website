
const craft = require('./getCraft');

module.exports = async (migration) => {
  const entriesCraft = await craft.getCraftEntries().then((response) => response);
  // eslint-disable-next-line no-console
  console.log('TCL: entriesCraft', entriesCraft);

  // Simplistic function updating title from craft.
  const bodyFromCraft = (content, changeCount) => {
    const removeHTML = (stringValue, replaceValue) => (
      replaceValue
        ? stringValue.replace(/<[^>]*>/g, replaceValue)
        : stringValue.replace(/<[^>]*>/g, '')
    );

    entriesCraft.post.forEach((object) => {
      const key = Object.keys(object)[0];
      if (key !== 'paragraph' && key === undefined) {
        return null;
      }
      return key; // console.log(key);
    });
    if (entriesCraft.post[changeCount - 1].paragraph === undefined) { return null; }
    // eslint-disable-next-line no-console
    // console.log(changeCount, 'craft body ---> ', entriesCraft.post.map((ele) => (ele !== 'paragraph' && ele !== undefined ? ele.paragraph : null)));
    const test = entriesCraft.post.map((ele) => (ele.paragraph !== 'paragraph' && ele.paragraph !== undefined ? ele.paragraph : null));

    // console.log('TCL: bodyFromCraft -> test', removeHTML(test[0]), removeHTML(test[1]), removeHTML(test[4]));
    const fullText = `${removeHTML(test[0])}${removeHTML(test[1])}${removeHTML(test[4])}`;
    console.log('TCL: bodyFromCraft -> fullText', fullText);
    return fullText;
  };
  const changeArray = [];

  // Derives titles based on title, and links these back to post title entry.
  migration.transformEntries({
    // Start from post's title field
    contentType: 'contentCard',
    from: ['contentCopy'],
    // replacing the same title entry.
    to: ['contentCopy'],
    shouldPublish: true,
    transformEntryForLocale: async (from, locale) => {
      if (locale !== 'en-US' || from.contentCopy === undefined) {
        return;
      }

      changeArray.push(from.contentCopy[locale]);
      // eslint-disable-next-line consistent-return
      return {
        contentCopy: bodyFromCraft(from.contentCopy[locale], changeArray.length),
      };
    },
  });
};
