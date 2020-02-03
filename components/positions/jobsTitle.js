import React from 'react';
import PropTypes from 'prop-types';

const JobsTitle = ({ id, name }) => (
  <h1
    className="lh-smaller sm-text-wrap py2 c-black"
    style={{ display: 'block' }}
  >
    Hello, are you the
    <span className="c-purple js-job-name">
      {id === process.env.REACT_APP_PITCH_YOURSELF_TO_AIME_ID
        ? ' Person '
        : name && ` ${name.replace('-', '')} `}
    </span>
    {'we\'re looking for?'}
  </h1>
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
