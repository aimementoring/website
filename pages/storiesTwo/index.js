import React, { useState, useEffect } from 'react';
import Layout from '../../hocs/basicLayout';
import contentfulServer from '../../api/contentfulServer';
import { removeSpecialCharacters, replaceWhiteSpace } from '../../utils/utilities';
import styles from './storiesTwo.module.scss';

import StoriesCarousel from '../../components/storiesCarousel';
import StoriesContentTwo from '../../components/storiesContentTwo';
import Carousel from '../../components/carousel';

const StoriesTwo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [entries, setEntries] = useState([]);

  const getContentful = () => {
    contentfulServer().then((response = []) => {
      if (!response || response === 'undefined') {
        setIsLoading(false);
        // error handling here.
      } else {
        setIsLoading(false);
        setEntries(response);
      }
    });
  };

  useEffect(() => {
    getContentful();
  }, []);

  const storyCarousel = entries && entries.slice(0, 3).map((entry) => {
    const title = removeSpecialCharacters(entry.fields.title);
    const slugTitle = replaceWhiteSpace(title, '-').toLowerCase();
    const bannerImage = entry.fields.banner.fields.visualMedia.fields.file.url;
    return (
      <StoriesCarousel
        key={entry.sys.id}
        id={entry.sys.id}
        title={title}
        slugTitle={slugTitle}
        bannerImage={bannerImage}
        contentPreview={entry.fields.contentPreview}
        contentCards={entry.fields.contentCards}
      />
    );
  });

  const storyContent = entries && entries.map((entry) => {
    const title = removeSpecialCharacters(entry.fields.title);
    const slugTitle = replaceWhiteSpace(title, '-').toLowerCase();
    const creatorName = entry.fields.contentCreator.fields.authorName;
    const bannerContent = entry.fields.banner && entry.fields.banner;
    const contentPreview = entry.fields.contentPreview && entry.fields.contentPreview.fields;
    return (
      <StoriesContentTwo
        key={entry.sys.id}
        id={entry.sys.id}
        title={title}
        slugTitle={slugTitle}
        contentCreator={creatorName}
        bannerContent={bannerContent.fields}
        publishDate={entry.fields.publishDate}
        contentCards={entry.fields.contentCards}
        contentPreview={contentPreview}
      />
    );
  });

  return (
    <Layout>
      {isLoading
        ? <div className={styles.storiesContainer} /> : (
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

export default StoriesTwo;
