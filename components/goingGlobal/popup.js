import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from './goingGlobal.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const BOXES_CONTENT = [
  {
    title: '2017',
    description: 'The Golden Ticket',
  },
  {
    title: '2018',
    description: 'Going Local to go Global',
  },
  {
    title: '2019',
    description: 'USA - The Hooded Hustle',
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

  const renderModule1 = () => (
    <div>
      <div className={styles.module2017}>
        <h2>2017</h2>
        <h1>The Golden Ticket</h1>
        <p>
          With our goals and dreams we tend to shoot for the moon and even if we
          miss we land amongst the stars so we set our sights on offering AIME
          to any university student anywhere in the world. To get to them, we
          made a short film, COGS, with Oscar Award Winner Laurent Witz and
          M&amp;C Saatchi. The film was made to inspire 10 young people across
          the world to take on the chance to win a golden ticket to lead AIME in
          their country for 3 years.
        </p>
        <p>
          We ended up with 2 countries that fit the bill, South Africa and
          Uganda. Meet Shyaka Lwanyaaga Farid and Vhutali Nelwamondo,
          who won golden tickets and will now lead their countries as part of
          the next 3 year intensive global pilot.
        </p>
        <h3>Vhutali</h3>
        <div className={styles.iframeContainer}>
          <img
            src={`${ASSETS_URL}/assets/images/going-global/vhutali.jpg`}
            alt="Vhutali"
          />
        </div>
        <p>
          <em>
            &quot;Setting up AIME in any institution is never easy. It requires
            passion, persistence and professionalism. One should always be
            aiming for success but also accepting of criticism. Ask questions
            and always be willing to learn. The AIME team have always supported
            me no matter what and they were always available to jump on a call
            to make my life simple. Always remember two things: 1) you are not
            on this alone and 2) when the going gets tough, remember you are
            doing this for the kids and you might be the only hope some kids
            see before them&quot;
          </em>
        </p>
        <h3>SHYAKA</h3>
        <div className={styles.iframeContainer}>
          <img
            src={`${ASSETS_URL}/assets/images/going-global/shyaka.jpg`}
            alt="SHYAKA"
          />
        </div>
        <p>
          <em>
            &quot;I believe we are the future. I actually am very humbled and at times
            feel so lucky that I get to work with people from all different parts
            of the world. From Australia to America. I believe all global challenges
            today can only be solved when we get together as a human race, we are
            stronger together. I love the opportunity I have to learn from different
            people across the world. It is an absolute privilege for me, I
            believe we are all connected.&quot;
          </em>
        </p>
        <div className={styles.popFooter}>
          <span
            className={styles.nextLink}
            onClick={buttonClicked(2)}
            onKeyPress={buttonClicked(2)}
            role="presentation"
          >
            CHECK OUT 2018 -&gt;
          </span>
        </div>
      </div>
    </div>
  );

  const renderModule2 = () => (
    <div>
      <div className={styles.module2018}>
        <h2>2018</h2>
        <h1>Going Local to go Global</h1>
        <p>
          Tensions were rising in Australia with some of our political leaders
          calling out &quot;African Gangs&quot; in Melbourne (check it out in the video below). We
          responded by reaching out and offering the model to African Australian
          leaders in Melbourne.
        </p>
        <p>We met Bem, who started the program. </p>
        <div className={styles.imgTextLayout}>
          <div className={`${styles.imgWrap} ${styles.col}`}>
            <img
              src={`${ASSETS_URL}/assets/images/going-global/bem.jpg`}
              alt="Bem"
            />
            <caption>Bem alongside AIME Deakin Center Manager Emma Dunn and Mentor DomDom</caption>
          </div>
          <div className={styles.col}>
            <h3>Bem</h3>
            <p>
              <em>
                {`"Creating a community program took immersing myself in a new environment
                and culture to understand the way of life in north-east Nigeria. I interacted
                with people across the state we are now operating out of. I ate the local food,
                I rode around on a tricycle and visited local sites. I felt the warmth of humans
                looking out for their neighbours and working relentlessly to improve their
                situation. The result is we co-created a program that addresses the needs of
                high school and tertiary students in north-east Nigeria while carrying the
                essence of kindness and fairness. We've built trust and are starting
                to delve deeper into the meaning of life and why we do what we do."`}
              </em>
            </p>
          </div>
        </div>
        <p>
          Bem was no longer allowed to stay in Australia, so he said he wanted
          to return to Nigeria and start AIME there, which he has.
        </p>
        <div className={styles.iframeContainer}>
          <iframe
            src="https://player.vimeo.com/external/341714838.hd.mp4?s=1fb239f795046d6d829d9c2103facc56c803e6ab&profile_id=175"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </div>
        <p>
          In Melbourne we now have Dorcas Utkovic who hails originally from
          South Africa, and from the same town where one of our schools is
          based, Mamelodi.
        </p>
        <div className={styles.imgTextLayout}>
          <div className={`${styles.imgWrap} ${styles.col}`}>
            <img
              src={`${ASSETS_URL}/assets/images/going-global/dorcas.jpg`}
              alt="Dorcas"
            />
            <caption>Dorcas alongside AIME Program Managers Paddy Rowe and Michelle Zervos</caption>
          </div>
          <div className={styles.col}>
            <h3>Dorcas</h3>
            <p>
              <em>
                {`"I’m inspired to be a part of the global pilot because as architects
                of the third culture space, our stories, challenges and triumphs are at
                a global scale. And what a fabulous opportunity it would be to
                not only learn but share with each other at this capacity."`}
              </em>
            </p>
          </div>
        </div>
        {/* <div className={styles.iframeContainer}>
          <iframe
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </div> */}
        <div className={styles.popFooter}>
          <span
            className={styles.nextLink}
            onClick={buttonClicked(3)}
            onKeyPress={buttonClicked(3)}
            role="presentation"
          >
            CHECK OUT 2019 -&gt;
          </span>
        </div>
      </div>
    </div>
  );
  const renderModule3 = () => (
    <div>
      <div className={styles.module2019}>
        <h2>2019</h2>
        <h1>USA - The Hooded Hustle</h1>
        <p>
          {`To crack the USA, we set out with big bold device, a chartered plane.
          We offered the chance for university students to win a Hooded
          Scholarship to lead AIME out of their university for the course of a
          year. They would also win the chance to fly to Australia and be a part
          of the world's first festival of mentoring.`}
        </p>
        <p>
          {`We worked with Advertising groups in New York City to share the
          opportunity via a national campaign, which dropped on October 1 2018.
          And it didn't work.`}
        </p>
        <p>We received one application.</p>
        <p>
          So we hit the road, some of our team from Australia drove door to door
          around America and the Hooded Hustle was born. We learned that we are
          great face to face, and we want to be the offline group that builds
          trust on the ground with people.
        </p>
        <img
          src={`${ASSETS_URL}/assets/images/going-global/usahustle.png`}
          alt="USA Hooded Hustle Infographic"
        />
        <p>
          And now we are at the back end of partnership conversations with 10+
          US universities to look to secure a focused group that will join the
          Global Pilot for the next 3 years.
        </p>
        <div className={styles.popFooter}>
          <span
            className={styles.nextLink}
            onClick={handleFinishLastPopup}
            onKeyPress={handleFinishLastPopup}
            role="presentation"
          >
            CHECK OUT WHAT WE’VE ACCOMPLISHED
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className={styles.caseStudiesWrapper}>
        {BOXES_CONTENT.map((box, index) => (
          <BoxContent {...box} key={box.title} onClick={buttonClicked} index={index + 1} />
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
            <div>{moduleClicked === 1 && renderModule1()}</div>
            <div>{moduleClicked === 2 && renderModule2()}</div>
            <div>{moduleClicked === 3 && renderModule3()}</div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

Popup.propTypes = {
  scrollAfterLastPopup: PropTypes.func.isRequired,
};

const BoxContent = ({
  title,
  description,
  onClick,
  index,
}) => (
  <div
    className={styles.caseStudy}
    onClick={onClick(index)}
    onKeyPress={onClick(index)}
    role="presentation"
  >
    <h5>{title}</h5>
    <p>{description}</p>
    <button
      className={styles.btn}
      type="button"
      onClick={onClick(index)}
    >
      Read Case Study
    </button>
  </div>
);

BoxContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Popup;
