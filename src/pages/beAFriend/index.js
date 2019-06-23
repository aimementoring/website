import React, { PureComponent } from 'react';
import getEntries, { getAssetsBaseUrl } from '../../services/craftAPI';
import MatrixBuilder from '../../components/matrixBuilder';
import bugsnagClient from '../../utils/bugsnag';
import { detectCountry } from '../../utils/country';
import { COUNTRY_CODES } from '../../utils/countryCodes';

class BeAFriend extends PureComponent {
  state = {
    assetsUrl: '',
    formElements: [],
    countrySelected: '',
  }

  componentDidMount() {
    detectCountry(this.setCountry);
    this.setState({ assetsUrl: getAssetsBaseUrl() })
    getEntries('/beAFriend')
      .then(entries => {
        this.setState({ formElements: entries.formBuilder });
      });
  }

  setCountry = (countryJson) => {
    this.setState({
      countryDetected: countryJson.countryCode.toLowerCase(),
      phoneCountrySelected: COUNTRY_CODES.find(country => (
        country.code === countryJson.countryCode
      )).dial_code,
    });
  }

  handleCountryChange = () => (e) => {
    if (e.target.name === 'country-name') {
      const newValue = e.target.value;
      this.setState({ countrySelected: newValue });
    }
  }

  handleFieldChange = (propertyName, propertyValue) => {
    if (propertyName) {
      this.setState({ [propertyName]: propertyValue });
      return;
    }
    bugsnagClient.notify({
      error: 'field without propertyName in formMatrix of beAFriend',
    });
  }

  render() {
    const {
      formElements,
      countrySelected,
    } = this.state;
    return (
      <React.Fragment>
        <div className="matrix-general">
          <div className="hero-banner--hssignup full-width-wrap">
            <div className="flex flex-wrap items-center full-height">
              <div className="banner-wrapper subpage-banner center">
                <h1>
                  <span className="pre-text">Become an</span>
                  <span className="highlight-text">
                    <em>
                      AIME Friend<br />
                    </em>
                  </span>
                  <span className="sm-col-2 mx-auto block pt1 border-bottom border-gradient">&nbsp;</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="matrix-general pt3">
            <div className="matrix-form mt3">
              <div className="my4">
                <p className="mx-auto center text-wrap">
                  We've <a href="https://mailchi.mp/aimementoring/sunday-kindness-1375593" target="_blank" rel="noopener noreferrer">left social media behind</a> and from now on, if you want to know about AIME, subscribe to our Sunday Kindness weekly email publication and our Saturday Swag Apparel publication. We’ll be committing our energy to doing both of these incredibly well, with time, thought, and sweating the questions and moments of joy that will both challenge and sustain us during the 21st century.
                </p>
              </div>
              <div className="form-wrap mx-auto px3">
                <form acceptCharset="UTF-8" action="https://formkeep.com/f/3a51eb20b3c7" method="POST" className="clearfix pt2">
                  <input type="hidden" name="utf8" value="✓" />
                  <input type="hidden" name="submissionmessage" value="BeAFriend" />
                  {(formElements && formElements.length > 0)
                    ?
                      <MatrixBuilder
                        formData={formElements}
                        matrixType="form"
                        handleCountryChange={this.handleCountryChange}
                        handleFieldChange={this.handleFieldChange}
                        values={{
                          ...this.state,
                          countrySelectorValue: countrySelected,
                        }} />
                    : ''}
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BeAFriend;
