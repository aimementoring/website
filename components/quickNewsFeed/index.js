import React from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
// import Button from 'aime-blueprint/lib/components/button';
// import Paragraph from 'aime-blueprint/lib/components/paragraph';
import './index.scss';

const VideoButton = dynamic(() => import('../videoButton'));

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const QuickNewsFeed = () => (
  <section className="quickNewsFeed">
    <Title type="h5Title" className="feedContent">
      <span>
        50 Word News - as of 18.02.20
      </span>
      Mentoring has begun in the USA - Apps are open.
      Mentor Applications commenced in Aus and Africa.
      New Pink Imagi-Nation Hoodie Available.
      2020 Imagination Curriculum for every school in the world
      partnerships are being formed. Rocket ship is launching
      - jump on board. - JMB, AIME CEO & Founder
    </Title>
  </section>
);

export default QuickNewsFeed;
