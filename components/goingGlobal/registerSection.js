import React from 'react';
import PropTypes from 'prop-types';
// import dynamic from 'next/dynamic';
import Anchor from '../common/link';
// import { uploadCustomEOI } from '../../services/portalApi';
import styles from './goingGlobalIndex.module.scss';

// const EoiForm = dynamic(() => import('../../components/eoiForm/goingGlobalEOIForm'));

// const TABLE_NAME = 'Going Global';

// add the prop handleReloadData if you need to add the component EOI Form
const Register = ({ setReference }) => (
  <section
    className={styles.eoiSection}
    ref={(el) => setReference('enquire', el)}
  >
    <div className={styles.formWrapper}>
      <h1>Calling all Research Partners</h1>

      <p>
        {`We're opening up a global research partnership opportunity for a
        consortium of researchers to come together to track the impact of
        our Imagination Curriculum, which has been so successful in Australia
        with Indigenous kids for 15 years, to see if it is globally relevant
        with our new programs in Uganda, South Africa, Nigeria, the USA, and
        our African Australian Program in Australia.`}
      </p>
      <h2>WHAT’s THE DEAL</h2>
      <h4>
        We’re committing ~$1 million per annum for the next 3 years (2020-2022)
        towards this research partnership, including:
      </h4>
      <p>
        <strong>
          1.
          <br />
          Seed funding in cash of $100k p.a.
        </strong>
        <br />
        <em>
          Note that we expect our research partners to add to this cash through
          internal funding or external fundraising / research grants;
        </em>
      </p>
      <p>
        <strong>
          2.
          <br />
          In-kind support of approximately ~$0.9 million p.a.,
        </strong>
        <br />
        <em>including access to program data and:</em>
      </p>

      <ul className={styles.availResourcesWrapper}>
        <li>
          Our Global Head of Research, assigned as Project Manager to support
          the consortium
        </li>
        <li>AIME’s content design team (including CEO) as required</li>
        <li>
          3+ Global Mentors coordinating program delivery in the 3 continents
        </li>
        <li>
          5+ Program Managers and 10+ Hooded Scholars leading program delivery
          and overseeing data collection in the 5 countries
        </li>
        <li>
          500+ volunteer university student mentors supporting program delivery
        </li>
      </ul>

      <h2>The right fit</h2>

      <p>
        The gig is for 3-5 research partners with global reach; representation
        from all three continents AIME operates in is desirable, but not
        essential.
      </p>
      <ol>
        <p>The right partners will be:</p>
        <li>
          Reputed research entities with a global standing and recognition in
          their respective fields – Universities, research agencies, think
          tanks, independent researchers, etc.
        </li>
        <li>
          Aligned to AIME values&nbsp;
          <Anchor to="/going-global#philosophies">described above</Anchor>
        </li>
        <li>Agile, adaptable and flexible</li>
        <li>
          Practical and solutions-focused, your research will have real-life
          impact and create measurable change in the world we live in.
        </li>
      </ol>

      <h2>What you’ll research</h2>
      <p>
        {`We have 5 nations that are all at different stages of implementation
        of the AIME program and the adoption of the Imagination Curriculum.
        Together with the AIME team, we'll co-design a creative and adaptive
        research agenda that can not only capture the impact and efficacy of
        the work of the imagination curriculum, but also think of how the heck
        we are going to communicate this so the teachers, NGO leaders, and
        mentors out there who are desperate for a script, a guidebook, a
        curriculum, can have knowledge and awareness that this exists and
        they can get it, now.`}
      </p>
      <div className={styles.resourcePannel}>
        <div className={styles.resourcePannelContainer}>
          <div className={styles.impactContainer}>
            <h3 className={styles.title}>1</h3>
            <h3 className={styles.title}>IMPACT ON MENTEES</h3>
            <p>
              <strong>(high school kids)</strong>
            </p>
            <p>
              a) Our impact on educational outcomes, and post-school transition
              pathways
              <br />
              b) Our impact on other holistic measures – e.g. imagination,
              growth mindset, resilience, connection to culture, strength in
              identity etc.
            </p>
          </div>
          <div className={styles.impactContainer}>
            <h3 className={styles.title}>2</h3>
            <h3 className={styles.title}>IMPACT ON MENTORS</h3>
            <p>
              <strong>(university students)</strong>
            </p>
            <p>
              a) Our impact on University students’ campus life experience
              <br />
              b) Our impact on other holistic measures – e.g. their leadership,
              interpersonal, artistic cultural competences / skills etc.
            </p>
          </div>
          <div className={styles.impactContainer}>
            <h3 className={styles.title}>3</h3>
            <h3 className={styles.title}>IMPACT ON THE SYSTEM</h3>
            <p>
              <strong>(society)</strong>
            </p>
            <p>
              {`Our impact on school & university campuses, on parents & families, 
              on wider communities & on the world at large.`}
            </p>
          </div>
        </div>
      </div>

      <h1 className={styles.greenGradient}>Register</h1>

      <p>
        {`If you're reading this and know you can deliver some amazing
        outcomes when you join us on this research journey, we really
        want to hear from you. As a first step, please register your
        interest by filling out the details below.`}
      </p>
      <p>
        {`You'll receive an email with guiding questions and the process
        to submit your application before the deadline of 29th of November, 5 PM AEST.`}
      </p>
      {/* <EoiForm
        uploadData={uploadCustomEOI}
        tableName={TABLE_NAME}
        showBeAFriendCheckbox
        handleReloadData={handleReloadData}
      /> */}
    </div>
  </section>
);

Register.propTypes = {
  setReference: PropTypes.func.isRequired,
  // handleReloadData: PropTypes.func.isRequired,
};

export default Register;
