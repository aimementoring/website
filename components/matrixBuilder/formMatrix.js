import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Input from 'aime-blueprint/lib/components/input';
import Select from 'aime-blueprint/lib/components/select';
import Textarea from 'aime-blueprint/lib/components/textarea';
import Checkbox from 'aime-blueprint/lib/components/checkbox';
import CountrySelector from 'aime-blueprint/lib/components/countrySelector';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import PhoneInput from 'aime-blueprint/lib/components/phoneInput';
import UploadFormElement from '../commonElements/uploadFormElement';
import { FORM_MATRIX_AVAILABLE_ELEMENTS } from '../../constants';
import { getUcFirst } from '../../utils/utilities';

const Header = dynamic(() => import('../commonElements/header'));
const VideoFormElement = dynamic(() => import('../commonElements/videoFormElement'));
const AddressAutocompleteInput = dynamic(() => import('../addressAutocompleteInput'));
const UniversitySelector = dynamic(() => import('../universitySelector'));

class FormMatrix extends PureComponent {
  getMatrix = () => {
    const availableElements = FORM_MATRIX_AVAILABLE_ELEMENTS;
    const { formData } = this.props;
    return formData.map((formElement, index) => (
      availableElements.indexOf(formElement.name) > -1 ? (
        // eslint-disable-next-line react/no-array-index-key
        <div key={`matrix-common-div-${formElement.name}-${index}`}>
          {this[`render${getUcFirst(formElement.name)}`](formElement, index)}
        </div>
      ) : (
        <div key={`matrix-common-div-${formElement.name}`} />
      )));
  };

  renderInput = (formElement, index) => {
    const { handleFieldChange } = this.props;
    const block = formElement.content;
    const width = block.width ? block.width : '12';
    return (
      <Input
        {...block}
        key={`${formElement.name}-${index}-form`}
        elementClassName={`sm-col o7-r o7-b sm-col-${width} md-col-${width}`}
        onChange={handleFieldChange}
        theme={process.env.REACT_APP_THEME}
      />
    );
  };

  renderDatePickerInput = (formElement, index) => <div>{this.renderInput(formElement, index)}</div>;

  renderPhoneInput = (formElement, index) => {
    const block = formElement.content;
    const width = block.width ? block.width : '12';
    const { values, handleFieldChange, currentSite } = this.props;
    if (values.countryDetected) {
      return (
        <PhoneInput
          {...block}
          key={`${formElement.name}-${index}-form`}
          name={formElement.name}
          elementClassName={`sm-col o7-r o7-b sm-col-${width}} md-col-${width}`}
          onChangeFunction={handleFieldChange}
          currentSite={currentSite}
          defaultCountry={values.countryDetected}
          value={values[formElement.name]}
          theme={process.env.REACT_APP_THEME}
        />
      );
    }
    return <div />;
  };

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
        theme={process.env.REACT_APP_THEME}
      />
    );
  };

  renderLimitedCountryInput = (formElement, index) => {
    const block = formElement.content;
    const width = block.width ? block.width : '12';
    const { handleFieldChange } = this.props;
    return (
      <Select
        key={`${formElement.name}-${index}-form`}
        elementClassName={`sm-col o7-r o7-b sm-col-${width} md-col-${width} select`}
        onChangeFunction={handleFieldChange}
        placeholder={block.placeholder || 'What country do you live in?'}
        theme={process.env.REACT_APP_THEME}
        {...block}
      />
    );
  };

  renderTextAreaInput = (formElement, index) => {
    const block = formElement.content;
    const width = block.width ? block.width : '12';
    const { handleFieldChange } = this.props;
    return (
      <Textarea
        {...block}
        key={`${formElement.name}-${index}-form`}
        elementClassName={`sm-col o7-r o7-b sm-col-${width}} md-col-${width}`}
        onChange={handleFieldChange}
        theme={process.env.REACT_APP_THEME}
      />
    );
  };

  renderCheckbox = (formElement, index) => {
    const block = formElement.content;
    const { values, handleFieldChange } = this.props;

    return (
      <Checkbox
        key={`${index}-custom-checkbox`}
        elementClassName={`sm-col sm-col-12 md-col-12 f-14 pt2 flex items-center ${block.checkboxColor.value}`}
        onChangeFunction={handleFieldChange}
        placeholder={block.label}
        name={block.inputName}
        customId={block.inputName}
        value={values[block.inputName]}
        theme={process.env.REACT_APP_THEME}
      />
    );
  };

  renderBecomeAFriend = (formElement, index) => {
    const block = formElement.content;
    const { values, handleFieldChange } = this.props;
    return (
      <Checkbox
        key={`${index}-become-a-friend`}
        elementClassName="sm-col sm-col-12 md-col-12 f-14 py2 flex items-center custom-checkbox--yellow"
        onChangeFunction={handleFieldChange}
        placeholder={
          block.text
          || 'Become an AIME Friend. Receive updates about AIME and help us tackle inequality.'
        }
        name="be-an-aime-friend"
        customId="aime-friend"
        value={values['be-an-aime-friend']}
        theme={process.env.REACT_APP_THEME}
      />
    );
  };

  renderWhatUniversityCampusAreYouAttending = (formElement, index) => {
    const block = formElement.content;
    const width = block.width ? block.width : '12';
    const { handleFieldChange } = this.props;
    return (
      <UniversitySelector
        key={`${formElement.name}-${index}-form`}
        placeholder="What University campus are you attending?"
        classNames="input"
        onChangeFunction={handleFieldChange}
        containerClassNames={`sm-col o7-r o7-b sm-col-${width} md-col-${width} select`}
        theme={process.env.REACT_APP_THEME}
      />
    );
  };

  renderHowDidYouHearAboutAime = (formElement, index) => {
    const block = formElement.content;
    const width = block.width ? block.width : '12';
    const { handleFieldChange } = this.props;
    return (
      <Select
        key={`${formElement.name}-${index}-form`}
        matrixElementKey={`${formElement.name}-${index}`}
        elementClassName={`sm-col o7-r o7-b sm-col-${width} md-col-${width} select`}
        onChangeFunction={handleFieldChange}
        required={block.required}
        placeholder="How did you hear about AIME?"
        options={[
          { value: 'Word of mouth', label: 'Word of mouth' },
          { value: 'Facebook', label: 'Facebook' },
          { value: 'Instagram', label: 'Instagram' },
          { value: 'Twitter', label: 'Twitter' },
          { value: 'AIME Email', label: 'AIME Email' },
        ]}
        theme={process.env.REACT_APP_THEME}
      />
    );
  };

  renderDropDown = (formElement, index) => {
    const block = formElement.content;
    const width = block.width ? block.width : '12';
    const { handleFieldChange } = this.props;
    return (
      <Select
        elementClassName={`sm-col o7-r o7-b sm-col-${width} md-col-${width} select`}
        onChangeFunction={handleFieldChange}
        required={block.required}
        placeholder={block.titleDropDown}
        options={block.options}
        name={block.name}
        key={`${index}-select-input-form`}
        theme={process.env.REACT_APP_THEME}
      />
    );
  };

  renderHeading = (formElement, index) => {
    const block = formElement.content;
    return (
      <Header
        key={`heading-${index}`}
        headerText={block.label}
        elementClassName="sm-col sm-col-12 clearfix"
        headerClassName={`${block.color} ${block.fontSize} ${block.align} feature-font-family regular w100"`}
      />
    );
  };

  renderParagraph = (formElement, index) => {
    const block = formElement.content;
    return (
      <Paragraph
        key={`${formElement.name}-${index}`}
        elementClassName="sm-col sm-col-12 mt1"
        paragraphText={block.text}
        theme={process.env.REACT_APP_THEME}
      />
    );
  };

  renderParagraphLabel = (formElement, index) => {
    const block = formElement.content;
    return (
      <Paragraph
        key={`${formElement.name}-${index}`}
        elementClassName="sm-col sm-col-12 mt3 mb1 f-14"
        paragraphText={block.text}
        theme={process.env.REACT_APP_THEME}
      />
    );
  };

  renderSubmit = (formElement, index) => {
    const block = formElement.content;
    return (
      <div
        className="sm-col sm-col-12 md-col-12 center-align py2 my3"
        key={`${formElement.name}-${index}`}
      >
        <input
          type="submit"
          className={`submit ${block.align} ${block.backgroundColor}`}
          value={block.label}
          required={block.required}
        />
      </div>
    );
  };

  renderAddressField = (formElement, index) => {
    const { onAddressSelected, AddressFieldError } = this.props;
    return (
      <div
        className="sm-col sm-col-12 md-col-12 o7-r o7-b clearfix"
        key={`${formElement.name}-${index}`}
      >
        <AddressAutocompleteInput
          placeholder="Start typing your address..."
          onAddressSelected={onAddressSelected}
          classNameProp="input js-autocomplete-address"
        />
        {AddressFieldError && (
          <p className="error-message">
            Oh no! Sorry looks like we’re not accepting applications from this country yet
          </p>
        )}
      </div>
    );
  };

  renderVideo = (formElement, index) => (
    <VideoFormElement
      formElement={formElement.content}
      index={index}
      key={`video-${index}-blog-matrix`}
    />
  );

  renderUploadField = (formElement, index) => (
    <UploadFormElement
      formElement={formElement}
      index={index}
      key={`upload-${index}-blog-matrix`}
    />
  );

  /* eslint-disable react/no-danger */
  renderEmbed = (postElement, key) => (
    <div dangerouslySetInnerHTML={{ __html: postElement.iframeTag }} key={`embed-${key}`} />
  );

  render() {
    return <div>{this.getMatrix()}</div>;
  }
}

FormMatrix.propTypes = {
  formData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  currentSite: PropTypes.string,
  elementClassNames: PropTypes.shape({}),
  handleFieldChange: PropTypes.func,
  handleCountryChange: PropTypes.func,
  onAddressSelected: PropTypes.func,
  AddressFieldError: PropTypes.bool,
  values: PropTypes.shape({
    countryDetected: PropTypes.string,
    countrySelectorValue: PropTypes.string,
    'be-an-aime-friend': PropTypes.bool,
  }),
};

FormMatrix.defaultProps = {
  elementClassNames: {},
  currentSite: 'global',
  handleFieldChange: () => {},
  handleCountryChange: () => {},
  onAddressSelected: () => {},
  AddressFieldError: false,
  values: {},
};

export default FormMatrix;
