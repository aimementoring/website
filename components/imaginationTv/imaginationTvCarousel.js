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
            World-class teachers and knowledge holders, across our schools and
            universities and further abroad; the philosophers & big picture thinkers
            of the world.
      </Paragraph>
    </ImaginationTvCard>
    <ImaginationTvCard
      day="Tuesday"
      title="Youngsters"
      image="youngsters_mobile"
      color="aquamarine"
    >
      <Paragraph>
        <strong>
              Presidential Speech for IMAGI-NATION
        </strong>
      </Paragraph>
      <Paragraph>
            Every week, students from across the world are given the stage to deliver a
            3-minute speech as the President of IMAGI-NATION. They will focus on the topic
            of the week, and use the space to inspire us all to make sense of the world
            today so we can imagine the world tomorrow.
      </Paragraph>
      <Paragraph>
        <strong>
              CHAOS Classroom
        </strong>
      </Paragraph>
      <Paragraph>
            Join AIME Founder & CEO Jack Manning Bancroft and students from across
            Australia and around the world who will take part in a 7 minute hyperdrive
            lesson on the topic theme of the week. See a real life case study as to how
            to run a classroom digitally amongst the chaos of today.
      </Paragraph>
      <Paragraph>
            We’ll also be inviting boss human guest teachers take on the reins of
            the CHAOS Classroom and run a session on any one of our 21 core values.
      </Paragraph>
    </ImaginationTvCard>
    <ImaginationTvCard
      day="Wednesday"
      title="Designers"
      image="designers_tv"
      color="orange"
    >
      <Paragraph>
            Those building the world today and tomorrow.
            There’s no limit to what we believe is “design”.
      </Paragraph>
      <Paragraph>
            You’ll have the chance to dance around a big picture topic with 2
            other panelists. We are elevating the knowledge of designers who have
            got us here today, who have created the world we live in. We are
            exploring the mindsets, processes, philosophy and thinking patterns
            that have taken you to where you are now.
      </Paragraph>
    </ImaginationTvCard>
    <ImaginationTvCard
      day="Thursday"
      title="Keynote"
      image="keynote_tablet"
      color="purple"
    >
      <Paragraph>
        <strong>
              &quot;Cancelled, not cancelled&quot;
        </strong>
      </Paragraph>
      <Paragraph>
            Each week AIME gives the stage to a festival or conference that has been
            cancelled to have some level of publicity and promotion.
      </Paragraph>
      <Paragraph>
            To inspire marginalised kids to rise up and change their world.
            To inspire us all to seek knowledge, to find inspiration in ideas, and
            embrace the kindness of someone sharing what they know with us.
      </Paragraph>
    </ImaginationTvCard>
    <ImaginationTvCard
      day="Wednesday"
      title="Designers"
      image="designers_tv"
      color="orange"
    >
      <Paragraph>
            Those building the world today and tomorrow.
            There’s no limit to what we believe is “design”.
      </Paragraph>
      <Paragraph>
            You’ll have the chance to dance around a big picture topic with 2
            other panelists. We are elevating the knowledge of designers who have
            got us here today, who have created the world we live in. We are
            exploring the mindsets, processes, philosophy and thinking patterns
            that have taken you to where you are now.
      </Paragraph>
    </ImaginationTvCard>
    <ImaginationTvCard
      day="Thursday"
      title="Keynote"
      image="keynote_tablet"
      color="purple"
    >
      <Paragraph>
        <strong>
              &quot;Cancelled, not cancelled&quot;
        </strong>
      </Paragraph>
      <Paragraph>
            Each week AIME gives the stage to a festival or conference that has been
            cancelled to have some level of publicity and promotion.
      </Paragraph>
      <Paragraph>
            To inspire marginalised kids to rise up and change their world.
            To inspire us all to seek knowledge, to find inspiration in ideas, and
            embrace the kindness of someone sharing what they know with us.
      </Paragraph>
    </ImaginationTvCard>
    <ImaginationTvCard
      day="Friday"
      title="Artists"
      image="artists_tv"
      color="pink"
    >
      <Paragraph>
        <strong>
              What can we create in 25 minutes?
        </strong>
      </Paragraph>
      <Paragraph>
            Up to 5 artists will join us for 25 minutes to set out on a creative
            adventure. To make something from nothing. To show us that we all have
            art in us, we can all create, if only we begin to imagine.
      </Paragraph>
      <Paragraph>
        <strong>
              Musician performance &quot;Let the music play&quot;
        </strong>
      </Paragraph>
      <Paragraph>
            Each week, AIME will profile musicians who will have the chance to play
            a song live on IMAGI-NATION TV. We see the value of music to bring people
            together, to inspire us in dark times, to give us love and hope. This
            segment is to keep the music playing in the face of concerts, festivals
            and gigs being cancelled worldwide.
      </Paragraph>
    </ImaginationTvCard>
  </Carousel>
);

export default ImaginationTvCarousel;
