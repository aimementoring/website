import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { getEntries } from '../../services/craftAPI';
import { detectCountry } from '../../utils/country';
import bugsnagClient from '../../utils/bugsnag';
import styles from './contact.module.scss';

const MatrixBuilder = dynamic(() => import(/* webpackChunkName 'MatrixBuilder' */ '../matrixBuilder'));

const ContactForm = () => {
  const [formElements, setFormElements] = useState([]);
  const [state, setState] = useState({
    countrySelected: '',
  });

  const setCountry = (countryJson) => {
    setState({ ...state, countrySelected: countryJson.countryCode.toLowerCase() });
  };

  const fetchFormElements = async () => {
    try {
      const entries = await getEntries('/contact');
      setFormElements(entries.formBuilder);
    } catch (err) {
      bugsnagClient.notify(new Error(`Error getting the form of contact: ${err}`));
    }
  };

  useEffect(() => {
    detectCountry(setCountry);
    fetchFormElements();
  }, []);

  const handleCountryChange = () => (e) => {
    if (e.target.name === 'country-name') setState({ ...state, countrySelected: e.target.value });
  };

  const handleFieldChange = (propertyName, propertyValue) => {
    if (propertyName) {
      setState({ ...state, [propertyName]: propertyValue });
      return;
    }
    bugsnagClient.notify({
      error: 'Field without propertyName in formMatrix of Contact page',
    });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.contactFromWrapper}>
        <div className={styles.titleContainer}>
          <h1 className={styles.formTitle}>Want to talk?</h1>
          <p className={styles.firstParagraph}>
            Thanks so much for your interest in contacting us.
          </p>
          <p className={styles.secondParagraph}>
            {'Fill out the form below and we\'ll get back to you!'}
          </p>
        </div>
        <div>
          <div className={styles.formContent}>
            <form
              acceptCharset="UTF-8"
              action="https://formkeep.com/f/d575dff9bd96"
              method="POST"
              className={styles.form}
            >
              <input type="hidden" name="utf8" value="✓" />
              <input type="hidden" name="submissionmessage" value="contact" />
              {formElements && formElements.length > 0 && (
                <MatrixBuilder
                  formData={formElements}
                  matrixType="form"
                  handleCountryChange={handleCountryChange}
                  handleFieldChange={handleFieldChange}
                  values={{
                    ...state,
                    countryDetected: state.countrySelected,
                    countrySelectorValue: state.countrySelected,
                  }}
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
