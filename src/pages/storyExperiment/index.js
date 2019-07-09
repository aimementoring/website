import React from 'react';
import { Components } from 'aime-blueprint';
import styles from './index.module.scss';

const { Title } = Components;
// const { AnimatedCircleText } = Components;

const StoryExperiment = () => (
  <div className={styles.pageView}>
    <div className={styles.storyContainer}>
      <div className={styles.content}>
        <h1>This is the</h1>
        {/* 
          Question - for blueprint - when we want to have different styles in the title component... 
          I guess we need to define that in blueprint hey? Think of a set of styles and define it there...
        */}
        <Title type="mainTitle" className={styles.mainHeading}>History of Kindness</Title>
        {/* 
          Do we have a paragraph component?
        */}
        <p>Let's look into how it shines through in a particularly warm and cosy way.</p>

  
        {/* <AnimatedCircleText text="My super story experiment" size={200} duration={8} fontSize={20} reverse /> */}
      </div>

    </div>
  </div>
)

export default StoryExperiment;
