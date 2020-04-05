import React from 'react';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Layout from '../../hocs/basicLayout';
import contentfulServer from '../../api/contentfulPosts';
import { sortDates } from '../../utils/sorting';
import StoriesCarousel from '../../components/storiesComponents/storiesCarousel';
import StoriesGrid from '../../components/storiesComponents/storiesGrid';
import entriesType from '../../components/storiesComponents/entriesType';

import styles from './stories.module.scss';

const Stories = ({ entries }) => {
  const filteredDate = sortDates(entries);
  const filteredStoryContent = entries.filter((entry) => (
    !filteredDate || entry.fields.publishDate.indexOf(filteredDate) === -1
  ));

  return (
    <Layout>
      {entries && entries.length > 0 && (
        <>
          <StoriesCarousel entries={filteredStoryContent.slice(0, 3)} />
          <div className={styles.storiesContainer}>
            <aside className={styles.refineSearch}>
              <div className={styles.refineSection}>
                <Title type="h3Title">Imagination</Title>
                <Title type="h2Title">Feed</Title>
                <div className={styles.mobilePanel}>
                  <div className={styles.storiesParagraph}>
                    <Paragraph>
                      With the force of imagination, mentoring and unlikely alliances, AIME is
                      creating a fairer world through a worldwide movement of people that form
                      our Social Network for Good.
                    </Paragraph>
                  </div>
                </div>
              </div>
            </aside>
            <StoriesGrid entries={filteredStoryContent} />
          </div>
        </>
      )}
    </Layout>
  );
};

Stories.defaultProps = { entries: [] };
Stories.propTypes = { entries: entriesType };

Stories.getInitialProps = async () => {
  const client = contentfulServer();
  const entries = await client.then((response) => response);
  const getStoryPosts = entries.filter((entry) => (entry.fields.contentTag.fields.name === 'story'));

  return { entries: getStoryPosts };
};

export default Stories;
