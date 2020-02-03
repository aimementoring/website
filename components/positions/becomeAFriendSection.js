import React from 'react';

const BecomeAFriendSection = () => (
  <div className="sm-col sm-col-12 md-col-12 f-14 pt1 pb3 flex items-center custom-checkbox custom-checkbox--default">
    <input
      type="hidden"
      name="be-an-aime-friend"
      value="no"
    />
    <input
      id="aime-friend"
      type="checkbox"
      className="hide"
      name="be-an-aime-friend"
      value="yes"
    />
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label htmlFor="aime-friend">
      Become an AIME Friend. Recieve updates about AIME and
      help us tackle inequality.
    </label>
  </div>
);

export default BecomeAFriendSection;
