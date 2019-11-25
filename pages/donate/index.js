import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import Layout from '../../hocs/basicLayout';
import Anchor from '../../components/common/link';
import { getActiveCampaigns, getCampaignDonations, MAIN_CAMPAIGNS } from '../../services/donations';
import bugsnagClient from '../../utils/bugsnag';
import './donate.scss';

const Trapezoid = dynamic(() => import(/* webpackChunkName 'Trapezoid' */ '../../components/donateTrapezoid'));
const RaiselyModal = dynamic(() => import(/* webpackChunkName 'RaiselyModal' */ '../../components/raiselyModal'));
const Sticky = dynamic(() => import(/* webpackChunkName 'Sticky' */ '../../components/donateSticky'));

class Donate extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedCampaign: null,
      campaigns: [],
      testimonials: [],
      firstLoad: true,
      showCustomPopup: false,
    };
  }

  componentDidMount() {
    const { campaigns } = this.props;

    const mains = Object.keys(MAIN_CAMPAIGNS);
    let pickedCampaign = '';
    if (typeof window !== 'undefined' && Router.query && Router.query.campaign) {
      pickedCampaign = Router.query.campaign;
    }
    const filteredCampaigns = campaigns.filter((item) => mains.indexOf(item.uuid) > -1);
    this.setState({
      campaigns: filteredCampaigns,
      selectedCampaign:
        campaigns.find((item) => item.path === pickedCampaign)
        || filteredCampaigns.find((item) => item.path === 'aimedonations'),
    });
  }

  componentDidUpdate() {
    const { divHeight, showCustomPopup } = this.state;
    if (!divHeight) this.updateDivHeightInState();

    window.addEventListener('resize', this.updateDimensions);
    if (document.getElementById('__next')) {
      document.getElementById('__next').onclick = (e) => {
        if (e.target !== document.getElementsByClassName('raisely-iframe') && showCustomPopup) {
          this.onCloseCustomPopup(e);
        }
      };
    }
  }

  onOpenCustomPopup = (e) => {
    e.preventDefault();
    const { selectedCampaign } = this.state;
    const raiselyModal = document.getElementsByClassName('raisely-modal')[0];
    const raiselyIFrame = document
      .getElementsByClassName('raisely-iframe')[0]
      .getElementsByTagName('iframe')[0];

    if (raiselyModal && raiselyIFrame) {
      raiselyModal.style.opacity = '1';
      raiselyModal.style.visibility = 'visible';
      raiselyModal.style.pointerEvents = 'all';

      raiselyIFrame.style.display = 'block';
      raiselyIFrame.style.pointerEvents = 'all';
      raiselyIFrame.src = `https://${
        selectedCampaign ? selectedCampaign.path : 'wannachangetheworld'
      }.raisely.com/embed/`;
      raiselyIFrame.style.pointerEvents = 'all';
      this.setState({ showCustomPopup: true });
    }
  };

  onCloseCustomPopup = (e) => {
    e.preventDefault();
    const raiselyModal = document.getElementsByClassName('raisely-modal')[0];
    const raiselyIFrame = document
      .getElementsByClassName('raisely-iframe')[0]
      .getElementsByTagName('iframe')[0];

    if (raiselyModal && raiselyIFrame) {
      raiselyModal.style.removeProperty('opacity');
      raiselyModal.style.removeProperty('visibility');
      raiselyIFrame.style.removeProperty('display');
      this.setState({ showCustomPopup: false });
    }
  };

  getDonationData = (assetsUrl) => ({
    shop: {
      shopApparelLink: 'https://shop.aimementoring.com',
      actionArrow: `${assetsUrl}/assets/images/actions-arrow.svg`,
      jumper: `${assetsUrl}/assets/images/jumper.png`,
      shopApparel:
        '100% of the profit from every item sold goes toward supporting our goal to reach more and more marginalised kids around the world.',
    },
    mentor: {
      becomeAMentorLink: '/be-a-mentor',
      actionArrow: `${assetsUrl}/assets/images/actions-arrow.svg`,
      girl: `${assetsUrl}/assets/images/girl.png`,
      becomeAMentor:
        'This year, alongside Australia, university volunteers will be stepping up to be mentors in the first AIME programs to be delivered in Uganda and South Africa with more countries to follow soon.',
    },
  });

  getStickyHeight = () => (
    (window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight
    ) * 0.8
  );

  getHeight = () => {
    const { firstLoad } = this.state;
    const divSelected = document.getElementsByClassName('selected-campaign-donations-container');

    if (divSelected.length) {
      const height = document.getElementsByClassName('selected-campaign-donations-container')[0]
        .clientHeight;
      if (firstLoad) this.setState({ firstLoad: false });
      return height + 430;
    }
    return 0;
  };

  updateDivHeightInState = () => {
    this.setState({ divHeight: this.getHeight() });
  };

  handleCampaignChange = (selectedCampaign) => {
    this.setState({ selectedCampaign }, () => {
      getCampaignDonations(selectedCampaign.uuid).then((donations) => {
        const testimonials = donations
          .filter(
            (donation) => !donation.anonymous && donation.firstName !== '' && donation.message !== '',
          )
          .slice(0, 3)
          .map((donation) => ({
            id: donation.uuid,
            firstName: donation.firstName,
            lastName: donation.lastName,
            message: donation.message,
            amount: donation.public.currency_symbol + donation.public.donation_amount,
            type: 'AIME Friend',
          }));

        this.setState({
          testimonials,
          divHeight: undefined,
        });
      });
    });
  };

  render() {
    const {
      campaigns,
      selectedCampaign,
      testimonials,
      divHeight,
    } = this.state;

    const iframeUrl = `https://${
      selectedCampaign ? selectedCampaign.path : 'wannachangetheworld'
    }.raisely.com/embed/`;
    /* eslint-disable react/no-danger */
    return (
      <Layout>
        <div>
          <div className="donations-page-wrap flex sm-col-12 flex-column">
            <div id="react-donations-index">
              <div className="relative">
                <div className="matrix-general donation-bg_shape banner-background">
                  <div className="title-donations-container clearfix wrap-md mb0">
                    <h1 className="above center c-white w100 donations-title mt4 pt4">
                      To change the world, we need to change the way it works!
                    </h1>
                    <h3 className="center c-white w100 mt2">
                      You have the oportunity to
                      {' '}
                      <span className="text-highlight purple">make a difference!</span>
                    </h3>
                  </div>
                </div>
                <Trapezoid
                  campaigns={campaigns}
                  selectedCampaign={selectedCampaign}
                  onCampaignChange={this.handleCampaignChange}
                />
                <div>
                  {selectedCampaign && (
                    <div className="selected-campaign-donations-container mx-auto wrap px3 sm-px3 md-px3 lg-px3">
                      <div className="clearfix mt4 sm-mt4 md-mt4 lg-mt4">
                        <aside className="donation-aside mt4">
                          <div className="campaing-home-text">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: selectedCampaign.config.theme.homeText,
                              }}
                            />
                          </div>
                          <div>
                            {testimonials.length > 0 && (
                              <div className="testimonials clearfix flex flex-wrap my2">
                                <h2 className="clearfix feature-font-family f-24 c-black w100 wrap">
                                  What people are saying
                                </h2>
                                {testimonials.map((donation) => (
                                  <div className="clearfix w100 flex flex-wrap my2" key={donation.id}>
                                    <div className="c-black f-20 wrap w50 signature-font-family">{`${donation.firstName} ${donation.lastName}`}</div>
                                    <div className="c-black f-10 bold wrap w50 c-purple">{`${donation.amount}`}</div>
                                    <span className="c-medium-grey feature-font-family f-12 w100 block">
                                      {donation.type}
                                    </span>
                                    <p className="body-font-family f-14 w100 block">
                                      {donation.message}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                          <div className="other-ways clearfix cta-container">
                            <h2 className="clearfix feature-font-family f-24 mb2 c-black w100">
                              Other ways you can make a difference
                            </h2>
                            <div className="item center-contents item-2">
                              <div className="item-contents">
                                <h3>Shop Hoodies</h3>
                                <div className="sub-item-details show-on-hover">
                                  <p>Grab one of our hoodies and start changing the world. </p>
                                  <a
                                    className="basic-btn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://shop.aimementoring.com/"
                                    aria-label="Buy a hoodie"
                                  >
                                    Buy a Hoodie
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="item center-contents item-3">
                              <div className="item-contents">
                                <h3>Become a Mentor</h3>
                                <div className="sub-item-details show-on-hover">
                                  <p>{'Want to change the world? It\'s time to walk the talk!'}</p>
                                  <Anchor className="basic-btn" to="/be-a-mentor">
                                    {'Let\'s change the world'}
                                  </Anchor>
                                </div>
                              </div>
                            </div>
                          </div>
                        </aside>
                      </div>
                    </div>
                  )}
                </div>
                <Sticky enter="350" exit={`${divHeight}`}>
                  <iframe title="donations" src={iframeUrl} width="316" />
                </Sticky>
                <button type="button" className="donate-button" onClick={this.onOpenCustomPopup} aria-label="donate">
                  DONATE
                </button>
              </div>
            </div>
            <div>{selectedCampaign && <RaiselyModal campaign={selectedCampaign.path} />}</div>
          </div>
        </div>
      </Layout>
    );
    /* eslint-enable react/no-danger */
  }
}

Donate.getInitialProps = async () => {
  let campaigns = [];
  try {
    campaigns = await getActiveCampaigns();
  } catch (error) {
    bugsnagClient.notify(
      new Error(`Error getting the active campaigns in donation page: ${error}`),
    );
  }
  return { campaigns };
};

Donate.propTypes = {
  campaigns: PropTypes.arrayOf(PropTypes.shape({})),
};

Donate.defaultProps = {
  campaigns: [],
};

export default Donate;
