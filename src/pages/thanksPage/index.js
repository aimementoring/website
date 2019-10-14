import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getAssetsBaseUrl } from '../../services/craftAPI';
import './thanksPage.scss';

export default class ThanksPage extends PureComponent {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  state = {
    assetsUrl: getAssetsBaseUrl(),
  };

  render() {
    const { assetsUrl } = this.state;
    const {
      location: { messages },
    } = this.props;
    let message =
      'Your message has been succesfully submitted and we will get back to you as soon as we can!';
    if (messages && messages.thankMessage) {
      message = messages.thankMessage;
    }
    return (
      <div className="full-width-wrap bg-darkest-purple">
        <div className="md-wrap mx-auto px3 py4 thanks-page---container bg-darkest-purple">
          <div className="justify-center items-center sm-flex mb4">
            <div>
              <p className="f-30 feature-font-family regular c-white">Thank you!</p>
              <p className="f-14 light pt2 w85 c-white">{message}</p>
              <Link to="/" className="f-14 block feature-font-family light pt4 c-white">
                {'Back to home'}
              </Link>
            </div>
            <div>
              <img
                className="thanks-img"
                alt="Support Group"
                src={`${assetsUrl}/assets/images/about-small.jpg`}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
