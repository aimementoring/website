import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Anchor from '../../common/link';
import NavList from '../../navList';
import styles from './footer.module.scss';

const Footer = ({ location, handleShowIntercom }) => {
  const isTalentPage = (location.pathname.indexOf('/seatontheplane') > -1);
  const currentYear = moment().year();
  const FOOTER_LINKS = [
    {
      title: 'Pitch In',
      items: [
        {
          to: '/beAMentor',
          as: '/be-a-mentor',
          label: 'Become a <strong>Mentor</strong>',
        },
        {
          to: 'https://faqs.aimementoring.com/en/articles/3404540-how-do-i-get-involved',
          target: '_blank',
          label: 'Become a <strong>Partner</strong>',
        },
        {
          to: '/donate',
          label: 'Make a Donation',
        },
      ],
    },
    {
      title: 'What Else?',
      items: [
        {
          to: 'https://shop.aimementoring.com/',
          target: '_blank',
          label: 'Shop Apparel',
        },
        {
          to: '/theMentor',
          as: '/the-mentor',
          label: 'Read the book',
        },
        {
          to: '/about',
          label: 'About AIME',
        },
        {
          to: '/founder',
          as: '/jack-manning-bancroft',
          label: 'Founder & CEO',
        },
      ],
    },
    {
      title: 'Go Further',
      items: [
        {
          to: '/positions',
          label: 'Work with AIME',
        },
        {
          to: 'https://faqs.aimementoring.com',
          target: '_blank',
          label: 'FAQs',
        },
        {
          type: 'button',
          action: handleShowIntercom,
          label: 'contact',
          className: 'c-white intercom-button text-decoration-none',
        },
      ],
    },
  ];

  return (
    <div>
      {!isTalentPage && (
        <footer role="contentinfo">
          <div className={styles.footerContainer}>
            <div className={styles.footerWrapper}>
              <div className={styles.footerContent}>
                <div className={styles.linksContainer}>
                  {FOOTER_LINKS.map((footerList) => (
                    <NavList {...footerList} key={footerList.title} />
                  ))}
                </div>
                <div className="flex flex-auto justify-start lg-justify-end">
                  <div className="flex flex-column w100" style={{ maxWidth: '350px' }}>
                    <div className="flex-auto mb3">
                      <h4 className="c-white feature-font-family bold f-15 pb2">Become an AIME friend</h4>
                      <p className="f-14 pb2 c-white">Subscribe to our newsletter</p>
                      <form acceptCharset="UTF-8" action="https://formkeep.com/f/0f2fe2a1cd09" method="POST" className="footer-links--input">
                        <input type="hidden" name="utf8" value="✓" />
                        <input type="hidden" name="submissionmessage" value="footernewslettersubscription" />
                        <input id="subscribe" className="input p2 f-16 light w100" type="email" placeholder="Enter your email" name="email" required />
                        <button type="submit" className="footer-links--input-button" aria-label="Submit form" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Copyright Section */}
          <div className="px3 py3 lg-py1 bg-black">
            <div className="container lg-px0 pt1 lg-pt0 flex flex-column lg-flex-row justify-between f-12">
              <span className="footer-text mb2">{`${currentYear} © AIME`}</span>
              <div className="">
                <ul className="list-reset flex flex-column lg-flex-row">
                  <li className="flex">
                    <Anchor
                      to="/termsAndConditions"
                      as="/terms-of-service"
                      className="footer-text mr3"
                    >
                        Terms of Service
                    </Anchor>
                  </li>
                  <li className="flex footer-text mr3">ABN 31 081 797 652</li>
                  <li className="flex footer-text">ICN 7040</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

Footer.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
    hash: PropTypes.string,
    pathname: PropTypes.string,
  }).isRequired,
  handleShowIntercom: PropTypes.func.isRequired,
};

export default Footer;
