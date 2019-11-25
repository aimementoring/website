import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '../../hocs/basicLayout';

import styles from './contact.module.scss';

const ContactBanner = dynamic(() => import(/* webpackChunkName: 'ContactBanner' */ '../../components/contact/contactBanner'));
const SupportCentre = dynamic(() => import(/* webpackChunkName: 'SupportCentre' */ '../../components/contact/supportCentre'));
const ContactForm = dynamic(() => import(/* webpackChunkName: 'ContactForm' */ '../../components/contact/contactForm'));

const Contact = () => (
  <Layout>
    <ContactBanner />
    <section className={styles.contactSection}>
      <div className={styles.contactSectionWrapper}>
        <SupportCentre />
        <ContactForm />
      </div>
    </section>
  </Layout>
);

export default Contact;
