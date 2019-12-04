import React from 'react';
import PropTypes from 'prop-types';
import Anchor from '../../components/common/link';
import styles from './goingGlobal.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const Results = ({ setReference }) => (
  <section
    ref={(el) => setReference('results', el)}
    className={styles.resultsSection}
  >
    <div className={styles.panel}>
      <h2>2018 Mentee Progression Rates in Australia</h2>
      <div className={styles.resultImages}>
        <img
          src={`${ASSETS_URL}/assets/images/going-global/mentees79@2x_v2.png`}
          alt="Mentees progression from years 7-9"
          style={{ width: '500px' }}
        />
        <img
          src={`${ASSETS_URL}/assets/images/going-global/mentees1012@2x_v2.png`}
          alt="Mentees progression from years 10-12"
          style={{ width: '500px' }}
        />
      </div>
    </div>
    <div className={styles.panel}>
      <h2>
        Percent of australian aime students who achieved year 12 attainment and
        completed high school
      </h2>
      <p className={styles.descPara}>
        We know that our fiery and intuitive brand of mentoring ends the cycle
        of disadvantage by permanently changing mindsets. Over the last 6 years,
        Mentees who have been through AIME in Australia have graduated at a
        higher rate than their non-Indigenous peers.
      </p>
      <div className={styles.resultImages}>
        <div>
          <img
            src={`${ASSETS_URL}/assets/images/going-global/transitionrate1.png`}
            alt="99% transition rate excluding students with no transition data"
            style={{ width: '500px' }}
          />
          <p>
            Based in the total number of students engaged. EXCLUDING students
            with no transition data available
          </p>
        </div>
        <div>
          <img
            src={`${ASSETS_URL}/assets/images/going-global/transitionrate2.png`}
            alt="79% transition rate including students with transition data"
            style={{ width: '500px' }}
          />
          <p>
            Based in the total number of students engaged. INCLUDING students
            with transition data available
          </p>
        </div>
      </div>
    </div>
    <div className={styles.panel}>
      <h2>
        <strong>22,987</strong>
        <br />
        volunteer mentor hours were donated in australia
      </h2>
      <div className={styles.resultImages}>
        <div>
          <p className={styles.descPara}>
            AIME’s workshops happen on both the university and high school
            campuses with groups of university students volunteering their time
            to work alongside marginalised high school kids
          </p>
          <img
            src={`${ASSETS_URL}/assets/images/going-global/volunteerhrs.png`}
            alt="23000 volunteer hours"
            style={{ width: '500px' }}
          />
          <p>That’s the equivalent of almost three years!</p>

          <a
            className={styles.btn}
            href="https://drive.google.com/file/d/1ZPLB205lOaVmwh7NXkMgXcMpc4dmnBIe/view"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read the full 2018 report"
          >
            Read the full 2018 report
          </a>
          <p>
            Want to see more? &nbsp;
            <Anchor to="/reports" target="_blank">
              View all of our reports
            </Anchor>
          </p>
        </div>
      </div>
    </div>
  </section>
);

Results.propTypes = {
  setReference: PropTypes.func.isRequired,
};

export default Results;
