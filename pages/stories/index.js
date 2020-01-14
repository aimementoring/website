import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../hocs/basicLayout';
import contentfulServer from '../../api/contentfulServer';
import {
  removeSpecialCharacters,
  replaceWhiteSpace,
  sortDates,
} from '../../utils/utilities';

import StoriesCarousel from '../../components/storiesComponents/storiesCarousel';
import StoriesContentTwo from '../../components/storiesComponents/storiesContent';
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
        <StoriesContentTwo
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
                  <h2 className={styles.storiesTitle}>
                    {'Kindness doesn\'t cost a thing. Let\'s sprinkle it everywhere!'}
                  </h2>
                  <span className={styles.line} />
                  <div className={styles.mobilePanel}>
                    <p className={styles.storiesParagraph}>
                      {`AIME has been delivering kindness through mentoring for 14 years.
                          Each year we release a Book of Kindness with tales of human generosity.
                          Here are some of those stories of hope, positivity and change...`}
                    </p>
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

  return { entries };
};

Stories.defaultProps = {
  entries: PropTypes.arrayOf(PropTypes.shape({})),
};

Stories.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    contentType: PropTypes.string,
    contentTag: PropTypes.shape({
      name: PropTypes.string,
      sys: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
    banner: PropTypes.shape({
      displayType: PropTypes.string,
      heading: PropTypes.shape({
        headingText: PropTypes.string,
        type: PropTypes.string,
        sys: PropTypes.shape({
          id: PropTypes.string,
        }),
      }),
      visualMedia: PropTypes.shape({
        file: PropTypes.shape({
          url: PropTypes.string,
          fileName: PropTypes.string,
          contentType: PropTypes.string,
        }),
        title: PropTypes.string,
        sys: PropTypes.shape({
          id: PropTypes.string,
        }),
      }),
      sys: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
    contentCreator: PropTypes.shape({
      authorName: PropTypes.string,
      supportAuthorName: PropTypes.string,
      sys: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
    publishDate: PropTypes.string,
    seoAndMetaTags: PropTypes.shape({
      platformMetaTags: PropTypes.arrayOf(PropTypes.shape({
        sys: PropTypes.shape({
          id: PropTypes.string,
        }),
      })),
      sys: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
    contentPreview: PropTypes.shape({
      displayType: PropTypes.string,
      previewCopy: PropTypes.string,
      title: PropTypes.string,
      visualMedia: PropTypes.shape({
        sys: PropTypes.shape({
          id: PropTypes.string,
        }),
      }),
      visualMediaCarousel: PropTypes.arrayOf(PropTypes.shape({
        sys: PropTypes.shape({
          id: PropTypes.string,
        }),
      })),
    }),
    contentCards: PropTypes.arrayOf(PropTypes.shape({
      Type: PropTypes.string,
      displayType: PropTypes.string,
      visualMedia: PropTypes.shape({
        sys: PropTypes.shape({
          id: PropTypes.string,
        }),
      }),
      videoMedia: PropTypes.string,
      contentCopy: PropTypes.string,
      sys: PropTypes.shape({
        id: PropTypes.string,
      }),
    })),
  })),
};

export default Stories;
