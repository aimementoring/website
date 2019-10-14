import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { getAssetsBaseUrl } from '../../services/craftAPI';
import HeroBannerAbout from '../../components/heroBannerAbout';

export default class About extends PureComponent {
  state = {
    assetsUrl: '',
  }

  componentDidMount() {
    this.setState({ assetsUrl: getAssetsBaseUrl() });
  }

  render() {
    const { assetsUrl } = this.state;
    return (
      <React.Fragment>
        <div className="bg-darkest-purple pb3">
          <HeroBannerAbout />
          <div className="bg-dark-purple-gradient">
            <section className="section-about ">
              <div className="section-about__column p2">
                <div className="section-about__title-lockup left mb3">
                  <h1 className="c-white">
                    <span className="highlight-text left">
                      <em className="f-80">About</em>
                      <br />
                      <em className="highlight-text__small ">
                        AIME<br />
                        <span className="scratch-underline">&nbsp;</span>
                      </em>
                    </span>
                  </h1>
                </div>
                <div className="section-about__copy lg-col-8">
                  <h3 className="c-white my2">We are driven to unlock the limitless potential of children who have been left behind</h3>
                  <p className="c-white">We do that by building mentoring bridges between universities and high schools, between the powerful and the powerless, the haves and the have nots. We know that our fiery and intuitive brand of mentoring ends the cycle of disadvantage by permanently changing mindsets. Based in Redfern, Australia, our operation runs across campuses worldwide.</p>
                  <Link to="/know-aime" className="basic-btn bold bg-brand-primary c-white mt3">Tell me more</Link>
                </div>
              </div>
              <div className="section-about__column p2">
                <img className="mx-auto block" src={`${assetsUrl}/assets/images/about/about-aime.jpg`} alt="about aime" />
              </div>
            </section>
            <section className="section-about">
              <div className="section-about__column p2">
                <div className="section-about__title-lockup left">
                  <h1 className="c-white">
                    <span className="gradient-text highlight-text">The Kids</span>
                    <span className="post-text right">The kids at AIME</span>
                  </h1>
                </div>
                <div className="section-about__copy lg-col-8">
                  <h3 className="c-white my2">Providing the stage</h3>
                  <p className="c-white">Everything we do is about these kids. They see themselves as being on the outside looking in…. that’s until we give them the mic. AIME program days are all about that. The Kids at AIME are central to the entire organisation. We’re just providing the framework, but they’re making the difference. </p>
                </div>
              </div>
              <div className="section-about__column p2">
                <img className="mx-auto block" alt="kids at aime" src={`${assetsUrl}/assets/images/about/the-kids-at-aime.jpg`} />
              </div>
            </section>
            <section className="section-about">
              <div className="section-about__column p2">
                <div className="section-about__title-lockup left">
                  <h1 className="c-white">
                    <span className="gradient-text highlight-text">Impact</span>
                    <span className="post-text left">Hard lined impact</span>
                  </h1>
                </div>
                <div className="section-about__copy lg-col-8">
                  <h3 className="c-white my2">Not another smiley faced program</h3>
                  <p className="c-white">We turn up. Turn up. Turn up. We've been at it since 2005 and we're only just getting started! AIME benefits mentees, mentors and the entire community we work in. Don't take our word for it, check out the evidence.</p>
                  <Link to="/impact" className="basic-btn bold bg-brand-primary c-white mt3">Read more</Link>
                </div>
              </div>
              <div className="section-about__column p2">
                <img className="mx-auto block" alt="impact" src={`${assetsUrl}/assets/images/about/impact.jpg`} />
              </div>
            </section>
            <section className="section-about">
              <div className="section-about__column p2">
                <div className="section-about__title-lockup left">
                  <h1 className="c-white">
                    <span className="gradient-text highlight-text">The gift</span>
                    <span className="post-text right">The gift of knowledge</span>
                  </h1>
                </div>
                <div className="section-about__copy lg-col-8">
                  <h3 className="c-white my2">We've got knowledge & tools to share</h3>
                  <p className="c-white">In 2018 we opened our model on demand to Universities from across the globe, with plans to be operational in 10+ different countries in 2020. Checkout our knowledge and tools and how you can get involved.</p>
                  <Link to="/know-aime" className="basic-btn bold bg-brand-primary c-white mt3">Learn more</Link>
                </div>
              </div>
              <div className="section-about__column p2">
                <img className="mx-auto block" alt="gift of knowledge" src={`${assetsUrl}/assets/images/about/gift-of-knowladge.jpg`} />
              </div>
            </section>
            <section className="section-about">
              <div className="section-about__column p2">
                <div className="section-about__title-lockup left">
                  <h1 className="c-white">
                    <span className="gradient-text highlight-text">Team</span>
                    <span className="post-text left">Our team</span>
                  </h1>
                </div>
                <div className="section-about__copy lg-col-8">
                  <h3 className="c-white my2">Rebels with a cause</h3>
                  <p className="c-white">We are a small band of artists at AIME, writing, shaping, creating new worlds, challenging est world orders, making magic, fueling imaginative fire.</p>
                  <Link to="/jack-manning-bancroft" className="basic-btn bold bg-brand-primary c-white mt3">Read about our founder</Link>
                  <Link to="/positions" className="basic-btn bold bg-brand-primary c-white mt3 ml2">Join our team</Link>
                </div>
              </div>
              <div className="section-about__column p2">
                <img className="mx-auto block" alt="team" src={`${assetsUrl}/assets/images/about/team.jpg`} />
              </div>
            </section>
            <section className="section-about">
              <div className="section-about__column p2">
                <div className="section-about__title-lockup center">
                  <h1 className="c-white">
                    <span className="gradient-text highlight-text">Apparel</span>
                    <span className="post-text right">Apparel that changes lives</span>
                  </h1>
                </div>
                <div className="section-about__copy lg-col-8">
                  <h3 className="c-white my2">AIME makes the greatest hoodie on earth</h3>
                  <p className="c-white">We are doing our best to make the most meaningful hoodie on the planet, check out the range designed and inspired by kids to change the world. Our shop currently ships out of Australia, if you can’t wait to get your hands on it, it usually takes a few weeks to send over. And jump onto our Saturday Swag list to be the first to know when AIME Apparel launches into the US in a legit way in 2019.</p>
                  <a href="https://shop.aimementoring.com/collections/hoodies/" target="_blank" rel="noopener noreferrer" className="basic-btn bold bg-brand-primary c-white mt3">Shop Apparel</a>
                </div>
              </div>
              <div className="section-about__column p2">
                <img className="mx-auto block" alt="hoodie" src={`${assetsUrl}/assets/images/about/hoodie.jpg`} />
              </div>
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
