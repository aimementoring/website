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
    paragraph: `“Pedestrian Group has always been a voice of 
    young Aussies. This is a particularly important
    time for PEDESTRIAN.TV to partner with AIME’s
    mentors as they go digital and drive positive
    conversation about the future.” - James McManus, Creative Director`,
  },
  {
    image: `${ASSETS_URL}/assets/images/partners/background.png`,
    title: 'Background',
    type: 'Production Partner',
    paragraph: `“AIME has led the way in adapting and
    transforming structures, and now more than
    ever a paradigm shift is on the horizon. We’re
    excited to bring the insight and knowledge of
    our networks to the table - to see the power of
    imagination let loose in every home, and for the
    youth and fresh ideas this will support.” - Margaret Zhang, Co-Founder`,
  }, {
    image: `${ASSETS_URL}/assets/images/partners/logo-melbcomedyfest@2x.jpg`,
    title: 'Melbourne International Comedy Festival',
    type: 'Cancelled not Cancelled Partner',
    paragraph: `“At a time when young people are having to stay at home, it’s
    fabulous to see organisations like AIME continuing to deliver their programs
    and mentoring for kids in the virtual world. We are devastated that we were
    not able to transform our city for this year’s Melbourne International
    Comedy Festival for the inspiration and entertainment of hundreds of
    thousands of comedy lovers. It’s a real treat to see Randy Feltface
    featured as part of the first Cancelled, Not Cancelled segment, delivering
    a laugh and some inspiration to young people across the globe.”
    - Susan Provan, Festival Director`,
  }, {
    image: `${ASSETS_URL}/assets/images/logos/partners/logo-grounded-festival.jpg`,
    title: 'Grounded Summit',
    type: 'Cancelled not Cancelled Partner',
    paragraph: `“Grounded is honoured to be featured on AIME's IMAGI-NATION{TV}
    alongside Damon Gameau and 2040. Many people hear about the climate crisis
    and their eyes glaze over. But not young people. They are demanding action
    from world leaders because they know we are running out of time. Their
    imagination and determination brings me hope that we can deliver solutions
    to reverse this crisis and preserve livable parts of our planet.”
    - Julia Jackson, Founder, Grounded`,
  }, {
    image: `${ASSETS_URL}/assets/images/partners/logo-conrad-challenge.png`,
    title: 'Conrad Challenge',
    type: 'Cancelled not Cancelled Partner',
    paragraph: `“It was an amazing opportunity to be involved with AIME’s
    IMAGI-NATION TV. The synergy between the Conrad Foundation and AIME is
    clear as we both work to create a world with no borders and encourage
    students to design the future. The future of our planet is dependent
    on encouraging today’s students to think without a box… and I have no
    doubt they are going to seize all opportunities to do so.”
    - Nancy Conrad, Founding Chairman`,
  }, {
    image: `${ASSETS_URL}/assets/images/partners/logo-ais.png`,
    title: 'Australian Institute of Sports',
    type: 'Cancelled not Cancelled Partner',
    paragraph: `“The AIS is proud to be involved with AIME’s IMAGI-NATION{TV}
    , which seeks to tell important stories to thousands of students around
    the world. Amanda’s story both as a Paralympian and a proud Wemba-Wemba
    woman is one such story that should be shared widely. I know Amanda’s
    story will help create better understanding of indigenous culture and
    history,  both in sport and the wider community. Equally, her tenacity
    and passion to achieve what she has and will continue to do despite the
    recent postponement of the 2020 Paralympic Games is inspiration to us all.”
    - Peter Conde, CEO, AIS`,
  },
];

const IntvPartners = () => (
  <>
    <section className={styles.partnersWrapper}>
      <div className={styles.partnersHeader}>
        <Title className={styles.subTitle} type="h3Title">
          Who’s already in the game
        </Title>
        <div className={styles.becomeAPartnerBtn}>
          <IntercomChat label="Become a partner" />
        </div>
      </div>
      <Carousel
        type="multipleSlides"
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
