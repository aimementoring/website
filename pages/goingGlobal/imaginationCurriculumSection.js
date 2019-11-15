import React from 'react';
import PropTypes from 'prop-types';
import TabComponent from '../../components/goingGlobal/tabComponent';
import styles from './goingGlobal.module.scss';

const ImaginationCurriculum = ({ setReference }) => (
  <section
    ref={(el) => setReference('philosophies', el)}
    className={styles.pppWrapper}
  >
    <h5>
      Throughout our last 15 years, AIME has developed a set of philosophies and
      products that create our Imagination curriculum.
    </h5>
    <TabComponent />
  </section>
);

ImaginationCurriculum.propTypes = {
  setReference: PropTypes.func.isRequired,
};

export default ImaginationCurriculum;
