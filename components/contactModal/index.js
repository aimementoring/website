import React, { useContext } from 'react';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Title from 'aime-blueprint/lib/components/title';
import dynamic from 'next/dynamic';
import { ContactContext } from '../../context';
import styles from './contactModal.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;
export const CONTACT_POPUP_ID = 'contactPopup';

const Modal = dynamic(() => import('../modal'));

const ContactModal = () => {
  const { contactModal, toggleContactModal } = useContext(ContactContext);
  return (
    <Modal
      showModal={contactModal}
      handleModal={toggleContactModal}
      backgroundColor="rgba(82,82,82, 0.85)"
      withCloseIcon
    >
      <div id={CONTACT_POPUP_ID} className={styles.contactPopup}>
        <Title type="h4Title" className={styles.popupTitle}>
              We&apos;d love to hear from you.
        </Title>
        <img src={`${ASSETS_URL}/assets/images/illustrations/letter-writing.png`} alt="Write us" />
        <Paragraph>
              Drop us a few lines at
          {' ' }
          <br />
          <mark><a className={styles.emailLink} href="mailto:enquiries@aimementoring.com">enquiries@aimementoring.com</a></mark>
          <br />
          {" and we'll get back to you!"}
        </Paragraph>
      </div>
    </Modal>
  );
};

export default ContactModal;
