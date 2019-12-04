import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import Anchor from '../common/link';
import styles from './storiesContent.module.scss';

const Picture = dynamic(() => import(/* webpackChunkName 'Picture' */ '../picture'));

class StoriesContent extends PureComponent {
  getPostDate = (postDateEntry) => {
    const postDate = new Date(postDateEntry.date.replace(/\s/, 'T'));
    return `${postDate.getDate()}.${postDate.getMonth()}.${postDate.getFullYear()}`;
  };

  render() {
    const { stories } = this.props;
    return (
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
          {stories && stories.length && stories.map((entry) => (
            <article key={`article-story-${entry.id}`} className={styles.articleTile}>
              <Anchor
                to="/story/[storySlug]"
                as={`/story/${entry.slug}`}
                className={styles.articleLink}
              >
                <div>
                  <BannerImage image={entry.bannerImage[0]} />
                  <div
                    key={`article-description-${entry.id}`}
                    className={styles.articleDescription}
                  >
                    <h1 className="article-tile-title">{entry.title}</h1>
                    <p className="article-tile-tagline">
                      <span key={`pr1-story-entry-${entry.id}`} className={styles.postDate}>
                        {this.getPostDate(entry.postDate)}
                      </span>
                      <span key={`c-light-grey-span-${entry.id}`} className={styles.slash}>
                        /
                      </span>
                      <span key={`px1-span-${entry.id}`} className={styles.author}>
                        {`By ${entry.authorName}`}
                      </span>
                    </p>
                    {entry.previewText !== '' && (
                      <p className={styles.articleTileLabel}>{`${entry.previewText} …`}</p>
                    )}
                    <div className={styles.articleTileLink}>Read more</div>
                  </div>
                </div>
              </Anchor>
            </article>
          ))}
        </div>
      </div>
    );
  }
}

StoriesContent.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    slug: PropTypes.string,
    bannerImage: PropTypes.arrayOf(PropTypes.shape({})),
    title: PropTypes.string,
    postDate: PropTypes.string,
    authorName: PropTypes.string,
    previewText: PropTypes.string,
  })).isRequired,
};

const BannerImage = ({ image }) => (
  <Picture className={styles.bannerImage} image={image} thumbnail />
);

BannerImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default StoriesContent;
