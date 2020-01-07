module.exports = (migration) => {
  // New category content type.
  const category = migration.createContentType('category')
    .name('Category')
    .displayField('name');
  category.createField('name').type('Symbol').required(true).name('Name');
  category.createField('slug').type('Symbol').required(true).name('URL Slug')
    .validations([{ unique: true }]);
  category.createField('image').type('Link').linkType('Asset').name('Image');

  // Create a new category field in the blog post content type.
  const blogPost = migration.editContentType('blogPost');
  blogPost.createField('category_ref') // Using a temporary id to be able to transform entries.
    .name('Category')
    .type('Link')
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['category'],
      },
    ]);

  // Derives categories based on the existing category Symbol,
  // and links these back to blog post entries.
  migration.deriveLinkedEntries({
    // Start from blog post's category field
    contentType: 'blogPost',
    from: ['category'],
    // This is the field we created above, which will hold the link to the derived category entries.
    toReferenceField: 'category_ref',
    // The new entries to create are of type 'category'.
    derivedContentType: 'category',
    // We'll only create a category using a name and a slug for now.
    derivedFields: ['name', 'slug'],
    // The category name will be used as an identity key.
    identityKey: async (from) => from.category['en-US'].toLowerCase(),
    // The structure represents the resulting category entry with the 2 fields mentioned in the
    // `derivedFields` property.
    deriveEntryForLocale: async (from, locale) => ({
      name: from.category[locale],
      slug: from.category[locale].toLowerCase(),
    })
    ,
  });

  // Disable the old field for now so editors will not see it.
  blogPost.editField('category').disabled(true);
};
