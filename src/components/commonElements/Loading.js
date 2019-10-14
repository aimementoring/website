import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Loading.scss';


export default class Loading extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
  }

  render() {
    const { loading } = this.props;

    if (loading) {
      return (
        <div className="loading">
          <div className="spin spinning">
            <span className="spinDot spinDotSpin">
              <i />
              <i />
              <i />
              <i />
            </span>
          </div>
        </div>
      );
    }
    return null;
  }
}
