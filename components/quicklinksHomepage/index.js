import React from 'react';
import dynamic from 'next/dynamic';
import { Components } from 'aime-blueprint';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import './index.scss';

const VideoButton = dynamic(() => import('../videoButton'));

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const {
  Title,
  Button,
} = Components;

const QuicklinksHomepage = () => (
  <div className="full-width-wrap content-panel home-intro-panel">
    <div className="lg-wrap sm-col-12 md-col-10 mx-auto">
      <div className="home-intro-panel--inner">
        <div className="sm-col-12 sm-col-6 pr2 home-intro-panel-inner-content">
          <Title type="h1Title">
            Quicklinks here
          </Title>
          
        </div>
      </div>
    </div>
  </div>
);

export default QuicklinksHomepage;
