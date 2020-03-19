import React from 'react';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import styles from './spotlightCarousel.module.scss';

const SpotlightCarousel = () => (
  <div className={styles.carouselContainer}>
    <Title type="h3Title">
      <span>
        Aime
      </span>
      Spotlight
    </Title>
    <Paragraph>
      The latest stories, announcements, happenings around the world - right now.
    </Paragraph>
    <article className={styles.articleContainer}>
      <Title type="h5Title">Storie</Title>
      <Paragraph className={styles.postDate}>
        <span>
          Date publish
        </span>
        <span>
          <br />
        </span>
        <span>
          By Who
        </span>
      </Paragraph>
      <Paragraph>
        hola hola hola
      </Paragraph>
      <div>
        <Button theme="rainbow" type="button" className={styles.articleTileLink}>
          READ MORE
        </Button>
      </div>
    </article>
    <article className={styles.articleContainer}>
      <Title type="h5Title">Storie</Title>
      <Paragraph className={styles.postDate}>
        <span>
          Date publish
        </span>
        <span>
          <br />
        </span>
        <span>
          By Who
        </span>
      </Paragraph>
      <Paragraph>
        hola hola hola
      </Paragraph>
      <div>
        <Button theme="rainbow" type="button" className={styles.articleTileLink}>
          READ MORE
        </Button>
      </div>
    </article>
    <article className={styles.articleContainer}>
      <Title type="h5Title">Storie</Title>
      <Paragraph className={styles.postDate}>
        <span>
          Date publish
        </span>
        <span>
          <br />
        </span>
        <span>
          By Who
        </span>
      </Paragraph>
      <Paragraph>
        hola hola hola
      </Paragraph>
      <div>
        <Button theme="rainbow" type="button" className={styles.articleTileLink}>
          READ MORE
        </Button>
      </div>
    </article>
  </div>
);

export default SpotlightCarousel;
