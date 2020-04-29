import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import Layout from '../../hocs/basicLayout';
import Anchor from '../../components/common/link';
import MovingWaves from '../../components/movingWaves';
import BadgeList from '../../components/storiesComponents/badgeList';
import { getStoryBySlug } from '../../api/contentfulPosts';
import bugsnagClient from '../../utils/bugsnag';
import ErrorPage from '../_error';
import { formatDate } from '../../utils/formatting';
import styles from './story.module.scss';

const ContentCard = dynamic(() => import('../../components/storiesComponents/contentCard'));

const Story = ({ content }) => {
  if (!content) return <ErrorPage />;
  const {
    fields: {
      signature,
      banner,
      contentCreator,
      postScriptMessage,
      callToActionButton,
      postCategories,
      publishDate,
      title,
    },
  } = content;

  const bannerImage = banner && banner.fields.visualMedia
    && banner.fields.visualMedia.fields.file.url;
  /*
   TODO: these params for styling,
   might need to be added to contentful as overrides for these.
  */
  const bannerStyles = {
    backgroundPosition: '0% 25%',
    backgroundImage: bannerImage && `url(https:${bannerImage})`,
    maxWidth: '100%',
  };

  const author = contentCreator && contentCreator.fields.authorName;

  return (
    <Layout>
      <Fragment key={content.sys.id}>
        <div>
          <div>
            <div className={styles.bannerInStory} style={bannerStyles}>
              <MovingWaves />
            </div>
            <div>
              <div className={styles.entriesContainer}>
                <article className={styles.blogPost}>
                  <Title type="h3Title" theme="rainbow">
                    {title}
                  </Title>
                  <BadgeList items={postCategories} itemClass={styles.borderedBadge} isLinked />
                  <div>
                    <span className={styles.blogPostTimestamp}>
                      {`Posted ${formatDate(publishDate, 'long')}`}
                    </span>
                  </div>
                  <article className={styles.blogPostArticle}>
                    <ContentCard
                      author={author}
                      signature={signature}
                      publishDate={publishDate}
                      contentCards={content.fields.contentCards}
                      postScriptContent={postScriptMessage}
                      buttonProps={callToActionButton}
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
      </Fragment>
    </Layout>
  );
};


Story.getInitialProps = async ({ query, asPath, pathname }) => {
  const slug = query.slug || asPath.replace(`${pathname}/`, '');
  const content = await getStoryBySlug(slug)
    .then((response) => response[0])
    .catch((e) => bugsnagClient.notify(e));
  return { content };
};

Story.propTypes = {
  content: PropTypes.shape({
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
      postCategories: PropTypes.array,
      callToActionButton: PropTypes.object,
    }),
    sys: {
      id: PropTypes.number,
    },
  }).isRequired,
};

export default Story;
