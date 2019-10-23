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
    <>
      <div className={styles.module2017}>
        <h2>2017</h2>
        <h1>The Golden Ticket</h1>
        <p>With our goals and dreams we tend to shoot for the moon and even
          if we miss we land amongst the stars so we set our sights on offering AIME to any
          university student anywhere in the world. To get to them, we made a short film,
          COGS, with Oscar Award Winner Laurent Witz and M&amp;C Saatchi. The film was made
          to inspire 10 young people across the world to take on the chance to win a golden
          ticket to lead AIME in their country for 3 years.
        </p>
        <p>
          We ended up with 2 countries that fit the bill, South Africa and Uganda. Meet Shyaka (insert last name) and Vhutali (insert last name), who won golden tickets and will now lead their countries as part of the next 3 year intensive global pilot.
        </p>
        <h3>Vhutali</h3>
        <div className={styles.iframeContainer}>
          <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='video'
          />
        </div>
        <p>Message from Vhutali</p>
        <h3>SHYAKA</h3>
        <div className={styles.iframeContainer}>
          <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='video'
          />
        </div>
        <p>Message from Vhutali</p>
        <div className={styles.popFooter}><a href="/" className={styles.nextLink}>CHECK OUT 2018 -></a></div>

      </div>
    </>
  );

  const renderModule2 = () => (
    <>
      <div className={styles.module2018}>
        <h2>2018</h2>
        <h1>Going Local to go Global</h1>
        <p>Tensions were rising in Australia with some of our political leaders calling out "African Gangs" in Melbourne (hyperlink to media). We responded by reaching out and offering the model to African Australian leaders in Melbourne. </p>
        <p>We met Bem, who started the program. </p>
        <div className={styles.imgTextLayout}>
          <div>
            <img src={`${assetsUrl}/assets/images/going-global/volunteerhrs.png`} alt="Harvard University" />
          </div>
          <div>
            <h3>Bem</h3>
            <p>(Quote from Bem about starting the program + Picture explaining starting the program.</p>
          </div>
        </div>
        <p>Bem was no longer allowed to stay in Australia, so he said he wanted to return to Nigeria and start AIME there, which he has.</p>
        <div className={styles.iframeContainer}>
          <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='video'
          />
        </div>
        <p>In Melbourne we now have Dorcus Utkovic who hails originally from South Africa, and from the same town where one of our schools is based, Mamelodi.</p>
        <div className={styles.imgTextLayout}>
          <div>
            <img src={`${assetsUrl}/assets/images/going-global/volunteerhrs.png`} alt="Harvard University" />
          </div>
          <div>
            <h3>Dorcus</h3>
            <p>((Dorcus pic + quote about the role in Melbourne &amp; her vision being a part of the global pilot over the next 3 years)..</p>
          </div>
        </div>
        <div className={styles.iframeContainer}>
          <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='video'
          />
        </div>
        <div className={styles.popFooter}><a href="/" className={styles.nextLink}>CHECK OUT 2019 -></a></div>

      </div>
    </>
  );
  const renderModule3 = () => (
    <>
      <div className={styles.module2019}>
        <h2>2019</h2>
        <h1>USA - The Hooded Hustle</h1>
        <p>To crack the USA, we set out with big bold device, a chartered plane. We offered the chance for university students to win a Hooded Scholarship to lead AIME out of their university for the course of a year. They would also win the chance to fly to Australia and be a part of the world's first festival of mentoring. </p>
        <p>We worked with Advertising groups in New York City to share the opportunity via a national campaign, which dropped on October 1 2018. And it didn't work. </p>
        <p>We received one application.</p>
        <p>So we hit the road, some of our team from Australia drove door to door around America and the Hooded Hustle was born. We learned that we are great face to face, and we want to be the offline group that builds trust on the ground with people.</p>
        <img src={`${assetsUrl}/assets/images/going-global/volunteerhrs.png`} alt="Harvard University" />
        <img src={`${assetsUrl}/assets/images/going-global/volunteerhrs.png`} alt="Harvard University" />
        <img src={`${assetsUrl}/assets/images/going-global/volunteerhrs.png`} alt="Harvard University" />
        <p>And now we are at the back end of partnership conversations with 10+ US universities to look to secure a focused group that will join the Global Pilot for the next 3 years.</p>
        <div className={styles.popFooter}><a href="/" className={styles.nextLink}>CHECK OUT WHAT WE’VE ACCOMPLISHED</a></div>
      </div>
    </>
  );

  return (
    <>
      <div className={styles.caseStudiesWrapper}>
        <div className={styles.caseStudy}>
          <h5>2017</h5>
          <p>The Golden Ticket</p>
          <button className={styles.btn} type="button" onClick={buttonClicked(1)}>Read Case STudy</button>

        </div>
        <div className={styles.caseStudy}>
          <h5>2018</h5>
          <p>Going Local to go Global</p>
          <button className={styles.btn} type="button" onClick={buttonClicked(2)}>Read Case STudy</button>

        </div>
        <div className={styles.caseStudy}>
          <h5>2019</h5>
          <p>USA - The Hooded Hustle</p>
          <button className={styles.btn} type="button" onClick={buttonClicked(3)}>Read Case STudy</button>

        </div>
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className={styles.popUp}>
          <i className={styles.closeIcon} onClick={closeModal}>close</i>
          <div className={styles.popContentWrapper}>
            {moduleClicked === 1 && renderModule1()}
            {moduleClicked === 2 && renderModule2()}
            {moduleClicked === 3 && renderModule3()}
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Popup;