import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getUcFirst } from '../../utils/utilities';
import Input from '../commonElements/Input';
import PhoneInput from '../commonElements/PhoneInput';
import SelectInput from '../commonElements/SelectInput';
import TextAreaInput from '../commonElements/TextAreaInput';
import VideoFormElement from '../commonElements/VideoFormElement';
import UploadFormElement from '../commonElements/UploadFormElement';
import Paragraph from '../commonElements/Paragraph';
import CountrySelector from '../countrySelector';
import AddressAutocompleteInput from '../addressAutocompleteInput';
import UniversitySelector from '../universitySelector';
import { FORM_MATRIX_AVAILABLE_ELEMENTS } from '../../constants';
import Header from '../commonElements/Header';
import CustomCheckbox from '../commonElements/CustomCheckbox';

export default class FormMatrix extends PureComponent {
  static propTypes = {
    formData: PropTypes.array.isRequired,
    currentSite: PropTypes.string,
    elementClassNames: PropTypes.object,
    handleFieldChange: PropTypes.func,
    handleCountryChange: PropTypes.func,
    onAddressSelected: PropTypes.func,
    AddressFieldError: PropTypes.bool,
    values: PropTypes.object,
  };

  static defaultProps = {
    elementClassNames: {},
    currentSite: 'global',
    handleFieldChange: () => { },
    handleCountryChange: () => { },
    onAddressSelected: () => { },
    AddressFieldError: false,
    values: {},
  }

  getMatrix = () => {
    const availableElements = FORM_MATRIX_AVAILABLE_ELEMENTS;

    return this.props.formData.map((formElement, index) => {
      return availableElements.indexOf(formElement.name) > -1
        ? <div key={`matrix-common-div-${index}`}>{this[`render${getUcFirst(formElement.name)}`](formElement, index)}</div>
        : <div key={`matrix-common-div-${index}`} />;
    });
  }


  renderInput = (formElement, index) => {
    const block = formElement.content;
    const width = block.width ? block.width : '12';
    return (
      <Input
        {...block}
        key={`${formElement.name}-${index}-form`}
        elementClassName={`sm-col o7-r o7-b sm-col-${width} md-col-${width}`}
        onChange={this.props.handleFieldChange} />
    );
  }

  renderDatePickerInput = (formElement, index) => {
    // TODO: For now the date picker is render just as the other inputs as text or email, with type date.
    // We have to define how we want to render it.
    return <div>{this.renderInput(formElement, index)}</div>;
  }

  renderPhoneInput = (formElement, index) => {
    const block = formElement.content;
    const width = block.width ? block.width : '12';
    const { values } = this.props;
    if (values.countryDetected) {
      return (
        <PhoneInput
          {...block}
          key={`${formElement.name}-${index}-form`}
          name={formElement.name}
          elementClassName={`sm-col o7-r o7-b sm-col-${width}} md-col-${width}`}
          onChangeFunction={this.props.handleFieldChange}
          currentSite={this.props.currentSite}
          defaultCountry={values.countryDetected}
          value={values[formElement.name]} />);
    }
    return <div />;
  }

  renderCountryInput = (formElement, index) => {
    const block = formElement.content;
    const width = block.width ? block.width : '12';
    const { values, handleCountryChange } = this.props;
    return (
      <CountrySelector
        key={`${formElement.name}-${index}-form`}
        containerClassNames={`sm-col o7-r o7-b sm-col-${width} md-col-${width} select `}
        placeholder="What country do you live in?"
        classNames="input"
        onChangeFunction={handleCountryChange}
        value={values.countrySelectorValue}
      />);
  }

  renderLimitedCountryInput = (formElement, index) => {
    const block = formElement.content;
    const width = block.width ? block.width : '12';
    return (
      <SelectInput
        key={`${formElement.name}-${index}-form`}
        elementClassName={`sm-col o7-r o7-b sm-col-${width} md-col-${width} select`}
        onChangeFunction={this.props.handleFieldChange}
        placeholder={block.placeholder || 'What country do you live in?'}
        {...block}
      />);
  }

  renderTextAreaInput = (formElement, index) => {
    const block = formElement.content;
    const width = block.width ? block.width : '12';
    return (
      <TextAreaInput
        {...block}
        key={`${formElement.name}-${index}-form`}
        elementClassName={`sm-col o7-r o7-b sm-col-${width}} md-col-${width}`}
        onChange={this.props.handleFieldChange} />
    );
  }

  renderCheckbox = (formElement, index) => {
    const block = formElement.content;
    const { values } = this.props;
    return (
      <CustomCheckbox
        key={`${index}-custom-checkbox`}
        elementClassName={`sm-col sm-col-12 md-col-12 f-14 pt2 flex items-center ${block.checkboxColor.value}`}
        onChangeFunction={this.props.handleFieldChange}
        labeltext={block.label}
        inputName={block.inputName}
        customId={block.inputName}
        value={values[block.inputName]} />
    );
  }


  renderBecomeAFriend = (formElement, index) => {
    const block = formElement.content;
    const { values } = this.props;
    return (
      <CustomCheckbox
        key={`${index}-become-a-friend`}
        elementClassName="sm-col sm-col-12 md-col-12 f-14 py2 flex items-center custom-checkbox--yellow"
        onChangeFunction={this.props.handleFieldChange}
        labeltext={block.text || 'Become an AIME Friend. Receive updates about AIME and help us tackle inequality.'}
        inputName="be-an-aime-friend"
        customId="aime-friend"
        value={values['be-an-aime-friend']} />
    );
  }

  renderWhatUniversityCampusAreYouAttending = (formElement, index) => {
    const block = formElement.content;
    const width = block.width ? block.width : '12';
    return (
      <UniversitySelector
        key={`${formElement.name}-${index}-form`}
        placeholder="What University campus are you attending?"
        classNames="input"
        onChangeFunction={this.props.handleFieldChange}
        containerClassNames={`sm-col o7-r o7-b sm-col-${width} md-col-${width} select`} />
    );
  }

  renderHowDidYouHearAboutAime = (formElement, index) => {
    const block = formElement.content;
    const width = block.width ? block.width : '12';
    return (
      <SelectInput
        key={`${formElement.name}-${index}-form`}
        matrixElementKey={`${formElement.name}-${index}`}
        elementClassName={`sm-col o7-r o7-b sm-col-${width} md-col-${width} select`}
        onChangeFunction={this.props.handleFieldChange}
        required={block.required}
        placeholder="How did you hear about AIME?"
        options={[
          { value: "Word of mouth", label: "Word of mouth" },
          { value: "Facebook", label: "Facebook" },
          { value: "Instagram", label: "Instagram" },
          { value: "Twitter", label: "Twitter" },
          { value: "AIME Email", label: "AIME Email" },
        ]}
      />);
  }

  renderDropDown = (formElement, index) => {
    const block = formElement.content;
    const width = block.width ? block.width : '12';
    return (
      <SelectInput
        elementClassName={`sm-col o7-r o7-b sm-col-${width} md-col-${width} select`}
        onChangeFunction={this.props.handleFieldChange}
        required={block.required}
        placeholder={block.titleDropDown}
        options={block.options}
        name={block.name}
        key={`${index}-select-input-form`}
    />);
  }

  renderHeading = (formElement, index) => {
    const block = formElement.content;
    return (
      <Header
        key={`heading-${index}`}
        headerText={block.label}
        elementClassName="sm-col sm-col-12 clearfix"
        headerClassName={`${block.color} ${block.fontSize} ${block.align} feature-font-family regular w100"`} />);
  }

  renderParagraph = (formElement, index) => {
    const block = formElement.content;
    return <Paragraph
      key={`${formElement.name}-${index}`}
      elementClassName="sm-col sm-col-12 mt1"
      paragraphText={block.text} />;
  }

  renderParagraphLabel = (formElement, index) => {
    const block = formElement.content;
    return <Paragraph
      key={`${formElement.name}-${index}`}
      elementClassName="sm-col sm-col-12 mt3 mb1 f-14"
      paragraphText={block.text} />;
  }

  renderSubmit = (formElement, index) => {
    const block = formElement.content;
    return (
      <div
        className="sm-col sm-col-12 md-col-12 center-align py2 my3"
        key={`${formElement.name}-${index}`}>
        <input type="submit" className={`submit ${block.align} ${block.backgroundColor}`} value={block.label} required={block.required} />
      </div>);
  }

  renderAddressField = (formElement, index) => (
    <div
      className="sm-col sm-col-12 md-col-12 o7-r o7-b clearfix"
      key={`${formElement.name}-${index}`}>
      <AddressAutocompleteInput
        placeholder="Start typing your address..."
        onAddressSelected={this.props.onAddressSelected}
        classNameProp="input js-autocomplete-address"
      />
      {this.props.AddressFieldError &&
      <p className="error-message">Oh no! Sorry looks like we’re not accepting applications from this country yet</p>}
    </div>
  );


  renderVideo = (formElement, index) => (
    <VideoFormElement
      formElement={formElement.content}
      index={index}
      key={`video-${index}-blog-matrix`} />
  );


  renderUploadField = (formElement, index) => (
    <UploadFormElement
      formElement={formElement}
      index={index}
      key={`upload-${index}-blog-matrix`} />
  );

  /* eslint-disable react/no-danger */
  renderEmbed = (postElement, key) => (
    <div
      dangerouslySetInnerHTML={{ __html: postElement.iframeTag }}
      key={`embed-${key}`}
    />
  );

  render() {
    return (
      <div>
        {this.getMatrix()}
      </div>
    );
  }
}
