module.exports = (migration) => {
  // currnt Types are, 'post' and 'redirectEntries'
  const post = migration.editContentType('post');

  post.deletField('FIELD_NAME_GOES_HERE');
};
