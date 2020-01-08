import React from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import Button from 'aime-blueprint/lib/components/button';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import styles from './ctaGrid.module.scss';

const CtaGrid = ({ elements }) => (
  <div className={styles.ctaGridContainer}>
    <div className={styles.ctaWrapper}>
      {elements.map((cta) => (
        <div key={`${cta.title}-${cta.description}`} className={styles.ctaItem}>
          <div className={styles.itemContents}>
            <div className={styles.itemContentImage} />
            <Title className={styles.ctaLockup} type="headingLockup">
              {cta.title}
            </Title>
            <div className={styles.subItemDetails}>
              <Paragraph text={cta.description} />
              <div className={styles.subItemDetails}>
                {cta.link.indexOf('http') !== -1
                  ? (
                    <Button theme="rainbow" aria-label="cta" type="link" url={cta.link}>
                      {cta.button}
                    </Button>
                  )
                  : (
                    <Button theme="rainbow" aria-label="cta-link" type="link" url={cta.link}>
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
