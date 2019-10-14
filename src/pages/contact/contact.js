import React from 'react';
import ContactBanner from './contactBanner';
import SupportCentre from './supportCentre';
import ContactForm from './contactForm';

import styles from './contact.module.scss';

const Contact = () => (
  <React.Fragment>
    <ContactBanner />
    <section className={styles.contactSection}>
      <div className={styles.contactSectionWrapper}>
        <SupportCentre />
        <ContactForm />
      </div>
    </section>
  </React.Fragment>
);

export default Contact;
