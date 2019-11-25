import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import styles from './goingGlobal.module.scss';

const Modal = dynamic(() => import(/* webpackChunkName 'Modal' */ 'react-modal'));
const BoxContent = dynamic(() => import(/* webpackChunkName 'BoxContent' */ './boxContent'));
const Module1 = dynamic(() => import(/* webpackChunkName 'Module1' */ './module1'));
const Module2 = dynamic(() => import(/* webpackChunkName 'Module2' */ './module2'));
const Module3 = dynamic(() => import(/* webpackChunkName 'Module3' */ './module3'));

const BOXES_CONTENT = [
  {
    title: '2017',
    description: 'The Golden Ticket',
    popup: Module1,
  },
  {
    title: '2018',
    description: 'Going Local to go Global',
    popup: Module2,
  },
  {
    title: '2019',
    description: 'USA - The Hooded Hustle',
    popup: Module3,
  },
];

const Popup = ({ scrollAfterLastPopup }) => {
  const [moduleClicked, setModuleClicked] = useState('');
  const [showModal, setModal] = useState(false);
  const divContainer = useRef(null);
  const customStyles = {
    content: {
      width: '80%',
      height: '60%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
    },
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const buttonClicked = (nro) => () => {
    closeModal();
    if (divContainer && divContainer.current) {
      divContainer.current.scrollIntoView({ block: 'start', behavior: 'auto' });
    }
    setModuleClicked(nro);
    openModal();
  };

  const handleFinishLastPopup = () => {
    closeModal();
    scrollAfterLastPopup();
  };

  const renderPopupContent = () => {
    const Component = moduleClicked && moduleClicked > 0 && BOXES_CONTENT[moduleClicked - 1].popup;
    return Component
      ? <div><Component onClick={buttonClicked} handleFinish={handleFinishLastPopup} /></div>
      : null;
  };

  return (
    <div>
      <div className={styles.caseStudiesWrapper}>
        {BOXES_CONTENT.map((box, index) => (
          <BoxContent
            {...box}
            key={box.title}
            onClick={buttonClicked}
            index={index + 1}
          />
        ))}
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className={styles.popUp} ref={divContainer}>
          <i
            className={styles.closeIcon}
            onClick={closeModal}
            onKeyPress={closeModal}
            role="presentation"
          >
            close
          </i>
          <div className={styles.popContentWrapper}>
            {renderPopupContent()}
          </div>
        </div>
      </Modal>
    </div>
  );
};

Popup.propTypes = {
  scrollAfterLastPopup: PropTypes.func.isRequired,
};

export default Popup;
