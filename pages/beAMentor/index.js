import React, { PureComponent } from 'react';
import Router from 'next/router';
import Loading from 'aime-blueprint/lib/components/loading';
import Checkbox from 'aime-blueprint/lib/components/checkbox';
import RadioButton from 'aime-blueprint/lib/components/radioButton';
import Select from 'aime-blueprint/lib/components/select';
import UniversitySelector from '../../components/universitySelectorWithAutoComplete';
import withLayout from '../../hocs/basicLayout';
import Input from '../../components/commonElements/input';
// import PhoneInput from '../../components/commonElements/PhoneInput';
import VideoButton from '../../components/videoButton';
import { uploadMentorEOI, getUniversities } from '../../services/portalApi';
import bugsnagClient from '../../utils/bugsnag';
import { getAllCountries, detectCountry } from '../../utils/country';
import {
  getCountriesAccordingToAimeProgram,
  getCountryGroupOptions,
  getDataOfUniversity,
} from '../../utils/expresionOfInterest';
import { COUNTRIES_WITH_AIME_COMING_SOON } from '../../constants';
import COUNTRY_CODES from '../../utils/countryCodes';
import './beAMentor.scss';

const radioButtonsOptions = [
  {
    value: 'notReturningMentor',
    text: 'Yes this will be my first year as an AIME mentor and I can’t flippin’ wait!',
  },
  {
    value: 'returningMentor',
    text:
      'I’ve mentored with AIME before and will register with the same email I used then. I also can’t flippin’ wait!',
  },
];

const defaultUniversityOption = {
  value: 'I can’t find my university/college here',
  label: 'I can’t find my university/college here',
};

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

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

class BeAMentor extends PureComponent {
  constructor(props) {
    super(props);

    const countries = getAllCountries()
      .map((country) => ({
        value: country.code,
        label: country.name,
      }));

    this.state = {
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
      countries,
    };
    this.sectionRefs = {};
  }

  componentDidMount() {
    getUniversities()
      .then((universities) => {
        const universityOptions = universities
          .filter((university) => university.eoi !== null && university.eoi !== undefined)
          .map((university) => {
            const { countries } = this.state;
            const countryObject = countries
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
        this.setCountriesAndUniversities(universityOptions);
      });
  }

  // componentWillReceiveProps() {
  //   const pathname = Router.asPath.split('#');
  //   this.handleScrollToHoodedHustle(pathname && pathname.length > 1 ? pathname[1] : '');
  // }

  setCountriesAndUniversities = async (universityOptions) => {
    const countriesObject = await getCountriesAccordingToAimeProgram(universityOptions);
    this.setState({
      universityOptions,
      countries: countriesObject.countriesForState,
      countriesWithAimeProgram: countriesObject.countriesWithAimeProgram,
    }, () => {
      const { universityOptions: universityOptionsState } = this.state;
      const { universityId } = Router.query;
      if (universityId) {
        const {
          universityValue,
          countrySelected,
          countryName,
          countryCode,
        } = getDataOfUniversity(
          universityOptionsState,
          universityId,
        );

        this.setState({
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
        detectCountry(this.setCountry);
      }
    });
  }

  setCountry = (countryJson) => {
    const { countries } = this.state;
    if (countries.some((item) => (item.value === countryJson.countryCode))) {
      this.setState({
        countrySelected: countryJson.countryCode,
        countryNameSelected: countryJson.country,
        countryDetected: countryJson.countryCode.toLowerCase(),
        universityIsOutsideAIME: !this.countrySelectedIsInsideAIMEProgram(countryJson.countryCode),
        phoneCountrySelected: COUNTRY_CODES.find(
          (country) => country.code === countryJson.countryCode,
        ).dial_code,
      });
    }
  };

  handleScrollToHoodedHustle = (locationHash) => {
    if (locationHash === '#challenge') {
      this.scrollToHoodedHustle();
    }
  };

  scrollToHoodedHustle = () => {
    this.sectionRefs.challenge.scrollIntoView({ block: 'top' });
  };

  handleFieldChange = (propertyName, propertyValue) => {
    if (propertyName === 'universitySelected') {
      this.handleUniversityChange(propertyValue);
      return;
    }
    if (propertyName === 'countrySelected') {
      this.setState((prevState) => ({
        [propertyName]: propertyValue,
        countryNameSelected: prevState.countries
          .find((country) => country.value === propertyValue).label,
        universityIsOutsideAIME: !this.countrySelectedIsInsideAIMEProgram(propertyValue),
        universitySelected: '',
      }));
      return;
    }
    this.setState({ [propertyName]: propertyValue });
  }

  handleUniversityChange = (propertyValue) => {
    if (propertyValue === 'I can’t find my university/college here') {
      this.setState({ universitySelected: [], universityIsOutsideAIME: true });
    } else {
      const { universityOptions } = this.state;
      const universitySelected = universityOptions.filter((university) => (
        university.value === propertyValue
      ));
      const countrySelected = universitySelected[0].country;
      this.setState({
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
  }

  handleReturningMentorChange = (_propertyName, propertyValue) => {
    this.setState({ returningMentor: propertyValue === 'returningMentor' });
  }

  handlePhoneCountrySelected = () => {
    const phoneCountrySelected = document.getElementsByClassName('flag-container')[0].firstElementChild.title;
    if (phoneCountrySelected) {
      const phoneArea = phoneCountrySelected.split('+') ? `+${phoneCountrySelected.split('+')[1]}` : '';
      this.setState({ phoneCountrySelected: phoneArea });
      return phoneArea;
    }
    return '';
  }

  submitData = (e) => {
    // form validation
    if (this.formEl && !this.formEl.checkValidity()) return;

    e.preventDefault();
    const {
      universitySelected,
      countrySelected,
      universityIsOutsideAIME,
      countryNameSelected,
      phoneCountrySelected,
    } = this.state;
    this.setState({ submitClicked: true });
    if (
      (!universitySelected[0] && !universityIsOutsideAIME)
      || !countrySelected
    ) {
      return;
    }
    const objectToSend = { ...this.state };
    if (!universityIsOutsideAIME) {
      objectToSend.universityOutsideAIME = '';
    }

    objectToSend.countrySelected = countryNameSelected;
    if (!phoneCountrySelected) {
      objectToSend.phoneCountrySelected = this.handlePhoneCountrySelected();
    }
    this.setState({ loading: true }, () => {
      uploadMentorEOI(objectToSend)
        .then((response) => {
          this.setState({ loading: false });
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
            // this.props.history.push({
            //   pathname: '/thanks',
            //   messages: {
            //     thankMessage: `
            //       Yeah! Thanks for filling out our little form!
            //       Your local AIME people will make contact with you really soon
            //       `,
            //   },
            // });
          } else {
            const {
              firstName,
              lastName,
              email,
              phone,
            } = this.state;
            bugsnagClient.notify(new Error('Error saving the mentors EOI', {
              context: {
                firstName, lastName, email, phone, response,
              },
            }), {
              beforeSend: (report) => {
                /* eslint no-param-reassign: "off" */
                report.severity = 'warning';
                report.groupingHash = `Error saving the EOI: ${window.location.href}`;
                report.user = {
                  name: `${firstName} ${lastName}`,
                  eoiEmail: email,
                  eoiPhoneContact: phone,
                };
                /* eslint no-param-reassign: "error" */
              },
            });
          }
        });
    });
  }

  countrySelectedIsInsideAIMEProgram = (countrySelected) => {
    const { countriesWithAimeProgram } = this.state;
    return countriesWithAimeProgram
      && countriesWithAimeProgram.length > 0
      && countriesWithAimeProgram.indexOf(countrySelected) > -1;
  }

  getCountryNameWithCode = (countryCode) => {
    const countryFound = COUNTRY_CODES
      .find((country) => country.code === countryCode);
    if (countryFound) return countryFound.name;
    return 'your country';
  }

  render() {
    const {
      universitySelected,
      universityIsOutsideAIME,
      universityOutsideAIME,
      firstName,
      lastName,
      email,
      // phone,
      submitClicked,
      aimeFriend,
      countrySelected,
      universityOptions,
      returningMentor,
      loading,
      countryDetected,
      countries,
      countriesWithAimeProgram,
    } = this.state;
    const imgStyle = {
      backgroundImage: `url('${ASSETS_URL}/assets/images/banner/Bianca@2x-min.jpg')`,
      backgroundSize: 'cover',
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
      <div className="be-a-mentor--box">
        <div className="hero-banner--default hero-banner--history full-width-wrap" style={imgStyle}>
          <div className="flex flex-wrap items-center w100 h100">
            <div className="banner-wrapper subpage-banner center">
              <h1>
                <span className="pre-text">You can be a</span>
                <span className="highlight-text">
                  <em className="border-gradient">
                    Mentor
                    <br />
                  </em>
                </span>
                <p className="mt2 pt1 col-8 block mx-auto left-align">
                  AIME is always looking for exceptional humans to step up and be the change
                </p>
              </h1>
            </div>
          </div>
        </div>
        <section className="full-width-wrap">
          <div className="scratch-overlay-wrapper top-scratch bg-white" />
          <div className="lg-wrap mx-auto">
            <div className="eoi-intro-section">
              <div className="year-header sm-col sm-col-12 clearfix center">
                <h4 className="post-text mt1">
                  {`Bring on ${new Date().getFullYear()},`}
                  <br />
                  <span className="gradient-text highlight-text highlight-text__med">
                    Change is
                    {' '}
                    <br />
                    gonna come!
                  </span>
                </h4>
              </div>
              <div className="welcome-box">
                <div className="welcome-text-box left">
                  <h4 className="post-text f-24 feature-font-family c-brand-tertiary left-align mb2">
                    Welcome to the world of mentoring.
                  </h4>
                  <p>
                    {`
                    We believe a mentor can change someone’s life through a permanent shift in mindset.
                  `}
                  </p>
                  <p>
                    {`
                    We want to ignite the flame within university/college students across the planet to rise up as mentors for marginalised youth and lead a revolution for them to rise up out of inequality. We've been working with Aboriginal and Torres Strait islander kids in Australia for the past 15 years and in 2019 we're working across Australia, Uganda, South Africa, Nigeria and the United States. Soon to be launching in Rwanda and Zimbabwe too. We understand that what we are fighting for is a global issue, and it takes a united effort to defeat systematic oppression. We are aware that these issues don’t exist just in our backyard, but all around the globe.
                  `}
                  </p>
                  <p>
                    {`
                    This year we'll bring change like you've never seen.
                  `}
                  </p>
                  <p>
                    <strong>
                      {`
                        If it's not going to be you then who? If it's not going to be now then when?
                      `}
                    </strong>
                    {`
                      Express your interest now, applications are open!
                    `}
                  </p>
                </div>
                <div className="video-wrapper welcome-video">
                  <VideoButton video="https://player.vimeo.com/external/326229385.m3u8?s=ccd4312c26f7981d8bcac17bb0bfd10584cfc150" />
                  <div className="video-banner flex block rounded">
                    <div className="video-banner-overlay center">
                      <img
                        alt=""
                        className="center mx-auto mt2"
                        style={{ width: '70px' }}
                        src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                      />
                      <h3 className="c-white">So you wanna be an AIME Mentor?</h3>
                      <p className="c-white">{'Here is what it\'s all about...'}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-container mx-auto px3">
                <form className="clearfix" ref={(form) => { this.formEl = form; }}>
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
                        onChangeFunction={this.handleFieldChange}
                        error={submitClicked && !countrySelected}
                        value={countrySelected}
                        backgroundColor="transparent"
                        borderColor="transparent"
                        color="#DA0DFF"
                        options={countryGroupOptions}
                        styles={STYLES_FOR_COUNTRY_SELECTION}
                      />
                    </h4>
                  </div>
                  {this.countrySelectedIsInsideAIMEProgram(countrySelected) && (
                    <div>
                      <div className="relative f-24 sml-rotate rotate-text inline-block mt1 off-center">
                        <span role="img" aria-label="thumbs up">
                          👍🏽
                        </span>
                        <span role="img" aria-label="ok">
                          👌🏾
                        </span>
                      </div>
                      <h4 className="form-question-heading">
                        Cool cool cool. Is this going to be your first time mentoring with AIME?
                      </h4>
                      <RadioButton
                        elementClassName="custom-radio custom-radio--default f-14"
                        onChangeFunction={this.handleReturningMentorChange}
                        name="returningMentor"
                        options={radioButtonsOptions}
                        value={returningMentor ? 'returningMentor' : 'notReturningMentor'}
                      />
                    </div>
                  )}
                  {!this.countrySelectedIsInsideAIMEProgram(countrySelected) && (
                    <div>
                      {COUNTRIES_WITH_AIME_COMING_SOON.indexOf(countrySelected) > -1 ? (
                        <p className="pt3">
                          {`AIME is going to be in ${this.getCountryNameWithCode(countrySelected)}
                              soon and we will need Mentors! We can't give you an exact date but fill in your details and we will be in touch :)`}
                        </p>
                      ) : (
                        <p className="pt3">
                          {`AIME isn’t located in ${this.getCountryNameWithCode(countrySelected)}
                              yet but we sure would love to be! Fill in your details below and we'll
                              take it from there!`}
                        </p>
                      )}
                    </div>
                  )}
                  {!returningMentor && (
                    <div className="mt2">
                      {universities.length > 1 && (
                        <div>
                          <UniversitySelector
                            placeholder="Start typing to search for university/college"
                            onChangeFunction={this.handleFieldChange}
                            name="universitySelected"
                            isClearable
                            error={submitClicked && !universitySelected[0]}
                            containerClassNames="sm-col sm-col-12 md-col-12 f-14 pt2"
                            universityOptions={universityOptions}
                            value={universitySelected[0] ? universitySelected[0] : null}
                            backgroundColor="#FFFF"
                            borderColor="#FFFF"
                            country={countrySelected}
                          />
                        </div>
                      )}
                      {(universityIsOutsideAIME || universities.length === 1) && (
                        <div>
                          <Input
                            type="text"
                            elementClassName="sm-col sm-col-12 md-col-12 f-14 pt2 o7-b mt1"
                            placeholder="Type your university/college name"
                            name="universityOutsideAIME"
                            value={universityOutsideAIME}
                            onChangeFunction={this.handleFieldChange}
                          />
                        </div>
                      )}
                      <Input
                        type="text"
                        elementClassName="sm-col sm-col-6 md-col-6 o7-r o7-b mt1"
                        placeholder="First Name"
                        name="firstName"
                        value={firstName}
                        onChangeFunction={this.handleFieldChange}
                        required
                      />
                      <Input
                        type="text"
                        elementClassName="sm-col sm-col-6 md-col-6 o7-b mt1"
                        placeholder="Last Name"
                        name="lastName"
                        value={lastName}
                        onChangeFunction={this.handleFieldChange}
                        required
                      />
                      <Input
                        type="text"
                        elementClassName="sm-col sm-col-6 md-col-6 o7-r o7-b"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChangeFunction={this.handleFieldChange}
                        required
                      />
                      <div>
                        {(countryDetected || countrySelected) && (
                          <div>
                            {/* <PhoneInput
                              elementClassName="sm-col sm-col-6 md-col-6 o7-b"
                              onChangeFunction={this.handleFieldChange}
                              onCountrySelected={this.handlePhoneCountrySelected}
                              name="phone"
                              value={phone}
                              defaultCountry={countryDetected}
                              currentSite={currentSite}
                            /> */}
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="col-12 flex">
                          <Checkbox
                            elementClassName="sm-col sm-col-12 md-col-12 f-14 pt2 flex items-center custom-checkbox custom-checkbox--default"
                            onChangeFunction={this.handleFieldChange}
                            placeholder="Become an AIME Friend. Receive updates about AIME and help us tackle inequality."
                            name="aimeFriend"
                            customId="aimeFriend"
                            value={!!aimeFriend}
                          />
                        </div>
                        <div className="center sm-col sm-col-12 md-col-12 pr1 pb1 mt4">
                          <button type="submit" className="submit" onClick={this.submitData}>
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {returningMentor && (
                    <div className="mt4">
                      <h4 className="form-question-heading mt4">
                        Nice one! Thanks for walking with us!
                      </h4>
                      <p>
                        {`Since you've mentored with AIME in the past, we should have your details on
                        our systems already. When you click the button below, you'll be taken to a
                        login screen for our AIME Portal.`}
                        {' '}
                        <strong>Click on the Sign Up tab</strong>
                        {' '}
                        and register with your email you gave us last year.
                        {' '}
                      </p>
                      <p>
                        <span className="text-highlight purple">
                          <strong>
                            <em>
                              {`Remember! When signing up, click on the Sign Up tab then sign up with
                              the same email you used last year and we'll send you an email to kick
                              off your application right.`}
                            </em>
                          </strong>
                          &nbsp; &nbsp;
                          <span role="img" aria-label="wahoo">
                            ✊🏽
                          </span>
                        </span>
                      </p>
                      <div className="center sm-col sm-col-12 md-col-12 pr1 pb1">
                        <a
                          href="https://portal.aimementoring.com/mentors/apply"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="submit"
                        >
                          Register
                        </a>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
        <Loading loading={loading} />
        <div className="display-none">
          {universityOptions && (
            <div>
              {universityOptions.map((university) => (
                <a
                  href={`/be-a-mentor/${university.reportingName}`}
                  key={`${university.reportingName}-${university.value}`}
                >
                  u
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

BeAMentor.propTypes = {

};

export default withLayout(BeAMentor);
