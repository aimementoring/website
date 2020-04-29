import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import compact from 'lodash/compact';
import Loading from 'aime-blueprint/lib/components/loading';
import Layout from '../../../hocs/basicLayout';
import {
  capitaliseFirstCharacter,
  slugify,
} from '../../../utils/formatting';
import isClientSide from '../../../utils/isClientSide';
import handleError from '../../../utils/errorHandler';
import request from '../../../utils/request';
import { findJob } from '../../../services/positions';
import Header from '../../../components/positions/header';
import JobsTitle from '../../../components/positions/jobsTitle';
import JobsDetail from '../../../components/positions/jobsDetail';
import SupportingDocs from '../../../components/positions/supportingDocs';
import JobVideoOpportunity from '../../../components/positions/jobVideoOpportunity';
import JobApplyAction from '../../../components/positions/jobApplyAction';
import JobExpired from '../../../components/positions/jobExpired';
import BackAction from '../../../components/positions/backAction';
import JobForm from '../../../components/positions/jobForm';
import './positionsEntry.scss';


const PositionsEntry = () => {
  const router = useRouter();
  const { positionId, jobCategory } = router.query;
  const [state, setState] = useState({
    currentSite: '',
    showForm: false,
    positionExpired: false,
    job: {},
    city: '',
    territory: '',
    postCode: '',
    streetName: '',
    streetNumber: '',
    countryAddress: '',
    locationError: false,
    displayError: null,
    isLoading: true,
    redirected: false,
    redirectJobTitle: jobCategory && jobCategory.length && jobCategory.trim()
      ? slugify(jobCategory)
      : '',
    jobForm: {},
  });

  const isClient = isClientSide();
  useEffect(() => {
    setState({
      ...state,
      redirectJobTitle: jobCategory ? jobCategory.replace(/\W+/g, ' ') : '',
    });
  }, [isClient]);

  const findJobByIdAndCountry = async () => {
    // TODO this needs fixing to make filtering work again
    const countryId = 'global';
    if (positionId) {
      try {
        const job = await findJob(positionId, countryId);
        const location = compact([job.city.trim(), job.state.trim(), job.country.trim()]).join(', ');
        setState({
          ...state,
          job,
          location,
          isLoading: false,
        });
      } catch (error) {
        setState({
          ...state,
          displayError: error,
          redirected: true,
          isLoading: false,
          redirectJobTitle: capitaliseFirstCharacter(state.redirectJobTitle),
        });
        handleError(error, error);
      }
    }
  };

  useEffect(() => {
    findJobByIdAndCountry();
  }, [isClient, positionId]);

  const onAddressSelected = (address) => {
    const { job } = state;
    let locationError = null;
    if (address.countryCode) {
      locationError = !job.availableIn.find((site) => site === address.countryCode.toLowerCase());
    }
    setState({
      ...state,
      city: address.city || '',
      territory: address.territory || '',
      postCode: address.postCode || '',
      streetName: address.streetName || '',
      streetNumber: address.streetNumber || '',
      countryAddress: address.country || '',
      locationError: locationError !== null ? locationError : state.locationError,
    });
  };

  const handleFieldChange = (propertyValue) => (e) => {
    const newValue = e.target.value;
    setState({ ...state, [propertyValue]: newValue });
  };

  const handleFormFieldChange = (name, value) => {
    setState({
      ...state,
      jobForm: {
        ...state.jobForm,
        [name]: value,
      },
    });
  };

  const showApplicationForm = (e) => {
    e.preventDefault();
    setState({ ...state, showForm: true });
  };

  const handleSubmit = async () => {
    let attachments = [];
    if (state.jobForm.attachments && state.jobForm.attachments.length > 0) {
      attachments = state.jobForm.attachments.reduce((accum, attachment) => {
        const jobAttachments = attachment.url.length === 1
          ? [{
            filename: attachment.filename,
            url: attachment.url[0],
          }]
          : attachment.url.map((url, index) => ({
            filename: `${attachment.filename}_${index}`,
            url,
          }));
        return [...accum, ...jobAttachments];
      }, []);
    }
    const answer = await request(`${process.env.REACT_APP_PORTAL_API}/website/positions`, {
      method: 'POST',
      body: {
        ...state.jobForm,
        attachments,
        job_id: state.job.id,
        job_type: state.job.type,
        job_name: state.job.name,
        job_location: state.job.city,
        submissionmessage: 'jobs',
        stage: 'Initial Review',
      },
    });
    if (answer.data === 'OK') {
      Router.push({
        pathname: '/thanks',
        query: {
          messages: `
              Yeah! Thanks for filling out our little form!
              Your local AIME people will make contact with you really soon
              `,
        },
      });
    }
  };

  const {
    showForm,
    positionExpired,
    job,
    location,
    locationError,
    city,
    territory,
    postCode,
    streetName,
    streetNumber,
    countryAddress,
    displayError,
    isLoading,
    redirected,
    redirectJobTitle,
  } = state;

  if (isLoading) return <Loading loading={isLoading} theme={process.env.REACT_APP_THEME} />;

  if (!displayError) {
    return (
      <Layout>
        <div id="positions-entry">
          <Header />
          <div className="job-description md-wrap mx-auto px3 pb3 pt3 js-job-application">
            <JobsTitle {...job} />
            <JobsDetail {...job} location={location} />
            <JobVideoOpportunity
              id={positionId}
              embedVideoId={Number.isNaN(job.embedVideo) ? false : job.embedVideo}
              description={job ? job.description : ''}
            />
            <SupportingDocs jobPacks={job && job.jobPacks ? job.jobPacks : []} />
            <JobApplyAction
              showForm={showForm}
              showApplicationForm={showApplicationForm}
              job={job}
            />
            <JobExpired positionExpired={positionExpired} />
            <JobForm
              job={job}
              onAddressSelected={onAddressSelected}
              locationError={locationError}
              showForm={showForm}
              streetNumber={streetNumber}
              streetName={streetName}
              postCode={postCode}
              territory={territory}
              city={city}
              handleFieldChange={handleFieldChange}
              handleFormFieldChange={handleFormFieldChange}
              countryAddress={countryAddress}
              values={state.jobForm}
              onSubmit={handleSubmit}
            />
            <BackAction />
          </div>
        </div>
      </Layout>
    );
  }
  Router.push({
    pathname: '/positions',
    query: {
      redirected: !!redirected,
      redirectJobTitle,
    },
  });
  return null;
};

export default PositionsEntry;
