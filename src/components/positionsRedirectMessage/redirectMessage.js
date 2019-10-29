import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './redirectMessage.scss';

const { REACT_APP_PITCH_YOURSELF_TO_AIME_ID } = process.env

export default class PositionsRedirectMessage extends PureComponent {
  static propTypes = {
    jobTitle: PropTypes.string.isRequired,
    filteredJobs: PropTypes.array.isRequired,
    handleRedirectHide: PropTypes.func.isRequired,
  };

  state = {
    checkJobId: false,
  };

  componentDidMount() {
    this.jobIdCheck();
  }

  jobIdCheck = () => {
    const { filteredJobs } = this.props;
    const checkJobId = filteredJobs.some(
      job => job.id === REACT_APP_PITCH_YOURSELF_TO_AIME_ID
    );
    this.setState({
      checkJobId,
    });
  };

  render() {
    const { checkJobId } = this.state;
    const { jobTitle, handleRedirectHide } = this.props;

    return (
      <div className="redirect-container">
        <div className="redirect-hide" onClick={handleRedirectHide}>
          <svg className="icon-redirect-close">
            <use xlinkHref="#icon-close" />
          </svg>
        </div>
        <div className="redirect-message">
          <h2>
            Sorry, it looks like
            <span>
              {' '}
              {jobTitle}
            </span>
            &nbsp; is no longer available.
          </h2>
          <p>
            Perhaps there's another job you could see yourself nailing below?
            Have a look through the current opportunities available!
          </p>
          <p>
            If you want to talk to someone about
            {' '}
            {jobTitle}
            {' '}
            specifically,
            {' '}
            <Link to="/contact">reach out to us</Link>
            {' '}
            {checkJobId
              ? (
                <em>
                  or
                  {' '}
                  <Link
                    to={`${window.location.pathname}/${REACT_APP_PITCH_YOURSELF_TO_AIME_ID}/Pitch-yourself-into-AIME`}
                  >
                    Pitch Yourself!
                  </Link>
                </em>
              ) : null}
          </p>
        </div>
      </div>
    );
  }
}
