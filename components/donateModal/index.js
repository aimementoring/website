import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from '../modal';
import { toggleDonateModal } from '../../store/donation/actions';
import styles from './donateModal.module.scss';

const DonateModal = ({ visible, toggleModal }) => (
  <Modal
    showModal={visible}
    handleModal={toggleModal}
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

const mapStateToProps = (states) => ({
  visible: states.donation.donateModal,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleDonateModal()),
});

DonateModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DonateModal);
