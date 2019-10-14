import React from 'react';
import PropTypes from 'prop-types';

export default class Wall extends React.PureComponent {
  static propTypes = {
    prev: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
  };

  render() {
    const { prev, next } = this.props;
    return (
      <div className="border-none aimeVideos-buttons">
        <button type="button" className="border-none" onClick={prev} style={{ color: "#ffffff", backgroundColor: "transparent", }}>
          <svg className="icon icon-arrow-prev">
            <use xlinkHref="#icon-arrow-prev" />
          </svg>
        </button>
        <button type="button" className="border-none" style={{ color: "#ffffff", backgroundColor: "transparent", }} onClick={next}>
          <svg className="icon icon-arrow-next">
            <use xlinkHref="#icon-arrow-next" />
          </svg>
        </button>
      </div>
    );
  }
}
