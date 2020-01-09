import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Title from 'aime-blueprint/lib/components/title';
import Anchor from '../common/link';
import styles from './ambassadors.module.scss';

const Carousel = dynamic(() => import('../carousel'));

const CAROUSEL_SLIDES = [
  {
    image: styles.mentorUzo,
    title: 'Uzo Aduba',
    paragraph: 'By standing together with dignity and hope for the future, AIME transforms lives.',
  },
  {
    image: styles.mentorPatrick,
    title: 'Patrick J. Adams',
    paragraph: `Beyond my family, no people have helped shape my life, my career and my view
      of the world more than the mentors I have been lucky enough to work, play and
      live with. I’m so excited to have found AIME and to do everything I can to
      serve the cause of mentorship all over the world.`,
  },
  {
    image: styles.mentorIan,
    title: 'Ian Thorpe',
    paragraph: `I believe in the work AIME does and I want to see it broaden to being a
      service globally. I want to see this happen because I believe in the young
      people of our future and the future they can create for the world.`,
  },
];

const Ambassadors = () => (
  <div className={styles.mainContainer}>
    <div className={styles.mentorsSection}>
      <div className={styles.mentorsSectionWrapper}>
        <h1>
          <span className={styles.ambassadorsPreText}>Our</span>
          <span className={styles.ambassadorsText}>Ambassadors</span>
        </h1>
        <div className={styles.carousel}>
          <Carousel type="ambassadors">
            {CAROUSEL_SLIDES.map((slide) => <AmbassadorSlide {...slide} key={slide.title} />)}
          </Carousel>
        </div>
      </div>
    </div>
  </div>
);

const AmbassadorSlide = ({ image, title, paragraph }) => (
  <div className={styles.mentorSlideWrapper}>
    <div className={styles.mentorImageWrapper}>
      <Anchor
        to="/ambassadors"
        className={classNames(styles.homepageMentorsImage, image)}
      >
        &nbsp;
      </Anchor>
    </div>
    <div className={styles.mentorContent}>
      <div className={styles.mentorContentWrapper}>
        <div className={styles.titleContainer}>
          <Title type="h4Title" theme={process.env.REACT_APP_THEME}>{title}</Title>
          <Paragraph theme={process.env.REACT_APP_THEME}>Ambassador</Paragraph>
          <Paragraph theme={process.env.REACT_APP_THEME}>
            {paragraph}
          </Paragraph>
          <Anchor to="/ambassadors" className={styles.linkButton}>
            See more ambassadors
          </Anchor>
        </div>
      </div>
    </div>
  </div>
);

AmbassadorSlide.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default Ambassadors;
