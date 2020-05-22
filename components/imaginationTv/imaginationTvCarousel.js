import React from 'react';
import dynamic from 'next/dynamic';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Carousel from '../carousel';
import styles from './imaginationTvCarousel.module.scss';

const ImaginationTvCard = dynamic(() => import('../../components/imaginationTv/imaginationTvCard'));

const ImaginationTvCarousel = () => (
  <Carousel type="multipleSlides" className={styles.imaginationTvCarousel}>
    <ImaginationTvCard
      day="Monday"
      title="Thinkers"
      image="thinkers_computer"
      color="lightblue"
    >
      <Paragraph>
        Knowledge-holders, teachers, philosophers, and big picture
        thinkers distill the complexity of today to help us imagine
        and create tomorrow.
      </Paragraph>
    </ImaginationTvCard>
    <ImaginationTvCard
      day="Tuesday"
      title="Youngsters"
      image="youngsters_mobile"
      color="aquamarine"
    >
      <Paragraph>
        Youngsters from across the globe reflect on the world they see around them,
        show they are the solution, and inspire us to imagine tomorrow. Includes:
      </Paragraph>
      <Paragraph>
        <strong>President of IMAGI-NATION speeches</strong>
        : Students are given thestage to deliver a 3-minute presidential speech on
        the topic of the week and use the space to inspire us all to imagine
        the world tomorrow.
      </Paragraph>
      <Paragraph>
        <strong>Failure Time</strong>
        : Students take part in a virtual classroom where they
        try new things and learn through failure.
      </Paragraph>
    </ImaginationTvCard>
    <ImaginationTvCard
      day="Wednesday"
      title="Designers"
      image="designers_tv"
      color="orange"
    >
      <Paragraph>
        Those building the world today and tomorrow explore the mindsets, processes,
        philosophy and thinking patterns that help them create solutions.
      </Paragraph>
    </ImaginationTvCard>
    <ImaginationTvCard
      day="Thursday"
      title="Keynote"
      image="keynote_tablet"
      color="purple"
    >
      <Paragraph>
        Giving the stage to people scheduled to speak or perform at now-cancelled
        events to share their wisdom and knowledge with the world.
      </Paragraph>
    </ImaginationTvCard>
    <ImaginationTvCard
      day="Friday"
      title="Artists"
      image="artists_tv"
      color="pink"
    >
      <Paragraph>
        Visual artists from all disciplines take us on a journey of live creation,
        from blank space to work of art, to the accompanying sound of musicians
        with a message.
      </Paragraph>
    </ImaginationTvCard>
  </Carousel>
);

export default ImaginationTvCarousel;
