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
            src={`${ASSETS_URL}/assets/images/illustrations/team-flag.png`}
            alt="Team Flag"
          />
        </a>
        <Paragraph>
          <a href="#" className="quicklinkTitle">
            Partner with us
          </a>
        </Paragraph>
      </div>
      
      <div className="quicklinkGridItem">
        <a href="https://shop.aimementoring.com/" className="quicklinkImage">
          <img
            src={`${ASSETS_URL}/assets/images/illustrations/hoodie-apparel.png`}
            alt="Hoodie"
          />
        </a>
        <Paragraph>
          <a href="https://shop.aimementoring.com/" target="_blank" className="quicklinkTitle">
            Buy  a hoodie
          </a>
        </Paragraph>
      </div>

      <div className="quicklinkGridItem">
        <a href="/be-a-mentor" className="quicklinkImage">
          <img
            src={`${ASSETS_URL}/assets/images/illustrations/thumbsup-smiley.png`}
            alt="Smiley thumbs up"
          />
        </a>
        <Paragraph>
          <a href="/be-a-mentor" className="quicklinkTitle">
            Become a uni mentor
          </a>
        </Paragraph>
      </div>

      <div className="quicklinkGridItem">
        <a href="/positions" className="quicklinkImage">
          <img
            src={`${ASSETS_URL}/assets/images/illustrations/pinky-earth.png`}
            alt="Pink Earth"
          />
        </a>
        <Paragraph>
          <a href="/positions" className="quicklinkTitle">
            Work  with us
          </a>
        </Paragraph>
      </div>

      <div className="quicklinkGridItem">
        <a href="https://aimedonations.raisely.com/" target="_blank" className="quicklinkImage">
          <img
            src={`${ASSETS_URL}/assets/images/illustrations/bunch-flowers.png`}
            alt="Bunch of Flowers"
          />
        </a>
        <Paragraph>
          <a href="https://aimedonations.raisely.com/" target="_blank" className="quicklinkTitle">
            Donate
          </a>
        </Paragraph>
      </div>
    </div>
  </div>
);

export default QuicklinksHomepage;
