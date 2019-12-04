import React from 'react';
import PropTypes from 'prop-types';
import styles from './goingGlobal.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const Module2 = ({ onClick }) => (
  <div>
    <div className={styles.module2018}>
      <h2>2018</h2>
      <h1>Going Local to go Global</h1>
      <p>
        Tensions were rising in Australia with some of our political leaders
        calling out &quot;African Gangs&quot; in Melbourne (check it out in the
        video below). We responded by reaching out and offering the model to
        African Australian leaders in Melbourne.
      </p>
      <p>We met Bem, who started the program. </p>
      <div className={styles.imgTextLayout}>
        <div className={`${styles.imgWrap} ${styles.col}`}>
          <img
            src={`${ASSETS_URL}/assets/images/going-global/bem.jpg`}
            alt="Bem"
          />
          <caption>
            Bem alongside AIME Deakin Center Manager Emma Dunn and Mentor DomDom
          </caption>
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
        Bem was no longer allowed to stay in Australia, so he said he wanted to
        return to Nigeria and start AIME there, which he has.
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
        In Melbourne we now have Dorcas Utkovic who hails originally from South
        Africa, and from the same town where one of our schools is based,
        Mamelodi.
      </p>
      <div className={styles.imgTextLayout}>
        <div className={`${styles.imgWrap} ${styles.col}`}>
          <img
            src={`${ASSETS_URL}/assets/images/going-global/dorcas.jpg`}
            alt="Dorcas"
          />
          <caption>
            Dorcas alongside AIME Program Managers Paddy Rowe and Michelle
            Zervos
          </caption>
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
      <div className={styles.popFooter}>
        <span
          className={styles.nextLink}
          onClick={onClick(3)}
          onKeyPress={onClick(3)}
          role="presentation"
        >
          CHECK OUT 2019 -&gt;
        </span>
      </div>
    </div>
  </div>
);

Module2.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Module2;
