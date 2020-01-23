import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import styles from './beAMentor.module.scss';

const RadioButton = dynamic(() => import('aime-blueprint/lib/components/radioButton'));

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
    <div className={styles.countryEmojisWrapper}>
      <span role="img" aria-label="thumbs up">
        👍🏽
      </span>
      <span role="img" aria-label="ok">
        👌🏾
      </span>
    </div>
    <h4>
      Cool cool cool. Is this going to be your first time mentoring with AIME?
    </h4>
    <RadioButton
      onChangeFunction={handleReturningMentorChange}
      name="returningMentor"
      options={radioButtonsOptions}
      value={returningMentor ? 'returningMentor' : 'notReturningMentor'}
      theme={process.env.REACT_APP_THEME}
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
