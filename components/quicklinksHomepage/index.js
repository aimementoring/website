import React from 'react';
import dynamic from 'next/dynamic';
import { Components } from 'aime-blueprint';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import './style.scss';


const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const {
  Title,
  Button,
} = Components;

const QuicklinksHomepage = () => (
  <div className="quicklinksPanel">
    <Title type="h3Title" className="quicklinksHeader">
      Get involved
    </Title>
    <div className="quicklinksGrid">
      <div className="quicklinkGridItem">
        <a href="#" className="quicklinkImage">
          <img
            src={`${ASSETS_URL}/assets/images/illustrations/speakr@2x.png`}
            alt="speaker"
          />
        </a>
        <Paragraph>
          <a href="#" className="quicklinkTitle">
            Partner with us
          </a>
        </Paragraph>
      </div>
      
      <div className="quicklinkGridItem">
        <a href="#" className="quicklinkImage">
          <img
            src={`${ASSETS_URL}/assets/images/illustrations/speakr@2x.png`}
            alt="speaker"
          />
        </a>
        <Paragraph>
          <a href="#" className="quicklinkTitle">
            Partner with us
          </a>
        </Paragraph>
      </div>

      <div className="quicklinkGridItem">
        <a href="#" className="quicklinkImage">
          <img
            src={`${ASSETS_URL}/assets/images/illustrations/speakr@2x.png`}
            alt="speaker"
          />
        </a>
        <Paragraph>
          <a href="#" className="quicklinkTitle">
            Partner with us
          </a>
        </Paragraph>
      </div>
    </div>
  </div>
);

export default QuicklinksHomepage;
