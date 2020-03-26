import React from 'react';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import StoriesContent from '../storiesContent';
import entriesType from '../entriesType';
import {
  removeSpecialCharacters,
  replaceWhiteSpace,
} from '../../../utils/formatting';
import styles from './storiesGrid.module.scss';

const StoriesGrid = ({ entries }) => (
  <>
    {entries.length === 0 && (
      <div>
        <Title type="h4Title" className={styles.pageIntroHeading} theme={process.env.REACT_APP_THEME}>Ooops!</Title>
        <Paragraph>
          {'We can\'t find any stories for the criteria you selected.'}
        </Paragraph>
      </div>
    )}
    <div className={styles.storiesGrid}>
      {entries.length > 0 && entries.map(({
        fields: {
          title, contentCreator, postCategories, contentPreview, banner, publishDate, contentCards,
        },
        sys: { id },
      }) => {
        const storiesContentProps = {
          id,
          title,
          slugTitle: replaceWhiteSpace(removeSpecialCharacters(title), '-').toLowerCase(),
          contentCreator: contentCreator.fields.authorName,
          contentPreview: contentPreview && contentPreview.fields,
          bannerContent: banner && banner.fields,
          categories: postCategories,
          publishDate,
          contentCards,
        };
        return <StoriesContent {...storiesContentProps} key={storiesContentProps.id} />;
      })}
    </div>
  </>
);

StoriesGrid.propTypes = { entries: entriesType };
StoriesGrid.defaultProps = { entries: [] };

export default StoriesGrid;
