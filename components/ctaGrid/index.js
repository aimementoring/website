import React from 'react';
import PropTypes from 'prop-types';
import { Components } from 'aime-blueprint';
import styles from './index.scss';

const {
  Title,
  // Paragraph,
  Button,
} = Components;

const CtaGrid = ({ elements }) => (
  <div className="full-width-wrap">
    <div className="cta-container flex">
      {elements.map((cta, index) => (
        <div key={`${cta.title}-${cta.description}`} className={`item center-contents item-${index + 1}`}>
          <div className="item-contents">
            <Title className={styles.ctaLockup} type="headingLockup">
              {cta.title}
            </Title>
            <div className="sub-item-details show-on-hover">
              {/* <Paragraph text={cta.description} /> */}
              <p>{cta.description}</p>
              <div className="sub-item-details show-on-hover">
                {cta.link.indexOf('http') !== -1
                  ? (
                    <Button aria-label="cta" type="link" url={cta.link}>
                      {cta.button}
                    </Button>
                  )
                  : (
                    <Button aria-label="cta-link" type="link" url={cta.link}>
                      {cta.button}
                    </Button>
                  )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

CtaGrid.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CtaGrid;
