import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import './beAMentor.scss';

const RadioButton = dynamic(() => import(/* webpackChunkName 'RadioButton' */ 'aime-blueprint/lib/components/radioButton'));

const radioButtonsOptions = [
  {
    value: 'notReturningMentor',
    text: 'Yes this will be my first year as an AIME mentor and I can’t flippin’ wait!',
  },
  {
    value: 'returningMentor',
    text:
      'I’ve mentored with AIME before and will register with the same email I used then. I also can’t flippin’ wait!',
  },
];

const CountryInsideProgram = ({ handleReturningMentorChange, returningMentor }) => (
  <div>
    <div className="relative f-24 sml-rotate rotate-text inline-block mt1 off-center">
      <span role="img" aria-label="thumbs up">
        👍🏽
      </span>
      <span role="img" aria-label="ok">
        👌🏾
      </span>
    </div>
    <h4 className="form-question-heading">
      Cool cool cool. Is this going to be your first time mentoring with AIME?
    </h4>
    <RadioButton
      elementClassName="custom-radio custom-radio--default f-14"
      onChangeFunction={handleReturningMentorChange}
      name="returningMentor"
      options={radioButtonsOptions}
      value={returningMentor ? 'returningMentor' : 'notReturningMentor'}
      theme={process.env.REACT_APP_THEME}
      radiuButtonClass="radio-buttons-space"
    />
  </div>
);

CountryInsideProgram.propTypes = {
  handleReturningMentorChange: PropTypes.func,
  returningMentor: PropTypes.bool,
};

CountryInsideProgram.defaultProps = {
  handleReturningMentorChange: () => {},
  returningMentor: false,
};

export default CountryInsideProgram;
