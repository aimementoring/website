import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import Anchor from '../../components/common/link';
import Layout from '../../hocs/basicLayout';
import { getEntries } from '../../services/craftAPI';
import { isClientSide } from '../../utils/utilities';
import styles from './story.module.scss';

const MatrixBuilder = dynamic(() => import(/* webpackChunkName 'MatrixBuilder' */ '../../components/matrixBuilder'));

const Story = ({ storySlug, entries }) => {
  const isClient = isClientSide();

  useEffect(() => {
    if (isClient && Router.pathname.split('/')[1] === 'blog') {
      Router.push(`/story/${storySlug}`);
    }
  }, [isClient]);

  let bannerStyles = {};
  if (entries) {
    bannerStyles = {
      backgroundPosition: entries.bannerBackgroundPosition || '0% 25%',
      backgroundImage:
        entries.bannerImage && entries.bannerImage.length
          ? `url(${entries.bannerImage[0].image})`
          : '',
      maxWidth: '100%',
    };
  }
  let postDate;
  // Adding "T" to support dates in Safari: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
  if (entries && entries.postDate) postDate = new Date(entries.postDate.date.replace(/\s/, 'T'));

  return (
    <Layout>
      <div>
        <div>
          {entries && entries.bannerImage && (
            <div className={styles.bannerInStory} style={bannerStyles} />
          )}
          <div>
            {entries && (
              <div className={styles.entriesContainer}>
                <article className={styles.blogPost}>
                  <h1 className={styles.blogPostTitle}>{entries.title}</h1>
                  <div>
                    {postDate && (
                      <span className={styles.blogPostTimestamp}>
                        {`Posted ${postDate.toLocaleString('en-us', {
                          month: 'long',
                        })} ${postDate.getDate()}, ${postDate.getFullYear()}`}
                      </span>
                    )}
                  </div>
                  <article className={styles.blogPostArticle}>
                    <div>
                      {entries.post && <MatrixBuilder formData={entries.post} matrixType="blog" />}
                    </div>

                    <Anchor to="/stories" className={styles.articleTileLink}>
                      <i className={styles.materialIcons}>keyboard_backspace</i>
                      {' '}
                      Back to Stories
                    </Anchor>
                  </article>
                </article>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

Story.getInitialProps = async ({ query, asPath, pathname }) => {
  const storySlug = query.storySlug || asPath.replace(`${pathname}/`, '');
  const entries = await getEntries(`stories/${storySlug}.json`);
  return {
    storySlug,
    entries,
  };
};

Story.propTypes = {
  storySlug: PropTypes.string,
  entries: PropTypes.shape({
    bannerBackgroundPosition: PropTypes.string,
    bannerImage: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    postDate: PropTypes.string,
    title: PropTypes.string,
    post: PropTypes.string,
  }).isRequired,
};

Story.defaultProps = {
  storySlug: '',
};

export default Story;
