import React from 'react';
import PropTypes from 'prop-types';
import Select from 'aime-blueprint/lib/components/select';
import UniversitySelector from '../universitySelector';

const REFERRAL_OPTIONS = [
  {
    value: '',
    label: 'What brought you here?',
  },
  {
    value: 'AIME Friends Email',
    label: 'AIME Friends Email',
  },
  {
    value: 'AIME Website',
    label: 'AIME Website',
  },
  {
    value: 'During an AIME Session',
    label: 'During an AIME Session',
  },
  {
    value: 'Ethical Positions',
    label: 'Ethical Positions',
  },
  {
    value: 'Koori Mail',
    label: 'Koori Mail',
  },
  {
    value: 'LinkedIn',
    label: 'LinkedIn',
  },
  {
    value: 'SEEK',
    label: 'SEEK',
  },
  {
    value: 'Social Media',
    label: 'Social Media',
  },
  {
    value: 'Word of Mouth',
    label: 'Word of Mouth',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];

const JobUniAndContactFrom = ({ displayCampusSelect, handleChange, values }) => (
  <>
    <div>
      {displayCampusSelect && (
        <UniversitySelector
          placeholder="Choose site of desired position"
          name="uni-campus-attending"
          containerClassNames="sm-col sm-col-6 md-col-6 o7-r o7-b js-campus-select"
          onChangeFunction={handleChange}
          value={values['uni-campus-attending']}
        />
      )}
    </div>

    <div className="sm-col sm-col-6 md-col-6 o7-r o7-b">
      <Select
        id="referral-source"
        name="referral-source"
        required
        theme={process.env.REACT_APP_THEME}
        onChangeFunction={handleChange}
        value={values['referral-source']}
        options={REFERRAL_OPTIONS}
      />
    </div>
  </>
);

JobUniAndContactFrom.propTypes = {
  displayCampusSelect: PropTypes.bool,
  handleChange: PropTypes.func,
  values: PropTypes.shape({
    'referral-source': PropTypes.string,
    'uni-campus-attending': PropTypes.string,
  }),
};

JobUniAndContactFrom.defaultProps = {
  displayCampusSelect: false,
  handleChange: () => {},
  values: {},
};

export default JobUniAndContactFrom;
