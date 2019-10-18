import React, { useState } from 'react';
import Modal from 'react-modal';

const Popup = () => {
  const [moduleClicked, setModuleClicked] = useState('');
  const [showModal, setModal] = useState(false);

  const customStyles = {
    content: {
      top: '20%',
      left: '10%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-20%',
      width: '80%',
      height: '60%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  const openModal = () => {
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  }

  const buttonClicked = (nro) => () => {
    console.log(nro);
    setModuleClicked(nro);
    openModal();
  }

  const renderModule1 = () => (
    <div style={{ textAlign: 'center' }}>Button 1 pressed</div>
  );

  const renderModule2 = () => (
    <div style={{ textAlign: 'center' }}>Button 2 pressed</div>
  );

  return (
  <>
    <button type="button" onClick={buttonClicked(1)}>button 1</button>
    <button type="button" onClick={buttonClicked(2)}>button 2</button>
    <Modal
      isOpen={showModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      {moduleClicked === 1 && renderModule1()}
      {moduleClicked === 2 && renderModule2()}
    </Modal>
  </>
  )
}

export default Popup;