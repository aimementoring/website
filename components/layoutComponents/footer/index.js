import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Anchor from '../../common/link';
import NavList from '../../navList';
import FooterNewsletter from '../../footerNewsletter';
import styles from './footer.module.scss';
import IntercomChat from '../../intercom';

const Footer = ({ location }) => {
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
                  <li className="listItem">
                    <IntercomChat classNames="intercom-button" />
                  </li>
                </div>
                <FooterNewsletter />
              </div>
            </div>
          </div>
          {/* Footer Copyright Section */}
          <div className={styles.footerCopyrightContainer}>
            <div className={styles.footerCopyrightWrapper}>
              <span className={styles.copyrightText}>{`${currentYear} © AIME`}</span>
              <ul className={styles.footerList}>
                <li className={styles.footerListItem}>
                  <Anchor
                    to="/termsAndConditions"
                    as="/terms-of-service"
                    className={styles.footerLink}
                  >
                      Terms of Service
                  </Anchor>
                </li>
                <li className={styles.footerListItem}>ABN 31 081 797 652</li>
                <li className={styles.footerListItem}>ICN 7040</li>
              </ul>
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
