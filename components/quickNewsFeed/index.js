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
    <Title type="h5Title">
      boop boop boop boop boop boop boop boop boop boop 
    </Title>
  </section>
);

export default QuickNewsFeed;
