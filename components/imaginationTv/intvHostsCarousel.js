import React from 'react';
import dynamic from 'next/dynamic';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Carousel from '../carousel';
import styles from './intvHostsCarousel.module.scss';

const ImaginationTvCard = dynamic(() => import('./imaginationTvCard'));

const IntvHostsCarousel = () => (
  <Carousel type="multipleSlides" className={styles.intvHostsCarousel}>
    <ImaginationTvCard
      title="Hope"
      image="puppet-hope@2x"
    >
      <Paragraph>
        She is slow, thoughtful and kind to all. Full of wisdom. Always finding the silver lining.
      </Paragraph>
    </ImaginationTvCard>
    <ImaginationTvCard
      title="Hope"
      image="puppet-hope@2x"
    >
      <Paragraph>
        She is slow, thoughtful and kind to all. Full of wisdom. Always finding the silver lining.
      </Paragraph>
    </ImaginationTvCard>
    <ImaginationTvCard
      title="Hope"
      image="puppet-hope@2x"
    >
      <Paragraph>
        She is slow, thoughtful and kind to all. Full of wisdom. Always finding the silver lining.
      </Paragraph>
    </ImaginationTvCard>
    <ImaginationTvCard
      title="Hope"
      image="puppet-hope@2x"
    >
      <Paragraph>
        She is slow, thoughtful and kind to all. Full of wisdom. Always finding the silver lining.
      </Paragraph>
    </ImaginationTvCard>
   
  </Carousel>
);

export default IntvHostsCarousel;
