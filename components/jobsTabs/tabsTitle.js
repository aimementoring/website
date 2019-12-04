import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const TabTitle = ({ onClick, title, active }) => (
  <div
    className={classNames('job-tabs--link', { active: active === title })}
    onClick={() => onClick(title)}
    onKeyPress={() => onClick(title)}
    role="presentation"
  >
    {title}
  </div>
);

TabTitle.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.string,
};

TabTitle.defaultProps = {
  active: '',
};


const TabsTitle = ({ onClick, active, countryId }) => (
  <div className="js-job-tabs pt2 pb3 flex justify-around items-baseline xs-hide sm-hide md-hide">
    <TabTitle title="Life at AIME" onClick={onClick} active={active} />
    {countryId === 'au' && (
      <TabTitle title="Perks and Benefits" onClick={onClick} active={active} />
    )}
    <TabTitle title="Salary Guide" onClick={onClick} active={active} />
  </div>
);

TabsTitle.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.string,
  countryId: PropTypes.string.isRequired,
};

TabsTitle.defaultProps = {
  active: '',
};

export default TabsTitle;
