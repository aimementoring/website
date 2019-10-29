import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Anchor from '../../common/link';
import './index.scss';

const currentYear = moment().year();

const Footer = ({ location }) => {
  const isTalentPage = (location.pathname.indexOf('/seatontheplane') > -1);
  return (
    <div>
      {!isTalentPage && (
        <footer className="bg-black" role="contentinfo">
          <div className="footer-links fit relative pt4 pb2 lg-pb4 bg-black">
            <div className="flex mx-auto wrap px3 mt4">
              <div className="w100 flex justify-between flex-column lg-flex-row">
                <div className="flex flex-auto flex-wrap">
                  <nav className="flex-auto mb3 footer-links--column">
                    <h4 className="c-white feature-font-family bold f-15 pb2">Pitch In</h4>
                    <ul className="list-reset f-14">
                      <li className="mb2">
                        <Anchor
                          to="/be-a-mentor"
                          className="c-white text-decoration-none"
                        >
                          Become a
                          {' '}
                          <strong>Mentor</strong>
                        </Anchor>
                      </li>
                      <li className="mb2">
                        <Anchor
                          to="/contact"
                          className="c-white text-decoration-none"
                        >
                          Become a
                          {' '}
                          <strong>Partner</strong>
                        </Anchor>
                      </li>
                      <li className="mb2">
                        <Anchor
                          to="/donate"
                          className="toggleRaiselyModal c-white text-decoration-none"
                        >
                            Make a Donation
                        </Anchor>
                      </li>
                    </ul>
                  </nav>
                  <nav className="flex-auto mb3 footer-links--column">
                    <h4 className="c-white feature-font-family bold f-15 pb2">What Else?</h4>
                    <ul className="list-reset f-14">
                      <li className="mb2">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://shop.aimementoring.com/"
                          className="c-white text-decoration-none"
                        >
                          Shop Apparel
                        </a>
                      </li>
                      <li className="mb2">
                        <Anchor
                          to="/the-mentor"
                          className="c-white text-decoration-none"
                        >
                          Read the book
                        </Anchor>
                      </li>
                      <li className="mb2">
                        <Anchor
                          to="/about"
                          className="c-white text-decoration-none"
                        >
                          About AIME
                        </Anchor>
                      </li>
                      <li className="mb2">
                        <Anchor
                          to="/jack-manning-bancroft"
                          className="c-white text-decoration-none"
                        >
                          Founder &amp; CEO
                        </Anchor>
                      </li>
                    </ul>
                  </nav>
                  <nav className="flex-auto mb3 footer-links--column">
                    <h4 className="c-white feature-font-family bold f-15 pb2">Go Further</h4>
                    <ul className="list-reset f-14">
                      <li className="mb2">
                        <Anchor
                          to="/positions"
                          className="c-white text-decoration-none"
                        >
                          <span>Work with AIME</span>
                        </Anchor>
                      </li>
                      <li className="mb2">
                        <Anchor
                          to="/faq"
                          className="c-white text-decoration-none"
                        >
                          FAQs
                        </Anchor>
                      </li>
                      <li className="mb2">
                        <Anchor
                          to="/contact"
                          className="c-white text-decoration-none"
                        >
                          Contact
                        </Anchor>
                      </li>
                    </ul>
                  </nav>
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
                        <button type="submit" className="footer-links--input-button" aria-label="submit" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Copyright Section */}
          <div className="px3 py3 lg-py1">
            <div className="container lg-px0 pt1 lg-pt0 flex flex-column lg-flex-row justify-between f-12">
              <span className="footer-text mb2">{`${currentYear} © AIME`}</span>
              <div className="">
                <ul className="list-reset flex flex-column lg-flex-row">
                  <li className="flex">
                    <Anchor
                      to="/terms-of-service"
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
};

export default Footer;
