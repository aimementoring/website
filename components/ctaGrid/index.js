import React from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import Button from 'aime-blueprint/lib/components/button';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import IntercomChat from '../../components/intercom';
import styles from './ctaGrid.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

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
                    <Button theme="rainbow" className={styles.ctaGridBtn} aria-label="cta" type="link" url={cta.link}>
                      {cta.button}
                    </Button>
                  )
                  : (
                    <Button theme="rainbow" className={styles.ctaGridBtn} aria-label="cta-link" type="link" url={cta.link}>
                      {cta.button}
                    </Button>
                  )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className={styles.fullWidthPanelWrapper}>
      <div className={styles.partnerPanelWrap}>
        <div className={styles.contentWrap}>
          <img
            src={`${ASSETS_URL}/assets/images/illustrations/speakr@2x.png`}
            alt="speaker"
            className={styles.partnerPanelIcon}
          />
          <Title className={styles.partnerTitle} type="headingLockup">
            Become an AIME
            <strong>
              Partner
            </strong>
          </Title>
          <Paragraph>
            Do you work for or lead an organisation? Maybe you want to
            partner with us? We are currently working through our
            partnership options for 2020 and beyond - We’re open
            to build partnerships in many areas, and have structures
            in place for many already.
          </Paragraph>
          <Paragraph>
            If you want to know more get in touch with Helen,
            our Director of Partnering.
          </Paragraph>
          <div className={styles.intercomBtnWrap}>
            <IntercomChat />
          </div>
        </div> 
      </div>
    </div>
  </div>
);

CtaGrid.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CtaGrid;
