import React from 'react';
import PropTypes from 'prop-types';
import Select from 'aime-blueprint/lib/components/select';
import UniversitySelector from '../universitySelector';

const JobUniAndContactFrom = ({ displayCampusSelect }) => (
  <>
    <div>
      {displayCampusSelect && (
        <UniversitySelector
          placeholder="Chose site of desired position"
          containerClassNames="sm-col sm-col-6 md-col-6 o7-r o7-b js-campus-select"
        />
      )}
    </div>

    <div className="sm-col sm-col-6 md-col-6 o7-r o7-b">
      <Select
        id="referral-source"
        name="referral-source"
        className="input select-inactive"
        defaultValue=""
        required
        theme={process.env.REACT_APP_THEME}
      >
        <option value="" disabled="">
          What brought you here?
        </option>
        <option value="AIME Friends Email">
          AIME Friends Email
        </option>
        <option value="AIME Website">AIME Website</option>
        <option value="During an AIME Session">
          During an AIME Session
        </option>
        <option value="Ethical Positions">
          Ethical Positions
        </option>
        <option value="Koori Mail">Koori Mail</option>
        <option value="LinkedIn">LinkedIn</option>
        <option value="SEEK">SEEK</option>
        <option value="Social Media">Social Media</option>
        <option value="Word of Mouth">Word of Mouth</option>
        <option value="Other">Other</option>
      </Select>
    </div>
  </>
);

JobUniAndContactFrom.propTypes = {
  displayCampusSelect: PropTypes.bool,
};

JobUniAndContactFrom.defaultProps = {
  displayCampusSelect: false,
};

export default JobUniAndContactFrom;
