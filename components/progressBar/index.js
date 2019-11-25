import React from 'react';
import { PropTypes } from 'prop-types';

const ProgressBar = ({
  color, value, min, max, offset, tooltipId,
}) => {
  const getPercentage = (val) => {
    const scale = max - min;
    const calculatedValue = ((val - min) / scale) * 100;
    if (calculatedValue < 0) {
      return 0;
    }
    return calculatedValue > 100 ? 100 : calculatedValue;
  };

  const hasTooltip = tooltipId && tooltipId.length > 0;
  const progressStyle = {
    left: `${getPercentage(offset)}%`,
    backgroundColor: color,
    width: `${value >= min ? getPercentage(value) : 0}%`,
  };

  // data-tip is mandatory is we want to show a tooltip
  // data-for is the id that will look for the ReactTooltip to render the tooltip
  return (
    <div
      className={`${color} sf-n-progress-bar`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-label="progress"
      data-tip
      data-for={hasTooltip && tooltipId}
      style={progressStyle}
    />
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  tooltipId: PropTypes.string,
  offset: PropTypes.number,
};

ProgressBar.defaultProps = {
  max: 100,
  min: 0,
  color: '#ffffff',
  tooltipId: '',
  offset: 0,
};

export default ProgressBar;
