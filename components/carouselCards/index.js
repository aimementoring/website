import React from 'react';
import dynamic from 'next/dynamic';
import styles from './carouselCards.module.scss';

const Carousel = dynamic(() => import('../carousel'));
const Card = dynamic(() => import('../card'));

const CarouselCards = () => (
  <Carousel settings={{ dots: false, autoplaySpeed: 10000 }}>
    <div>
      <div className={styles.cardsCarouselContainer}>
        <Card
          href="/"
          image="//images.ctfassets.net/iz0aikshgysc/2CD4XNN4YwS3x3ThGFqWAd/6b777014c886c7c16c6e03eafa8dcfe1/kpmg-ecom.png"
          title="SUNDAY KINDNESS"
          publishDate="2019-07-05"
          contentCreator="Garma Youth Forum & The AIME Team"
          contentPreview="Following the Uluru Statement From The Heart, in 2019, a group of young Indigenous people have gathered in East Arnhem Land for the Youth Forum at Garma Festival..."
          buttonText="READ MORE"
          type="spotlight"
        />
        <Card
          href="/"
          image="//images.ctfassets.net/iz0aikshgysc/5OlLGV3iEBjmEyS4uzUOMg/bf1c3fe0316edebbca69acc5d0b9f5df/aimefp.png"
          video="https://player.vimeo.com/external/220543875.m3u8?s=fef0be1439c6cd9179ade0e502dea995e0a75a8f"
          title="THE IMAGINATION DECLARATION"
          publishDate="2019-07-05"
          contentCreator="Garma Youth Forum & The AIME Team"
          buttonText="WATCH VIDEO"
          type="spotlight"
        />
        <Card
          href="/"
          image="//images.ctfassets.net/iz0aikshgysc/3yYQNkBDs60DJdyniHhycL/8fbfe825b0025bd1abf871c1f1cdbf79/no-shame-report.jpg"
          title="THE IMAGINATION DECLARATION"
          publishDate="2019-07-05"
          contentCreator="Garma Youth Forum & The AIME Team"
          contentPreview="Following the Uluru Statement From The Heart, in 2019, a group of young Indigenous people have gathered in East Arnhem Land for the Youth Forum at Garma Festival..."
          buttonText="READ MORE"
          type="spotlight"
        />
      </div>
    </div>
    <div>
      <div className={styles.cardsCarouselContainer}>
        <Card
          href="/"
          image="//images.ctfassets.net/iz0aikshgysc/2CD4XNN4YwS3x3ThGFqWAd/6b777014c886c7c16c6e03eafa8dcfe1/kpmg-ecom.png"
          title="SUNDAY KINDNESS"
          publishDate="2019-07-05"
          contentCreator="Garma Youth Forum & The AIME Team"
          contentPreview="Following the Uluru Statement From The Heart, in 2019, a group of young Indigenous people have gathered in East Arnhem Land for the Youth Forum at Garma Festival..."
          buttonText="READ MORE"
          type="spotlight"
        />
        <Card
          href="/"
          image="//images.ctfassets.net/iz0aikshgysc/2CD4XNN4YwS3x3ThGFqWAd/6b777014c886c7c16c6e03eafa8dcfe1/kpmg-ecom.png"
          title="SUNDAY KINDNESS"
          publishDate="2019-07-05"
          contentCreator="Garma Youth Forum & The AIME Team"
          contentPreview="Following the Uluru Statement From The Heart, in 2019, a group of young Indigenous people have gathered in East Arnhem Land for the Youth Forum at Garma Festival..."
          buttonText="READ MORE"
          type="spotlight"
        />
        <Card
          href="/"
          image="//images.ctfassets.net/iz0aikshgysc/2CD4XNN4YwS3x3ThGFqWAd/6b777014c886c7c16c6e03eafa8dcfe1/kpmg-ecom.png"
          title="SUNDAY KINDNESS"
          publishDate="2019-07-05"
          contentCreator="Garma Youth Forum & The AIME Team"
          contentPreview="Following the Uluru Statement From The Heart, in 2019, a group of young Indigenous people have gathered in East Arnhem Land for the Youth Forum at Garma Festival..."
          buttonText="READ MORE"
          type="spotlight"
        />
      </div>
    </div>
  </Carousel>
);

export default CarouselCards;
