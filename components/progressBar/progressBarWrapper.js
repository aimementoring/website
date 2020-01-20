import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ProgressBarWrapper = ({
  tooltipId, size, children, total, goal,
}) => {
  const progressBarWrapperClasses = classNames({
    'sf-n-progress-bar-wrapper': true,
    [`sf-n-progress-bar-wrapper--${size}`]: true,
  });
  const hasTooltip = tooltipId && tooltipId.length > 0;

  return (
    <div>
      <div data-tip data-for={hasTooltip && tooltipId} className={progressBarWrapperClasses}>
        {children}
      </div>
      <span className="number-of-donations h6">
        {`$${(total / 100).toLocaleString().split('.')[0]} / $${
          (goal / 100).toLocaleString().split('.')[0]
        }`}
      </span>
    </div>
  );
};

ProgressBarWrapper.propTypes = {
  children: PropTypes.node,
  tooltipId: PropTypes.string,
  total: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

ProgressBarWrapper.defaultProps = {
  size: 'small',
  tooltipId: '',
  children: null,
};

export default ProgressBarWrapper;
