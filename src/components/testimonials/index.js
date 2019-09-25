import React from 'react';
import Carousel from '../carousel';
import styles from './testimonials.module.scss';
import { TESTIMONIALS } from '../../constants';
import TestimonialSlider from './testimonialSlider';

const customCarouselValues = {
  slidesToShow: 1,
  dots: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToScroll: 1,
        swipeToSlide: true,
        slidesToShow: 1,
      },
    },
  ],
};

const Testimonials = () => (
  <div className={styles.testimonials}>
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>
        <span className={styles.highlightText}>
          Readers are saying...
        </span>
      </h1>
      <div className={styles.carouselContainer}>
        <Carousel type="testimonials" settings={customCarouselValues}>
          {TESTIMONIALS.map(testimonial => (
            <TestimonialSlider testimonial={testimonial} key={testimonial.signature} />
          ))}
        </Carousel>
      </div>
    </div>
  </div>
);

export default Testimonials;
