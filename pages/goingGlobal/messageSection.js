import React from 'react';
import styles from './goingGlobal.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const Message = () => (
  <section className={styles.messageSection}>
    <div className={styles.panel}>
      <h2>
        A message from Parul,
        <br />
        our Global Head of Research
      </h2>
      <div className={styles.imgParaWrap}>
        <div className={styles.colWrap}>
          <img
            src={`${ASSETS_URL}/assets/images/going-global/parul-headshot@2x.jpg`}
            alt="Parul"
          />
        </div>
        <div className={styles.colWrap}>
          <p>
            <em>
              “We have 6+ years of independent research on the impact of our
              Imagination Curriculum on Indigenous Australian kids. It proves
              emphatically that AIME transforms the lives of mentees, mentors
              and the wider ecosystem it operates in.
            </em>
          </p>
          <p>
            <em>
              We’re about to level-up! As we open our global operations to deep,
              scientific investigation &amp; inquiry, the path before us is one
              of discovery and dissemination. The possibilities are endless.
              Join me and let’s make this happen!”
            </em>
          </p>
          <p>
            <strong>- PPJ, Global Head of Research</strong>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Message;
