import React from 'react'
import classNames from 'classnames'
import Title from 'aime-blueprint/lib/components/title'
import Anchor from '../../components/common/link'
import HeroBannerAbout from '../../components/heroBannerAbout'
import withLayout from '../../hocs/basicLayout'
import styles from './about.module.scss'

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL
const About = () => (
  <React.Fragment>
    <div className={styles.aboutContainer}>
      <HeroBannerAbout />
      <div className={styles.aboutWrapper}>
        <section className={styles.sectionAbout}>
          <div className={styles.column}>
            <div className={classNames(styles.titleLockup, styles.leftWithMargin)}>
              <h1 className={styles.whiteText}>
                <span className={styles.leftHighlightText}>
                  <em className={styles.mainTitle}>About</em>
                  <br />
                  <em className={styles.smallHighlight}>
                    AIME
                    <br />
                    <span className={styles.scratchUnderline}>&nbsp;</span>
                  </em>
                </span>
              </h1>
            </div>
            <div className={styles.copy}>
              <Title type="mainTitle">We are driven to unlock the limitless potential of children who have been left
                behind</Title>
              <p className={styles.whiteText}>
                We do that by building mentoring bridges between universities and high schools,
                between the powerful and the powerless, the haves and the have nots. We know that
                our fiery and intuitive brand of mentoring ends the cycle of disadvantage by
                permanently changing mindsets. Based in Redfern, Australia, our operation runs
                across campuses worldwide.
              </p>
              <Anchor to="/know-aime" className={styles.linkButton}>
                Tell me more
              </Anchor>
            </div>
          </div>
          <div className={styles.column}>
            <img
              className={styles.imageBlock}
              src={`${ASSETS_URL}/assets/images/about/about-aime.jpg`}
              alt="about aime"
            />
          </div>
        </section>
        <section className={styles.sectionAbout}>
          <div className={styles.column}>
            <div className={classNames(styles.titleLockup, styles.left)}>
              <h1 className={styles.whiteText}>
                <span className={styles.gradientTitle}>The Kids</span>
                <span className={styles.postTextRight}>The kids at AIME</span>
              </h1>
            </div>
            <div className={styles.copy}>
              <h3 className={styles.whiteTitleWithMargin}>Providing the stage</h3>
              <p className={styles.whiteText}>
                Everything we do is about these kids. They see themselves as being on the outside
                looking in…. that’s until we give them the mic. AIME program days are all about
                that. The Kids at AIME are central to the entire organisation. We’re just
                providing the framework, but they’re making the difference.
                {' '}
              </p>
            </div>
          </div>
          <div className={styles.column}>
            <img
              className={styles.imageBlock}
              alt="kids at aime"
              src={`${ASSETS_URL}/assets/images/about/the-kids-at-aime.jpg`}
            />
          </div>
        </section>
        <section className={styles.sectionAbout}>
          <div className={styles.column}>
            <div className={classNames(styles.titleLockup, styles.left)}>
              <h1 className={styles.whiteText}>
                <span className={styles.gradientTitle}>Impact</span>
                <span className={styles.postTextLeft}>Hard lined impact</span>
              </h1>
            </div>
            <div className={styles.copy}>
              <h3 className={styles.whiteTitleWithMargin}>Not another smiley faced program</h3>
              <p className={styles.whiteText}>
                We turn up. Turn up. Turn up. We've been at it since 2005 and we're only just
                getting started! AIME benefits mentees, mentors and the entire community we work
                in. Don't take our word for it, check out the evidence.
              </p>
              <Anchor to="/impact" className={styles.linkButton}>
                Read more
              </Anchor>
            </div>
          </div>
          <div className={styles.column}>
            <img
              className={styles.imageBlock}
              alt="impact"
              src={`${ASSETS_URL}/assets/images/about/impact.jpg`}
            />
          </div>
        </section>
        <section className={styles.sectionAbout}>
          <div className={styles.column}>
            <div className={classNames(styles.titleLockup, styles.left)}>
              <h1 className={styles.whiteText}>
                <span className={styles.gradientTitle}>The gift</span>
                <span className={styles.postTextRight}>The gift of knowledge</span>
              </h1>
            </div>
            <div className={styles.copy}>

              <h3 className={styles.whiteTitleWithMargin}>We've got knowledge & tools to share</h3>
              <p className={styles.whiteText}>
                In 2018 we opened our model on demand to Universities from across the globe, with
                plans to be operational in 10+ different countries in 2020. Checkout our knowledge
                and tools and how you can get involved.
              </p>
              <Anchor to="/know-aime" className={styles.linkButton}>
                Learn more
              </Anchor>
            </div>
          </div>
          <div className={styles.column}>
            <img
              className={styles.imageBlock}
              alt="gift of knowledge"
              src={`${ASSETS_URL}/assets/images/about/gift-of-knowladge.jpg`}
            />
          </div>
        </section>
        <section className={styles.sectionAbout}>
          <div className={styles.column}>
            <div className={classNames(styles.titleLockup, styles.left)}>
              <h1 className={styles.whiteText}>
                <span className={styles.gradientTitle}>Team</span>
                <span className={styles.postTextLeft}>Our team</span>
              </h1>
            </div>
            <div className={styles.copy}>
              <h3 className={styles.whiteTitleWithMargin}>Rebels with a cause</h3>
              <p className={styles.whiteText}>
                We are a small band of artists at AIME, writing, shaping, creating new worlds,
                challenging est world orders, making magic, fueling imaginative fire.
              </p>
              <Anchor
                to="/jack-manning-bancroft"
                className={styles.linkButton}
              >
                Read about our founder
              </Anchor>
              <Anchor to="/positions" className={styles.positionsButton}>
                Join our team
              </Anchor>
            </div>
          </div>
          <div className={styles.column}>
            <img
              className={styles.imageBlock}
              alt="team"
              src={`${ASSETS_URL}/assets/images/about/team.jpg`}
            />
          </div>
        </section>
        <section className={styles.sectionAbout}>
          <div className={styles.column}>
            <div className={styles.titleLockup}>
              <h1 className={styles.whiteText}>
                <span className={styles.gradientTitle}>Apparel</span>
                <span className={styles.postTextRight}>Apparel that changes lives</span>
              </h1>
            </div>
            <div className={styles.copy}>
              <h3 className={styles.whiteTitleWithMargin}>AIME makes the greatest hoodie on earth</h3>
              <p className={styles.whiteText}>
                We are doing our best to make the most meaningful hoodie on the planet, check out
                the range designed and inspired by kids to change the world. Our shop currently
                ships out of Australia, if you can’t wait to get your hands on it, it usually
                takes a few weeks to send over. And jump onto our Saturday Swag list to be the
                first to know when AIME Apparel launches into the US in a legit way in 2019.
              </p>
              <a
                href="https://shop.aimementoring.com/collections/hoodies/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                Shop Apparel
              </a>
            </div>
          </div>
          <div className={styles.column}>
            <img
              className={styles.imageBlock}
              alt="hoodie"
              src={`${ASSETS_URL}/assets/images/about/hoodie.jpg`}
            />
          </div>
        </section>
      </div>
    </div>
  </React.Fragment>
)

export default withLayout(About)
