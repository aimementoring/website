import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Layout from '../../hocs/basicLayout';
import Anchor from '../../components/common/link';
import contentfulServer from '../../api/contentfulServer';
import {
  formatDate,
  removeSpecialCharacters,
  replaceWhiteSpace,
} from '../../utils/utilities';
import styles from './storyTwo.module.scss';
import ContentCard from '../../components/contentCard';

// Not sure if the file/html is too large for nextjs 472kb?

// this (route/page "storyTwo") needs to be redirected to storiesTwo is directly visited,
// this could be done client side, not sure if that will affect SEO?

/*
  I think this page is good for dynamic routes and could be useful for stories.
  1: https://nextjs.org/blog/next-9#dynamic-route-segments
  2: https://github.com/zeit/next-learn-demo/tree/master/6-fetching-data
*/

const StoryTwo = (props) => {
  const { content, slug } = props;

  return (
    <Layout>
      {
        content && content.map((entry) => {
          const bannerImage = entry.fields.banner
          && entry.fields.banner.fields.visualMedia.fields.file.url;

          // Not sure how to make this faster other than removing it from css background.
          const bannerStyles = {
            backgroundPosition: '0% 25%',
            backgroundImage: bannerImage && `url(https:${bannerImage}?fm=webp)`,
            maxWidth: '100%',
          };

          // transforming title into story pathname of url.
          const title = removeSpecialCharacters(entry.fields.title);
          const slugTitle = replaceWhiteSpace(title, '-').toLowerCase();
          //
          return (
            <Fragment key={entry.sys.id}>
              {(() => {
                switch (slug) {
                case slugTitle:
                  return (
                    <div>
                      <div>
                        <div className={styles.bannerInStory} style={bannerStyles} />
                        <div>
                          <div className={styles.entriesContainer}>
                            <article className={styles.blogPost}>
                              <h1 className={styles.blogPostTitle}>{entry.fields.title}</h1>
                              <div>
                                <span className={styles.blogPostTimestamp}>
                                  {`Posted ${formatDate(entry.fields.publishDate, 'long')}`}
                                </span>
                              </div>
                              <article className={styles.blogPostArticle} />
                              <div>
                                <ContentCard contentCards={entry.fields.contentCards} />
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                default:
                  /*
                    This does not have to be "switch" just easier to read whats happening.
                    This should be a fall back default component, redirect, 404
                  */
                  return null;
                }
              })()}
            </Fragment>
          );
        })
      }
      <Anchor to="/storiesTwo" className={styles.articleTileLink}>
        <i className={styles.materialIcons}>keyboard_backspace</i>
        {' '}
        Back to Stories
      </Anchor>
    </Layout>
  );
};

StoryTwo.getInitialProps = async ({ query }) => {
  const client = contentfulServer();
  const content = await client.then((response) => response);

  return { content, slug: query.slug };
};

StoryTwo.propTypes = {
  slug: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.shape({
    fields: PropTypes.shape({
      title: PropTypes.string,
      contentType: PropTypes.string,
      contentTag: PropTypes.object,
      banner: PropTypes.object,
      contentCreator: PropTypes.object,
      publishDate: PropTypes.string,
      contentCards: PropTypes.array,
    }),
  })).isRequired,
};

export default StoryTwo;
