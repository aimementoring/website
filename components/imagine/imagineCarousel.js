import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import Carousel from '../carousel';
import IntercomChat from '../intercom';
import { DonationContext } from '../../context';
import styles from './imagineCarousel.module.scss';

const ImaginationTvCard = dynamic(() => import('../../components/imaginationTv/imaginationTvCard'));

const ImagineCarousel = () => {
  const { toggleDonationModal } = useContext(DonationContext);
  return (
    <Carousel type="multipleSlides" className={styles.imagineCarousel}>
      <ImaginationTvCard
        day="Can you help us"
        title="Fund it?"
        image="shake_hands@2x"
        color="lightblue"
      >
        <Paragraph>
          Jack Manning Bancroft, AIME CEO & Founder, has kicked in $10K of his own
          money to get this going. This will allow for 450 hoodies to be provided
          in-kind as part of our creator grants. We’d love to get up to $50K donated
          to give 2,500 people around the world the chance to create something unique
          and deeply powerful from these times.
        </Paragraph>
        <Paragraph>
          Producers are being invited to support the cost of the “This Hoodie is
          a Film” creation and we&apos;d like to hear from anyone else who can support us.
        </Paragraph>
        <div className={styles.intercomBtnWrap}>
          <IntercomChat label="Let's chat" />
        </div>
        <Paragraph className={styles.paraOrCenter}>
          or
        </Paragraph>
        <Button
          type="button"
          text="Donate"
          theme={process.env.REACT_APP_THEME}
          className={styles.imagineCTABtn}
          containerClassName={styles.secondaryBtn}
          onClickFunction={toggleDonationModal}
        />
      </ImaginationTvCard>
      <ImaginationTvCard
        day="Write it"
        title="with us"
        image="handwriting@2x"
        color="aquamarine"
      >
        <Paragraph>
          Our dream is to create the stage for thousands of marginalised kids to
          use their voice, to write and create part of a feature film, and to join
          household names in film and television for a live creation mentoring
          experiment in making a feature film. We imagine something truly special
          coming from this. Jump on and add your ideas and voice to the script...
        </Paragraph>
        <Button
          theme={process.env.REACT_APP_THEME}
          className={styles.imagineCTABtn}
          containerClassName={styles.secondaryBtn}
          url="https://docs.google.com/document/d/1MyE1Xv8OSsFnJLEL2WNhLL0DbsKJfMtmcrrUUa7BOh8/edit"
          target="_blank"
          type="link"
        >
          Write it
        </Button>
      </ImaginationTvCard>
      <ImaginationTvCard
        day="Or do you wanna"
        title="Film it?"
        image="filmcamera@2x"
        color="orange"
      >
        <Paragraph>
          We&apos;ve created 500 creator grants in the form of a hoodie. Those who want to
          create a scene for the film ‘IMAGINE’ can apply to secure themselves an official
          “This Hoodie is a Film” hoodie. This will be your key to submitting a
          creation into ‘IMAGINE’.
        </Paragraph>
        <Button
          theme={process.env.REACT_APP_THEME}
          className={styles.imagineCTABtn}
          containerClassName={styles.secondaryBtn}
          url="https://aimementoring.typeform.com/to/dRB3xg"
          target="_blank"
          type="link"
        >
          Apply now
        </Button>
      </ImaginationTvCard>

      {/* Seems super hacky but have doubled the content below because the carousel broke
      with only having 3 options. The whole reason we're using this carousel is to get it
      live asap so am doing still going for this hacky double up solution for now.
      !! Remember, if you edit content above to repeat the edits below :( */}

      <ImaginationTvCard
        day="Can you help us"
        title="Fund it?"
        image="shake_hands@2x"
        color="lightblue"
      >
        <Paragraph>
          Jack Manning Bancroft, AIME CEO & Founder, has kicked in $10K of his own
          money to get this going. This will allow for 450 hoodies to be provided
          in-kind as part of our creator grants. We’d love to get up to $50K donated
          to give 2,500 people around the world the chance to create something unique
          and deeply powerful from these times.
        </Paragraph>
        <Paragraph>
          Producers are being invited to support the cost of the “This Hoodie is
          a Film” creation and we&apos;d like to hear from anyone else who can support us.
        </Paragraph>
        <div className={styles.intercomBtnWrap}>
          <IntercomChat label="Let's chat" />
        </div>
        <Paragraph className={styles.paraOrCenter}>
          or
        </Paragraph>
        <Button
          type="button"
          text="Donate"
          theme={process.env.REACT_APP_THEME}
          className={styles.imagineCTABtn}
          containerClassName={styles.secondaryBtn}
          onClickFunction={toggleDonationModal}
        />
      </ImaginationTvCard>
      <ImaginationTvCard
        day="Write it"
        title="with us"
        image="handwriting@2x"
        color="aquamarine"
      >
        <Paragraph>
          Our dream is to create the stage for thousands of marginalised kids to
          use their voice, to write and create part of a feature film, and to join
          household names in film and television for a live creation mentoring
          experiment in making a feature film. We imagine something truly special
          coming from this. Jump on and add your ideas and voice to the script...
        </Paragraph>
        <Button
          theme={process.env.REACT_APP_THEME}
          className={styles.imagineCTABtn}
          containerClassName={styles.secondaryBtn}
          url="https://docs.google.com/document/d/1MyE1Xv8OSsFnJLEL2WNhLL0DbsKJfMtmcrrUUa7BOh8/edit"
          target="_blank"
          type="link"
        >
          Write it
        </Button>
      </ImaginationTvCard>
      <ImaginationTvCard
        day="Or do you wanna"
        title="Film it?"
        image="filmcamera@2x"
        color="orange"
      >
        <Paragraph>
          We&apos;ve created 500 creator grants in the form of a hoodie. Those who want to
          create a scene for the film ‘IMAGINE’ can apply to secure themselves an official
          “This Hoodie is a Film” hoodie. This will be your key to submitting a
          creation into ‘IMAGINE’.
        </Paragraph>
        <Button
          theme={process.env.REACT_APP_THEME}
          className={styles.imagineCTABtn}
          containerClassName={styles.secondaryBtn}
          url="https://aimementoring.typeform.com/to/dRB3xg"
          target="_blank"
          type="link"
        >
          Apply now
        </Button>
      </ImaginationTvCard>
    </Carousel>
  );
};

export default ImagineCarousel;
