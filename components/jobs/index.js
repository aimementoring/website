import React, { Component } from 'react'
import PropType from 'prop-types'
import Anchor from '../common/link'
import compact from 'lodash/compact'
import JobFilter from './JobFilter'
import JobPreview from './JobPreview'
import { loadPositions } from '../../services/positions'
import { formatJobs } from '../../utils/positions'
import { COUNTRIES_WHERE_AIME_ACCEPT_JOBS } from '../../constants'
import { getAllCountries } from '../../utils/country'
import Select from '../commonElements/reactSelect';
import { sortArrayOfObjectByField } from '../../utils/utilities'

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      filtersType: {},
      currentFilter: undefined,
      jobsLoaded: false,
      countrySelected: 'global',
    };
    const countries = getAllCountries().map(country => ({
      value: country.code,
      label: country.name,
    }));
    this.state.countries = [
      ...countries.filter(
        country => COUNTRIES_WHERE_AIME_ACCEPT_JOBS.indexOf(country.value) !== -1
      ),
    ];
  }

  componentDidMount() {
    this.fetchPositions();
  }

  handleCountryChange = (propertyName, propertyValue) => {
    this.setState({
      [propertyName]: propertyValue,
    });
  };

  getFilteredJobs = () => {
    const {
      jobs, currentFilter, countrySelected, countries,
    } = this.state;
    const jobsWithCurrentFilter = currentFilter
      ? jobs.filter(job => job.type === currentFilter)
      : jobs;
    if (countrySelected !== 'global') {
      const countryObject = countries.find(country => countrySelected === country.value);
      if (countryObject) {
        return jobsWithCurrentFilter.filter(
          job => job.country === countryObject.label || !job.country
        );
      }
    }
    let sortedJobs = jobsWithCurrentFilter;
    if (jobsWithCurrentFilter.length > 0) {
      sortedJobs = sortArrayOfObjectByField(jobsWithCurrentFilter, 'publish');
    }
    return sortedJobs;
  };

  getStylesForCountrySelection = () => {
    const { backgroundColor } = this.props;
    return {
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
    };
  };

  setFilter = currentFilter => this.setState({ currentFilter });

  buildFilter = () => {
    const { currentFilter, countrySelected } = this.state;
    const isExpiredIfExpire = "IF({Expire}='', TRUE(), IS_AFTER({Expire}, NOW()))";
    const isPublishedIfPublish = "OR({Publish}!='', IS_BEFORE({Publish}, NOW()))";
    const countryAvailable = `OR((FIND("${countrySelected.toLowerCase()}", AvailableIn) > 0), (FIND("global", AvailableIn) > 0))`;
    return `AND(${compact([
      currentFilter,
      isExpiredIfExpire,
      isPublishedIfPublish,
      countryAvailable,
    ]).join(', ')})`;
  };

  fetchPositions = async () => {
    const filters = this.buildFilter();
    loadPositions(filters, [
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
    ]).then(loadedJobs => {
      const jobs = formatJobs(loadedJobs);

      this.setState({
        jobs,
        jobsLoaded: true,
        // eslint-disable-next-line compat/compat
        filtersType: [...new Set(jobs.map(job => job.type))],
      });
    });
  };

  render() {
    const { cdnUrl } = this.props;
    const {
      jobs, currentFilter, jobsLoaded, filtersType, countries, countrySelected,
    } = this.state;

    const filteredJobs = this.getFilteredJobs();
    return (
      <div>
        {jobsLoaded && jobs.length > 0 ? (
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
              {countrySelected === 'US' ? (
                <p>
                  {`
                        If you would like to work with AIME in the US we are well 
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
                <p>
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
                currentFilter={currentFilter}
                filterBy={this.setFilter}
                filtersType={filtersType}
              />
              <div>
                <Select
                  placeholder="Select your country"
                  className="select-auto-complete-country"
                  name="countrySelected"
                  onChangeFunction={this.handleCountryChange}
                  value={countrySelected}
                  backgroundColor="#FFFF"
                  borderColor="#FFFF"
                  options={countries}
                  styles={this.getStylesForCountrySelection()}
                />
              </div>
            </div>
            <div className="job-grid mb4 grid">
              {filteredJobs.map(job => (
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
              <Anchor to="/be-a-friend">sign up to be an AIME Friend</Anchor>
              though and receive updates about everything that's happening.
            </p>
          </div>
        )}
      </div>
    );
  }
}

Jobs.PropType = {
  cdnUrl: PropType.string.isRequired,
  currentSite: PropType.string.isRequired,
};

export default Jobs;
