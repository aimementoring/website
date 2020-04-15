import React from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Carousel from '../carousel';
import IntercomChat from '../intercom';
import styles from './intvPartners.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const CAROUSEL_SLIDES = [
  {
    image: `${ASSETS_URL}/assets/images/partners/pedestrian.png`,
    title: 'Pedestrian Group',
    type: 'Founding Partner',
    paragraph: ` `,
  },
  {
    image: `${ASSETS_URL}/assets/images/partners/background.png`,
    title: 'Background',
    type: 'Production Partner',
    paragraph: ` `,
  }, {
    image: `${ASSETS_URL}/assets/images/partners/logo-melbcomedyfest@2x.jpg`,
    title: 'Melbourne International Comedy Festival',
    type: 'Cancelled not Cancelled Partner',
    paragraph: `At a time when young people are having to stay at home, it’s
    fabulous to see organisations like AIME continuing to deliver their programs
    and mentoring for kids in the virtual world. We are devastated that we were
    not able to transform our city for this year’s Melbourne International
    Comedy Festival for the inspiration and entertainment of hundreds of
    thousands of comedy lovers. It’s a real treat to see Randy Feltface
    featured as part of the first Cancelled, Not Cancelled segment, delivering
    a laugh and some inspiration to young people across the globe.`,
  }, {
    image: `${ASSETS_URL}/assets/images/logos/partners/logo-grounded-festival.jpg`,
    title: 'Grounded Summit',
    type: 'Cancelled not Cancelled Partner',
    paragraph: `Grounded is honoured to be featured on AIME's IMAGI-NATION{TV}
    alongside Damon Gameau and 2040. Many people hear about the climate crisis
    and their eyes glaze over. But not young people. They are demanding action
    from world leaders because they know we are running out of time. Their
    imagination and determination brings me hope that we can deliver solutions
    to reverse this crisis and preserve livable parts of our planet.`,
  }, 
];

const IntvPartners = () => (
  <>
    <section className={styles.partnersWrapper}>
      <div className={styles.partnersHeader}>
        <Title className={styles.subTitle} type="h3Title">
          Our partners
        </Title>
      </div>
      <Carousel
        mode="center"
        type="ambassadors"
        className={styles.partnersCarousel}
      >
        {CAROUSEL_SLIDES.map((slide) => <IntvPartnersSlide {...slide} key={slide.title} />)}
      </Carousel>
      <div className={styles.becomeAPartnerBtn}>
        <IntercomChat label="Become a partner" />
      </div>
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
