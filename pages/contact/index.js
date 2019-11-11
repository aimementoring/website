import React from 'react';
import ContactBanner from './contactBanner';
import SupportCentre from './supportCentre';
import ContactForm from './contactForm';
import withLayout from '../../hocs/basicLayout';

import styles from './contact.module.scss';

const Contact = () => (
  <>
    <ContactBanner />
    <section className={styles.contactSection}>
      <div className={styles.contactSectionWrapper}>
        <SupportCentre />
        <ContactForm />
      </div>
    </section>
  </>
);

export default withLayout(Contact);
