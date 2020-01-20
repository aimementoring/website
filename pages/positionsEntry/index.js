import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import compact from 'lodash/compact';
import dynamic from 'next/dynamic';
import Layout from '../../hocs/basicLayout';
import bugsnagClient from '../../utils/bugsnag';
import {
  capitaliseFirstCharacter,
  removeSpecialCharacters,
  getCountrySite,
  isClientSide,
} from '../../utils/utilities';
import handleError from '../../utils/errorHandler';
import { getFormattedDate } from '../../utils/positions';
import { findJob } from '../../services/positions';
import Anchor from '../../components/common/link';
import UtilityFuncs from '../../components/utilityFuncs';
import './positionsEntry.scss';

const CountrySelector = dynamic(() => import(/* webpackChunkName 'CountrySelector' */ 'aime-blueprint/lib/components/countrySelector'));
const PhoneInput = dynamic(() => import(/* webpackChunkName 'PhoneInput' */ 'aime-blueprint/lib/components/phoneInput'));
const kebabCase = dynamic(() => import(/* webpackChunkName 'kebabCase' */ 'lodash/kebabCase'));
const FileUploader = dynamic(() => import(/* webpackChunkName 'FileUploader' */ '../../components/fileUploader'));
const AddressAutocompleteInput = dynamic(() => import(/* webpackChunkName 'AddressAutocompleteInput' */ '../../components/addressAutocompleteInput'));
const UniversitySelector = dynamic(() => import(/* webpackChunkName 'UniversitySelector' */ '../../components/universitySelector'));

const PositionsEntry = ({ positionId, jobCategory }) => {
  const [state, setState] = useState({
    id: positionId,
    currentSite: '',
    showForm: false,
    positionExpired: false,
    job: {},
    hideDocsContainer: false,
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
      ? removeSpecialCharacters(jobCategory)
      : '',
  });

  const isClient = isClientSide();
  useEffect(() => {
    setState({
      ...state,
      id: positionId,
      redirectJobTitle: jobCategory.replace(/\W+/g, ' '),
    });
  }, [isClient]);

  const transformTemplate = (container, quantity) => {
    const parser = new DOMParser();
    const scriptTemplate = new XMLSerializer()
      .serializeToString(container)
      .replace('xmlns="http://www.w3.org/1999/xhtml" ', '');

    let splitString = '<script type="text/template" class="js-job-document">';
    if (scriptTemplate.indexOf(splitString) < 0) {
      splitString = '<script type="text/template">';
    }
    const template = scriptTemplate
      .replace(splitString, '')
      .replace('<script class="js-job-document" type="text/template">', '')
      .replace('</script>', '');

    return [...new Array(quantity)]
      .map(() => template.replace(/[ ]{2}/g, ''))
      .map((t) => parser.parseFromString(t, 'text/html').firstChild.querySelector('body').firstChild);
  };

  const createJobPacks = ({ jobPacks }) => {
    // eslint-disable-line no-unused-vars
    const jobPackContainer = document.querySelector('.js-job-packs');
    if (jobPacks.length === 0) {
      setState({
        ...state,
        hideDocsContainer: true,
      });
      return;
    }
    const elements = transformTemplate(
      jobPackContainer.querySelector('[type="text/template"]'),
      jobPacks.length,
    );

    if (elements.length > 0) elements[0].classList.add('mb2');

    jobPacks.forEach((jobPack, index) => {
      const anchor = elements[index];
      anchor.href = jobPack.url;
      anchor.querySelector('span').innerHTML = jobPack.filename;
    });

    elements.forEach((element) => {
      jobPackContainer.querySelector('.js-container').appendChild(element);
    });
    jobPackContainer.classList.remove('hide');
  };

  useEffect(() => {
    const { id, redirectJobTitle } = state;
    let countryId = getCountrySite();
    if (!countryId) countryId = 'global';
    findJob(id, countryId)
      .then((job) => {
        const location = compact([job.city.trim(), job.state.trim(), job.country.trim()]).join(
          ', ',
        );
        setState({
          ...state,
          job,
          location,
          isLoading: false,
        });
        createJobPacks(job);
      })
      .catch((error) => {
        setState({
          ...state,
          displayError: error,
          redirected: true,
          isLoading: false,
          redirectJobTitle: capitaliseFirstCharacter(redirectJobTitle),
        });
        handleError(error, error);
      });
  }, []);

  const onAddressSelected = (address) => {
    const { job } = state;
    if (address.countryCode) {
      if (!job.availableIn.find((site) => site === address.countryCode.toLowerCase())) {
        setState({ ...state, locationError: true });
      } else {
        setState({ ...state, locationError: false });
      }
    }
    setState({
      ...state,
      city: address.city ? address.city : '',
      territory: address.territory ? address.territory : '',
      postCode: address.postCode ? address.postCode : '',
      streetName: address.streetName ? address.streetName : '',
      streetNumber: address.streetNumber ? address.streetNumber : '',
      countryAddress: address.country ? address.country : '',
    });
  };

  const setRequiredDocuments = ({ requiredDocuments }) => {
    if (!requiredDocuments || !requiredDocuments.length) {
      document.querySelector('.js-job-documents').classList.add('hide');
      return;
    }
    const documentsContainer = document.querySelector('.js-job-document-container');
    const elements = transformTemplate(
      documentsContainer.querySelector('[type="text/template"]'),
      requiredDocuments.length,
    );

    if (
      elements
      && elements.length > 0
      && elements[elements.length - 1]
      && elements[elements.length - 1].classList
    ) {
      elements[elements.length - 1].classList.remove('mb2');
    }

    requiredDocuments.forEach((document, index) => {
      if (elements[index]) {
        const div = elements[index].querySelector('.upload-field');
        div.dataset.buttonText = `Upload ${document}`;
        div.dataset.inputName = `job-${kebabCase(document)}`;
        div.dataset.apiKey = div.getAttribute('data-api-key');
        div.dataset.requiredFile = true;
      } else {
        bugsnagClient.notify(new Error('No elements detected to upload file'), {
          severity: 'error',
        });
      }
    });

    elements.forEach((element) => {
      documentsContainer.appendChild(element);
    });

    UtilityFuncs.loadComponent('.upload-field', FileUploader);
  };

  const handleFieldChange = (propertyValue) => (e) => {
    const newValue = e.target.value;
    setState({ ...state, [propertyValue]: newValue });
  };

  const showApplicationForm = (e) => {
    e.preventDefault();
    setState({ ...state, showForm: true });
    setRequiredDocuments(state.job);
  };

  const lookupGeoIp = (callback) => {
    callback(state.currentSite);
  };

  const {
    id,
    currentSite,
    showForm,
    positionExpired,
    job,
    hideDocsContainer,
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
  let embedVideoId = job.embedVideo;

  if (Number.isNaN(embedVideoId)) embedVideoId = false;
  const header = (
    <div className="hero-banner--default full-width-wrap job-hero">
      <div className="flex flex-wrap items-center full-height">
        <div className="banner-wrapper subpage-banner center">
          <h1>
            <span className="pre-text">Work with</span>
            <span className="highlight-text">
              <em>
                AIME
                <br />
              </em>
            </span>
            <span className="sm-col-2 mx-auto block pt1 border-bottom border-gradient">
              &nbsp;
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
  if (isLoading) {
    return (
      <Layout>
        <div id="positions-entry">
          <div className="job-description md-wrap mx-auto px3 pb3 pt3 js-job-application" />
        </div>
      </Layout>
    );
  }
  if (!displayError) {
    return (
      <Layout>
        <div id="positions-entry">
          {header}
          <div
            className="job-description md-wrap mx-auto px3 pb3 pt3 js-job-application"
            data-job-id={id}
            data-current-site={currentSite}
          >
            <h1
              className="lh-smaller sm-text-wrap py2 c-black"
              style={{ display: 'block' }}
            >
              Hello, are you the
              <span className="c-purple js-job-name">
                {job
                && job.id === process.env.REACT_APP_PITCH_YOURSELF_TO_AIME_ID
                  ? ' Person '
                  : job.name && ` ${job.name.replace('-', '')} `}
              </span>
              {'we\'re looking for?'}
            </h1>
            <div className="block f-14 light js-non-unavailable-position c-black">
              <p className="inline-block js-job-location">{location}</p>
              {location && (
                <p className="inline-block px1 js-job-dash-location">-</p>
              )}
              <p className="inline-block js-job-term">{job.term}</p>
              {job.salaryRange && (
                <p className="inline-block px1 js-job-dash-location">-</p>
              )}
              {job.salaryRange && (
                <p className="inline-block js-job-expires">{job.salaryRange}</p>
              )}
            </div>

            <div className="block mb3 md-mb4 lg-mb4 f-14 light js-non-unavailable-position c-purple">
              {job.expire && (
                <div>
                  <p className="inline-block">Applications close at &nbsp; </p>
                  <p className="inline-block js-job-expires">
                    <strong>{getFormattedDate(job.expire)}</strong>
                  </p>
                </div>
              )}
            </div>

            <div
              className={`mb4 js-video-container ${
                id !== 'recqdjbXEa2ipFqlR' ? 'hide' : ''
              }`}
            >
              {embedVideoId && (
                <div
                  className="js-job-embed-videos video-container"
                  style={{ paddingTop: '0' }}
                >
                  <iframe
                    title="video-container-position-entry"
                    src={`https://player.vimeo.com/video/${embedVideoId}`}
                    width="640"
                    height="338"
                    frameBorder="0"
                    webkitAllowFullScreen
                    mozallowFullScreen
                    allowFullScreen
                  />
                </div>
              )}
            </div>
            <h4 className="mb1 feature-font-family regular js-non-unavailable-position c-brand-primary">
              The Opportunity
            </h4>

            <p className="f-14 light lh-large mb4 js-job-description js-non-unavailable-position c-black">
              {job.description}
            </p>

            {!hideDocsContainer ? (
              <div className="js-job-packs block mb3 md-mb4 lg-mb4">
                <script type="text/template">
                  <a
                    href="/"
                    target="_blank"
                    className="bold c-grey feature-font-family text-decoration-none flex mb2 mr4 truncate"
                    aria-label="File download"
                  >
                    <i className="material-icons mr2">file_download</i>
                    <span className="js-job-packs-filename truncate">
                      filename
                    </span>
                  </a>
                </script>
                <h4 className="mb1 feature-font-family regular c-brand-primary">
                  Supporting Docs
                </h4>
                <div className="flex flex-wrap js-container" />
              </div>
            ) : null}
            <div>
              {!showForm && Object.keys(job).length > 0 && (
                <button
                  id="applyNowButton"
                  type="button"
                  onClick={showApplicationForm}
                  className="basic-btn border-none submit bold bg-purple c-white regular js-non-unavailable-position"
                  aria-label="apply now"
                >
                  Apply now
                </button>
              )}
            </div>
            <div>
              {positionExpired && (
                <div className="block mb3 md-mb4 lg-mb4 f-14 light js-unavailable-position c-black">
                  <p>Sadly this position has expired</p>
                </div>
              )}
            </div>
            <div>
              {showForm && Object.keys(job).length > 0 && (
                <div
                  id="jobApplicationReveal"
                  className="job-application--reveal flex flex-column border-top b-light-blue pt4 js-non-unavailable-position"
                >
                  <h4 className="feature-font-family regular f-15 pb2 c-brand-primary">
                    Apply now
                  </h4>
                  <form
                    className="job-application"
                    acceptCharset="UTF-8"
                    action="https://formkeep.com/f/50e5b258d8a7"
                    method="POST"
                  >
                    <input type="hidden" name="utf8" value="✓" />
                    <input
                      type="hidden"
                      name="submissionmessage"
                      value="jobs"
                    />
                    <input
                      type="hidden"
                      name="job_type"
                      className="js-job-type-submit-value"
                      value={job.type ? job.type : ''}
                    />
                    <input
                      type="hidden"
                      name="jobs_role_applying_for"
                      className="js-jobs-role-applying-for"
                      value={job.name ? job.name : ''}
                    />

                    {/* <!-- About You Section --> */}
                    <div className="clearfix">
                      <div className="sm-col sm-col-6 md-col-6 o7-r o7-b flex">
                        <input
                          type="text"
                          className="input"
                          placeholder="First Name"
                          name="first_name"
                          required
                        />
                      </div>
                      <div className="sm-col sm-col-6 md-col-6 o7-r o7-b flex">
                        <input
                          type="text"
                          className="input"
                          placeholder="Last Name"
                          name="last_name"
                          required
                        />
                      </div>
                      <div className="sm-col sm-col-6 md-col-6 o7-r o7-b flex">
                        <input
                          type="email"
                          className="input"
                          placeholder="Email"
                          name="email"
                          required
                        />
                      </div>
                      <div className="sm-col sm-col-6 md-col-6 o7-r o7-b flex flex-column js-phone-component">
                        <PhoneInput
                          fieldName="phone"
                          defaultCountry="auto"
                          geoIpLookup={lookupGeoIp}
                          css={['intl-tel-input w100', 'input']}
                          utilsScript="libphonenumber.js"
                        />
                      </div>
                    </div>

                    {/* <!-- Your Location Section --> */}
                    <div className="sm-col sm-col-12 md-col-12 o7-r o7-b clearfix">
                      <AddressAutocompleteInput
                        placeholder="Start typing your address..."
                        onAddressSelected={onAddressSelected}
                        classNameProp="input js-autocomplete-address"
                      />
                      <div>
                        {locationError && (
                          <p className="error-message">
                            Oh no! Sorry looks like we’re not accepting
                            applications from this country yet
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="sm-col sm-col-6 md-col-6 o7-r o7-b">
                      <input
                        type="text"
                        className="input"
                        placeholder="Unit Number"
                        name="unit_number"
                      />
                    </div>

                    <div className="sm-col sm-col-6 md-col-6 o7-r o7-b">
                      <input
                        type="text"
                        className="input"
                        placeholder="Street number"
                        name="street_number"
                        value={streetNumber}
                        onChange={handleFieldChange('streetNumber')}
                      />
                    </div>

                    <div className="sm-col sm-col-12 md-col-12 o7-r o7-b">
                      <input
                        type="text"
                        className="input"
                        placeholder="Street name"
                        name="street_name"
                        value={streetName}
                        onChange={handleFieldChange('streetName')}
                        required
                      />
                    </div>

                    <div className="sm-col sm-col-6 md-col-6 o7-r o7-b">
                      <input
                        type="text"
                        className="input"
                        placeholder="Postcode"
                        name="postcode"
                        value={postCode}
                        onChange={handleFieldChange('postCode')}
                        required
                      />
                    </div>

                    <div className="sm-col sm-col-6 md-col-6 o7-r o7-b">
                      <input
                        type="text"
                        className="input"
                        placeholder="State/Territory"
                        name="state"
                        value={territory}
                        onChange={handleFieldChange('territory')}
                        required
                      />
                    </div>

                    <div className="sm-col sm-col-6 md-col-6 o7-r o7-b">
                      <input
                        type="text"
                        className="input"
                        placeholder="City"
                        name="city"
                        value={city}
                        onChange={handleFieldChange('city')}
                        required
                      />
                    </div>

                    <CountrySelector
                      containerClassNames="sm-col sm-col-6 md-col-6 o7-r o7-b"
                      placeholder="What country do you live in?"
                      classNames="input"
                      onChangeFunction={handleFieldChange}
                      value={countryAddress}
                    />
                    <div>
                      {job.displayCampusSelect && (
                        <UniversitySelector
                          placeholder="Chose site of desired position"
                          containerClassNames="sm-col sm-col-6 md-col-6 o7-r o7-b js-campus-select"
                        />
                      )}
                    </div>

                    <div className="sm-col sm-col-6 md-col-6 o7-r o7-b">
                      <select
                        id="referral-source"
                        name="referral-source"
                        className="input select-inactive"
                        defaultValue=""
                        required
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
                      </select>
                    </div>

                    <div className="sm-col sm-col-12 md-col-12 o7-r o7-b js-message-question-div">
                      {job.messageQuestion && (
                        <textarea
                          className="input js-message-question"
                          placeholder={job.messageQuestion}
                          name="message-question"
                        />
                      )}
                    </div>

                    <div className="sm-col sm-col-12 md-col-12 o7-r o7-b js-video-link">
                      {job.isThereVideoLink && (
                        <input
                          type="text"
                          className="input"
                          placeholder="Link us a video explanation(www.youtube.com/12356)"
                          name="video-link"
                        />
                      )}
                    </div>

                    {/* <!-- Next Steps Section --> */}
                    <div className="clearfix my3 sm-col sm-col-12 md-col-12 js-job-documents">
                      <h4 className="feature-font-family regular f-15 pb2">
                        Provide Supporting Documents
                      </h4>
                      <p className="f-14 light pb2">
                        We need the below documents to proceed with your
                        application.
                      </p>

                      <div className="flex flex-column items-start job-documents js-job-document-container">
                        <script
                          type="text/template"
                          className="js-job-document"
                        >
                          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                          <label>
                            <div
                              className="upload-field mb2"
                              data-api-key={
                                process.env.REACT_APP_FILE_UPLOADER_API_KEY
                              }
                            />
                          </label>
                        </script>
                      </div>
                    </div>
                    <div>
                      {job.country
                        .toString()
                        .toLowerCase()
                        .indexOf('australia') > -1 && (
                        <div className="sm-col sm-col-12 md-col-12 f-14 pt1 pb1 flex items-center custom-checkbox custom-checkbox--default">
                          <input type="hidden" name="indigenous" value="no" />
                          <input
                            id="indigenous"
                            type="checkbox"
                            className="hide"
                            name="indigenous"
                            value="yes"
                          />
                          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                          <label htmlFor="indigenous">
                            I identify as an Aboriginal and/or Torres Strait
                            Islander person.
                          </label>
                        </div>
                      )}
                    </div>

                    <div className="sm-col sm-col-12 md-col-12 f-14 pt1 pb3 flex items-center custom-checkbox custom-checkbox--default">
                      <input
                        type="hidden"
                        name="be-an-aime-friend"
                        value="no"
                      />
                      <input
                        id="aime-friend"
                        type="checkbox"
                        className="hide"
                        name="be-an-aime-friend"
                        value="yes"
                      />
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <label htmlFor="aime-friend">
                        Become an AIME Friend. Recieve updates about AIME and
                        help us tackle inequality.
                      </label>
                    </div>

                    <div className="sm-col sm-col-12 md-col-12">
                      <input
                        type="submit"
                        className="submit submit-button bold bg-purple mt3 mb4"
                        value="Submit Application"
                      />
                    </div>
                  </form>
                </div>
              )}
            </div>

            <Anchor
              to="/positions#opportunity-list"
              className="article-tile-link basic-btn italic"
            >
              <i className="material-icons">keyboard_backspace</i>
                Back to
                Opportunity List
            </Anchor>
          </div>
        </div>
      </Layout>
    );
  }
  Router.push({
    pathname: '/positions',
    query: {
      redirected,
      redirectJobTitle,
    },
  });
  return null;
};

PositionsEntry.getInitialProps = async ({ query }) => ({
  positionId: query.positionId,
  jobCategory: query.jobCategory,
});

PositionsEntry.propTypes = {
  positionId: PropTypes.string,
  jobCategory: PropTypes.string,
};

PositionsEntry.defaultProps = {
  positionId: '',
  jobCategory: '',
};

export default PositionsEntry;
