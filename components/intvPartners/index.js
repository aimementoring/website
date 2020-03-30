import React from 'react';
import PropTypes from 'prop-types';
import { Components } from 'aime-blueprint';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Carousel from '../carousel';
import IntercomChat from '../intercom';
import styles from './intvPartners.module.scss';

const {
  Title,
} = Components;

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const CAROUSEL_SLIDES = [
  {
    image: `${ASSETS_URL}/assets/images/partners/waverly.png`,
    title: 'Waverly',
    type: 'Partner',
    paragraph: `AIME is not only mighty, it is crucial. It has the power to knit 
    the entire global community together through education and endorses 
    mentorship in the best possible way. It will lift, it will deepen, 
    it will transform.`,
  },
  {
    image: `${ASSETS_URL}/assets/images/partners/pedestrian.png`,
    title: 'Pedestrian Group',
    type: 'Founding Partner',
    paragraph: `AIME is not only mighty, it is crucial. It has the power to knit 
    the entire global community together through education and endorses 
    mentorship in the best possible way. It will lift, it will deepen, 
    it will transform.`,
  }, {
    image: `${ASSETS_URL}/assets/images/partners/warragul.png`,
    title: '',
    type: 'Partner',
    paragraph: `AIME is not only mighty, it is crucial. It has the power to knit 
  the entire global community together through education and endorses 
  mentorship in the best possible way. It will lift, it will deepen, 
  it will transform.`,
  }, {
    image: `${ASSETS_URL}/assets/images/partners/background.png`,
    title: '',
    type: 'Partner',
    paragraph: `AIME is not only mighty, it is crucial. It has the power to knit 
the entire global community together through education and endorses 
mentorship in the best possible way. It will lift, it will deepen, 
it will transform.`,
  },


];

const IntvPartners = () => (
  <>
    <section className={styles.partnersWrapper}>
      <div className={styles.partnersHeader}>
        <Title className={styles.subTitle} type="h3Title">
      Our partners
        </Title>
        <div className={styles.becomeAPartnerBtn}>
          <IntercomChat label="Become a partner" />
        </div>
      </div>
      <Carousel
        useCenterMode
        type="ambassadors"
        className={styles.partnersCarousel}
      >
        {CAROUSEL_SLIDES.map((slide) => <IntvPartnersSlide {...slide} key={slide.title} />)}
      </Carousel>
    </section>
  </>
);

const IntvPartnersSlide = ({
  image, title, type, paragraph,
}) => (
  <div className={`${styles.partnerContainer} ${styles.partnerSlideWrapper}`}>
    <img src={image} alt={title} />
    <div className={styles.partnerContent}>
      <div className={styles.partnerContentWrapper}>
        <div className={styles.titleContainer}>
          <Title
            type="h4Title"
            className={styles.partnerName}
          >
            {title}
          </Title>
          <Title
            type="h5Title"
            className={styles.partnerType}
          >
            {type}
          </Title>
          <Paragraph className={styles.partnerQuote}>
            {paragraph}
          </Paragraph>
        </div>
      </div>
    </div>
  </div>
);

IntvPartnersSlide.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default IntvPartners;
