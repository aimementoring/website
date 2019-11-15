import React from 'react';
import PropTypes from 'prop-types';
import Anchor from '../../components/common/link';
import Layout from '../../hocs/basicLayout';
import './thanksPage.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const ThanksPage = ({ messages }) => {
  let message = 'Your message has been succesfully submitted and we will get back to you as soon as we can!';
  if (messages && messages.thankMessage) {
    message = messages.thankMessage;
  }
  return (
    <Layout>
      <div className="full-width-wrap bg-darkest-purple">
        <div className="md-wrap mx-auto px3 py4 thanks-page---container bg-darkest-purple">
          <div className="justify-center items-center sm-flex mb4">
            <div>
              <p className="f-30 feature-font-family regular c-white">Thank you!</p>
              <p className="f-14 light pt2 w85 c-white">{message}</p>
              <Anchor to="/" className="f-14 block feature-font-family light pt4 c-white">
                Back to home
              </Anchor>
            </div>
            <div>
              <img
                className="thanks-img"
                alt="Support Group"
                src={`${ASSETS_URL}/assets/images/about-small.jpg`}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

ThanksPage.getInitialProps = async ({ query }) => ({
  messages: query.messages,
});


ThanksPage.propTypes = {
  messages: PropTypes.shape({
    thankMessage: PropTypes.string,
  }).isRequired,
};

export default ThanksPage;
