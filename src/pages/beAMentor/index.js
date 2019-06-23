import React, { PureComponent } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import UniversitySelector from '../../components/universitySelectorWithAutoComplete';
import Select from '../../components/commonElements/ReactSelect';
import Loading from '../../components/commonElements/Loading';
import Input from '../../components/commonElements/Input';
import PhoneInput from '../../components/commonElements/PhoneInput';
import VideoButton from '../../components/videoButton';
import CustomCheckbox from '../../components/commonElements/CustomCheckbox';
import RadioButtons from '../../components/commonElements/RadioButton';

import { uploadMentorEOI, getUniversities } from '../../services/portalApi';
import {
  getAssetsBaseUrl,
} from '../../services/craftAPI';
import {
  getAllCountries,
  getDefaultCountry,
  getMyCountry,
} from '../../utils/country';
import bugsnagClient from '../../utils/bugsnag';
import {
  getCountriesAccordingToAimeProgram,
  getDataOfUniversity,
} from '../../utils/expresionOfInterest';
import {
  COUNTRIES_WITH_AIME_COMING_SOON,
} from '../../constants';
import { COUNTRY_CODES } from '../../utils/countryCodes';
import './index.scss';


export default class BeAMentor extends PureComponent {
  constructor(props) {
    super(props);

    const countries = getAllCountries()
      .map(country => {
        return {
          value: country.code,
          label: country.name,
        };
      });

    this.state = {
      universitySelected: [],
      aimeFriend: false,
      universityOptions: [],
      returningMentor: false,
      universityIsOutsideAIME: false,
      universityOutsideAIME: '',
      countrySelected: '',
      assetsUrl: '',
      loading: false,
      countryDetected: '',
      phoneCountrySelected: '',
      countriesWithAimeProgram: [],
      countries,
    };
    this.sectionRefs = {};
  }

  componentDidMount() {
    getAssetsBaseUrl().then(assetsUrl => this.setState({ assetsUrl }));
    getUniversities()
      .then((universities) => {
        const universityOptions = universities
          .filter(university => university.eoi !== null && university.eoi !== undefined)
          .map(university => {
            const countryObject = this.state.countries
              .filter(country => country.label === university.country);
            let universityCountry = '';
            if (countryObject.length) {
              universityCountry = countryObject[0].value;
            }
            return {
              value: university.eoi,
              label: university.name,
              country: universityCountry,
              reportingName: university.reportingName && university.reportingName.toLowerCase(),
            }
          });
        this.setCountriesAndUniversities(universityOptions);
      });
  }

  componentWillReceiveProps(nextProps) {
    this.handleScrollToHoodedHustle(nextProps.location.hash);
  }

  setCountriesAndUniversities = async (universityOptions) => {
    const countriesObject =
      await getCountriesAccordingToAimeProgram(universityOptions);
    this.setState({
      universityOptions,
      countries: countriesObject.countriesForState,
      countriesWithAimeProgram: countriesObject.countriesWithAimeProgram,
    }, () => {
      if (this.props.match.params.universityId) {
        const {
          universityValue,
          countrySelected,
          countryName,
          countryCode,
        } = getDataOfUniversity(
          this.state.universityOptions,
          this.props.match.params.universityId);

        this.setState({
          universitySelected: [universityValue],
          universityIsOutsideAIME: false,
          zipcode: '',
          countrySelected,
          countryNameSelected: countryName,
          phoneCountrySelected: COUNTRY_CODES.find(country => (
            country.code === countryCode
          )).dial_code,
          countryDetected: countryCode.toLowerCase(),
        });
      } else {
        // If it doesn't have to get the country from the university
        // URL it detects the country and set it
        this.detectCountry(this.setCountry);
      }
    });
  }

  // Detect the current country of the user
  detectCountry = () => {
    getMyCountry()
      .then(countryJson => {
        if (this.state.countries.some(item => (
          item.value === countryJson.countryCode
        ))) {
          this.setCountry(countryJson);
        }
      })
      .catch(error => {
        this.setCountry(getDefaultCountry());
        // Catching the error manually because of build issues.
        bugsnagClient.notify(new Error(`Error getting country: ${error}`));
      });
  }

  setCountry = (countryJson) => {
    this.setState({
      countrySelected: countryJson.countryCode,
      countryNameSelected: countryJson.country,
      countryDetected: countryJson.countryCode.toLowerCase(),
      universityIsOutsideAIME: !this.countrySelectedIsInsideAIMEProgram(countryJson.countryCode),
      phoneCountrySelected: COUNTRY_CODES.find(country => (
        country.code === countryJson.countryCode
      )).dial_code,
    });
  }


  handleScrollToHoodedHustle = (locationHash) => {
    if (locationHash === '#challenge') {
      this.scrollToHoodedHustle();
    }
  }

  scrollToHoodedHustle = () => {
    scrollToComponent(this.sectionRefs.challenge, { offset: -110, align: 'top' });
  }

  getStylesForCountrySelection = () => {
    return {
      control: {
        background: 'transparent',
      },
      input: {
        color: "#DA0DFF",
      },
      singleValue: {
        color: "#DA0DFF",
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
        color: "#DA0DFF",
        zIndex: 10000,
      },
      menuList: {
        zIndex: 10000,
        padding: 0,
      },
    }
  }

  handleFieldChange = (propertyName, propertyValue) => {
    if (propertyName === 'universitySelected') {
      this.handleUniversityChange(propertyValue);
      return;
    }
    if (propertyName === 'countrySelected') {
      this.setState(prevState => ({
        [propertyName]: propertyValue,
        countryNameSelected: prevState.countries.find(country => country.value === propertyValue).label,
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
      const universitySelected =
        this.state.universityOptions.filter(university => (
          university.value === propertyValue
        ));
      const countrySelected = universitySelected[0].country;
      this.setState({
        universitySelected: [propertyValue],
        universityIsOutsideAIME: false,
        zipcode: '',
        countrySelected,
      });
      // Update the URL when the user selects the university without changing the components state
      window.history.pushState(
        'page2', 'Title', `/be-a-mentor/${universitySelected[0]
          .reportingName.toLowerCase()}`);
    }
  }

  handleReturningMentorChange = (propertyName, propertyValue) => {
    this.setState({ returningMentor: propertyValue === 'returningMentor' });
  }

  handlePhoneCountrySelected = () => {
    const phoneCountrySelected =
      document.getElementsByClassName("flag-container")[0]
        .firstElementChild.title;
    if (phoneCountrySelected) {
      const phoneArea = phoneCountrySelected.split("+") ? `+${phoneCountrySelected.split("+")[1]}` : '';
      this.setState({ phoneCountrySelected: phoneArea });
      return phoneArea;
    }
    return '';
  }

  submitData = (e) => {
    e.preventDefault();
    const {
      universitySelected,
      countrySelected,
      universityIsOutsideAIME,
    } = this.state;
    this.setState({ submitClicked: true });
    if ((!universitySelected[0] &&
      !universityIsOutsideAIME) || !countrySelected) {
      return;
    }
    // form validation
    if (this.formEl.checkValidity() === false) {
      return;
    }
    const objectToSend = this.state;
    if (!this.state.universityIsOutsideAIME) {
      objectToSend.universityOutsideAIME = '';
    }

    objectToSend.countrySelected = this.state.countryNameSelected;
    if (!this.state.phoneCountrySelected) {
      objectToSend.phoneCountrySelected = this.handlePhoneCountrySelected();
    }
    // objectToSend.phone = `${this.state.phoneCountrySelected} ${this.state.phone}`
    this.setState({ loading: true }, () => {
      uploadMentorEOI(objectToSend).then((response) => {
        this.setState({ loading: false });
        if (response.data === 'OK') {
          this.props.history.push({
            pathname: '/thanks',
            messages: {
              thankMessage: `
                Yeah! Thanks for filling out our little form!
                Your local AIME people will make contact with you really soon
                `,
            },
          });
          return;
        }
        throw new Error('Error saving the EOI');
      });
    })
  }

  countrySelectedIsInsideAIMEProgram = (countrySelected) => {
    const { countriesWithAimeProgram } = this.state;
    return (countriesWithAimeProgram && countriesWithAimeProgram.length > 0)
      && (countriesWithAimeProgram.indexOf(countrySelected) !== -1);
  }

  getCountryNameWithCode = (countryCode) => {
    const countryFound = COUNTRY_CODES
      .find(country => country.code === countryCode);
    if (countryFound) {
      return countryFound.name;
    }
    return 'your country';
  }

  // Group the countries for the country selector (in the list we sorted first 'coming soon'
  // then 'Countries with AIME' and after that 'Countries without AIME')
  getCountryGroupOptions = () => {
    const { countries, countriesWithAimeProgram } = this.state;
    const commingSoonLength = COUNTRIES_WITH_AIME_COMING_SOON.length;
    if (!countriesWithAimeProgram || !countriesWithAimeProgram.length) {
      return [];
    }
    const countriesWithAimeArrangement =
      commingSoonLength + countriesWithAimeProgram.length;
    return [
      {
        label: 'We are here!',
        options: [...countries.slice(commingSoonLength, countriesWithAimeArrangement)
          .map(country => (
            { ...country, group: 'AIME in country' }))],
        value: '',
      },
      {
        label: 'Coming soon :)',
        options: [...countries.slice(0, commingSoonLength).map(country => (
          { ...country, group: 'AIME in country' }))],
        value: '',
      },
      {
        label: 'One day...',
        options: [...countries.slice(countriesWithAimeArrangement, countries.length)
          .map(country => (
            { ...country, group: 'AIME in country' }
          ))],
        value: '',
      },
    ];
  }

  render() {
    const {
      universitySelected,
      universityIsOutsideAIME,
      universityOutsideAIME,
      name,
      lastName,
      email,
      phone,
      submitClicked,
      aimeFriend,
      countrySelected,
      universityOptions,
      returningMentor,
      assetsUrl,
      loading,
      countryDetected,
    } = this.state;
    const imgStyle = {
      backgroundImage: `url('https://d2ylaz7bdw65jx.cloudfront.net/assets/images/banner/Bianca@2x-min.jpg')`,
      backgroundSize: 'cover',
    };
    const universitiesWithCountry =
      universityOptions.filter(university => (
        !countrySelected || countrySelected === university.country
      ));
    const universities = [
      {
        value: 'I can’t find my university/college here',
        label: 'I can’t find my university/college here',
      },
      ...universitiesWithCountry,
    ];
    const radioButtonsOptions = [
      {
        value: 'notReturningMentor',
        text: 'Yes this will be my first year as an AIME mentor and I can’t flippin’ wait!',
      },
      {
        value: 'returningMentor',
        text: 'I’ve mentored with AIME before and will register with the same email I used then. I also can’t flippin’ wait!',
      },
    ];
    const countryGroupOptions = this.getCountryGroupOptions();

    return (
      <div className="be-a-mentor--box">
        <div
          className="hero-banner--default hero-banner--history full-width-wrap"
          style={imgStyle}>
          <div className="flex flex-wrap items-center w100 h100">
            <div className="banner-wrapper subpage-banner center">
              <h1>
                <span className="pre-text">You can be a</span>
                <span className="highlight-text">
                  <em className="border-gradient">
                    {'Mentor'}<br />
                  </em>
                </span>
                <p className="mt2 pt1 col-8 block mx-auto left-align">AIME is always looking for exceptional humans to step up and be the change</p>
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
                  {`Bring on ${(new Date()).getFullYear()},`}<br />
                  <span className="gradient-text highlight-text highlight-text__med">Change is <br />gonna come!</span>
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
                    We want to ignite the flame within university/college students across the planet to rise up as mentors for marginalised youth and lead a revolution for them to rise up out of inequality. We've been working with Aboriginal and Torres Strait islander kids in Australia for the past 15 years and in 2019 we're working across Uganda, South Africa, Australia, Nigeria and the United States. Soon to be launching in Rwanda and Zimbabwe too. We understand that what we are fighting for is a global issue, and it takes a united effort to defeat systematic oppression. We are aware that these issues don’t exist just in our backyard, but all around the globe.
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
                      Express your interest now, Applications are open!
                    `}
                  </p>
                </div>
                <div className="video-wrapper welcome-video">
                  <VideoButton
                    video="https://player.vimeo.com/external/326229385.m3u8?s=ccd4312c26f7981d8bcac17bb0bfd10584cfc150" />
                  <div
                    className="video-banner flex block rounded">

                    <div className="video-banner-overlay center">
                      <img alt="" className="center mx-auto mt2" style={{ width: '70px' }} src={`${assetsUrl}/assets/images/play-btn-white.svg`} />
                      <h3 className="c-white">So you wanna be an AIME Mentor?</h3>
                      <p className="c-white">Here is what it's all about...</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="form-container mx-auto px3">
                <form className="clearfix" ref={form => this.formEl = form}>
                  <input type="hidden" name="utf8" value="✓" />
                  <input type="hidden" name="submissionmessage" value="beamentor" />
                  <div className="sm-col sm-col-12 clearfix flex flex-column">
                    <h4 className="form-question-heading">
                      So you're interested in mentoring in
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
                        styles={this.getStylesForCountrySelection()}
                      />
                    </h4>
                  </div>
                  {this.countrySelectedIsInsideAIMEProgram(countrySelected) &&
                    <div>
                      <div className="relative f-30 sml-rotate rotate-text inline-block mt1">
                        <span role="img" aria-label="thumbs up">👍🏽</span>
                        <span role="img" aria-label="ok">👌🏾</span>
                      </div>
                      <h4 className="form-question-heading">
                        Cool cool cool. Is this going to be your first time as a legendary AIME mentor?
                      </h4>
                      <RadioButtons
                        elementClassName="custom-radio custom-radio--default f-14"
                        onChangeFunction={this.handleReturningMentorChange}
                        inputName="returningMentor"
                        options={radioButtonsOptions}
                        value={returningMentor ? 'returningMentor' : 'notReturningMentor'}
                      />
                    </div>
                  }
                  {!this.countrySelectedIsInsideAIMEProgram(countrySelected) &&
                    <div>
                      {COUNTRIES_WITH_AIME_COMING_SOON.indexOf(countrySelected) > -1
                        ?
                          <p className="pt3">
                            {`AIME is going to be in ${this.getCountryNameWithCode(countrySelected)}
                              soon and we will need Mentors! We can't give you an exact date but fill in your details and we will be in touch :)`}
                          </p>
                        :
                          <p className="pt3">
                            {`AIME isn’t located in ${this.getCountryNameWithCode(countrySelected)}
                              yet but we sure would love to be! Fill in your details below and we'll
                              take it from there!`}
                          </p>
                      }
                    </div>
                  }

                  {!returningMentor &&
                    <div className="mt2">
                      {universities.length > 1 &&
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
                      }

                      {(universityIsOutsideAIME || universities.length === 1) &&
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
                      }
                      <Input
                        type="text"
                        elementClassName="sm-col sm-col-6 md-col-6 o7-r o7-b mt1"
                        placeholder="First Name"
                        name="firstName"
                        value={name}
                        onChangeFunction={this.handleFieldChange}
                        required />
                      <Input
                        type="text"
                        elementClassName="sm-col sm-col-6 md-col-6 o7-b mt1"
                        placeholder="Last Name"
                        name="lastName"
                        value={lastName}
                        onChangeFunction={this.handleFieldChange}
                        required />
                      <Input
                        type="text"
                        elementClassName="sm-col sm-col-6 md-col-6 o7-r o7-b"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChangeFunction={this.handleFieldChange}
                        required />
                      <div>
                        {(countryDetected || countrySelected) &&
                          <div>
                            <PhoneInput
                              elementClassName="sm-col sm-col-6 md-col-6 o7-b"
                              onChangeFunction={this.handleFieldChange}
                              onCountrySelected={this.handlePhoneCountrySelected}
                              name="phone"
                              value={phone}
                              defaultCountry={countryDetected}
                              currentSite={this.props.currentSite} />
                          </div>
                        }
                      </div>
                      <div>
                        <div className="col-12 flex">
                          <CustomCheckbox
                            elementClassName="sm-col sm-col-12 md-col-12 f-14 pt2 flex items-center custom-checkbox custom-checkbox--default"
                            onChangeFunction={this.handleFieldChange}
                            labeltext="Become an AIME Friend. Receive updates about AIME and help us tackle inequality."
                            inputName="aimeFriend"
                            customId="aimeFriend"
                            value={!!aimeFriend} />
                        </div>
                        <div className="center sm-col sm-col-12 md-col-12 pr1 pb1 mt4">
                          <button type="submit" className="submit" onClick={this.submitData}>
                            Submit
                          </button>
                        </div>

                      </div>
                    </div>}

                  {returningMentor &&
                    <div className="mt4">
                      <h4 className="form-question-heading mt4">
                        Nice one! Thanks for walking with us!
                      </h4>
                      <p>With you by our side we can't possibly be beaten! </p>
                      <p>
                        <span className="text-highlight purple">
                          <strong><em>One by one we'll get it done!</em></strong>
                          &nbsp; &nbsp;
                          <span role="img" aria-label="wahoo">✊🏽</span>
                        </span>
                      </p>
                      <p>
                        Use the same email you used last year and we'll pre-fill the application to save you time
                      </p>
                      <div className="center sm-col sm-col-12 md-col-12 pr1 pb1">
                        <a
                          href="https://portal.aimementoring.com/mentors/apply"
                          target="_blank"
                          className="submit">
                          Register
                        </a>
                      </div>
                    </div>}

                </form>
              </div>

              {/* <div className="side-track-call-out">
                <div className="side-track-call-out-wrapper">
                  <div className="side-track-text">
                    <h3 className="mb2">Hey! Want to do more than just mentoring? Want to lead a mentoring program?</h3>
                    <p>If you think you have what it takes to lead a mentoring movement in your community, you should <a onClick={this.scrollToHoodedHustle} className="c-white"><strong>check out</strong></a> what it means to be a <strong>Hooded Scholar</strong></p>
                  </div>
                  <div className="absolute f-30 sml-rotate rotate-text inline-block emoji-wrap">
                    <span role="img" aria-label="point down" className="emoji">👇🏿</span>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </section>

        {/* <section className="section-studentChapter full-width-wrap bg-black pb4" id="challenge" ref={el => { this.sectionRefs.challenge = el }}>
          <div className="scratch-overlay-wrapper top-scratch bg-black" />

          <div className="hs-info-wrap mx-auto">
            <div className="hs-info-grid hs-info-grid--mentor-eoi py4">

              <div className="area-heading area-heading--mentor-eoi mx-auto pt2 pb4">
                <h1 className="c-white section-intro-heading">Are you a leader <strong>in the USA?</strong></h1>
                <span className="sm-col-3 block pt2 border-bottom b-brand-tertiary b-width-5" style={{ borderWidth: '5px' }}>&nbsp;</span>
              </div>

              <div className="area-info area-info--mentor-eoi mx-auto pt3">
                <div className="info-content-wrapper">
                  <h3 className="c-white info-content-heading mb3 pt1">We’re looking for <strong className="c-cmyk-blue">Hooded Scholar students</strong> from US universities and colleges as well as <strong className="c-cmyk-pink">leaders from US organisations</strong>.</h3>
                  <p className="c-white">
                    For the first time ever, AIME, the proven global leader in mentoring,
                    is offering the chance for <strong className="c-cmyk-pink">200 US College/University students</strong> to become "The Hooded Scholar" and <strong className="c-cmyk-yellow">lead a mentoring movement</strong> out of their campus to <strong className="c-cmyk-blue">lift kids out of inequality</strong>. With <strong>Feb 19th</strong> approaching quickly time is running out on this first Hooded Scholar opportunity. We've nearly filled all the positions available for students across the USA to win the chance to run an AIME student chapter on their campus.
                  </p>
                  <p className="c-white">
                    We’re also offering <strong className="c-cmyk-pink">165 seats on the plane</strong> to <strong className="c-cmyk-yellow">leaders and influencers from US organisations</strong>. We want those who walk the talk to help guide these young hustlers. Help us shape change together.
                    The impact you could have is priceless!
                  </p>
                  <p className="c-white">
                    The US is just the start, expect to hear more about Hooded Scholar opportunities in the future.
                  </p>
                  <div>

                    <a href="/hooded-scholar" className="secondary-btn my2">Apply to be a Hooded Scholar</a>
                    <a href="/seatontheplane/" className="secondary-btn mb2">Apply to be a lead mentor</a>
                  </div>
                </div>
              </div>
              <div className="video-wrapper intro-video">
                <VideoButton video="https://player.vimeo.com/external/291824681.m3u8?s=72b6495e46fda3de6fe84bd1a158fed3c311716c" />
                <div className="video-banner flex block rounded">
                  <div className="video-banner-overlay center c-white">
                    <img alt="" className="center mx-auto mt2" style={{ width: '70px' }} src={`${assetsUrl}/assets/images/play-btn-white.svg`} />
                    <h3>A message from Jack,</h3>
                    <p>CEO &amp; Founder of AIME</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section> */}
        <div>
          <Loading loading={loading} />
        </div>
        <div className="display-none">
          {universityOptions &&
            <div>
              {universityOptions.map(university => (
                <a
                  href={`/be-a-mentor/${university.reportingName}`}
                  key={`${university.reportingName}-${university.value}`}>
                  u
                </a>
              ))}
            </div>
          }
        </div>
      </div>
    );
  }
}
