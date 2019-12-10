module.exports = (migration) => {
  const post = migration.editContentType('post');

  post.createField('roryTestFieldCreate')
    .name('Rory Test')
    .type('Symbol');

  /* post.createField('sugar')
      .type('Number')
      .name('Amount of sugar');

    post.createField('vegan')
      .type('Boolean')
      .name('Vegan friendly');

    post.createField('producer')
      .type('Symbol')
      .name('post producer');

    post.createField('gmo')
      .type('Boolean')
      .name('Genetically modified post'); */

  post.moveField('roryTestFieldCreate').toTheTop();
  /* post.moveField('sugar').toTheBottom();
    post.moveField('producer').beforeField('vegan');
    post.moveField('gmo').afterField('vegan'); */
};
