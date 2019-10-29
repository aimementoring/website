import React from 'react';
import PropTypes from 'prop-types';
import './loading.scss';

const Loading = ({ loading }) => {
  if (loading) {
    return (
      <div className="loading">
        <div className="spin spinning">
          <span className="spinDot spinDotSpin">
            <i />
            <i />
            <i />
            <i />
          </span>
        </div>
      </div>
    );
  }
  return null;
};

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loading;
