import React from 'react';
import PropTypes from 'prop-types';

const JobExpired = ({ positionExpired }) => (
  <div>
    {positionExpired && (
      <div className="block mb3 md-mb4 lg-mb4 f-14 light js-unavailable-position c-black">
        <p>Sadly this position has expired</p>
      </div>
    )}
  </div>
);

JobExpired.propTypes = {
  positionExpired: PropTypes.bool,
};

JobExpired.defaultProps = {
  positionExpired: false,
};

export default JobExpired;
