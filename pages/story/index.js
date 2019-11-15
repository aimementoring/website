import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Anchor from '../../components/common/link';
import { getEntries } from '../../services/craftAPI';
import MatrixBuilder from '../../components/matrixBuilder';
import { isClientSide } from '../../utils/utilities';

import styles from './story.module.scss';

const Story = ({ storySlug }) => {
  const [entries, setEntries] = useState({});

  const fetchEntries = async () => {
    if (Router.pathname.split('/')[1] === 'blog') {
      Router.push(`/story/${storySlug}`);
    }
    const data = await getEntries(`stories/${storySlug}.json`);
    setEntries(data);
  };

  const isClient = isClientSide();

  useEffect(() => {
    if (isClient) fetchEntries();
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
                <article className={styles.blogPostArticle} />
                <div>
                  {entries.post && <MatrixBuilder formData={entries.post} matrixType="blog" />}
                </div>

                <Anchor to="/stories" className={styles.articleTileLink}>
                  <i className={styles.materialIcons}>keyboard_backspace</i>
                  {' '}
                  Back to Stories
                </Anchor>
              </article>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Story.getInitialProps = async ({ query }) => ({
  storySlug: query.storySlug,
});

Story.propTypes = {
  storySlug: PropTypes.string,
};

Story.defaultProps = {
  storySlug: '',
};

export default Story;
