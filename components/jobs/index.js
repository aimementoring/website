import React, { useState, useEffect, useRef } from 'react';
import PropType from 'prop-types';
import dynamic from 'next/dynamic';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Title from 'aime-blueprint/lib/components/title';
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
  });

  const redirectRef = useRef(null);

  const fetchPositions = async () => {
    const jobs = await fetch('/api/positions').then((res) => res.json());
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

  const getFilteredJobs = () => {
    const jobsWithCurrentFilter = state.currentFilter
      ? state.jobs.filter((job) => job.type === state.currentFilter)
      : state.jobs;
    let sortedJobs = jobsWithCurrentFilter;
    if (jobsWithCurrentFilter.length > 0) {
      sortedJobs = sortArrayOfObjectByField(jobsWithCurrentFilter, 'publish');
    }
    return sortedJobs;
  };

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
  handleRedirectHide: () => { },
};

export default Jobs;