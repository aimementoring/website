import React, { useState, useEffect, useRef } from 'react';
import PropType from 'prop-types';
import dynamic from 'next/dynamic';
import compact from 'lodash/compact';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Title from 'aime-blueprint/lib/components/title';
import { loadPositions } from '../../services/positions';
import { formatJobs } from '../../utils/positions';
import { COUNTRIES_WHERE_AIME_ACCEPT_JOBS } from '../../constants';
import { getAllCountries } from '../../utils/country';
import { sortArrayOfObjectByField } from '../../utils/sorting';
import isClientSide from '../../utils/isClientSide';

import Select from '../commonElements/reactSelect';

import styles from './jobs.module.scss';


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
    if (isClientSide() && state.jobsLoaded && redirectRef.current) {
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
          <div className={styles.componentJob}>
            <span
              className={styles.lineJob}
            />
            <h1 className={styles.titleJobs} id="opportunity-list">
              All aboard the AIME Train.
            </h1>
          </div>
          <div className={styles.componentJobFilter}>
            <JobFilter
              currentFilter={state.currentFilter}
              filterBy={setFilter}
              filtersType={state.filtersType}
            />
            <div>
              <Select
                placeholder="Select your country"
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
          <div className={styles.jobGrid}>
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
        <div className={styles.noJobContainer}>
          <Title type="h4Title" theme={process.env.REACT_APP_THEME}>
            We are not hiring.
          </Title>
          <span className={styles.titleNoJobContainer} />
          <Paragraph className={styles.paragraphNoJobContainer}>
            Sorry, there are no positions available at the moment.
          </Paragraph>
          <Paragraph>
            {`You can sign up to be an AIME Friend at the bottom of this page though – 
            you'll receive updates about everything that's happening.`}
          </Paragraph>
          <br />
          <br />
        </div>
      )}
    </div>
  );
};

Jobs.propTypes = {
  cdnUrl: PropType.string.isRequired,
  backgroundColor: PropType.string,
  isRedirect: PropType.oneOfType([PropType.bool, PropType.string]),
  handleRedirectHide: PropType.func,
  jobTitle: PropType.string.isRequired,
};

Jobs.defaultProps = {
  backgroundColor: '#FFF',
  isRedirect: false,
  handleRedirectHide: () => {},
};

export default Jobs;
