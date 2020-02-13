import React, {
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import scrollToComponent from '../../utils/scrollToComponent';
import { isClientSide } from '../../utils/utilities';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import './style.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const QuicklinksHomepage = ({ setReference }) => {
// const QuicklinksHomepage = () => {
  const sectionRefs = {};

  const hash = isClientSide() ? window.location.hash.replace('#', '') : '';

  const scrollHandler = () => {
    if (isClientSide()) {
      const overSection = Object.keys(sectionRefs).find((section) => {
        const top = sectionRefs[section].offsetTop;
        const bottom = top + sectionRefs[section].offsetHeight;
        const scrollPosition = window.pageYOffset;
        return top <= scrollPosition && bottom > scrollPosition;
      });
      if (overSection && overSection !== hash.replace('#', '').toLowerCase()) {
        Router.push(
          `/#${overSection}`,
          `/#${overSection}`,
          { shallow: true },
        );
      }
    }
  };

  useEffect(() => {
    if (isClientSide()) window.addEventListener('scroll', scrollHandler, false);
  }, []);

  useEffect(() => {
    if (isClientSide() && hash && hash !== '') {
      const section = hash.replace('#', '').toLowerCase();
      window.removeEventListener('scroll', scrollHandler, false);
      if (section in sectionRefs) {
        // const scrollerOptions = { align: 'top' };
        // if (section === 'welcome') scrollerOptions.offset = -50;
        scrollToComponent(sectionRefs[section]);
        setTimeout(() => {
          window.addEventListener('scroll', scrollHandler, false);
        }, 1000);
        // .on('end', () => window.addEventListener('scroll', scrollHandler, false));
      }
    }
    const cleanup = () => {
      window.removeEventListener('scroll', scrollHandler, false);
    };
    return cleanup;
  }, [hash]);


  return (
    <div className="quicklinksPanel">
      <Title type="h3Title" className="quicklinksHeader">
        Get involved
      </Title>
      <a href="/#testingscroll">Test CLICK THIS</a>

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
              Buy a hoodie
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
              Become a mentor
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
              Work with us
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
      
      <section
        ref={(el) => setReference('testingscroll', el)}
        className="testingscroll"
      >
        <h1>Boo</h1>

      </section>
    </div>

  );
};

QuicklinksHomepage.propTypes = {
  setReference: PropTypes.func.isRequired,
};

export default QuicklinksHomepage;
