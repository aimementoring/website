import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal';
import styles from './styles.module.scss';

const TYPEFORM_URL = 'https://aimementoring.typeform.com/to/C9g3Pw';

const TypeformModal = ({ visible, toggleModal }) => (
  <Modal
    showModal={visible}
    handleModal={toggleModal}
    hideBodyOverflowY
    type="drawer"
    backgroundColor="rgba(0,0,0, 0.6)"
    withCloseIcon
  >
    <div className={styles.typeformIframeContainer}>
      <iframe
        title="Typeform"
        src={TYPEFORM_URL}
        width="100%"
        height="100%"
        border="0"
        className={styles.typeformIframe}
      />
    </div>
  </Modal>
);

TypeformModal.defaultProps = {
  visible: false,
};

TypeformModal.propTypes = {
  visible: PropTypes.bool,
  toggleModal: PropTypes.func.isRequired,
};

export default TypeformModal;