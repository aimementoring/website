import React from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import { getFormattedDate } from '../../utils/positions';

const JobsDetail = ({
  location, term, salaryRange, expire,
}) => (
  <>
    <div className="block f-14 light js-non-unavailable-position c-black">
      <Title type="h5Title" theme={process.env.REACT_APP_THEME}>{location}</Title>
      <Title type="h5Title" theme={process.env.REACT_APP_THEME}>{term}</Title>
      {salaryRange && (
        <Title type="h5Title" theme={process.env.REACT_APP_THEME}>{salaryRange}</Title>
      )}
    </div>

    <div className="block mb3 md-mb4 lg-mb4 f-14 light js-non-unavailable-position c-purple">
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
