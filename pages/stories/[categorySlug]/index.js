import React, { useState } from 'react';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import PropTypes from 'prop-types';
import Router from 'next/router';
import InfiniteScroll from 'react-infinite-scroller';
import Layout from '../../../hocs/basicLayout';
import { getStories, getCategories } from '../../../api/contentfulPosts';
import { sortDates } from '../../../utils/sorting';
import { slugify } from '../../../utils/formatting';
import StoriesCarousel from '../../../components/storiesComponents/storiesCarousel';
import StoriesGrid from '../../../components/storiesComponents/storiesGrid';
import entriesType from '../../../components/storiesComponents/entriesType';
import StoryCategorySelector from '../../../components/storiesComponents/storyCategorySelector';
import styles from './stories.module.scss';

const PRE_SELECTED_CATEGORY = 'IN{TV}';

const Stories = ({
  initialStories, categories, total, initialCategories,
}) => {
  const [stories, setStories] = useState(initialStories);
  const [selectedCategories, setSelectedCategories] = useState(initialCategories);
  const filteredDate = sortDates(initialStories);
  const filteredStories = stories.filter((entry) => (
    !filteredDate || entry.fields.publishDate.indexOf(filteredDate) === -1
  ));

  const handleCategorySelect = (clickedCategories) => () => {
    setSelectedCategories(clickedCategories);
    if (clickedCategories.length === 1) {
      const newPath = `/stories/${slugify(clickedCategories[0])}`;
      Router.replace(newPath, newPath, { shallow: true });
    } else {
      // TODO not entirely sure if this doesn't rerender the page …
      // it's not supposed to …
      Router.replace('/stories', '/stories', { shallow: true });
    }
    getStories(selectedCategories).then(({ stories: newStories }) => {
      setStories(newStories);
    });
  };

  const loadMoreStories = async (currentPage) => {
    const moreStories = await getStories(selectedCategories, currentPage + 1);
    setStories((prevStories) => [...prevStories, ...moreStories.stories]);
  };

  return (
    <Layout>
      <InfiniteScroll
        pageStart={0}
        hasMore={stories.length < total}
        initialLoad={false}
        loadMore={loadMoreStories}
      >
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
      </InfiniteScroll>
    </Layout>
  );
};


Stories.defaultProps = {
  initialStories: [],
  categories: [],
  total: 1000,
  initialCategories: [PRE_SELECTED_CATEGORY],
};

Stories.propTypes = {
  initialStories: entriesType,
  categories: PropTypes.arrayOf(PropTypes.string),
  total: PropTypes.number,
  initialCategories: PropTypes.arrayOf(PropTypes.string),
};

Stories.getInitialProps = async ({ query }) => {
  const categories = await getCategories();
  const categoryFromSlug = categories.find((cat) => slugify(cat) === query.categorySlug);
  const initialCategories = [categoryFromSlug || PRE_SELECTED_CATEGORY];
  const { stories, total } = await getStories(initialCategories);
  return {
    initialStories: stories,
    categories,
    total,
    initialCategories,
  };
};

export default Stories;
