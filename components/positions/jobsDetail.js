import React from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import { getFormattedDate } from '../../utils/positions';
import styles from './jobsDetail.module.scss';

const JobsDetail = ({
  location, term, salaryRange, expire,
}) => (
  <>
    <div>
      <Title type="h5Title" theme={process.env.REACT_APP_THEME}>{location}</Title>
      <Title type="h5Title" theme={process.env.REACT_APP_THEME}>{term}</Title>
      {salaryRange && (
        <Title type="h5Title" theme={process.env.REACT_APP_THEME}>{salaryRange}</Title>
      )}
    </div>

    <div className={styles.jobDetailExpireContent}>
      {expire && (
        <div>
          <Title type="h5Title" theme={process.env.REACT_APP_THEME}>Applications close at &nbsp; </Title>
          <Paragraph>
            <strong>{getFormattedDate(expire)}</strong>
          </Paragraph>
        </div>
      )}
    </div>
  </>
);

JobsDetail.propTypes = {
  location: PropTypes.string,
  term: PropTypes.string,
  salaryRange: PropTypes.string,
  expire: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

JobsDetail.defaultProps = {
  location: null,
  term: '',
  salaryRange: null,
  expire: null,
};

export default JobsDetail;
