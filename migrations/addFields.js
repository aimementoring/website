// import { getEntries } from '../services/craftAPI';
/*
const fetchStories = async () => {
  const { data } = await getEntries('stories');
  return data && data.map((entry) => (entry));
};
*/
// const entry = fetchStories();

module.exports = (migration) => {
  // currnt Types are, 'post' and 'redirectEntries'
  const post = migration.editContentType('post');

  post.createField('craftTitle')
    .name('Craft Title')
    .type('Symbol');


  post.moveField('craftTitle').toTheTop();
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


  /* post.moveField('sugar').toTheBottom();
    post.moveField('producer').beforeField('vegan');
    post.moveField('gmo').afterField('vegan'); */
};
