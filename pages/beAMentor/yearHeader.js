import React from 'react';
import Title from 'aime-blueprint/lib/components/title';

const YearHeader = () => (
  <div className="year-header sm-col sm-col-12 clearfix center">
    <Title type="headingLockup" theme={process.env.REACT_APP_THEME}>
      {`Bring on ${new Date().getFullYear()},`}
      <strong>
        Change is
        <br />
        gonna come
      </strong>
    </Title>
  </div>
);

export default YearHeader;
