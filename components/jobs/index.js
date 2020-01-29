import React, { useState, useEffect, useRef } from 'react';
import PropType from 'prop-types';
import dynamic from 'next/dynamic';
import compact from 'lodash/compact';
import Anchor from '../common/link';
import { loadPositions } from '../../services/positions';
import { formatJobs } from '../../utils/positions';
import { COUNTRIES_WHERE_AIME_ACCEPT_JOBS } from '../../constants';
import { getAllCountries } from '../../utils/country';
import Select from '../commonElements/reactSelect';
import { sortArrayOfObjectByField } from '../../utils/utilities';

const JobFilter = dynamic(() => import('./JobFilter'));
const JobPreview = dynamic(() => import('./JobPreview'));
const PositionsRedirectMessage = dynamic(() => import('../positionsRedirectMessage'));

const Jobs = ({
  backgroundColor, cdnUrl, isRedirect, handleRedirectHide, jobTitle,
}) => {
  const [state, setState] = useState({
    jobs: [],
    filtersType: {},
    currentFilter: undefined,
    jobsLoaded: false,
    countrySelected: 'global',
    countries: getAllCountries().map((country) => ({
      value: country.code,
      label: country.name,
    })).filter(
      (country) => COUNTRIES_WHERE_AIME_ACCEPT_JOBS.indexOf(country.value) !== -1,
    ),
  });

  const redirectRef = useRef(null);

  const buildFilter = () => {
    const isExpiredIfExpire = "IF({Expire}='', TRUE(), IS_AFTER({Expire}, NOW()))";
    const isPublishedIfPublish = "OR({Publish}!='', IS_BEFORE({Publish}, NOW()))";
    const countryAvailable = `OR((FIND("${state.countrySelected.toLowerCase()}", AvailableIn) > 0), (FIND("global", AvailableIn) > 0))`;
    return `AND(${compact([
      state.currentFilter,
      isExpiredIfExpire,
      isPublishedIfPublish,
      countryAvailable,
    ]).join(', ')})`;
  };

  const fetchPositions = async () => {
    const filters = buildFilter();
    const loadedJobs = await loadPositions(filters, [
      'Name',
      'Expire',
      'Description',
      'City',
      'State/Province',
      'Country',
      'Term',
      'Salary Range',
      'Publish',
      'Type',
    ]);
    const jobs = formatJobs(loadedJobs);

    setState({
      ...state,
      jobs,
      jobsLoaded: true,
      filtersType: [...new Set(jobs.map((job) => job.type))],
    });
  };

  useEffect(() => {
    fetchPositions();
  }, []);

  const handleAutoScroll = () => {
    if (state.jobsLoaded && redirectRef.current) {
      window.scrollTo(0, redirectRef.current.offsetTop);
    }
  };

  useEffect(() => {
    if (isRedirect && state.jobsLoaded) {
      handleAutoScroll();
    }
  }, [state.jobsLoaded, isRedirect]);

  const handleCountryChange = (propertyName, propertyValue) => {
    setState({
      ...state,
      [propertyName]: propertyValue,
    });
  };

  const getFilteredJobs = () => {
    const jobsWithCurrentFilter = state.currentFilter
      ? state.jobs.filter((job) => job.type === state.currentFilter)
      : state.jobs;
    if (state.countrySelected !== 'global') {
      const countryObject = state.countries.find(
        (country) => state.countrySelected === country.value,
      );
      if (countryObject) {
        return jobsWithCurrentFilter.filter(
          (job) => job.country === countryObject.label || !job.country,
        );
      }
    }
    let sortedJobs = jobsWithCurrentFilter;
    if (jobsWithCurrentFilter.length > 0) {
      sortedJobs = sortArrayOfObjectByField(jobsWithCurrentFilter, 'publish');
    }
    return sortedJobs;
  };

  const getStylesForCountrySelection = () => ({
    control: {
      background: backgroundColor,
      minWidth: '232px',
    },
    input: {
      color: '#7603DB',
    },
    singleValue: {
      color: '#7603DB',
      position: 'initial',
      overflow: 'inherit',
      top: 'inherit',
      transform: 'inherit',
      maxWidth: 'inherit',
    },
    menu: {
      borderRadius: 0,
      marginTop: '0px',
      width: '100%',
      zIndex: 10000,
    },
    menuList: {
      zIndex: 10000,
      padding: 0,
    },
  });

  const setFilter = (currentFilter) => {
    setState({
      ...state,
      currentFilter,
    });
  };

  const filteredJobs = getFilteredJobs();
  return (
    <div>
      {state.jobsLoaded && state.jobs.length > 0 ? (
        <div>
          <div className="md-wrap mx-auto center mt0 pt0 mb2 md-mb3 lg-mb3">
            <span
              className="line
                bg-brand-tertiary mx-auto mt1
                mb2 md-mb3 md-mt4 lg-mb3 lg-mt4"
            />
            <h1 className="lh-base mb2" id="opportunity-list">
              All aboard the AIME Train.
            </h1>
            {state.countrySelected === 'US' ? (
              <p>
                {`If you would like to work with AIME in the US we are well 
                  and truly in startup mode and are interested in everyone 
                  from current and former CEO's of the biggest organisations 
                  in the world, through to recent college grads who want to put 
                  their minds to work. Flick through a cover letter, including 
                  how much you'd be willing to work for as a salary, and CV and 
                  we'll do our best to get back to you in the next few months. 
                  Here's to changing lives and getting up every day pouring our 
                  life's energy into it!`}
              </p>
            ) : (
              <p className="lh-base">
                {`
                      We are here to sprint the marathon, think of your time at AIME as 
                      the hardest, fastest, longest sprint of your life. If you do 3 
                      years here, flat chat, and pass the baton on, that is success.
                    `}
              </p>
            )}
          </div>
          <div className="flex justify-between items-center">
            <JobFilter
              currentFilter={state.currentFilter}
              filterBy={setFilter}
              filtersType={state.filtersType}
            />
            <div>
              <Select
                placeholder="Select your country"
                className="select-auto-complete-country"
                name="countrySelected"
                onChangeFunction={handleCountryChange}
                value={state.countrySelected}
                backgroundColor="#FFFF"
                borderColor="#FFFF"
                options={state.countries}
                styles={getStylesForCountrySelection()}
              />
            </div>
          </div>
          <div className="job-grid mb4 grid">
            {isRedirect && (
              <PositionsRedirectMessage
                jobTitle={jobTitle}
                filteredJobs={filteredJobs}
                handleRedirectHide={handleRedirectHide}
              />
            )}
            {filteredJobs.map((job) => (
              <JobPreview key={job.id} cdnUrl={cdnUrl} {...job} />
            ))}
          </div>
        </div>
      ) : (
        <div className="mt0 pt1 md-pt3 lg-pt3 md-mt2 lg-mt4">
          <h1 className="lh-base">We are not hiring.</h1>
          <span className="line bg-brand-tertiary mb3 mt1" />
          <p className="pb1 md-pb3 lg-pb3">
            Sorry, there are no positions available at the moment. You can
            <Anchor to="/be-a-friend" as="/be-a-friend">sign up to be an AIME Friend</Anchor>
            {'though and receive updates about everything that\'s happening.'}
          </p>
        </div>
      )}
    </div>
  );
};

Jobs.propTypes = {
  cdnUrl: PropType.string.isRequired,
  backgroundColor: PropType.string,
  isRedirect: PropType.bool,
  handleRedirectHide: PropType.func,
  jobTitle: PropType.string.isRequired,
};

Jobs.defaultProps = {
  backgroundColor: '#FFF',
  isRedirect: false,
  handleRedirectHide: () => {},
};

export default Jobs;
