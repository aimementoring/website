// import React, { PureComponent } from 'react';
// import PropType from 'prop-types';
// import Router from 'next/router';
// import { Components } from 'aime-blueprint';
// import { detectCountry, getAllCountries } from '../../utils/country';
// import COUNTRY_CODES from '../../utils/countryCodes';
// import './EOIForm.scss';

// const {
//   Input,
//   Textarea,
//   PhoneInput,
//   Loading,
// } = Components;

// export default class EOIForm extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showOtherSourceConditional: false,
//       phone: '',
//       countrySelected: '',
//       countryNameSelected: '',
//       countryDetected: '',
//       firstName: '',
//       lastName: '',
//       email: '',
//       universityCampus: '',
//       howDidYouHear: '',
//       howDidYouHearOther: '',
//       loading: false,
//       submitClicked: false,
//       beAnAimeFriend: false,
//       university: '',
//     };
//   }

//   componentDidMount() {
//     this.setCountries();
//   }

//   setCountries = async () => {
//     const countries = getAllCountries().map((country) => ({
//       value: country.code,
//       label: country.name,
//     }));
//     this.setState({ countries });
//     detectCountry(this.setCountry);
//   };

//   setCountry = (countryJson) => {
//     this.setState({
//       countrySelected: countryJson.countryCode,
//       countryNameSelected: countryJson.country,
//       countryDetected: countryJson.countryCode.toLowerCase(),
//       phoneCountrySelected: COUNTRY_CODES.find(
//         (country) => country.code === countryJson.countryCode,
//       ).dial_code,
//     });
//   };

//   handleHowDidYouHearSelectChange = (name, newValue) => {
//     if (newValue === 'Other') {
//       this.setState({
//         showOtherSourceConditional: true,
//         [name]: '',
//       });
//     } else {
//       this.setState({
//         showOtherSourceConditional: false,
//         [name]: newValue,
//       });
//     }
//   };

//   handleCountryChange = (propertyName, propertyValue) => {
//     this.setState((prevState) => ({
//       [propertyName]: propertyValue,
//       countryNameSelected: prevState.countries.find((country) => country.value === propertyValue)
//         .label,
//     }));
//   };

//   handleFieldChange = (propertyName, propertyValue) => {
//     this.setState({ [propertyName]: propertyValue });
//   };

//   handlePhoneCountrySelected = () => {
//     const phoneCountrySelected = document.getElementsByClassName('flag-container')[0]
//       .firstElementChild.title;
//     if (phoneCountrySelected) {
//       const phoneArea = phoneCountrySelected.split('+')
//         ? `+${phoneCountrySelected.split('+')[1]}`
//         : '';
//       this.setState({ phoneCountrySelected: phoneArea });
//       return phoneArea;
//     }
//     return '';
//   };

//   getStylesForCountrySelection = () => {
//     const { backgroundColor } = this.props;
//     return {
//       control: {
//         background: backgroundColor,
//       },
//       singleValue: {
//         position: 'initial',
//         overflow: 'inherit',
//         top: 'inherit',
//         transform: 'inherit',
//         maxWidth: 'inherit',
//       },
//       menu: {
//         borderRadius: 0,
//         marginTop: '0px',
//         width: '100%',
//         zIndex: 10000,
//       },
//       menuList: {
//         zIndex: 10000,
//         padding: 0,
//       },
//     };
//   };

//   submitData = (e) => {
//     if (!this.formEl.checkValidity()) {
//       return;
//     }
//     e.preventDefault();
//     const { tableName, uploadData } = this.props;
//     const {
//       countryNameSelected,
//       phoneCountrySelected,
//     } = this.state;

//     this.setState({ submitClicked: true, loading: true }, async () => {
//       const objectToSend = {
//         ...this.state,
//         tableName,
//         countrySelected: countryNameSelected,
//       };
//       if (!phoneCountrySelected) {
//         objectToSend.phoneCountrySelected = this.handlePhoneCountrySelected();
//       }
//       const response = await uploadData(objectToSend);
//       this.setState({ loading: false });
//       if (response.data === 'OK') {
//         Router.push({
//           pathname: '/thanks',
//           query: {
//             messages:
//               `Yeah! Thank you for registering your interest.
//               Check your inbox for next steps, including guidance on the
//               application process, noting that the deadline for submission
//               is 29th of November 5 PM AEST.
//               `,
//           },
//         });
//         return;
//       }
//       throw new Error('Error saving the EOI');
//     });
//   };

//   render() {
//     const {
//       phone,
//       countrySelected,
//       countryDetected,
//       firstName,
//       lastName,
//       email,
//       university,
//       position,
//       message,
//       loading,
//     } = this.state;
//     const { currentSite } = this.props;
//     return (
//       <form className="clearfix form-light student-chapter-form" ref={(form) =>
//  { this.formEl = form; }}>
//         <input type="hidden" name="utf8" />
//         <Input
//           type="text"
//           elementClassName="sm-col sm-col-6 md-col-6 custom-form-input-container"
//           placeholder="University / Organisation"
//           name="university"
//           value={university}
//           onChangeFunction={this.handleFieldChange}
//           required
//           theme={process.env.REACT_APP_THEME}
//         />
//         <Input
//           type="text"
//           elementClassName="sm-col sm-col-6 md-col-6 custom-form-input-container"
//           placeholder="Application Lead Title"
//           name="position"
//           value={position}
//           onChangeFunction={this.handleFieldChange}
//           required
//           theme={process.env.REACT_APP_THEME}
//         />
//         <Input
//           placeholder="First Name"
//           name="firstName"
//           required
//           type="text"
//           elementClassName="sm-col sm-col-6 md-col-6 custom-form-input-container"
//           value={firstName}
//           onChangeFunction={this.handleFieldChange}
//           theme={process.env.REACT_APP_THEME}
//         />
//         <Input
//           type="text"
//           elementClassName="sm-col sm-col-6 md-col-6 custom-form-input-container"
//           placeholder="Last Name"
//           name="lastName"
//           value={lastName}
//           onChangeFunction={this.handleFieldChange}
//           required
//           theme={process.env.REACT_APP_THEME}
//         />
//         <Input
//           type="email"
//           elementClassName="sm-col sm-col-6 md-col-6 custom-form-input-container"
//           placeholder="Email"
//           name="email"
//           value={email}
//           onChangeFunction={this.handleFieldChange}
//           required
//           theme={process.env.REACT_APP_THEME}
//         />
//         {(countryDetected || countrySelected) && (
//           <PhoneInput
//             elementClassName="sm-col sm-col-6 md-col-6 custom-form-input-container"
//             onChangeFunction={this.handleFieldChange}
//             onCountrySelected={this.handlePhoneCountrySelected}
//             name="phone"
//             value={phone}
//             defaultCountry={countryDetected}
//             currentSite={currentSite}
//             theme={process.env.REACT_APP_THEME}
//           />
//         )}
//         <Textarea
//           elementClassName="input-wrapper textarea-wrapper"
//           className="input-heigth"
//           placeholder="Message"
//           name="message"
//           value={message}
//           onChangeFunction={this.handleFieldChange}
//           theme={process.env.REACT_APP_THEME}
//         />
//         <div className="sm-col sm-col-12 md-col-12 center-align md-left-align py2 my1">
//           <input onClick={this.submitData} type="submit" className="submit" value="REGISTER" />
//         </div>
//         <div>
//           <Loading loading={loading} theme={process.env.REACT_APP_THEME} />
//         </div>
//       </form>
//     );
//   }
// }

// EOIForm.propTypes = {
//   uploadData: PropType.func.isRequired,
//   tableName: PropType.string,
//   backgroundColor: PropType.string,
//   currentSite: PropType.string.isRequired,
// };

// EOIForm.defaultProps = {
//   tableName: '',
//   backgroundColor: null,
// };
