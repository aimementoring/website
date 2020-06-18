import React from 'react';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import Layout from '../../hocs/basicLayout';
import styles from './thanks.module.scss';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const ThanksPage = ({ query }) => {
  let message = 'Your message has been successfully submitted and we will get back to you as soon as we can!';
  if (query && query.messages) {
    message = query.messages;
  }
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div>
            <Title type="h4Title" theme={process.env.REACT_APP_THEME}>Thank you!</Title>
            <Paragraph>{message}</Paragraph>
            <Button type="link" url="/" theme={process.env.REACT_APP_THEME}>
              Back to home
            </Button>
          </div>
          <div>
            <img
              alt="Support Group"
              src={`${ASSETS_URL}/assets/images/illustrations/thumbsup-smiley/thumbsup-smiley_1080vw.png`}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};


ThanksPage.propTypes = {
  query: PropTypes.shape({
    messages: PropTypes.string,
  }).isRequired,
};

export default withRouter(ThanksPage);
