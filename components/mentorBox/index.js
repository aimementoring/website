import React from 'react';
import PropTypes from 'prop-types';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const MentorBox = ({ image, name, description }) => (
  <div className="grid-tile">
    <div className="campaign-grid--inner-tile">
      <img
        className="campaign-grid--image circle mx-auto block grayscale"
        src={`${ASSETS_URL}/assets/images/ambassadors/${image}`}
        alt={name}
      />
      <h4 className="c-black campaign-grid--title">{name}</h4>
      <p className="c-grey campaign-grid--desc">
        {description}
      </p>
    </div>
  </div>
);

MentorBox.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MentorBox;
