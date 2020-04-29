import React from 'react';
import PropType from 'prop-types';
import compact from 'lodash/compact';
import Anchor from '../common/link';

import styles from './jobs.module.scss';

const JobPreview = ({
  name,
  id,
  description,
  city,
  country,
  term,
  salaryRange,
  cdnUrl,
  expire,
  state,
}) => {
  const nameAsLink = name.replace(/ /g, '-');
  const location = compact([city, state, country].map((item) => item.trim())).join(', ');
  const details = [];

  if (location) {
    details.push(
      <p key={location} className={styles.customDetails}>
        {location}
      </p>,
    );
  }
  if (term.length) {
    details.push(
      <p key={name} className={styles.details}>
        -
      </p>,
    );
  }
  if (term) {
    details.push(
      <p key={term} className={styles.customDetails}>
        {term}
      </p>,
    );
  }
  if (salaryRange) {
    details.push(
      <p key={`${name}--`} className={styles.details}>
        -
      </p>,
    );
  }
  if (salaryRange) {
    details.push(
      <p key={salaryRange} className={styles.customDetails}>
        {salaryRange}
      </p>,
    );
  }

  return (
    <div className={styles.containerHomePage}>
      <Anchor
        to="/positions/[positionId]/[jobCategory]"
        as={`/positions/${id}/${nameAsLink}`}
        className={styles.anchorClass}
      >
        <div className={styles.containerDetails}>
          <h4 className={styles.nameStyles}>{name}</h4>
          <div className={styles.detailsStyles}>{details}</div>
          <div className={styles.expireStyles}>
            {expire && (
              <span>
                Applications close
                {' '}
                <strong>{expire}</strong>
              </span>
            )}
          </div>
          <p className={styles.descriptionStyles}>{description}</p>
          <span className={styles.lineStyle} />
          <img alt="Small arrow" src={`${cdnUrl}/assets/images/sm-arrow.svg`} />
        </div>
      </Anchor>
    </div>
  );
};

JobPreview.defaultProps = {
  term: undefined,
  salaryRange: undefined,
  expire: null,
};

JobPreview.propTypes = {
  id: PropType.string.isRequired,
  name: PropType.string.isRequired,
  expire: PropType.string,
  description: PropType.string.isRequired,
  city: PropType.string.isRequired,
  state: PropType.string.isRequired,
  country: PropType.string.isRequired,
  term: PropType.string,
  salaryRange: PropType.string,
  cdnUrl: PropType.string.isRequired,
};

export default JobPreview;
