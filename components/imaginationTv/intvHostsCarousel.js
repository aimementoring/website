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
      title="JMB"
      image="puppet-jmb"
    >
      <Paragraph>
        Jack Manning Bancroft.
      </Paragraph>
    </ImaginationTvCard>
    <ImaginationTvCard
      title="Asterix"
      image="puppet-asterix"
    >
      <Paragraph>
        A quiet, kind, British gender-nuetral youngster. Holds the moment. Insightful interviewer - finds strength in silence.
      </Paragraph>
    </ImaginationTvCard>
    <ImaginationTvCard
      title="Blue"
      image="puppet-blue"
    >
      <Paragraph>
        Brashy Californian guy, totally radical, fast-paced in life. High energy host.
      </Paragraph>
    </ImaginationTvCard>
    <ImaginationTvCard
      title="Panga"
      image="puppet-panger"
    >
      <Paragraph>
        Stuck in the chaos. Her father was a pangolin - the creatures now
        feelings the brunt of COVID-19 &mdash; Her mother an American
        long-eared bat. Panga is a plucky young Aussie woman, ready
        to go and get into the world.
      </Paragraph>
    </ImaginationTvCard>
    <ImaginationTvCard
      title="Mystery Guest Co Hosts &amp; Kid Co Hosts"
      image="puppet-hope@2x"
    >
      <Paragraph>
        -
      </Paragraph>
    </ImaginationTvCard>

  </Carousel>
);

export default IntvHostsCarousel;
