import React from 'react';
import PropTypes from 'prop-types';
import { getFormattedDate } from '../../utils/positions';

const JobsDetail = ({
  location, term, salaryRange, expire,
}) => (
  <>
    <div className="block f-14 light js-non-unavailable-position c-black">
      <p className="inline-block js-job-location">{location}</p>
      {location && (
        <p className="inline-block px1 js-job-dash-location">-</p>
      )}
      <p className="inline-block js-job-term">{term}</p>
      {salaryRange && (
        <>
          <p className="inline-block px1 js-job-dash-location">-</p>
          <p className="inline-block js-job-expires">{salaryRange}</p>
        </>
      )}
    </div>

    <div className="block mb3 md-mb4 lg-mb4 f-14 light js-non-unavailable-position c-purple">
      {expire && (
        <div>
          <p className="inline-block">Applications close at &nbsp; </p>
          <p className="inline-block js-job-expires">
            <strong>{getFormattedDate(expire)}</strong>
          </p>
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
