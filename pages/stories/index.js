import React, { useState } from 'react';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import PropTypes from 'prop-types';
import Layout from '../../hocs/basicLayout';
import { getStories, getCategories } from '../../api/contentfulPosts';
import { sortDates } from '../../utils/sorting';
import StoriesCarousel from '../../components/storiesComponents/storiesCarousel';
import StoriesGrid from '../../components/storiesComponents/storiesGrid';
import entriesType from '../../components/storiesComponents/entriesType';
import StoryCategorySelector from '../../components/storiesComponents/storyCategorySelector';
import styles from './stories.module.scss';

const Stories = ({ stories, categories }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  // if we don't have categories or none are selected, just display all stories
  // for a transition to this content model without hiccups
  let filteredStories = stories;
  if (categories.length > 0 && selectedCategories.length === 1) {
    filteredStories = filteredStories.filter(
      (story) => selectedCategories.some(
        (category) => story.fields.postCategories && story.fields.postCategories.includes(category),
      ),
    );
  }
  const filteredDate = sortDates(stories);
  filteredStories = filteredStories.filter((entry) => (
    !filteredDate || entry.fields.publishDate.indexOf(filteredDate) === -1
  ));

  // calling this with an empty argument resets the categories
  const handleCategorySelect = (clickedCategory) => () => (clickedCategory
    ? setSelectedCategories([clickedCategory]) : setSelectedCategories([]));

  return (
    <Layout>
      {stories && stories.length > 0 && (
        <>
          <StoriesCarousel entries={filteredStories.slice(0, 3)} />
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
            <StoryCategorySelector
              categories={categories}
              selectedCategories={selectedCategories}
              onClickFunction={handleCategorySelect}
            />
            <StoriesGrid entries={filteredStories} />
          </div>
        </>
      )}
    </Layout>
  );
};

Stories.defaultProps = { stories: [], categories: [] };
Stories.propTypes = { stories: entriesType, categories: PropTypes.arrayOf(PropTypes.string) };

Stories.getInitialProps = async () => {
  const stories = await getStories();
  const categories = await getCategories();
  return { stories, categories };
};

export default Stories;
