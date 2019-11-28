import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import Router, { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Layout from '../../hocs/basicLayout';
import Anchor from '../../components/common/link';
import contentfulServer from '../../api/contentfulServer';
import {
  formatDate,
  removeSpecialCharacters,
  replaceWhiteSpace,
} from '../../utils/utilities';
import styles from './storyTwo.module.scss';

const ContentCard = dynamic(() => import(/* webpackChunkName 'ContentCard' */ '../../components/contactCard'));

const StoryTwo = (props) => {
  const { content, slug } = props;

  return (
    <Layout>
      {
        content && content.map((entry) => {
          const bannerImage = entry.fields.banner
          && entry.fields.banner.fields.visualMedia.fields.file.url;

          const bannerStyles = {
            backgroundPosition: '0% 25%',
            backgroundImage: bannerImage && `url(https:${bannerImage})`,
            maxWidth: '100%',
          };

          const title = removeSpecialCharacters(entry.fields.title);
          const slugTitle = replaceWhiteSpace(title, '-').toLowerCase();

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
                  return null; // this should be a fall back component
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

export const config = { amp: 'hybrid' };

export default StoryTwo;
