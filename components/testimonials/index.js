import React from 'react';
import dynamic from 'next/dynamic';
import './testimonials.scss';

const Carousel = dynamic(() => import(/* webpackChunkName 'Carousel' */ '../carousel'));

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
    <div className="testimonials gradient-purple">
      <div className="xs-px2 sm-px3 md-p4 lg-p4">
        <h1 className="center block pt3">
          <span className="highlight-text highlight-text-straight testimonials-highlight-text">
            Readers are saying...
          </span>
        </h1>

        <div className="carousel relative xs-px3 sm-px2 md-px3 lg-px3">
          <Carousel type="testimonials" settings={customCarouselValues}>
            <div className="flex-center flex-wrap">
              <div className="col-12 sm-col-6 mx-auto">
                <div className="p1">
                  <p className="c-white lh-large f-14">
                    {`This book led me to redemption, redemption of my roots, my culture, my past,
                    my present and my future. This is now my favourite book, to me it’s not just a
                    book. It’s a reminder, telling me I am what I am and nothing or no one can
                    stand in my way and tell me I’m not.`}
                  </p>
                  <p className="signature-font-family f-20 mt2 c-white">- Hope Bradshaw-Wright</p>
                </div>
              </div>
            </div>
            <div className="flex-center flex-wrap">
              <div className="col-12 sm-col-6 mx-auto">
                <div className="p1">
                  <p className="c-white lh-large f-14">
                    {`A riveting story with eloquent prose and brutal honesty. I can't wait to read
                    the sequel.`}
                  </p>
                  <p className="signature-font-family mt2 f-20 c-white">
                    - Patrick Orme (AIME Staffer)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-center flex-wrap">
              <div className="col-12 sm-col-6 mx-auto">
                <div className="p1">
                  <p className="c-white lh-large f-14">
                    {`The messages are very clear. Sometimes you have to get knocked down lower than
                    you’ve ever been, to stand up taller than you ever were before.`}
                  </p>
                  <p className="signature-font-family mt2 f-20 c-white">
                    - Rhian Miller (AIME Mentor &amp; Centre Manager)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-center flex-wrap">
              <div className="col-12 sm-col-6 mx-auto">
                <div className="p1">
                  <p className="c-white lh-large f-14 ">
                    {`Just like AIME itself, ‘the Mentor’ is entrenched with human connection. Very
                    rarely do books find a way to draw you in and unlock your mind like this book.`}
                  </p>
                  <p className="signature-font-family mt2 f-20 c-white">
                    - Emma Dunn (AIME Mentor Leader &amp; Program Assistant)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-center flex-wrap">
              <div className="col-12 sm-col-6 mx-auto">
                <div className="p1">
                  <p className="c-white lh-large f-14">
                    The book made me reflect on my own life especially as a young Indigenous man
                    who went to Uni to get the skills to change things for the people in my
                    community. The Mentor challenged me to be ambitious in my actions as well as
                    thoughts.
                  </p>
                  <p className="signature-font-family mt2 f-20 c-white">
                    - Rhys Pearcy (AIME Mentor &amp; Program Manager)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-center flex-wrap">
              <div className="col-12 sm-col-6 mx-auto">
                <div className="p1">
                  <p className="c-white lh-large f-14">
                    Thank you for the work you have done in Australia and thank you for having the
                    courage to dream bigger and go global. Thank you for sharing your inspiring
                    story and continuing to take as many people as possible on such an important
                    journey.
                  </p>
                  <p className="signature-font-family mt2 f-20 c-white">- Emma Gallagher</p>
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
