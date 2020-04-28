import React from 'react';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Layout from '../../hocs/basicLayout';
import { SimpleBanner } from '../../components/banner/index';
import styles from './styles.module.scss';

const Founder = () => (
  <Layout>
    <SimpleBanner
      title={(
        <>
          Our
          <strong>
              Founder &amp; CEO
          </strong>
        </>
      )}
      groovy
      titleType="headingLockup"
      titleStyleClass={styles.founderBannerHeader}
      bannerContainerClass={`${styles.heroBannerDefault} ${styles.heroBannerFounder}`}
      bannerContentWrapperClass={styles.bannerContentWrapperClass}
      bannerContentClass={styles.bannerWrapper}
    />
    <article>
      <div className={styles.plainContentWrapper}>
        <Paragraph>
          Jack Manning Bancroft is the CEO and Founder of AIME, an award-winning
          social movement that uses mentoring and imagination to unlock the potential
          of marginalised youth to create a fairer world. He is also the Founder,
          Executive Producer and Host of&nbsp;
          <a
            href="https://www.youtube.com/playlist?list=PLjfNcXcq0TOTTMNfKomUHtgdjliQ2iW80"
            target="_blank"
            rel="noopener noreferrer"
          >
            {'IMAGI-NATION{TV}'}
          </a>
          , and a puppeteer.
        </Paragraph>
        <Paragraph>
          AIME, founded in 2005, is an imaginative educational program and
          a volunteer mentoring movement - a social network for good.
        </Paragraph>
        <Paragraph>
          {`IMAGI-NATION{TV}, founded in March 2020, is a weekday TV
          show that puts a mentor in the home for every kid, every day.`}
        </Paragraph>
        <Paragraph>
        Jack, a proud Indigenous Australian from the Bundjalung nation,
        founded AIME in 2005 at the age of 19, with the goal of finding a
        solution to Indigenous inequality in Australia. Driven by
        imagination and audacious kindness, he re-engineered the concept of
        mentoring. He developed a cost-effective and scalable model that
        brings university students together as volunteers to mentor
        marginalised and minority high schools kids so that they complete
        high school successfully, go on to university and ultimately, into
        fulfilling careers.
        </Paragraph>
        <Paragraph>
        Over the past 16 years, AIME’s mentoring tools and techniques - its
        Imagination Curriculum, of which Jack has been the lead designer -
        have helped transform schooling for thousands of marginalised kids.
        </Paragraph>
        <Paragraph>
        Jack’s vision is to unlock the AIME Imagination Curriculum for every
        school in the world and train teachers to be mentors so we can
        achieve educational parity and beyond for marginalised kids across
        the Earth’s surface.
        </Paragraph>
        <Paragraph>
        Jack has received a string of awards and recognition for his work,
        his philosophy, and his vision for a fairer world. He was MJ Bale’s
        Man of Character in 2014 and won Australia’s Happy Harold Education
        Award in 2013. In 2010, five years after founding AIME, he received
        the
          {' '}
          <a href="https://hrawards.humanrights.gov.au/2010-human-rights-medal-and-awards-winners" rel="noopener noreferrer" target="_blank">
          Australian Human Rights Medal
          </a>
,
          {' '}
          <a href="https://www.gq.com.au/men-of-the-year/previous-winners/jack-manning-bancroft/news-story/105819449424e7c085ba1527b80f4fda" rel="noopener noreferrer" target="_blank">
          GQ Man of Inspiration
          </a>
, New South Wales
          {' '}
          <a href="https://www.australianoftheyear.org.au/alumni/connect/jack-manning-bancroft/" rel="noopener noreferrer" target="_blank">
          Young Australian of the Year
          </a>
, and the University of Sydney
          {' '}
          <a href="https://sydney.edu.au/news/84.html?newsstoryid=5978" rel="noopener noreferrer" target="_blank">
          Young Alumni of the Year
          </a>
          {' '}
awards. Most recently Jack was the
          {' '}
          <a href="http://www.mediaring.com.au/news/indigenous-entrepreneur-becomes-australias-youngest-honorary-doctor/#more-981" rel="noopener noreferrer" target="_blank">
          youngest person in Australian history to receive an Honorary Doctorate
          </a>
.
        </Paragraph>
        <Paragraph>
        Jack holds a BA in Media and Communications from the University of
        Sydney. He was awarded the Stanford Australia Foundation Dyson
        Bequest Scholarship in 2013 to attend Stanford University’s flagship
        Executive Program. In 2016, he received an Honorary Fellowship from
        Western Sydney University and the same year, became the youngest
        person in Australian history to receive an Honorary Doctorate from
        the University of South Australia.
        </Paragraph>
        <Paragraph>
        Jack is also a published children’s author with
          {' '}
          <a href="https://www.hardiegrant.com/au/publishing/bookfinder/book/the-eagle-inside-by-jack-manning-bancroft/9781760125271" rel="noopener noreferrer" target="_blank">The Eagle Inside</a>
,
        and has written
          {' '}
          <a href="https://www.goodreads.com/book/show/45899178-the-mentor" rel="noopener noreferrer" target="_blank">The Mentor</a>
          {' '}
and
          {' '}
          <a href="https://www.amazon.co.uk/Mentoring-Fairer-World-Jack-Manning-Bancroft/dp/1743793537" rel="noopener noreferrer" target="_blank">Mentoring - The Key to a Fairer World</a>
.
        </Paragraph>
      </div>
    </article>
  </Layout>
);

export default Founder;
