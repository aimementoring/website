import React from 'react';
import PropTypes from 'prop-types';
import Anchor from '../../components/common/link';
import Popup from '../../components/goingGlobal/popup';
import styles from './goingGlobal.module.scss';

const CaseStudies = ({ setReference, handleScrollAfterLastPopup }) => (
  <>
    <section
      ref={(el) => setReference('casestudies', el)}
      className={styles.caseStudiesSection}
    >
      <Popup scrollAfterLastPopup={handleScrollAfterLastPopup} />
    </section>

    <section className={styles.textPanel}>
      <p>Unfamiliar with AIME? Here’s the back story...</p>
      <Anchor
        className={styles.btn}
        to="/story/the-backdrop-to-aime"
        target="_blank"
      >
        The Backdrop to AIME
      </Anchor>
    </section>
  </>
);

CaseStudies.propTypes = {
  setReference: PropTypes.func.isRequired,
  handleScrollAfterLastPopup: PropTypes.func.isRequired,
};

export default CaseStudies;
