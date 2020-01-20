import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { getCountryGroupOptions } from '../../utils/expresionOfInterest';
import './beAMentor.module.scss';

const Select = dynamic(() => import(/* webpackChunkName 'Select' */ 'aime-blueprint/lib/components/select'));
const ReturningMentor = dynamic(() => import(/* webpackChunkName 'ReturningMentor' */ './returningMentor'));
const NewMentorForm = dynamic(() => import(/* webpackChunkName 'NewMentorForm' */ './newMentorForm'));
const CountryInsideProgram = dynamic(() => import(/* webpackChunkName 'CountryInsideProgram' */ './countryInsideProgram'));
const CountryOutsideProgram = dynamic(() => import(/* webpackChunkName 'CountryOutsideProgram' */ './countryOutsideProgram'));

const STYLES_FOR_COUNTRY_SELECTION = {
  control: {
    background: 'transparent',
  },
  input: {
    color: '#DA0DFF',
  },
  singleValue: {
    color: '#DA0DFF',
    position: 'initial',
    overflow: 'inherit',
    top: 'inherit',
    transform: 'inherit',
    maxWidth: 'inherit',
  },
  menu: {
    borderRadius: 0,
    marginTop: 0,
    width: '100%',
    color: '#DA0DFF',
    zIndex: 10000,
  },
  menuList: {
    zIndex: 10000,
    padding: 0,
  },
};

const defaultUniversityOption = {
  value: 'I can’t find my university/college here',
  label: 'I can’t find my university/college here',
};

const BeAMentorForm = ({
  countrySelectedIsInsideAIMEProgram,
  handleFieldChange,
  handleReturningMentorChange,
  submitData,
  countrySelected,
  returningMentor,
  universityOptions,
  countries,
  countriesWithAimeProgram,
  ...formValues
}) => {
  const [submitClicked, setSubmitClicked] = useState(false);
  const formRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitClicked(true);
    submitData(formRef);
  };

  const universitiesWithCountry = universityOptions.filter(
    (university) => !countrySelected || countrySelected === university.country,
  );

  const universities = [
    defaultUniversityOption,
    ...universitiesWithCountry,
  ];
  const countryGroupOptions = getCountryGroupOptions(countries, countriesWithAimeProgram);

  return (
    <div className="form-container mx-auto px3">
      <form className="clearfix" ref={formRef}>
        <input type="hidden" name="utf8" value="✓" />
        <input type="hidden" name="submissionmessage" value="beamentor" />
        <div className="sm-col sm-col-12 clearfix flex flex-column">
          <h4 className="form-question-heading">
            {'So you\'re interested in mentoring in'}
            <Select
              withGroups
              placeholder="Country?"
              classNames="select-auto-complete-country"
              className="select-auto-complete-country"
              name="countrySelected"
              onChangeFunction={handleFieldChange}
              error={submitClicked && !countrySelected}
              value={countrySelected}
              backgroundColor="transparent"
              borderColor="transparent"
              color="#DA0DFF"
              options={countryGroupOptions}
              styles={STYLES_FOR_COUNTRY_SELECTION}
              theme={process.env.REACT_APP_THEME}
            />
          </h4>
        </div>
        {countrySelectedIsInsideAIMEProgram(countrySelected)
          ? (
            <CountryInsideProgram
              handleReturningMentorChange={handleReturningMentorChange}
              returningMentor={returningMentor}
            />
          ) : (
            <CountryOutsideProgram countrySelected={countrySelected} />
          )}
        {returningMentor
          ? <ReturningMentor />
          : (
            <NewMentorForm
              {...formValues}
              handleFieldChange={handleFieldChange}
              submitData={onSubmit}
              universities={universities}
            />
          )}
      </form>
    </div>
  );
};

BeAMentorForm.propTypes = {
  countrySelectedIsInsideAIMEProgram: PropTypes.func,
  handleFieldChange: PropTypes.func,
  handleReturningMentorChange: PropTypes.func,
  submitData: PropTypes.func,
  countrySelected: PropTypes.string,
  returningMentor: PropTypes.bool,
  universityOptions: PropTypes.arrayOf(PropTypes.shape({})),
  countries: PropTypes.arrayOf(PropTypes.shape({})),
  countriesWithAimeProgram: PropTypes.arrayOf(PropTypes.shape({})),
  universityIsOutsideAIME: PropTypes.bool,
  universitySelected: PropTypes.arrayOf(PropTypes.shape({})),
  submitClicked: PropTypes.bool,
  universityOutsideAIME: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  countryDetected: PropTypes.string,
  aimeFriend: PropTypes.bool,
};

BeAMentorForm.defaultProps = {
  countrySelectedIsInsideAIMEProgram: () => {},
  handleFieldChange: () => {},
  handleReturningMentorChange: () => {},
  submitData: () => {},
  countrySelected: '',
  returningMentor: false,
  universityOptions: [],
  countries: [],
  countriesWithAimeProgram: [],
  universityIsOutsideAIME: false,
  universitySelected: [],
  submitClicked: false,
  universityOutsideAIME: false,
  firstName: null,
  lastName: null,
  email: null,
  countryDetected: null,
  aimeFriend: false,
};

export default BeAMentorForm;
