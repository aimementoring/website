import React, { useState } from 'react';
import Modal from 'react-modal';
import { getAssetsBaseUrl } from '../../services/craftAPI';
import styles from './goingGlobal.module.scss';

const Popup = () => {
  const assetsUrl = getAssetsBaseUrl();
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
    <div className={styles.popUp}>
      <h4>2017</h4>
      <h1>The Golden Ticket</h1>
      <p>With our goals and dreams we tend to shoot for the moon and even if we miss we land amongst the stars so we set our sights on offering AIME to any university student anywhere in the world. To get to them, we made a short film, COGS, with Oscar Award Winner Laurent Witz and M&amp;C Saatchi. The film was made to inspire 10 young people across the world to take on the chance to win a golden ticket to lead AIME in their country for 3 years. </p>
    </div>
  );

  const renderModule2 = () => (
    <div className={styles.popUp}>
      <h4>2017</h4>
      <h1>Going Local to go Global</h1>
      <p>Tensions were rising in Australia with some of our political leaders calling out "African Gangs" in Melbourne (hyperlink to media). We responded by reaching out and offering the model to African Australian leaders in Melbourne. </p>
      <p>We met Bem, who started the program. </p>
      <img src={`${assetsUrl}/assets/images/imagination_dec/IMAGINE-min@2x.gif`} alt="Imagine" style={{ width: '500px' }} />
    </div>
  );
  const renderModule3 = () => (
    <div className={styles.popUp}>
      <h4>2019</h4>
      <h1>USA - The Hooded Hustle</h1>
      <p>To crack the USA, we set out with big bold device, a chartered plane. We offered the chance for university students to win a Hooded Scholarship to lead AIME out of their university for the course of a year. They would also win the chance to fly to Australia and be a part of the world's first festival of mentoring. </p>
      <p>We worked with Advertising groups in New York City to share the opportunity via a national campaign, which dropped on October 1 2018. And it didn't work. </p>
      <p>We received one application.</p>
      <p>So we hit the road, some of our team from Australia drove door to door around America and the Hooded Hustle was born. We learned that we are great face to face, and we want to be the offline group that builds trust on the ground with people.</p>
    </div>
  );

  return (
  <>
    <div className={styles.wrapper}>
      <div className={styles.colWrapper}>
        <h5>2017</h5>
        <button className={styles.btn} type="button" onClick={buttonClicked(1)}>The Golden Ticket</button>

      </div>
      <div className={styles.colWrapper}>
        <h5>2018</h5>
        <button className={styles.btn} type="button" onClick={buttonClicked(2)}>Going Local to go Global</button>

      </div>
      <div className={styles.colWrapper}>
        <h5>2019</h5>
        <button className={styles.btn} type="button" onClick={buttonClicked(3)}>USA - The Hooded Hustle</button>

      </div>
    </div>              
    <Modal
      isOpen={showModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      {moduleClicked === 1 && renderModule1()}
      {moduleClicked === 2 && renderModule2()}
      {moduleClicked === 3 && renderModule3()}
    </Modal>
  </>
  )
}

export default Popup;