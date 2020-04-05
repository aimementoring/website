import PropTypes from 'prop-types';

const SysShape = PropTypes.shape({
  id: PropTypes.string,
});

const entriesType = PropTypes.arrayOf(PropTypes.shape({
  title: PropTypes.string,
  contentType: PropTypes.string,
  contentTag: PropTypes.shape({
    name: PropTypes.string,
    sys: SysShape,
  }),
  banner: PropTypes.shape({
    displayType: PropTypes.string,
    heading: PropTypes.shape({
      headingText: PropTypes.string,
      type: PropTypes.string,
      sys: SysShape,
    }),
    visualMedia: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string,
        fileName: PropTypes.string,
        contentType: PropTypes.string,
      }),
      title: PropTypes.string,
      sys: SysShape,
    }),
    sys: SysShape,
  }),
  contentCreator: PropTypes.shape({
    authorName: PropTypes.string,
    supportAuthorName: PropTypes.string,
    sys: SysShape,
  }),
  publishDate: PropTypes.string,
  seoAndMetaTags: PropTypes.shape({
    platformMetaTags: PropTypes.arrayOf(PropTypes.shape({
      sys: SysShape,
    })),
    sys: SysShape,
  }),
  contentPreview: PropTypes.shape({
    displayType: PropTypes.string,
    previewCopy: PropTypes.string,
    title: PropTypes.string,
    visualMedia: PropTypes.shape({
      sys: SysShape,
    }),
    visualMediaCarousel: PropTypes.arrayOf(PropTypes.shape({
      sys: SysShape,
    })),
  }),
  contentCards: PropTypes.arrayOf(PropTypes.shape({
    Type: PropTypes.string,
    displayType: PropTypes.string,
    visualMedia: PropTypes.shape({
      sys: SysShape,
    }),
    videoMedia: PropTypes.string,
    contentCopy: PropTypes.string,
    sys: SysShape,
  })),
}));

export default entriesType;
