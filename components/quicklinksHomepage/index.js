import React from 'react';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Anchor from '../common/link';
import './style.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const QuicklinksHomepage = () => (
  <div className="quicklinksPanel">
    <Title type="h3Title" className="quicklinksHeader">
      Get involved
    </Title>
    <div className="quicklinksGrid">
      <div className="quicklinkGridItem">
        <Anchor href="#" className="quicklinkImage">
          <img
            src={`${ASSETS_URL}/assets/images/illustrations/team-flag.png`}
            alt="Team Flag"
          />
        </Anchor>
        <Paragraph>
          <Anchor to="/get-involved" className="quicklinkTitle">
            Partner with us
          </Anchor>
        </Paragraph>
      </div>

      <div className="quicklinkGridItem">
        <Anchor href="https://shop.aimementoring.com/" className="quicklinkImage">
          <img
            src={`${ASSETS_URL}/assets/images/illustrations/hoodie-apparel.png`}
            alt="Hoodie"
          />
        </Anchor>
        <Paragraph>
          <Anchor to="https://shop.aimementoring.com/" target="_blank" className="quicklinkTitle">
            Buy a hoodie
          </Anchor>
        </Paragraph>
      </div>

      <div className="quicklinkGridItem">
        <Anchor to="/be-a-mentor" className="quicklinkImage">
          <img
            src={`${ASSETS_URL}/assets/images/illustrations/thumbsup-smiley.png`}
            alt="Smiley thumbs up"
          />
        </Anchor>
        <Paragraph>
          <a href="/be-a-mentor" className="quicklinkTitle">
            Become a mentor
          </a>
        </Paragraph>
      </div>

      <div className="quicklinkGridItem">
        <Anchor to="/get-involved" className="quicklinkImage">
          <img
            src={`${ASSETS_URL}/assets/images/illustrations/pinky-earth.png`}
            alt="Pink Earth"
          />
        </Anchor>
        <Paragraph>
          <Anchor href="/get-involved" className="quicklinkTitle">
            Get involved
          </Anchor>
        </Paragraph>
      </div>

      <div className="quicklinkGridItem">
        <Anchor to="https://aimedonations.raisely.com/" target="_blank" className="quicklinkImage">
          <img
            src={`${ASSETS_URL}/assets/images/illustrations/bunch-flowers.png`}
            alt="Bunch of Flowers"
          />
        </Anchor>
        <Paragraph>
          <Anchor href="https://aimedonations.raisely.com/" target="_blank" className="quicklinkTitle">
            Donate
          </Anchor>
        </Paragraph>
      </div>
    </div>
  </div>
);

export default QuicklinksHomepage;
