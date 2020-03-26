import React from 'react';
import StoriesContent from '../storiesContent';
import entriesType from '../entriesType';
import {
  removeSpecialCharacters,
  replaceWhiteSpace,
} from '../../../utils/formatting';
import styles from './storiesGrid.module.scss';

const StoriesGrid = ({ entries }) => (
  <div className={styles.storiesGrid}>
    {entries.length > 0 && entries.map(({
      fields: {
        title, contentCreator, contentPreview, banner, publishDate, contentCards,
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
        publishDate,
        contentCards,
      };
      return <StoriesContent {...storiesContentProps} key={storiesContentProps.id} />;
    })}
  </div>
);

StoriesGrid.propTypes = { entries: entriesType };
StoriesGrid.defaultProps = { entries: [] };

export default StoriesGrid;
