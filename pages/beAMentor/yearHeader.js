import React from 'react';

const YearHeader = () => (
  <div className="year-header sm-col sm-col-12 clearfix center">
    <h4 className="post-text mt1">
      {`Bring on ${new Date().getFullYear()},`}
      <br />
      <span className="gradient-text highlight-text highlight-text__med">
        Change is
        {' '}
        <br />
        gonna come!
      </span>
    </h4>
  </div>
);

export default YearHeader;
