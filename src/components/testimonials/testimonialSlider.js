import React from 'react';
import styles from './testimonials.module.scss';

const TestimonialSlider = ({ testimonial }) => (
  <div className={styles.carouselContent}>
    <div className={styles.sliderContainer}>
      <div className={styles.paragraphWrapper}>
        <p className={styles.paragraph}>
          {testimonial.paragraph}
        </p>
        <p className={styles.signature}>{testimonial.signature}</p>
      </div>
    </div>
  </div>
);

export default TestimonialSlider;
