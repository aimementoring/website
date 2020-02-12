import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Components } from 'aime-blueprint';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Anchor from '../common/link';
import styles from './ambassadors.module.scss';
import Carousel from '../carousel';


const {
  Title,
  Button,
} = Components;

const CAROUSEL_SLIDES = [
  {
    image: styles.mentorMakhale,
    title: 'Makhale Tshifaro',
    type: 'Hooded Scholar',
    paragraph: 'I know that one’s greatest weakness lies in giving up when they fail, but the most certain way to succeed is always to try one last time. This is why I joined AIME, because failure is the opportunity to begin again more intelligently and I want to encourage mentees to use the power of failure.',
  },
  {
    image: styles.mentorUzo,
    title: 'Uzo Aduba',
    type: 'Ambassadors',
    paragraph: 'By standing together with dignity and hope for the future, AIME transforms lives.',
  },
  {
    image: styles.mentorDarcy,
    title: 'Darcy Sketcher',
    type: 'Mentor',
    paragraph: `I was sick of reading the paper or hearing stories of inequality
    in our own backyard. I decided to get off my backside and do something about
    it. AIME encourages and empowers our mentees to create a fairer and a more
    loving world.`,
  },
  {
    image: styles.mentorPatrick,
    title: 'Patrick J. Adams',
    type: 'Ambassadors',
    paragraph: `Beyond my family, no people have helped shape my life, my career and my view
      of the world more than the mentors I have been lucky enough to work, play and
      live with. I’m so excited to have found AIME and to do everything I can to
      serve the cause of mentorship all over the world.`,
  },
  {
    image: styles.mentorJade,
    title: 'Jade Symons',
    type: 'Program Manager',
    paragraph: `AIME and its values are something I really believe in. It’s radical,
    cultural-shifting work is reshaping both the psychological framework of
    Indigenous and non-Indigenous people. AIME’s work really makes you
    believe in humans and our collective capacity.`,
  },
  {
    image: styles.mentorIan,
    title: 'Ian Thorpe',
    type: 'Ambassadors',
    paragraph: `I believe in the work AIME does and I want to see it broaden to being a
      service globally. I want to see this happen because I believe in the young
      people of our future and the future they can create for the world.`,
  },
];

const Ambassadors = () => (
  <div className={styles.mainContainer}>
    <div className={styles.mentorsSection}>
      <div className={styles.mentorsSectionWrapper}>
        <Title type="headingLockup" className={styles.carouselTitle} theme={process.env.REACT_APP_THEME}>
          People of
          <strong>AIME</strong>
        </Title>
        <div className={styles.carousel}>
          <Carousel type="ambassadors">
            {CAROUSEL_SLIDES.map((slide) => <AmbassadorSlide {...slide} key={slide.title} />)}
          </Carousel>
        </div>
      </div>
    </div>
  </div>
);

const AmbassadorSlide = ({
  image, title, type, paragraph,
}) => (
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
          <Title type="h2Title" className={styles.ambassadorName} theme={process.env.REACT_APP_THEME}>{title}</Title>
          <Title type="h5Title" theme={process.env.REACT_APP_THEME}>{type}</Title>
          <Paragraph theme={process.env.REACT_APP_THEME}>
            {paragraph}
          </Paragraph>
          <Button theme={process.env.REACT_APP_THEME} aria-label="cta" type="link" url="/ambassadors">
            Meet our people
          </Button>
        </div>
      </div>
    </div>
  </div>
);

AmbassadorSlide.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default Ambassadors;
