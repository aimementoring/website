import React, { useState } from 'react';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Layout from '../../hocs/basicLayout';
import { getStories, getCategories } from '../../api/contentfulPosts';
import { sortDates } from '../../utils/sorting';
import { slugify } from '../../utils/formatting';
import StoriesCarousel from '../../components/storiesComponents/storiesCarousel';
import StoriesGrid from '../../components/storiesComponents/storiesGrid';
import entriesType from '../../components/storiesComponents/entriesType';
import StoryCategorySelector from '../../components/storiesComponents/storyCategorySelector';
import styles from './stories.module.scss';

const PRE_SELECTED_CATEGORY = 'IN{TV}';

const Stories = ({
  initialStories, categories, initialTotal, initialCategories,
}) => {
  const [stories, setStories] = useState(initialStories);
  const [currentPage, setPage] = useState(0);
  const [total, setTotal] = useState(initialTotal);
  const [selectedCategories, setSelectedCategories] = useState(initialCategories);
  const filteredDate = sortDates(initialStories);
  const filteredStories = stories.filter((entry) => (
    !filteredDate || entry.fields.publishDate.indexOf(filteredDate) === -1
  ));

  const handleCategorySelect = (clickedCategories) => () => {
    setSelectedCategories(clickedCategories);
    if (clickedCategories.length === 1) {
      const newPath = `/stories/${slugify(clickedCategories[0])}`;
      Router.replace('/stories/[categorySlug]', newPath, { shallow: true });
    } else if (clickedCategories.length === categories.length) {
      Router.replace('/stories/[categorySlug]', '/stories/all', { shallow: true });
    }
    getStories(clickedCategories).then(({ stories: newStories, total: newTotal }) => {
      setStories(newStories);
      setTotal(newTotal);
    });
  };

  const loadNextPage = async () => {
    const newPage = currentPage + 1;
    setPage(newPage);
    const moreStories = await getStories(selectedCategories, newPage);
    setStories((prevStories) => [...prevStories, ...moreStories.stories]);
  };

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
            { stories.length < total && (
              <div className={styles.loadMore}>
                <Button
                  text="Show me more stories"
                  onClickFunction={loadNextPage}
                  className={styles.loadMoreButton}
                  theme={process.env.REACT_APP_THEME}
                />
              </div>
            )}
          </div>
        </>
      )}
    </Layout>
  );
};


Stories.defaultProps = {
  initialStories: [],
  categories: [],
  initialTotal: 1000,
  initialCategories: [PRE_SELECTED_CATEGORY],
};

Stories.propTypes = {
  initialStories: entriesType,
  categories: PropTypes.arrayOf(PropTypes.string),
  initialTotal: PropTypes.number,
  initialCategories: PropTypes.arrayOf(PropTypes.string),
};

Stories.getInitialProps = async ({ query }) => {
  const categories = await getCategories();
  const getCategoriesFromSlug = () => {
    if (query.categorySlug === 'all') return categories;
    const categoryFromSlug = categories.find(
      (cat) => slugify(cat) === query.categorySlug,
    );
    return [categoryFromSlug || PRE_SELECTED_CATEGORY];
  };
  const initialCategories = getCategoriesFromSlug();
  const { stories, total } = await getStories(initialCategories);
  return {
    initialStories: stories,
    categories,
    initialTotal: total,
    initialCategories,
  };
};

export default Stories;
