import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import Layout from '../../hocs/basicLayout';
import Anchor from '../../components/common/link';
import contentfulServer from '../../api/contentfulServer';
import { removeSpecialCharacters, replaceWhiteSpace } from '../../utils/utilities';
import styles from './storiesTwo.module.scss';

const StoriesContentTwo = dynamic(() => import(/* webpackChunkName 'StoriesContentTwo' */ '../../components/storiesContentTwo'));
const Carousel = dynamic(() => import(/* webpackChunkName 'Carousel' */ '../../components/carousel'));

const StoriesTwo = () => {
  // const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [entries, setEntries] = useState([]); // storiesList.data

  const getContentful = () => {
    contentfulServer().then((response = []) => {
      if (!response || response === 'undefined') {
      // setError(true);
        setIsLoading(false);
      } else {
      // setError(false);
        setIsLoading(false);
        setEntries(response);
      }
    });
  };

  useEffect(() => {
    getContentful();
  }, []);

  const storyCarousel = entries.length && (
    entries.slice(0, 3).map((entry) => {
      const slugTitle = removeSpecialCharacters(entry.fields.title);
      const slug = replaceWhiteSpace(slugTitle, '-').toLowerCase();
      const bannerImage = entry.fields.banner.fields.visualMedia.fields.file.url;
      return (
        <StoriesCarousel
          key={entry.sys.id}
          id={entry.sys.id}
          slugTitle={slug}
          bannerImage={bannerImage}
          title={entry.fields.title}
          contentPreview={entry.fields.contentPreview}
          contentCards={entry.fields.contentCards}
        />
      );
    })
  );

  const storyContent = entries.length && (
    entries.map((entry) => {
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
        ? null : (
          <div className={styles.carouselContainer}>
            {entries.length && (
              <>
                <div className={styles.carousel}>
                  <Carousel>
                    {storyCarousel}
                  </Carousel>
                </div>
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
                <div className={styles.storiesContainer}>
                  <div className={styles.storiesGrid}>
                    {storyContent}
                  </div>
                </div>
              </>
            )}
          </div>
        )}
    </Layout>
  );
};

const StoriesCarousel = (props) => {
  const {
    id,
    title,
    slugTitle,
    bannerImage,
    contentCards,
    contentPreview,
  } = props;
  return (
    <div
      key={`carousel-element-container-${id}`}
      className={slugTitle}
    >
      <div
        className={styles.heroBannerStories}
        style={{
          backgroundImage: `url(https:${bannerImage})`,
        }}
      >
        <div
          className={styles.featuredStory}
          key={`story-description-${id}`}
        >
          <div
            className={styles.textWrap}
            key={`carousel-sm-text-wrap-${id}`}
          >
            <p className={styles.tag}>Featured</p>
            <h1 className={styles.title}>{title}</h1>
            {contentPreview && contentPreview.previewCopy
              ? (
                <p className={styles.productTitle}>
                  {`${contentPreview.previewCopy.slice(0, 230)}...`}
                </p>
              )
              : contentCards.slice(0, 1).map((card) => (
                <p className={styles.productTitle} key={card.sys.id}>
                  {card.fields.contentCopy
                          && (`${card.fields.contentCopy.slice(0, 240)} …`)}
                </p>
              ))}
            <Anchor
              to={`/storyTwo?slug=${slugTitle}`}
              as={`/storyTwo/${slugTitle}`}
              className={styles.carouselLink}
            >
              Read More
            </Anchor>
          </div>
        </div>
      </div>
    </div>
  );
};

StoriesCarousel.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slugTitle: PropTypes.string.isRequired,
  bannerImage: PropTypes.string.isRequired,
  contentCards: PropTypes.arrayOf(PropTypes.shape({
    Type: PropTypes.string,
    contentCopy: PropTypes.string,
    displayType: PropTypes.string,
    visualMedia: PropTypes.shape({
      file: PropTypes.shape({
        contentType: PropTypes.string,
        fileName: PropTypes.string,
        url: PropTypes.string,
        title: PropTypes.string,
        details: PropTypes.shape({
          size: PropTypes.number,
          image: PropTypes.shape({
            height: PropTypes.number,
            width: PropTypes.number,
          }),
        }),
      }),
    }),
    visualMediaCarousel: PropTypes.arrayOf(PropTypes.shape({

    })),
  })).isRequired,
  contentPreview: PropTypes.shape({
    Type: PropTypes.string,
    previewCopy: PropTypes.string,
    displayType: PropTypes.string,
    visualMedia: PropTypes.shape({
      file: PropTypes.shape({
        contentType: PropTypes.string,
        fileName: PropTypes.string,
        url: PropTypes.string,
        title: PropTypes.string,
        details: PropTypes.shape({
          size: PropTypes.number,
          image: PropTypes.shape({
            height: PropTypes.number,
            width: PropTypes.number,
          }),
        }),
      }),
    }),
    visualMediaCarousel: PropTypes.arrayOf(PropTypes.shape({

    })),
  }),
};

StoriesCarousel.defaultProps = {
  contentPreview: null,
};

export default StoriesTwo;
