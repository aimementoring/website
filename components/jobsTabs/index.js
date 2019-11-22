import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

const TabsTitle = dynamic(() => import(/* webpackChunkName 'TabsTitle' */ './tabsTitle'));
const TabsContent = dynamic(() => import(/* webpackChunkName 'TabsContent' */ './tabsContent'));

const JobsTabs = ({ onClick, active, countryId }) => (
  <div className="wrap mx-auto p3">
    <TabsTitle onClick={onClick} active={active} countryId={countryId} />
    <TabsContent active={active} countryId={countryId} />
  </div>
);

JobsTabs.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.string,
  countryId: PropTypes.string.isRequired,
};

JobsTabs.defaultProps = {
  active: '',
};

export default JobsTabs;
