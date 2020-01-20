import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import Layout from '../../hocs/basicLayout';
import Anchor from '../../components/common/link';
import contentfulServer from '../../api/contentfulServer';
import {
  formatDate,
  removeSpecialCharacters,
  replaceWhiteSpace,
} from '../../utils/utilities';
import styles from './story.module.scss';

const ContentCard = dynamic(() => import('../../components/storiesComponents/contentCard'));

const {
  Title,
} = Components;

// this (route/page "story") needs to be redirected to stories is directly visited,
const Story = (props) => {
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
            backgroundPosition: '0% 25%',
            backgroundImage: bannerImage && `url(https:${bannerImage})`,
            maxWidth: '100%',
          };

          const title = removeSpecialCharacters(entry.fields.title && entry.fields.title);
          const slugTitle = replaceWhiteSpace(title, '-').toLowerCase();
          const author = entry.fields.contentCreator
            && entry.fields.contentCreator.fields.authorName;
          const signature = entry.fields.signature && entry.fields.signature;
          const postScriptContent = entry.fields.postScriptMessage
            && entry.fields.postScriptMessage;
          const buttonProps = entry.fields.callToActionButton
            && entry.fields.callToActionButton;

          return (
            <Fragment key={entry.sys.id}>
              {slug === slugTitle && (
                <div>
                  <div>
                    <div className={styles.bannerInStory} style={bannerStyles} />
                    <div>
                      <div className={styles.entriesContainer}>
                        <article className={styles.blogPost}>
                          <Title type="h4Title" theme="rainbow">
                            {entry.fields.title && entry.fields.title}
                          </Title>
                          <div>
                            <span className={styles.blogPostTimestamp}>
                              {`Posted ${formatDate(entry.fields.publishDate, 'long')}`}
                            </span>
                          </div>
                          <article className={styles.blogPostArticle}>
                            <ContentCard
                              author={author}
                              signature={signature}
                              publishDate={entry.fields.publishDate}
                              contentCards={entry.fields.contentCards}
                              postScriptContent={postScriptContent}
                              buttonProps={buttonProps}
                            />
                            <Anchor to="/stories" className={styles.articleTileLink}>
                              <i className={styles.materialIcons}>keyboard_backspace</i>
                              {' '}
                              Back to Stories
                            </Anchor>
                          </article>
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

Story.getInitialProps = async ({ query, asPath, pathname }) => {
  const client = contentfulServer();
  const slug = query.slug || asPath.replace(`${pathname}/`, '');
  const content = await client.then((response) => response);

  return { content, slug };
};

Story.propTypes = {
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
      postScriptMessage: PropTypes.array,
    }),
  })).isRequired,
};

export default Story;
