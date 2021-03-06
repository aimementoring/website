import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Anchor from '../../common/link';
import NavList from '../../navList';
import SubscribePanel from '../../subscribePanel';
import { DonationContext } from '../../../context';
import styles from './footer.module.scss';

const Footer = ({ location }) => {
  const { toggleDonationModal } = useContext(DonationContext);
  const isTalentPage = (location.pathname.indexOf('/seatontheplane') > -1);
  const currentYear = moment().year();
  const FOOTER_LINKS = [
    {
      title: 'Pitch In',
      items: [
        {
          to: '/be-a-mentor',
          as: '/be-a-mentor',
          label: 'Become a Mentor',
        },
        {
          to: null,
          target: '_blank',
          label: 'Become a Partner',
        },
        {
          action: toggleDonationModal,
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
          to: '/the-mentor',
          as: '/the-mentor',
          label: 'Read the book',
        },
        {
          to: '/about',
          label: 'About AIME',
        },
        {
          to: '/jack-manning-bancroft',
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
          to: null,
          target: '_blank',
          label: 'Get in touch',
        },
      ],
    },
  ];

  return (
    <div>
      {!isTalentPage && (
        <div>
          <SubscribePanel />
          <footer role="contentinfo">
            <div className={styles.footerContainer}>
              <div className={styles.footerWrapper}>
                <div className={styles.footerContent}>
                  <div className={styles.linksContainer}>
                    {FOOTER_LINKS.map((footerList) => (
                      <NavList {...footerList} key={footerList.title} />
                    ))}
                  </div>
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
                      to="/terms-of-service"
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
        </div>
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
};

export default Footer;
