import React from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import styles from './jobsTitle.module.scss';

const JobsTitle = ({ id, name }) => (
  <Title type="h4Title" className={styles.headingJobContent} theme={process.env.REACT_APP_THEME}>
    Hello, are you the
    <span className={styles.headingJobRole}>
      {id === process.env.REACT_APP_PITCH_YOURSELF_TO_AIME_ID
        ? ' Person '
        : name && ` ${name.replace('-', '')} `}
    </span>
    {'we\'re looking for?'}
  </Title>
);

JobsTitle.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

JobsTitle.defaultProps = {
  name: '',
  id: null,
};

export default JobsTitle;
