module.exports = (migration) => {
  // currnt Types are, 'post' and 'redirectEntries'
  const post = migration.editContentType('post');

  post.createField('craftTitle')
    .name('Craft Title')
    .type('Symbol');


  post.moveField('craftTitle').toTheTop();
};
