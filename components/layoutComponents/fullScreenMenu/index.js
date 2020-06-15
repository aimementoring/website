import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import styles from './fullScreenMenu.module.scss';
import { DonationContext } from '../../../context';

const IntercomChat = dynamic(() => import('../../intercom'));

const FullScreenMenu = () => {
  const { toggleDonationModal } = useContext(DonationContext);

  return (
    <div className={styles.wrapper}>
      <input className={styles.checkboxToggle} type="checkbox" />
      <div className={styles.hamburger}>
        <svg
          version="1.1"
          className={styles.burgerSvg}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 92 92"
        >
          <path
            className={styles.bottomStroke}
            d="M74,66c0,0-39,0-56,0S2,46,2,46C2,21.7,21.7,2,46,2s44,19.7,44,44S70.3,90,46,90c-12.2,0-23-5-31-13l0,0l50.8-50.8"
          />
          <path className={styles.middleStroke} d="M18,45.5h56" />
          <path
            className={styles.topStroke}
            d="M18,26c0,0,39,0,56,0s16,20,16,20c0,24.3-19.7,44-44,44S2,70.3,2,46c0-12.1,5.1-23,13-31l0,0l51,51"
          />
        </svg>
      </div>

      <div className={styles.fullScreenLogo}>
        <a href="/home" as="/">
          <svg id="icon-aime-logo" viewBox="0 0 63 32">
            <title>AIME Mentoring</title>
            <path d="M9.998 14.573c-1.551 1.043-2.461 1.667-2.833 1.286-0.46-0.474 0.814-2.805 1.976-6.136 1.158-3.333 1.691-5.507 2.169-5.513s0.332 6.321 0.436 7.882c0.108 1.557-0.197 1.437-1.748 2.481zM16.922 10.702c-0.433-0.218-1.935 0.928-2.631 1.49-0.391-6.043-0.223-10.173-1.054-11.208-0.883-1.096-1.697-1.757-2.919 1.288-1.224 3.045-4.462 9.634-6.422 16.135-1.356 4.503-4.7 12.325-3.718 13.185 0.721 0.629 2.512-0.381 2.968-2.124 0.458-1.741 1.801-6.957 1.928-7.487 0.129-0.532 0.427-1.096 2.062-2.025 1.636-0.93 4.814-3.329 4.959-1.799 0.14 1.53 0.478 11.086 1.917 11.283 1.702 0.233 2.476-0.317 2.277-1.583-0.32-2.037-1.124-6.345-1.663-11.636 0.027 0.053 0.043 0.083 0.043 0.083-0.051-0.791 0.888-1.407 1.952-2.136 1.066-0.729 0.87-3.184 0.301-3.467z" />
            <path d="M26.019 3.077c0.624 0.565-0.693 2.839-1.385 6.894-0.691 4.054-1.851 10.735-2.068 12.446-0.213 1.711-0.574 3.158-1.303 3.448-0.725 0.293-2.062 0.899-1.846-1.135 0.217-2.032 1.508-12.373 1.976-15.256 0.47-2.883 0.721-5.049 1.821-5.779 1.101-0.73 2.392-0.989 2.805-0.618z" />
            <path d="M25.434 26.818c0.457 0.393 1.621 0.289 2.218-1.798 0.597-2.084 4.203-13.179 4.385-13.681 0.184-0.502 0.45-0.962 0.636 0.533 0.187 1.495 0.867 8.073 1.296 9.582 0.425 1.512 0.646 1.645 1.504 1.645s1.32-0.191 1.811-1.047c0.492-0.857 4.431-8.441 5.064-9.655 0.636-1.214 2.581-5.412 2.013-2.742-0.568 2.668-2.32 11.88-2.546 14.266-0.224 2.386-0.271 2.954 0.849 3.561s2.272 0.833 2.282-1.341c0.007-2.173 0.604-8.264 1.511-12.744 0.903-4.482 2.503-8.206 1.471-9.256-1.033-1.050-2.569-1.978-3.632-0.184-1.063 1.793-5.151 10.275-6.393 13.002-1.242 2.722-2.018 3.89-2.272 2.659s-1.428-9.878-1.687-11.475c-0.261-1.601-0.511-1.925-1.301-1.615-0.794 0.306-2.206 0.458-2.777 2.475-0.57 2.023-2.282 8.089-3.112 11.261-0.834 3.173-1.831 6.117-1.322 6.554z" />
            <path d="M53.941 9.216c-2.147 0.615-3.26 2.216-3.948 4.688-0.691 2.476-1.374 5.94-1.883 8.22-0.512 2.283-0.556 3.933 0.891 4.741 1.45 0.812 5.978 0.523 9.002-1.064 3.027-1.585 3.894-2.368 3.758-3.307-0.135-0.936-0.406-1.384-1.278-0.775-0.87 0.609-2.977 2.047-6.247 2.943-3.269 0.895-4.476 0.352-4.312-1.428 0.163-1.783 0.577-2.868 2.786-3.435 2.213-0.564 5.705-1.33 6.298-1.811 0.59-0.482 1.146-1.986 0.432-1.945-0.712 0.043-4.141 1.231-5.816 1.495-1.674 0.263-2.567 0.441-2.195-1.026 0.37-1.464 0.962-4.695 3.6-4.989s6.225-0.135 6.746-0.725c0.523-0.588 1.457-2.388 0.486-2.499-0.971-0.113-4.385-0.212-8.319 0.917z" />
          </svg>
        </a>
      </div>

      <div className={styles.menuContainer}>
        <div className={styles.menuBg}>
          <nav className={styles.menuContent}>
            <ul className={styles.menuMain}>
              <li className={styles.listItem}>
                <a href="/home" className={styles.listLink}>
                  Home
                </a>
              </li>
              <li className={styles.listItem}>
                <button type="button" className={styles.listLink}>
                  About
                </button>
                <div className={styles.subMenu}>
                  <ul>
                    <li>
                      <a href="/about" className={`${styles.subLink} ${styles.overviewBtn}`}>
                        Overview
                      </a>
                    </li>
                    <li>
                      <a href="/know-aime" className={`${styles.subLink} ${styles.getToKnowAimeBtn}`}>
                        Get to know AIME
                      </a>
                    </li>
                    <li>
                      <a href="/impact" className={`${styles.subLink} ${styles.ourImpactBtn}`}>
                        Our Impact
                      </a>
                    </li>
                    <li>
                      <a href="/jack-manning-bancroft" className={`${styles.subLink} ${styles.ceoAndFounderBtn}`}>
                        CEO & Founder
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={styles.listItem}>
                <button type="button" className={styles.listLink}>
                  Get Inspired
                </button>
                <div className={styles.subMenu}>
                  <ul>
                    <li>
                      <a href="/imagi-nation-tv" className={`${styles.subLink} ${styles.intvBtn}`}>
                        {'IMAGI-NATION{TV}'}
                      </a>
                    </li>
                    <li>
                      <a href="/stories" className={`${styles.subLink} ${styles.storiesBtn}`}>
                        Stories
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={styles.listItem}>
                <button type="button" className={styles.listLink}>
                  Get Involved
                </button>
                <div className={styles.subMenu}>
                  <ul>
                    <li>
                      <a href="/be-a-mentor" className={`${styles.subLink} ${styles.beAMentorBtn}`}>
                        Be a Mentor
                      </a>
                    </li>
                    <li>
                      <a href="/positions" className={`${styles.subLink} ${styles.workWithUsBtn}`}>
                        Work with us
                      </a>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={toggleDonationModal}
                        onKeyPress={toggleDonationModal}
                        role="link"
                        className={`${styles.subLink} ${styles.donateToAimeBtn}`}
                      >
                        Donate
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={styles.listItem}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://shop.aimementoring.com/"
                  className={styles.listLink}
                >
                  Shop
                </a>
              </li>
              <hr />
              <li className={styles.listItem}>
                <IntercomChat classNames={`${styles.listLinkScnd} ${styles.getInTouchBtn}`} label="Get in touch" />
              </li>
              <li className={styles.listItem}>
                <button
                  type="button"
                  onClick={toggleDonationModal}
                  onKeyPress={toggleDonationModal}
                  role="link"
                  className={`${styles.listLinkScnd} ${styles.donateToAimeBtn}`}
                >
                  Donate
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default FullScreenMenu;
