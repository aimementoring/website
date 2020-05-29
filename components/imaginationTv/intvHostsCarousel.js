import React from 'react';
import dynamic from 'next/dynamic';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Carousel from '../carousel';
import styles from './intvHostsCarousel.module.scss';

const ImaginationTvCard = dynamic(() => import('./imaginationTvCard'));

const IntvHostsCarousel = () => (
  <Carousel type="multipleSlides" className={styles.intvHostsCarousel}>
    <ImaginationTvCard
      episodePanelClass={styles.episodePanel}
      episodeHeaderClass={styles.episodeHeader}
      headingLockupClass={styles.headingLockup}
      episodeContentInfoClass={styles.episodeContentInfo}
      title="Hope"
      image="puppet-hope@2x"
    >
      <Paragraph>
        She is slow, thoughtful and kind to all. Full of wisdom. Always finding the silver lining.
      </Paragraph>
    </ImaginationTvCard>
    <ImaginationTvCard
      episodePanelClass={styles.episodePanel}
      episodeHeaderClass={styles.episodeHeader}
      headingLockupClass={styles.headingLockup}
      episodeContentInfoClass={styles.episodeContentInfo}
      title="Jack Manning Bancroft"
      image="puppet-jmb"
    >
      <Paragraph>
        {'Executive Producer & Founder of IMAGI-NATION{TV}.'}
        <br />
        CEO & Founder of AIME
      </Paragraph>
    </ImaginationTvCard>
    <ImaginationTvCard
      episodePanelClass={styles.episodePanel}
      episodeHeaderClass={styles.episodeHeader}
      headingLockupClass={styles.headingLockup}
      episodeContentInfoClass={styles.episodeContentInfo}
      title="Asterix"
      image="puppet-asterix"
    >
      <Paragraph>
        A quiet, kind, British gender-neutral youngster. Holds the moment.
        Insightful interviewer - finds strength in silence.
      </Paragraph>
    </ImaginationTvCard>
    <ImaginationTvCard
      episodePanelClass={styles.episodePanel}
      episodeHeaderClass={styles.episodeHeader}
      headingLockupClass={styles.headingLockup}
      episodeContentInfoClass={styles.episodeContentInfo}
      title="Blue"
      image="puppet-blue"
    >
      <Paragraph>
        Brashy Californian guy, totally radical, fast-paced in life. High energy host.
      </Paragraph>
    </ImaginationTvCard>
    <ImaginationTvCard
      episodePanelClass={styles.episodePanel}
      episodeHeaderClass={styles.episodeHeader}
      headingLockupClass={styles.headingLockup}
      episodeContentInfoClass={styles.episodeContentInfo}
      title="Panga"
      image="puppet-panger"
    >
      <Paragraph>
        Stuck in the chaos. Her father was a pangolin - the creatures now
        feelings the brunt of COVID-19. Her mother was an American
        long-eared bat. Panga is a plucky young Aussie woman, ready
        to go and get into the world.
      </Paragraph>
    </ImaginationTvCard>
    {/* TODO: hiding until we have an image / more detail
      <ImaginationTvCard
      episodePanelClass={styles.episodePanel}
      episodeHeaderClass={styles.episodeHeader}
      headingLockupClass={styles.headingLockup}
      episodeContentInfoClass={styles.episodeContentInfo}
      title="Mystery Guest Co-Hosts &amp; Kid Co-Hosts"
      image="puppet-hope@2x"
    >
      <Paragraph>
        &nbsp;
      </Paragraph>
    </ImaginationTvCard> */}

  </Carousel>
);

export default IntvHostsCarousel;
