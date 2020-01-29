import React from 'react';
import PropTypes from 'prop-types';
import './beAMentor.module.scss';

const UniversityLinks = ({ options }) => (
  <div className="display-none">
    {options && (
      <div>
        {options.map((university) => (
          <a
            href={`/be-a-mentor/${university.reportingName}`}
            key={`${university.reportingName}-${university.value}`}
            aria-label="u"
          >
            u
          </a>
        ))}
      </div>
    )}
  </div>
);

UniversityLinks.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    reportingName: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })).isRequired,
};

export default UniversityLinks;
