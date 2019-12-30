import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
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

// this (route/page "storyTwo") needs to be redirected to storiesTwo is directly visited,
const StoryTwo = (props) => {
  const { content, slug } = props;

  return (
    <Layout>
      {
        content && content.map((entry) => {
          const bannerImage = entry.fields.banner
          && entry.fields.banner
          && entry.fields.banner.fields.visualMedia
          && entry.fields.banner.fields.visualMedia.fields.file.url;
          /*
           TODO: these params for styling,
           might need to be added to contentful as overrides for these.
          */
          const bannerStyles = {
          // Not sure how to make this faster other than removing it from css background.
            backgroundPosition: '0% 25%',
            backgroundImage: bannerImage && `url(https:${bannerImage})`,
            maxWidth: '100%',
          };

          const title = removeSpecialCharacters(entry.fields.title && entry.fields.title);
          const slugTitle = replaceWhiteSpace(title, '-').toLowerCase();
          const author = entry.fields.contentCreator
            && entry.fields.contentCreator.fields.authorName;
          const signature = entry.fields.signature && entry.fields.signature;
          const hasPostScriptContent = entry.fields.postScriptMessage
            && entry.fields.postScriptMessage.fields.contentCopy;

          return (
            <Fragment key={entry.sys.id}>
              {slug === slugTitle && (
                <div>
                  <div>
                    <div className={styles.bannerInStory} style={bannerStyles} />
                    <div>
                      <div className={styles.entriesContainer}>
                        <article className={styles.blogPost}>
                          <h1 className={styles.blogPostTitle}>
                            {entry.fields.title && entry.fields.title}
                          </h1>
                          <div>
                            <span className={styles.blogPostTimestamp}>
                              {`Posted ${formatDate(entry.fields.publishDate, 'long')}`}
                            </span>
                          </div>
                          <article className={styles.blogPostArticle} />
                          <div>
                            <ContentCard contentCards={entry.fields.contentCards} />
                            {signature ? signature
                              && <div className={styles.signature}>{signature}</div>
                              : author
                            && (
                              <strong>
                                {author}
                                <div />
                                {formatDate(entry.fields.publishDate, 'long')}
                              </strong>
                            )}
                          </div>
                          {entry.fields.title.indexOf('Great Barrier Reef') > -1
                            && (
                              <a
                                href="http://chng.it/wC7k4Rhb9p"
                                className={styles.articleTileLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                              CLICK HERE AND HELP THE GREAT BARRIER REEF BECOME AN AUSSIE CITIZEN
                              </a>
                            )}
                          {entry.fields.title.indexOf('The power of poetry:') > -1
                            && (
                              <a
                                href="https://shop.aimementoring.com/products/unity-and-kindness-hoodie?utm_source=AIME+Friends&utm_campaign=516899eac3-EMAIL_CAMPAIGN_2019_06_14_02_41&utm_medium=email&utm_term=0_30964260b5-516899eac3-&mc_cid=516899eac3&mc_eid=[UNIQID]"
                                className={styles.articleTileLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                              Order Now
                              </a>
                            )}
                          {hasPostScriptContent
                          && (
                            <div className="articleDescription">
                              <ReactMarkdown>
                                {hasPostScriptContent}
                              </ReactMarkdown>
                            </div>
                          )}
                          <br />
                          <Anchor to="/storiesTwo" className={styles.articleTileLink}>
                            <i className={styles.materialIcons}>keyboard_backspace</i>
                            {' '}
                            Back to Stories
                          </Anchor>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Fragment>
          );
        })
      }
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
      signature: PropTypes.string,
    }),
  })).isRequired,
};

export default StoryTwo;
