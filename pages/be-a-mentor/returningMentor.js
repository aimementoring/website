import React from 'react';
import './beAMentor.module.scss';

const ReturningMentor = () => (
  <div className="mt4">
    <h4 className="form-question-heading mt4">
      Nice one! Thanks for walking with us!
    </h4>
    <p>
      {`Since you've mentored with AIME in the past, we should have your details on
      our systems already. When you click the button below, you'll be taken to a
      login screen for our AIME Portal.`}
      {' '}
      <strong>Click on the Sign Up tab</strong>
      {' '}
      and register with your email you gave us last year.
      {' '}
    </p>
    <p>
      <span className="text-highlight purple">
        <strong>
          <em>
            {`Remember! When signing up, click on the Sign Up tab then sign up with
            the same email you used last year and we'll send you an email to kick
            off your application right.`}
          </em>
        </strong>
        &nbsp; &nbsp;
        <span role="img" aria-label="wahoo">
          ✊🏽
        </span>
      </span>
    </p>
    <div className="center sm-col sm-col-12 md-col-12 pr1 pb1">
      <a
        href="https://portal.aimementoring.com/mentors/apply"
        target="_blank"
        rel="noopener noreferrer"
        className="submit"
        aria-label="register"
      >
        Register
      </a>
    </div>
  </div>
);

export default ReturningMentor;
