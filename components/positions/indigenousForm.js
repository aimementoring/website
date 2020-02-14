import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'aime-blueprint/lib/components/checkbox';

const IndigenousForm = ({ handleChange, values }) => (
  <div>
    <div className="sm-col sm-col-12 md-col-12 f-14 pt1 pb1 flex items-center custom-checkbox custom-checkbox--default">
      <Checkbox
        id="indigenous"
        placeholder="I identify as an Aboriginal and/or Torres Strait Islander person."
        name="indigenous"
        value={values.indigenous || false}
        onChangeFunction={handleChange}
        theme={process.env.REACT_APP_THEME}
      />
    </div>
  </div>
);

IndigenousForm.propTypes = {
  handleChange: PropTypes.func,
  values: PropTypes.shape({
    indigenous: PropTypes.bool,
  }),
};

IndigenousForm.defaultProps = {
  handleChange: () => {},
  values: {},
};

export default IndigenousForm;
