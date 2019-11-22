import React from 'react';
import PropType from 'prop-types';
import compact from 'lodash/compact';
import Anchor from '../common/link';

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
      <p key={location} className="inline-block">
        {location}
      </p>,
    );
  }
  if (term.length) {
    details.push(
      <p key={name} className="inline-block px1">
        -
      </p>,
    );
  }
  if (term) {
    details.push(
      <p key={term} className="inline-block">
        {term}
      </p>,
    );
  }
  if (salaryRange) {
    details.push(
      <p key={`${name}--`} className="inline-block px1">
        -
      </p>,
    );
  }
  if (salaryRange) {
    details.push(
      <p key={salaryRange} className="inline-block">
        {salaryRange}
      </p>,
    );
  }

  return (
    <div className="homepage-main-actions mb2">
      <Anchor
        to="/positions/[positionId]/[jobCategory]"
        as={`/positions/${id}/${nameAsLink}`}
        className="homepage-main-actions--inner"
      >
        <div className="relative m3">
          <h4 className="feature-font-family regular f-15">{name}</h4>
          <div className="block pt1 f-14 light c-brand-primary">{details}</div>
          <div className="block pt1 pb3 f-14 light c-brand-primary">
            {expire && (
              <span>
                Applications close
                {' '}
                <strong>{expire}</strong>
              </span>
            )}
          </div>
          <p className="light c-grey lh-base f-14 job-description">{description}</p>
          <span className="line bg-brand-tertiary" />
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
