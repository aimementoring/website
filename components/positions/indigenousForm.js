import React from 'react';
import PropTypes from 'prop-types';

const IndigenousForm = ({ country }) => (
  <div>
    {country && country
      .toString()
      .toLowerCase()
      .indexOf('australia') > -1 && (
      <div className="sm-col sm-col-12 md-col-12 f-14 pt1 pb1 flex items-center custom-checkbox custom-checkbox--default">
        <input type="hidden" name="indigenous" value="no" />
        <input
          id="indigenous"
          type="checkbox"
          className="hide"
          name="indigenous"
          value="yes"
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="indigenous">
          I identify as an Aboriginal and/or Torres Strait
          Islander person.
        </label>
      </div>
    )}
  </div>
);

IndigenousForm.propTypes = {
  country: PropTypes.string,
};

IndigenousForm.defaultProps = {
  country: '',
};

export default IndigenousForm;
