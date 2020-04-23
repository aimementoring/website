import React from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import styles from './testimonials.module.scss';

const Carousel = dynamic(() => import('../carousel'));

const Testimonials = () => {
  const customCarouselValues = {
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: true,
          infinite: true,
          slidesToScroll: 1,
          swipeToSlide: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials">
      <div className="xs-px2 sm-px3 md-p4 lg-p4">
        <Title type="h4Title" className={styles.testiHeader}>
          Readers are saying...
        </Title>

        <div className="carousel relative xs-px3 sm-px2 md-px3 lg-px3">
          <Carousel type="singleSlide" className="testimonials-carousel" settings={customCarouselValues}>
            <div className="flex-center flex-wrap">
              <div className="col-12 sm-col-6 mx-auto">
                <div className="p1">
                  <Paragraph>
                    This book led me to redemption, redemption of my roots, my culture, my past,
                    my present and my future. This is now my favourite book, to me it’s not just a
                    book. It’s a reminder, telling me I am what I am and nothing or no one can
                    stand in my way and tell me I’m not.
                  </Paragraph>
                  <p className="signature-font-family f-20 mt2">- Hope Bradshaw-Wright</p>
                </div>
              </div>
            </div>
            <div className="flex-center flex-wrap">
              <div className="col-12 sm-col-6 mx-auto">
                <div className="p1">
                  <Paragraph>
                    A riveting story with eloquent prose and brutal honesty.
                    I can&apos;t wait to read
                    the sequel.
                  </Paragraph>
                  <p className="signature-font-family f-20 mt2">- Patrick Orme (AIME Staffer)</p>
                </div>
              </div>
            </div>
            <div className="flex-center flex-wrap">
              <div className="col-12 sm-col-6 mx-auto">
                <div className="p1">
                  <Paragraph>
                    The messages are very clear. Sometimes you have to get knocked down lower than
                    you’ve ever been, to stand up taller than you ever were before.
                  </Paragraph>
                  <p className="signature-font-family mt2 f-20">
                    - Rhian Miller (AIME Mentor &amp; Centre Manager)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-center flex-wrap">
              <div className="col-12 sm-col-6 mx-auto">
                <div className="p1">
                  <Paragraph>
                    Just like AIME itself, ‘the Mentor’ is entrenched with human connection. Very
                    rarely do books find a way to draw you in and unlock your mind like this book.
                  </Paragraph>
                  <p className="signature-font-family mt2 f-20">
                    - Emma Dunn (AIME Mentor Leader &amp; Program Assistant)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-center flex-wrap">
              <div className="col-12 sm-col-6 mx-auto">
                <div className="p1">
                  <Paragraph>
                    The book made me reflect on my own life especially as a young Indigenous man
                    who went to Uni to get the skills to change things for the people in my
                    community. The Mentor challenged me to be ambitious in my actions as well as
                    thoughts.
                  </Paragraph>
                  <p className="signature-font-family mt2 f-20">
                    - Rhys Pearcy (AIME Mentor &amp; Program Manager)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-center flex-wrap">
              <div className="col-12 sm-col-6 mx-auto">
                <div className="p1">
                  <Paragraph>
                    Thank you for the work you have done in Australia and thank you for having the
                    courage to dream bigger and go global. Thank you for sharing your inspiring
                    story and continuing to take as many people as possible on such an important
                    journey.
                  </Paragraph>
                  <p className="signature-font-family mt2 f-20">- Emma Gallagher</p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
