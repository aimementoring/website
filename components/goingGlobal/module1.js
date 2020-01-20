import React from 'react';
import PropTypes from 'prop-types';
import styles from './goingGlobal.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const Module1 = ({ onClick }) => (
  <div>
    <div className={styles.module2017}>
      <h2>2017</h2>
      <h1>The Golden Ticket</h1>
      <p>
        With our goals and dreams we tend to shoot for the moon and even if we
        miss we land amongst the stars so we set our sights on offering AIME to
        any university student anywhere in the world. To get to them, we made a
        short film, COGS, with Oscar Award Winner Laurent Witz and M&amp;C
        Saatchi. The film was made to inspire 10 young people across the world
        to take on the chance to win a golden ticket to lead AIME in their
        country for 3 years.
      </p>
      <p>
        We ended up with 2 countries that fit the bill, South Africa and Uganda.
        Meet Shyaka Lwanyaaga Farid and Vhutali Nelwamondo, who won golden
        tickets and will now lead their countries as part of the next 3 year
        intensive global pilot.
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
          passion, persistence and professionalism. One should always be aiming
          for success but also accepting of criticism. Ask questions and always
          be willing to learn. The AIME team have always supported me no matter
          what and they were always available to jump on a call to make my life
          simple. Always remember two things: 1) you are not on this alone and
          2) when the going gets tough, remember you are doing this for the kids
          and you might be the only hope some kids see before them&quot;
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
          &quot;I believe we are the future. I actually am very humbled and at
          times feel so lucky that I get to work with people from all different
          parts of the world. From Australia to America. I believe all global
          challenges today can only be solved when we get together as a human
          race, we are stronger together. I love the opportunity I have to learn
          from different people across the world. It is an absolute privilege
          for me, I believe we are all connected.&quot;
        </em>
      </p>
      <div className={styles.popFooter}>
        <span
          className={styles.nextLink}
          onClick={onClick(2)}
          onKeyPress={onClick(2)}
          role="presentation"
        >
          CHECK OUT 2018 -&gt;
        </span>
      </div>
    </div>
  </div>
);

Module1.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Module1;
