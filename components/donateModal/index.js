import React, { useContext } from 'react';
import Modal from '../modal';
import { DonationContext } from '../../context';
import styles from './donateModal.module.scss';

const DonateModal = () => {
  const { donationModal, toggleDonationModal } = useContext(DonationContext);
  return (
    <Modal
      showModal={donationModal}
      handleModal={toggleDonationModal}
      hideBodyOverflowY
      backgroundColor="rgba(0,0,0, 0.6)"
      withCloseIcon
    >
      <div className={styles.donateIframeContainer}>
        <iframe
          title="donate"
          src="https://aimedonations.raisely.com/embed/"
          width="100%"
          height="512"
          border="0"
          className={styles.donateIframe}
        />
      </div>
    </Modal>
  );
};

export default DonateModal;
