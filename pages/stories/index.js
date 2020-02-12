import React from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Layout from '../../hocs/basicLayout';
import contentfulServer from '../../api/contentfulStories';
import {
  removeSpecialCharacters,
  replaceWhiteSpace,
  sortDates,
} from '../../utils/utilities';

import StoriesCarousel from '../../components/storiesComponents/storiesCarousel';
import StoriesContent from '../../components/storiesComponents/storiesContent';
import Carousel from '../../components/carousel';

import styles from './stories.module.scss';

const Stories = (props) => {
  const { entries } = props;
  const isLoading = !entries;

  const filteredDate = sortDates(entries);
  const filteredStoryContent = entries.filter((entry) => (
    entry.fields.publishDate.indexOf(filteredDate) === -1
      || !filteredDate
  ));

  const storyCarousel = !isLoading && (
    filteredStoryContent.slice(0, 3).map((entry) => {
      const slugTitle = removeSpecialCharacters(entry.fields.title && entry.fields.title);
      const slug = replaceWhiteSpace(slugTitle, '-').toLowerCase();
      const bannerImage = entry.fields.banner
        && entry.fields.banner.fields.visualMedia
        && entry.fields.banner.fields.visualMedia.fields
        && entry.fields.banner.fields.visualMedia.fields.file.url;

      return (
        <StoriesCarousel
          key={entry.sys.id}
          id={entry.sys.id}
          slugTitle={slug}
          bannerImage={bannerImage}
          title={entry.fields.title && entry.fields.title}
          contentPreview={entry.fields.contentPreview}
          contentCards={entry.fields.contentCards}
        />
      );
    })
  );

  const storyContent = !isLoading && (
    filteredStoryContent.map((entry) => {
      const slugTitle = removeSpecialCharacters(entry.fields.title);
      const slug = replaceWhiteSpace(slugTitle, '-').toLowerCase();
      const creatorName = entry.fields.contentCreator.fields.authorName;
      const bannerContent = entry.fields.banner && entry.fields.banner;
      const contentPreview = entry.fields.contentPreview && entry.fields.contentPreview.fields;
      return (
        <StoriesContent
          key={entry.sys.id}
          id={entry.sys.id}
          slugTitle={slug}
          title={entry.fields.title}
          contentCreator={creatorName}
          contentPreview={contentPreview}
          bannerContent={bannerContent.fields}
          publishDate={entry.fields.publishDate}
          contentCards={entry.fields.contentCards}
        />
      );
    }));

  return (
    <Layout>
      {isLoading
        ? <div /> : (
          <div className={styles.carouselContainer}>
            <div className={styles.carousel}>
              <Carousel>
                {storyCarousel}
              </Carousel>
            </div>
            <div className={styles.storiesContainer}>
              <aside className={styles.refineSearch}>
                <div className={styles.refineSection}>
                  <Title type="h3Title">
                    Imagination
                  </Title>
                  <Title type="h2Title">
                    Feed
                  </Title>
                  <div className={styles.mobilePanel}>
                    <div className={styles.storiesParagraph}>
                      <Paragraph>
                        AIME has been delivering kindness through mentoring for 14 years.
                        Each year we release a Book of Kindness with tales of human generosity.
                        Here are some of those stories of hope, positivity and change...
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </aside>
              <div className={styles.storiesGrid}>
                {storyContent}
              </div>
            </div>
          </div>
        )}
    </Layout>
  );
};

Stories.getInitialProps = async () => {
  const client = contentfulServer();
  const entries = await client.then((response) => response);
  const getStoryPosts = entries.filter((entry) => (entry.fields.contentTag.fields.name === 'story'));

  return { entries: getStoryPosts };
};

const SysShape = PropTypes.shape({
  id: PropTypes.string,
});

Stories.defaultProps = {
  entries: PropTypes.arrayOf(PropTypes.shape({})),
};

Stories.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
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
  })),
};

export default Stories;
