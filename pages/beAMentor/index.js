import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import Layout from '../../hocs/basicLayout';
import scrollToComponent from '../../utils/scrollToComponent';
import { uploadMentorEOI, getUniversities } from '../../services/portalApi';
import bugsnagClient from '../../utils/bugsnag';
import { getAllCountries, detectCountry } from '../../utils/country';
import {
  getCountriesAccordingToAimeProgram,
  getDataOfUniversity,
} from '../../utils/expresionOfInterest';
import COUNTRY_CODES from '../../utils/countryCodes';
import './beAMentor.module.scss';

const Loading = dynamic(() => import(/* webpackChunkName 'Loading' */ 'aime-blueprint/lib/components/loading'));
const UniversityLinks = dynamic(() => import(/* webpackChunkName 'UniversityLinks' */ './universityLinks'));
const BeAMentorForm = dynamic(() => import(/* webpackChunkName 'BeAMentorForm' */ './beAMentorForm'));
const WelcomeBox = dynamic(() => import(/* webpackChunkName 'WelcomeBox' */ './welcomeBox'));
const HeroBanner = dynamic(() => import(/* webpackChunkName 'HeroBanner' */ './heroBanner'));
const YearHeader = dynamic(() => import(/* webpackChunkName 'YearHeader' */ './yearHeader'));

const BeAMentor = () => {
  const [state, setState] = useState({
    universitySelected: [],
    aimeFriend: false,
    universityOptions: [],
    returningMentor: false,
    universityIsOutsideAIME: false,
    universityOutsideAIME: '',
    countrySelected: '',
    loading: false,
    countryDetected: '',
    phoneCountrySelected: '',
    countriesWithAimeProgram: [],
    countries: getAllCountries()
      .map((country) => ({
        value: country.code,
        label: country.name,
      })),
  });
  const sectionRefs = {};

  const countrySelectedIsInsideAIMEProgram = (countrySelected) => (
    state.countriesWithAimeProgram
      && state.countriesWithAimeProgram.length > 0
      && state.countriesWithAimeProgram.indexOf(countrySelected) > -1
  );

  const setCountry = (countryJson) => {
    if (state.countries.some((item) => (item.value === countryJson.countryCode))) {
      setState({
        ...state,
        countrySelected: countryJson.countryCode,
        countryNameSelected: countryJson.country,
        countryDetected: countryJson.countryCode.toLowerCase(),
        universityIsOutsideAIME: !countrySelectedIsInsideAIMEProgram(countryJson.countryCode),
        phoneCountrySelected: COUNTRY_CODES.find(
          (country) => country.code === countryJson.countryCode,
        ).dial_code,
      });
    }
  };

  const setCountriesAndUniversities = async (universityOptions) => {
    const countriesObject = await getCountriesAccordingToAimeProgram(universityOptions);
    setState({
      ...state,
      universityOptions,
      countries: countriesObject.countriesForState,
      countriesWithAimeProgram: countriesObject.countriesWithAimeProgram,
    }, () => {
      let universityId = null;
      if (typeof window !== 'undefined') {
        universityId = Router.query.universityId;
      }

      if (universityId) {
        const {
          universityValue,
          countrySelected,
          countryName,
          countryCode,
        } = getDataOfUniversity(
          state.universityOptions,
          universityId,
        );

        setState({
          ...state,
          universitySelected: [universityValue],
          universityIsOutsideAIME: false,
          countrySelected,
          countryNameSelected: countryName,
          phoneCountrySelected: COUNTRY_CODES.find((country) => (
            country.code === countryCode
          )).dial_code,
          countryDetected: countryCode.toLowerCase(),
        });
      } else {
        // If it doesn't have to get the country from the university
        // URL it detects the country and set it
        detectCountry(setCountry);
      }
    });
  };


  const fetchUniversities = async () => {
    const universities = await getUniversities();
    const universityOptions = universities
      .filter((university) => university.eoi !== null && university.eoi !== undefined)
      .map((university) => {
        const countryObject = state.countries
          .filter((country) => country.label === university.country);
        let universityCountry = '';
        if (countryObject.length) {
          universityCountry = countryObject[0].value;
        }
        return {
          value: university.eoi,
          label: university.name,
          country: universityCountry,
          reportingName: university.reportingName && university.reportingName.toLowerCase(),
        };
      });
    setCountriesAndUniversities(universityOptions);
  };

  useEffect(() => {
    fetchUniversities();
  }, []);

  const scrollToHoodedHustle = () => {
    scrollToComponent(sectionRefs.challenge);
  };

  const handleScrollToHoodedHustle = (locationHash) => {
    if (locationHash === '#challenge') scrollToHoodedHustle();
  };

  let pathname = null;
  if (typeof window !== 'undefined') {
    pathname = Router.asPath.split('#');
  }
  useEffect(() => {
    handleScrollToHoodedHustle(pathname && pathname.length > 1 ? pathname[1] : '');
  }, [pathname]);

  const handleUniversityChange = (propertyValue) => {
    if (propertyValue === 'I can’t find my university/college here') {
      setState({
        ...state,
        universitySelected: [],
        universityIsOutsideAIME: true,
      });
    } else {
      const universitySelected = state.universityOptions.filter((university) => (
        university.value === propertyValue
      ));
      const countrySelected = universitySelected[0].country;
      setState({
        ...state,
        universitySelected: [propertyValue],
        universityIsOutsideAIME: false,
        countrySelected,
      });
      // Update the URL when the user selects the university without changing the components state
      Router.push(
        '/beAMentor?page2=true',
        `/be-a-mentor/${universitySelected[0].reportingName.toLowerCase()}?page2=true`,
        { shallow: true },
      );
    }
  };

  const handleFieldChange = (propertyName, propertyValue) => {
    if (propertyName === 'universitySelected') {
      handleUniversityChange(propertyValue);
      return;
    }
    if (propertyName === 'countrySelected') {
      setState({
        ...state,
        [propertyName]: propertyValue,
        countryNameSelected: state.countries
          .find((country) => country.value === propertyValue).label,
        universityIsOutsideAIME: !countrySelectedIsInsideAIMEProgram(propertyValue),
        universitySelected: '',
      });
      return;
    }
    setState({
      ...state,
      [propertyName]: propertyValue,
    });
  };

  const handleReturningMentorChange = (_propertyName, propertyValue) => {
    setState({
      ...state,
      returningMentor: propertyValue === 'returningMentor',
    });
  };

  const handlePhoneCountrySelected = () => {
    if (typeof window !== 'undefined') {
      const phoneCountrySelected = document.getElementsByClassName('flag-container')[0].firstElementChild.title;
      if (phoneCountrySelected) {
        const phoneArea = phoneCountrySelected.split('+') ? `+${phoneCountrySelected.split('+')[1]}` : '';
        setState({
          ...state,
          phoneCountrySelected: phoneArea,
        });
        return phoneArea;
      }
      return '';
    }
    return '';
  };

  const submitData = async (formEl) => {
    // form validation
    if (formEl && !formEl.checkValidity()) return;

    setState({
      ...state,
      submitClicked: true,
    });
    if (
      (!state.universitySelected[0] && !state.universityIsOutsideAIME)
      || !state.countrySelected
    ) {
      return;
    }
    const objectToSend = { ...state };
    if (!state.universityIsOutsideAIME) objectToSend.universityOutsideAIME = '';

    objectToSend.countrySelected = state.countryNameSelected;
    if (!state.phoneCountrySelected) {
      objectToSend.phoneCountrySelected = handlePhoneCountrySelected();
    }
    setState({
      ...state,
      loading: true,
    });
    const response = await uploadMentorEOI(objectToSend);
    setState({
      ...state,
      loading: false,
    });
    if (response && response.data === 'OK') {
      Router.push({
        pathname: '/thanks',
        query: {
          messages: {
            thankMessage: `
              Yeah! Thanks for filling out our little form!
              Your local AIME people will make contact with you really soon
              `,
          },
        },
      });
    } else {
      const {
        firstName,
        lastName,
        email,
        phone,
      } = state;
      bugsnagClient.notify(new Error('Error saving the mentors EOI', {
        context: {
          firstName, lastName, email, phone, response,
        },
      }), {
        beforeSend: (report) => {
          /* eslint no-param-reassign: "off" */
          report.severity = 'warning';
          report.groupingHash = `Error saving the EOI: ${Router.pathname}`;
          report.user = {
            name: `${firstName} ${lastName}`,
            eoiEmail: email,
            eoiPhoneContact: phone,
          };
          /* eslint no-param-reassign: "error" */
        },
      });
    }
  };

  return (
    <Layout>
      <div className="be-a-mentor--box">
        <HeroBanner />
        <section className="full-width-wrap">
          <div className="lg-wrap mx-auto">
            <div className="eoi-intro-section">
              <YearHeader />
              <WelcomeBox />
              <BeAMentorForm
                handleFieldChange={handleFieldChange}
                handleReturningMentorChange={handleReturningMentorChange}
                submitData={submitData}
                countrySelectedIsInsideAIMEProgram={countrySelectedIsInsideAIMEProgram}
                {...state}
              />
            </div>
          </div>
        </section>
        <Loading loading={state.loading} theme={process.env.REACT_APP_THEME} />
        <UniversityLinks options={state.universityOptions} />
      </div>
    </Layout>
  );
};

export default BeAMentor;
