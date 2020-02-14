import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'aime-blueprint/lib/components/checkbox';

const BecomeAFriendSection = ({ handleChange, values }) => (
  <div className="sm-col sm-col-12 md-col-12 f-14 pt1 pb3 flex items-center custom-checkbox custom-checkbox--default">
    <Checkbox
      id="aime-friend"
      name="be-an-aime-friend"
      value={values['be-an-aime-friend'] || false}
      placeholder="Become an AIME Friend. Recieve updates about AIME and help us tackle inequality."
      onChangeFunction={handleChange}
      theme={process.env.REACT_APP_THEME}
    />
  </div>
);

BecomeAFriendSection.propTypes = {
  handleChange: PropTypes.func,
  values: PropTypes.shape({
    'be-an-aime-friend': PropTypes.bool,
  }),
};

BecomeAFriendSection.defaultProps = {
  handleChange: () => {},
  values: {},
};

export default BecomeAFriendSection;
